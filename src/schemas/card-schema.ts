import { z } from "zod";

export const creditCardFormSchema = z
  .object({
    fullname: z
      .string()
      .min(3, "El nombre completo es obligatorio")
      .max(100, "El nombre es demasiado largo")
      .nonempty("El nombre es obligatorio")
      .regex(/^[a-zA-Z ]+$/, "El nombre solo debe contener letras"),

    document_type: z.enum(
      ["CedulaDeCiudadania", "TarjetaDeIdentidad", "Pasaporte", "NIT"],
      {
        required_error: "Selecciona un tipo de documento",
      }
    ),

    document_number: z
      .string()
      .min(5, "El número de documento es obligatorio")
      .max(15, "El número de documento es demasiado largo")
      .nonempty("El número de documento es obligatorio")
      .regex(/^\d+$/, "El número de documento solo debe contener números"),

    card_number: z
      .string()
      .min(13, "El número de tarjeta debe tener al menos 13 dígitos")
      .max(19, "El número de tarjeta no debe superar 19 dígitos")
      .nonempty("El número de tarjeta es obligatorio")
      .regex(/^\d+$/, "El número de tarjeta solo debe contener números"),

    card_year: z
      .string()
      .regex(
        /^(0[1-9]|1[0-2])\/\d{4}$/,
        "La fecha debe tener el formato MM/AAAA"
      )
      .nonempty("La fecha de vencimiento es obligatoria"),

    card_cvv: z
      .string()
      .min(3, "El CVC/CVV debe tener 3 dígitos")
      .max(4, "El CVC/CVV no debe tener más de 4 dígitos")
      .regex(/^\d+$/, "El CVC/CVV solo debe contener números")
      .nonempty("El CVC/CVV es obligatorio"),

    installments: z.enum(["1", "2", "3"], {
      required_error: "Selecciona el número de cuotas",
    }),

    email: z
      .string()
      .email("Correo electrónico inválido")
      .nonempty("El correo electrónico es obligatorio"),

    confirm_email: z
      .string()
      .email("Correo electrónico inválido")
      .nonempty("La confirmación de correo es obligatoria"),

    phone: z
      .string()
      .min(10, "El número de celular debe tener mínimo 10 dígitos")
      .max(15, "El número de celular es demasiado largo")
      .regex(/^\d+$/, "El celular solo debe contener números")
      .nonempty("El número de celular es obligatorio"),
  })
  .refine((data) => data.email === data.confirm_email, {
    path: ["confirm_email"],
    message: "Los correos electrónicos no coinciden",
  });
