import z, { TypeOf } from "zod"
import { coinSchema } from "./coin.schema"


export const postSchema = z
  .object({
    content: z
      .string({ required_error: "Content is required" })
      .min(1, "Content should not be empty"),
    tags: z.array(coinSchema).optional()
  })

export const replyPostSchema = z
  .object({
    postId: z
      .string({ required_error: "Post Id is required" })
      .min(1, "Post Id should not be empty"),
    content: z
      .string({ required_error: "Content is required" })
      .min(1, "Content should not be empty"),
  })

export const postIdSchema = z
  .object({
    postId: z
      .string({ required_error: "Post Id is required" })
      .min(1, "Post Id should not be empty")
  })

export const editPostSchema = postIdSchema.merge(postSchema)

export type PostSchema = TypeOf<typeof postSchema>
export type ReplyPostSchema = TypeOf<typeof replyPostSchema>
export type PostIdSchema = TypeOf<typeof postIdSchema>
export type EditPostSchema = TypeOf<typeof editPostSchema>