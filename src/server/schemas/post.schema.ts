import z, { TypeOf } from "zod"
import { coinSchema } from "./coin.schema"


export const postSchema = z
  .object({
    content: z
      .string({ required_error: "Content is required" })
      .min(1, "Content should not be empty"),
    tags: z.array(coinSchema)
  })

export type PostSchema = TypeOf<typeof postSchema>