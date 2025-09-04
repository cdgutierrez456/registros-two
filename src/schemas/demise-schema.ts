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

const dateOfDeathSchema = z
  .string()
  .regex(/^\d{2}\/\d{2}\/\d{4}$/, "La fecha debe tener el formato DD/MM/AAAA")
  .nonempty("La fecha de defunción es obligatoria")
  .refine((date) => {
    const [day, month, year] = date.split("/").map(Number);
    const dateObj = new Date(year, month - 1, day);
    return (
      dateObj.getDate() === day &&
      dateObj.getMonth() === month - 1 &&
      dateObj.getFullYear() === year
    );
  }, "La fecha ingresada no es válida")
  .refine((date) => {
    const [day, month, year] = date.split("/").map(Number);
    const inputDate = new Date(year, month - 1, day);
    const today = new Date();
    return inputDate <= today;
  }, "La fecha de defunción no puede ser futura");

// Schema for cedula type demise form
export const demiseCedulaSchema = z.object({
  type_search: z.literal("cedula"),
  name_first_registrant: nameFieldSchema,
  name_second_registrant: optionalNameFieldSchema,
  surname_first_registrant: lastNameFieldSchema,
  surname_second_registrant: z
    .string()
    .min(2, "El apellido debe tener al menos 2 caracteres")
    .max(50, "El apellido es demasiado largo")
    .nonempty("Este campo es obligatorio")
    .regex(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+|NO APLICA$/,
      "El apellido solo debe contener letras, espacios o 'NO APLICA'"
    ),
  document_number: documentNumberSchema,
});

// Schema for serial type demise form
export const demiseSerialSchema = z.object({
  type_search: z.literal("serial"),
  name_first_registrant: nameFieldSchema,
  name_second_registrant: optionalNameFieldSchema,
  surname_first_registrant: lastNameFieldSchema,
  surname_second_registrant: z
    .string()
    .min(2, "El apellido debe tener al menos 2 caracteres")
    .max(50, "El apellido es demasiado largo")
    .nonempty("Este campo es obligatorio")
    .regex(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+|NO APLICA$/,
      "El apellido solo debe contener letras, espacios o 'NO APLICA'"
    ),
  serial: serialNumberSchema,
});

// Schema for name_lastname type demise form
export const demiseNameLastnameSchema = z.object({
  type_search: z.literal("name_lastname"),
  name_first_registrant: nameFieldSchema,
  name_second_registrant: optionalNameFieldSchema,
  surname_first_registrant: lastNameFieldSchema,
  surname_second_registrant: z
    .string()
    .min(2, "El apellido debe tener al menos 2 caracteres")
    .max(50, "El apellido es demasiado largo")
    .nonempty("Este campo es obligatorio")
    .regex(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+|NO APLICA$/,
      "El apellido solo debe contener letras, espacios o 'NO APLICA'"
    ),
  document_number: dateOfDeathSchema,
});

// Union schema for demise form
export const demiseFormSchema = z.discriminatedUnion("type_search", [
  demiseCedulaSchema,
  demiseSerialSchema,
  demiseNameLastnameSchema,
]);

export type DemiseFormData = z.infer<typeof demiseFormSchema>;
