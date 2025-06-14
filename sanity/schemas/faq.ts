import { defineType, defineField } from "sanity";

export default defineType({
  name: "preguntas-frecuentes",
  title: "Preguntas Frecuentes",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Pregunta",
      type: "string",
    }),
    defineField({
      name: "answer",
      title: "Respuesta",
      type: "text",
    }),
    defineField({
      name: "type",
      title: "Tipo de preguntas",
      type: "array",
      of: [{ type: "reference", to: { type: "services" } }],
    }),
  ],
});
