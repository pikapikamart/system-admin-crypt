import z, { TypeOf } from "zod"


export const loginUserSchema = z
  .object({
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Email should follow proper format" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(1, "password should not be empty")
  })

export const userSchema = z
  .object({
    fullname: z
      .string({ required_error: "Fullname is required" })
      .min(1, "Fullname should not be empty"),
    username: z
      .string({ required_error: "Username is required" })
      .min(1, "Username should not be empty"),
  })
  .merge(loginUserSchema)

export const updateUserSchema = z
.object({
  username: z
    .string({ required_error: "Username is required" })
    .min(1, "Username should follow proper format"),
  bio: z
    .string()
    .optional()
})

export type UserSchema = TypeOf<typeof userSchema>
export type LoginUserSchema = TypeOf<typeof loginUserSchema>
export type UpdateUserSchema = TypeOf<typeof updateUserSchema>