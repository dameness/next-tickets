import Image from "next/image";
import HomeImage from "@/assets/home-image.svg";
export default function Home() {
  return (
    <>
      <h1 className="text-xl xs:mt-24 mt-20">Manage your company</h1>
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
