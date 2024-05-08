import Actions from "./actions";
export default function TicketsTable() {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b">
          <th className="text-left">Customer</th>
          <th className="text-center">Date</th>
          <th className="text-center">Status</th>
          <th className="text-right">#</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b h-10">
          <td>José Silva</td>
          <td className="text-center">01/05/2024</td>
          <td>
            <div className="mx-auto px-2 py-0.5 w-24 text-center rounded-lg bg-green-500">
              ACTIVE
            </div>
          </td>
          <td>
            <Actions />
          </td>
        </tr>
        <tr className="border-b h-10">
          <td>José Silva</td>
          <td className="text-center">01/05/2024</td>
          <td>
            <div className="mx-auto px-2 py-0.5 w-24 text-center rounded-lg bg-green-500">
              ACTIVE
            </div>
          </td>
          <td>
            <Actions />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
