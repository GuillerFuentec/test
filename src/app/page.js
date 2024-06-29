import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black h-screen text-cyan-500">
    <h1>Hello World!</h1>
    <Link href="/contact">contact</Link>
  </div>
  );
}
