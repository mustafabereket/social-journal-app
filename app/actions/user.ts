"use server";

import { SignupFormSchema, FormState } from "@/app/lib/definitions";
import bcrypt from "bcrypt";
import prisma from "../lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

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

  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10);

    const { username, email } = validatedFields.data;

    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        email,
      },
    });

    console.log("NEW USER DB INSERT RESPONSE", newUser);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      // Handle unique constraint violations (e.g., email or username already exists)
      if (error.code === "P2002") {
        const target = error.meta?.target || [];
        return {
          errors: {
            general: [
              `This ${target} is already taken, please try another one.`,
            ],
          },
        };
      }
    }

    // Handle general errors
    console.log("Signup error:", error);
    return {
      errors: {
        general: ["An unexpected error occurred. Please try again later."],
      },
    };
  }

  // Store user data (username, email, hashedPassword) in the database

  // Call the provider or db to create a user...
}
