import z, { TypeOf } from "zod"


export const coinSchema = z
  .object({
    id: z
      .string({ required_error: "Id is required" })
      .min(1, "Id should not be empty"),
    symbol: z
      .string({ required_error: "Symbol is required" })
      .min(1, "Symbol should not be empty"),
    name: z
      .string({ required_error: "Name is required" })
      .min(1, "Name should not be empty")
  })

export const coinIdSchema = z
  .object({
    id: z
    .string({ required_error: "Id is required" })
    .min(1, "Id should not be empty"),
  })

export type CoinIdSchema = TypeOf<typeof coinIdSchema>
export type CoinSchema = TypeOf<typeof coinSchema>