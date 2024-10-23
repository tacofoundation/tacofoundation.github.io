import { defineCollection, z } from "astro:content";

// Definición de la colección para los datasets
const dataset = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string(),
    description: z.string(),
    huggingface: z.string(),
  }),
});

// Definición de la colección para el overview
const overview = defineCollection({
  schema: z.object({
    title: z.string(),

  }),
});

// Definición de la colección para el Contributing
const contributing = defineCollection({
  schema: z.object({
    title: z.string(),

  }),
});

// Exporta ambas colecciones
export const collections = { dataset, overview, contributing };
