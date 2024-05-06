import Image from "next/image";
import DashboardImage from "@/assets/dashboard-image.svg";

export default function Dashboard() {
  return (
    <>
      <h1 className="text-xl mt-12">Manage your company</h1>
      <h1 className="text-3xl font-semibold text-blue-700">
        Customers, Services
      </h1>
      <Image
        src={DashboardImage}
        alt="dashboard-image"
        className="w-2/3 max-w-xl mt-8"
      />
    </>
  );
}
