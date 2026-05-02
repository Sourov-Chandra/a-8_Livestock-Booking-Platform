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
import { useState } from "react";
const Register = () => {

  const [isVisible, setIsVisible] = useState(false);
   const onSubmit = async (e) => {
     e.preventDefault();
     const formData = new FormData(e.currentTarget);
     const userData = Object.fromEntries(formData.entries());
     // console.log(data);
     const { data, error } = await authClient.signUp.email({
       name: userData.name,
       email: userData.email,
       password: userData.password,
       photoURL: userData.photoUrl,
       callbackURL: "/",
     });
     if (error) {
       alert("Form data fetching error", error.message);
     } else {
       console.log("Success!", data);
       alert("successfully registered", userData.name)
     }
   };
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-2xl border border-divider bg-content1 shadow-lg p-8 flex flex-col gap-6 m-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground tracking-tight">
            Create Account
          </h2>
        </div>
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
          {/* name */}
          <FieldGroup>
            <TextField
              isRequired
              name="name"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }
                return null;
              }}
            >
              <Label>Name</Label>
              <Input name="name" placeholder="Enter your name" />
              <FieldError />
            </TextField>
          </FieldGroup>
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
      </div>
    </div>
  );
};

export default Register;
