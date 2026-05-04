import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import ProfileView from "@/component/profile/ProfileView";

const MyProfilePage = async() => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="min-h-[60vh] flex items-start justify-center bg-gray-50 px-4 pt-20">
      <ProfileView user={session.user} />
    </main>
  );
}


export default MyProfilePage