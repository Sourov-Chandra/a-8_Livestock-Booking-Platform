"use client";

import { authClient } from "@/lib/auth-client";
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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      photoURL: userData.photoUrl,
      // callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Account created successfully");
       router.push("/");
       router.refresh();
    }
  };

  // Google
  const handleGoogleSignUp = async () => {
    const {data, error} = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    // console.log(data, "data");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-2xl border border-divider bg-content1 shadow-lg p-8 flex flex-col gap-6 m-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground tracking-tight">
            Create Account
          </h2>
        </div>

        {/* Google Sign up */}

        <Button
          className="w-full h-12 font-medium relative overflow-hidden group
             border border-default-200 hover:border-default-300
             bg-linear-to-r from-white to-default-50/50
             hover:from-default-50 hover:to-default-100/50
             active:scale-[0.99] transition-all duration-200
             shadow-sm hover:shadow-md"
          onPress={handleGoogleSignUp}
          startContent={<FcGoogle className="w-5 h-5 drop-shadow-sm" />}
        >
          <span className="relative z-10">Continue with Google</span>
          <span className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-divider" />
          <span className="text-xs text-default-400">
            or register with email
          </span>
          <div className="flex-1 h-px bg-divider" />
        </div>

        {/* email form */}
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
          {/* Name */}
          <FieldGroup>
            <TextField
              isRequired
              name="name"
              validate={(value) => {
                if (value.length < 3)
                  return "Name must be at least 3 characters";
                return null;
              }}
            >
              <Label>Name</Label>
              <Input name="name" placeholder="Enter your name" />
              <FieldError />
            </TextField>
          </FieldGroup>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
                return "Please enter a valid email address";
              return null;
            }}
          >
            <Label>Email</Label>
            <Input name="email" placeholder="Enter your email" />
            <FieldError />
          </TextField>

          {/* Photo URL */}
          <TextField
            name="photoUrl"
            type="url"
            className="w-full"
            validate={(value) => {
              if (!value) return null;
              try {
                const url = new URL(value);
                if (!["http:", "https:"].includes(url.protocol))
                  return "URL must start with http:// or https://";
                if (
                  !/\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i.test(url.pathname)
                )
                  return "URL must point to an image (.jpg, .png, .gif, .webp, .svg)";
                return null;
              } catch {
                return "Please enter a valid URL";
              }
            }}
          >
            <Label>
              Photo URL{" "}
              <span className="text-default-400 font-normal text-xs">
                (optional)
              </span>
            </Label>
            <Input name="photoUrl" placeholder="Enter photo url" />
            <Description className="text-xs text-default-400">
              Link to your profile picture (.jpg, .png, .webp, etc.)
            </Description>
            <FieldError />
          </TextField>

          {/* Password */}
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
            <Button type="submit" color="primary">
              <Check />
              Register
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </Form>

        <p className="text-center text-sm text-default-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
