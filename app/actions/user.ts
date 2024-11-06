"use server";

import { SignupFormSchema, FormState } from "@/app/lib/definitions";
import bcrypt from "bcrypt";

export async function signup(state: FormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  // Return errors if validation fails
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10);

  console.log(validatedFields);
  console.log(hashedPassword);

  // Store user data (username, email, hashedPassword) in the database

  return { message: "Signup successful!" };

  // Call the provider or db to create a user...
}