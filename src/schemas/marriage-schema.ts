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

const lastNameFieldSchema = z
  .string()
  .min(2, "El apellido debe tener al menos 2 caracteres")
  .max(50, "El apellido es demasiado largo")
  .nonempty("Este campo es obligatorio")
  .regex(
    /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/,
    "El apellido solo debe contener letras y espacios"
  );

const documentNumberSchema = z
  .string()
  .min(8, "El número de documento debe tener al menos 8 dígitos")
  .max(15, "El número de documento es demasiado largo")
  .nonempty("El número de documento es obligatorio")
  .regex(/^\d+$/, "El número de documento solo debe contener números");

const serialNumberSchema = z
  .string()
  .min(3, "El serial debe tener al menos 3 caracteres")
  .max(20, "El serial es demasiado largo")
  .nonempty("El serial es obligatorio")
  .regex(
    /^[a-zA-Z0-9\-_]+$/,
    "El serial solo debe contener letras, números, guiones y guiones bajos"
  );

// Schema for cedula type marriage form
export const marriageCedulaSchema = z.object({
  type_marriage: z.literal("cedula"),
  document_number_1: documentNumberSchema,
  document_number_2: documentNumberSchema,
});

// Schema for serial type marriage form
export const marriageSerialSchema = z.object({
  type_marriage: z.literal("serial"),
  first_name_1: nameFieldSchema,
  first_lastname_1: lastNameFieldSchema,
  second_name_2: nameFieldSchema,
  second_lastname_2: lastNameFieldSchema,
  serial: serialNumberSchema,
});

// Union schema for marriage form
export const marriageFormSchema = z
  .discriminatedUnion("type_marriage", [
    marriageCedulaSchema,
    marriageSerialSchema,
  ])
  .refine(
    (data) => {
      if (data.type_marriage === "cedula") {
        return data.document_number_1 !== data.document_number_2;
      }
      return true;
    },
    {
      path: ["document_number_2"],
      message: "Los números de documento no pueden ser iguales",
    }
  );

export type MarriageFormData = z.infer<typeof marriageFormSchema>;
