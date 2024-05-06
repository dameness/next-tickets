import { Trash, File } from "lucide-react";

export default function TicketsTable() {
  return (
    <table className="w-[96%]">
      <thead>
        <tr className="border-b">
          <th className="text-left">Customer</th>
          <th className="text-left">Date</th>
          <th className="text-left">Status</th>
          <th className="text-left">#</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b h-10">
          <td>José Silva</td>
          <td>01/05/2024</td>
          <td>
            <div className="px-2 py-0.5 w-24 text-center rounded-lg bg-green-500">
              ACTIVE
            </div>
          </td>
          <td>
            <div className="flex gap-2 items-center">
              <Trash className="text-red-400" />
              <File className="text-blue-600" />
            </div>
          </td>
        </tr>
        <tr className="border-b h-10">
          <td>José Silva</td>
          <td>01/05/2024</td>
          <td>
            <div className="px-2 py-0.5 w-24 text-center rounded-lg bg-green-500">
              ACTIVE
            </div>
          </td>
          <td>
            <div className="flex gap-2 items-center">
              <Trash className="text-red-400" />
              <File className="text-blue-600" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
