"use client";
import authClient from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Login failed");
    } else {
      toast.success("Login successful");
    }
  };

  const handleGoogleSignIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-[80vh] bg-background">
      <div className="flex h-[80vh] items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl border border-divider bg-content1 shadow-lg p-8 flex flex-col gap-6 m-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground tracking-tight">
              Please login here
            </h2>
          </div>

          {/* google */}
          <Button
            className="w-full h-12 font-medium relative overflow-hidden group
             border border-default-200 hover:border-default-300
             bg-linear-to-r from-white to-default-50/50
             hover:from-default-50 hover:to-default-100/50
             active:scale-[0.99] transition-all duration-200
             shadow-sm hover:shadow-md"
            onPress={handleGoogleSignIn}
            startContent={<FcGoogle className="w-5 h-5 drop-shadow-sm" />}
          >
            <span className="relative z-10">Continue with Google</span>
            <span className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-divider" />
            <span className="text-xs text-default-400">
              or login with email
            </span>
            <div className="flex-1 h-px bg-divider" />
          </div>

          <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
            {/* email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input name="email" placeholder="Enter your email" />
              <FieldError />
            </TextField>

            {/* password */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              className="w-full"
              validate={(value) => {
                if (value.length < 8)
                  return "Password must be at least 8 characters";
                if (!/[A-Z]/.test(value))
                  return "Password must contain at least one uppercase letter";
                if (!/[0-9]/.test(value))
                  return "Password must contain at least one number";
                return null;
              }}
            >
              <Label>Password</Label>
              <InputGroup>
                <InputGroup.Input
                  type={isVisible ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <InputGroup.Suffix className="pr-0">
                  <Button
                    isIconOnly
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    size="sm"
                    variant="ghost"
                    type="button"
                    onPress={() => setIsVisible(!isVisible)}
                  >
                    {isVisible ? (
                      <Eye className="size-4" />
                    ) : (
                      <EyeSlash className="size-4" />
                    )}
                  </Button>
                </InputGroup.Suffix>
              </InputGroup>
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>
            <div className="flex gap-4 mx-auto">
              <Button type="submit">
                <Check />
                Submit
              </Button>
              <Button type="reset" variant="secondary">
                Reset
              </Button>
            </div>
          </Form>
          <p className="text-center text-sm text-default-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-primary font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
