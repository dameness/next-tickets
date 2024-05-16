"use client";

import { RefreshCcw } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RefreshButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.refresh()}
      className="bg-green-500 py-2 px-6 text-neutral-50 rounded-md"
    >
      <RefreshCcw />
    </button>
  );
}
