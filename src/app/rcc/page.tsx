"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ClientConponent() {
  const [count, setCount] = useState(0);
  const router = useRouter();
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <Link href="/about">Go to About Page</Link>
      <button onClick={() => router.push("/about")}>Refresh</button>
    </div>
  );
}
