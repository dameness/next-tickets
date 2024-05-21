import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import GuestImage from "@/assets/guest.png";
import Image from "next/image";
import { authOptions } from "@/lib/auth";

export default async function User() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <>
      <h1 className="text-3xl font-semibold mt-4">Your profile</h1>
      <div className="flex xs:flex-row flex-col items-center justify-center xs:gap-12 gap-4">
        <Image
          src={session.user.image || GuestImage}
          alt="user"
          className="rounded-full mt-6"
          width={108}
          height={108}
        />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold">{session.user.name}</h1>
          <h1>{session.user.email}</h1>
        </div>
      </div>
    </>
  );
}
