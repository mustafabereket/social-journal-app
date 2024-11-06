"use client";

import React, { useActionState } from "react";
import Form from "next/form";
import { useFormStatus } from "react-dom";
import { signup } from "../app/actions/user";
import { Button } from "@/components/ui/button";

import { SignupFormSchema } from "@/app/lib/definitions";

const SignUp = () => {
  const [state, action] = useActionState(signup, undefined);
  return (
    <div className="mt-20 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6">
        Sign Up For Social Journal
      </h2>

      <Form action={action} className="flex flex-col w-full max-w-xs space-y-4">
        <label htmlFor="username" className="text-gray-700 font-medium">
          UserName
        </label>
        <input
          type="text"
          maxLength={29}
          name="username"
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {state?.errors?.username && <p>{state.errors.username}</p>}

        <label htmlFor="email" className="text-gray-700 font-medium">
          Email
        </label>
        <input
          type="email"
          maxLength={29}
          name="email"
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {state?.errors?.email && <p>{state.errors.email}</p>}
        <label htmlFor="password" className="text-gray-700 font-medium">
          Password
        </label>
        <input
          type="password"
          maxLength={29}
          name="password"
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="confirmPassword" className="text-gray-700 font-medium">
          Confirm Password
        </label>
        <input
          type="password"
          maxLength={29}
          name="confirmPassword"
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        {state?.errors?.confirmPassword && (
          <p>{state.errors.confirmPassword}</p>
        )}
        {state?.errors?.password && (
          <div>
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
        <SubmitButton />
      </Form>
    </div>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {pending ? "Signing Up..." : "Sign Up"}
    </Button>
  );
}

export default SignUp;
