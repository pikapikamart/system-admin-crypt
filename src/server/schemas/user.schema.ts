import z, { TypeOf } from "zod"


export const userSchema = z
  .object({
    fullname: z
      .string({ required_error: "Fullname is required" })
      .min(1, "Fullname should not be empty"),
    username: z
      .string({ required_error: "Username is required" })
      .min(1, "Username should not be empty"),
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Email should follow proper format" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(1, "password should not be empty")
  })

export type UserSchema = TypeOf<typeof userSchema>