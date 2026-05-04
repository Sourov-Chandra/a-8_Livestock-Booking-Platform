import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import UpdateForm from "@/component/profile/UpdateForm";

export default async function UpdateProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <UpdateForm user={session.user} />
    </main>
  );
}
