import { defineCollection, z } from "astro:content";
// z -> zod schema/tipo de datos

const dataset = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string(),
    description: z.string(),
    huggingface: z.string(),
    }),
  })

export const collections = { dataset }