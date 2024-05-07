interface CardProps {
  name: string;
  telephone: string;
  email: string;
}

export default function CustomerCard({ name, telephone, email }: CardProps) {
  return (
    <div className="flex flex-col gap-1 p-2 border-2 max-w-sm rounded-lg">
      <h1>
        <span className="font-semibold">Name: </span> {name}
      </h1>
      <h1>
        <span className="font-semibold">Telephone: </span> {telephone}
      </h1>
      <h1>
        <span className="font-semibold">E-mail: </span> {email}
      </h1>
      <button className="mt-2 px-2 bg-red-400 text-white rounded-lg mx-auto w-1/2 max-w-32">
        Delete
      </button>
    </div>
  );
}
