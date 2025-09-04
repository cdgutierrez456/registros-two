import { z } from "zod";

// Base schema for common name fields
const nameFieldSchema = z
  .string()
  .min(2, "El nombre debe tener al menos 2 caracteres")
  .max(50, "El nombre es demasiado largo")
  .nonempty("Este campo es obligatorio")
  .regex(
    /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/,
    "El nombre solo debe contener letras y espacios"
  );

const optionalNameFieldSchema = z
  .string()
  .min(2, "El nombre debe tener al menos 2 caracteres")
  .max(50, "El nombre es demasiado largo")
  .regex(
    /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/,
    "El nombre solo debe contener letras y espacios"
  )
  .optional()
  .or(z.literal(""));

const lastNameFieldSchema = z
  .string()
  .min(2, "El apellido debe tener al menos 2 caracteres")
  .max(50, "El apellido es demasiado largo")
  .nonempty("Este campo es obligatorio")
  .regex(
    /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+|NO APLICA$/,
    "El apellido solo debe contener letras, espacios o 'NO APLICA'"
  );

const documentNumberSchema = z
  .string()
  .min(8, "El número de documento debe tener al menos 8 dígitos")
  .max(15, "El número de documento es demasiado largo")
  .nonempty("El número de documento es obligatorio")
  .regex(/^\d+$/, "El número de documento solo debe contener números");

const optionalSerialSchema = z
  .string()
  .min(3, "El serial debe tener al menos 3 caracteres")
  .max(20, "El serial es demasiado largo")
  .regex(
    /^[a-zA-Z0-9\-_]+$/,
    "El serial solo debe contener letras, números, guiones y guiones bajos"
  )
  .optional()
  .or(z.literal(""));

// Schema for civil registry form
export const civilRegistryFormSchema = z.object({
  name: nameFieldSchema,
  second_name: optionalNameFieldSchema,
  first_lastname: lastNameFieldSchema,
  second_lastname: lastNameFieldSchema,
  document_number: documentNumberSchema,
  serial_number: optionalSerialSchema,
});

export type CivilRegistryFormData = z.infer<typeof civilRegistryFormSchema>;
