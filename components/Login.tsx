"use client";

import React, { useActionState } from "react";
import Form from "next/form";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { login } from "../app/actions/user";


const Login = () => {
  const [state, action] = useActionState(login, undefined);
  return (
    <div className="mt-20 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6">
        Login to your Social Journal
      </h2>

      <Form action={action} className="flex flex-col w-full max-w-xs space-y-4">
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
        {state?.errors?.general && <p>{state?.errors?.general}</p>}
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

export default Login;
