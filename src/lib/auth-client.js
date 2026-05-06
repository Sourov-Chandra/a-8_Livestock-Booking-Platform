import { createAuthClient } from "better-auth/react";

const authClient = createAuthClient({
  baseURL: "https://a-8-livestock-booking-platform-ar5apevru.vercel.app",
});

export const { signIn, signUp, signOut, useSession } = authClient;
export default authClient;
