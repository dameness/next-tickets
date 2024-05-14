"use client";
import Link from "next/link";

export default function TicketsTableModal() {
  return (
    <div className="w-2/3 max-w-md max-h-[96vh] overflow-y-auto p-4 rounded-lg bg-white shadow 2xl drop-shadow-2xl absolute left-1/2 top-1/2 border translate-x-[-50%] translate-y-[-50%] flex flex-col gap-2">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">Ticket details</h1>
        <Link
          href={`?modal=$false`}
          className="px-4 py-2 flex items-center text-white bg-red-500 rounded-lg"
        >
          Close
        </Link>
      </div>
      <h1>
        <span className="font-semibold">Title: </span> Problem on Pc
      </h1>
      <h1 className="font-semibold -mb-1">Description:</h1>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature
      </p>
      <hr />
      <h1 className="text-xl font-semibold">Customer details</h1>
      <h1>
        <span className="font-semibold">Name: </span> Customer X
      </h1>
      <h1>
        <span className="font-semibold">Telephone: </span> (xx)-99999-9999
      </h1>
      <h1>
        <span className="font-semibold">E-mail: </span> mail@mail.com
      </h1>
    </div>
  );
}
