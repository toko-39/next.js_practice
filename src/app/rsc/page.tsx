import ClientConponent from "@/components/ClientComponent";
import Link from "next/link";
export default function ServerComponent() {
  return (
    <div>
      <ClientConponent />
      <Link href="/about">Go to About Page</Link>
    </div>
  );
}
