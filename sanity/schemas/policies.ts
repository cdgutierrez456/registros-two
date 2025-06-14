import { defineField, defineType } from "sanity";

export default defineType({
  name: "policies",
  title: "Politicas de tratamiento de datos personales",
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
