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
    <section className=" bg-gray-50">
      <main className="min-h-[80vh] flex items-start justify-center px-4 pt-20">
        <ProfileView user={session.user} />
      </main>
    </section>
  );
}


export default MyProfilePage