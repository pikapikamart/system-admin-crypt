import z, { TypeOf } from "zod"


export const nftSchema = z
  .object({
    image: z
      .string({required_error: "Image is required"})
      .min(1, "Image should not be empty"),
    name: z
      .string({required_error: "Name is required"})
      .min(1, "Name should not be empty"),
    description: z
      .string({required_error: "Description is required"})
      .min(1, "Description should not be empty"),
    isLive: z
      .boolean({ required_error: "Islive is required" }),
    twitter: z
      .string({required_error: "Twitter link is required"})
      .min(1, "Twitter link should not be empty"),
    binance: z
      .string()
      .optional(),
    website: z
      .string()
      .optional()
  })

export type NFTSchema = TypeOf<typeof nftSchema>