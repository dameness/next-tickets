//open ticket as a guest

import OpenTicketForm from "@/components/open/form";

export default function OpenTicket() {
  return (
    <div className="sm:w-5/6 w-full max-w-2xl mx-auto px-2 xs:mt-24 mt-20">
      <h1 className="font-bold text-3xl text-center">Open ticket</h1>
      <h1 className="text-xl opacity-80 text-center">As guest</h1>
      <main className="flex flex-col mt-4 mb-2">
        <OpenTicketForm />
      </main>
    </div>
  );
}
