import { defineField, defineType } from "sanity";

export default defineType({
    name: "services",
    title: "Servicios",
    type: "document",
    fields: [
      defineField({
        name: "title",
        title: "Titulo",
        type: "string",
      }),
      defineField({
        name: "description",
        title: "Descripcion",
        type: "text",
      }),
      defineField({
        name: "image",
        title: "Imagen",
        type: "image",
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: "alt",
            type: "string",
            title: "Alternative Text",
          },
        ],
      }),
    ],
})