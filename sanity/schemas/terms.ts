import { defineField, defineType } from "sanity";

export default defineType({
  name: "terms",
  title: "Terminos y Condiciones",
  type: "document",
  fields: [
    defineField({
      name: "body",
      title: "Body",
      validation: (rule) => rule.required(),
      type: "blockContent",
    }),
  ],
});
