import Image from "next/image";
import HomeImage from "@/assets/home-image.svg";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Link
        href="/open"
        className="bg-blue-500 text-white font-semibold rounded-lg p-2 mb-4 xs:mt-12 mt-8 hover:opacity-90 transition-all"
      >
        Open a ticket
      </Link>
      <h1 className="text-xl">Manage your company</h1>
      <h1 className="xs:text-3xl text-2xl font-semibold text-blue-700 ">
        Customers, Services
      </h1>
      <Image
        src={HomeImage}
        alt="home-image"
        className="w-2/3 min-w-72 max-w-xl mt-8"
        priority
      />
    </>
  );
}
