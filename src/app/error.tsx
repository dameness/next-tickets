"use client";

import Link from "next/link";
import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <h1 className="text-xl">Ops, algo deu errado!</h1>
      <Link className="text-sm text-blue-400" href="/">
        Voltar para a página inicial
      </Link>
    </>
  );
}
