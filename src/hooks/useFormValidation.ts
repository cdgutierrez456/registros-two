import { useState } from "react";
import { z } from "zod";

interface ValidationErrors {
  [key: string]: string;
}

export function useFormValidation<T extends z.ZodTypeAny>(schema: T) {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateForm = (formData: FormData): z.infer<T> | null => {
    try {
      const fields = Object.fromEntries(formData.entries());
      const validatedData = schema.parse(fields);
      setErrors({});
      return validatedData;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: ValidationErrors = {};

        error.errors.forEach((err) => {
          if (err.path.length > 0) {
            const fieldName = err.path[0] as string;
            fieldErrors[fieldName] = err.message;
          }
        });

        setErrors(fieldErrors);
      }
      return null;
    }
  };

  const validateField = (name: string, value: string): boolean => {
    try {
      const fieldSchema = schema.shape[name as keyof typeof schema.shape];
      if (fieldSchema) {
        fieldSchema.parse(value);
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
        return true;
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((prev) => ({
          ...prev,
          [name]: error.errors[0].message,
        }));
      }
    }
    return false;
  };

  const clearErrors = () => {
    setErrors({});
  };

  const getFieldError = (fieldName: string): string | undefined => {
    return errors[fieldName];
  };

  return {
    errors,
    validateForm,
    validateField,
    clearErrors,
    getFieldError,
  };
}
