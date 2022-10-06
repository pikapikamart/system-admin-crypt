import z, { TypeOf } from "zod"


export const cryptoSymbolSchema = z
  .object({
    symbol: z
      .string({ required_error: "Symbol is required" })
      .min(1, "symbol should not be empty")
  })

export type CryptoSymbolSchema = TypeOf<typeof cryptoSymbolSchema>