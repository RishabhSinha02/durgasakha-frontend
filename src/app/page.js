import Link from 'next/link';
export default function Home() {
  return (
    <div>Hello
      <Link href="/about-us">About Us</Link>
    </div>
  );
}
