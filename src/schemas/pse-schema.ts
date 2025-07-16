import { z } from "zod";

export const FormSchema = z
  .object({
    type_person: z.enum(["person", "company"], {
      required_error: "El tipo de persona es requerido",
    }),
    document_type: z.enum(
      ["CedulaDeCiudadania", "TarjetaDeIdentidad", "Pasaporte", "NIT"],
      {
        required_error: "El tipo de documento es requerido",
      }
    ),
    document_number: z
      .string()
      .min(5, "El número de documento debe tener al menos 5 caracteres")
      .max(15, "El número de documento es demasiado largo")
      .nonempty("Debe ingresar un número de documento")
      .regex(/^\d+$/, "El número de documento solo debe contener números"),

    name: z
      .string()
      .min(3, "El nombre debe tener al menos 3 caracteres")
      .max(100, "El nombre es demasiado largo")
      .nonempty("Debe ingresar un nombre")
      .regex(/^[a-zA-Z ]+$/, "El nombre solo debe contener letras"),

    bank: z
      .string()
      .min(1, "El banco es requerido")
      .nonempty("Debe seleccionar un banco"),

    email: z
      .string()
      .email("Correo electrónico no válido")
      .min(5, "El correo electrónico debe tener al menos 5 caracteres")
      .max(100, "El correo electrónico es demasiado largo")
      .nonempty("Debe ingresar un correo electrónico"),

    confirm_email: z
      .string()
      .email("Correo electrónico no válido")
      .min(5, "El correo electrónico debe tener al menos 5 caracteres")
      .max(100, "El correo electrónico es demasiado largo")
      .nonempty("La confirmación de correo es requerida"),

    phone: z
      .string()
      .min(10, "El celular debe tener mínimo 10 dígitos")
      .max(15, "El celular es demasiado largo")
      .nonempty("Debe ingresar un número de celular")
      .regex(/^\d+$/, "El celular solo debe contener números"),
  })
  .refine((data) => data.email === data.confirm_email, {
    path: ["confirm_email"],
    message: "Los correos no coinciden",
  });
