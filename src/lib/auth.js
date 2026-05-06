import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.BETTER_DB_URI);
await client.connect();
const db = client.db("livestock-app");

export const auth = betterAuth({
  baseURL:
    process.env.BETTER_AUTH_URL ||
    "https://a-8-livestock-booking-platform-ar5apevru.vercel.app",
  secret: process.env.BETTER_AUTH_SECRET || "5csic6p6HmAq6a2NbbwbFb9RnpSTOxFt",
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});
