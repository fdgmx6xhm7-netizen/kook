import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-background border-b-[0.5px]  border-primary py-4 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          <span className="text-primary px-4">Kook</span>
        </Link>
        <nav className="flex items-center space-x-4">
          {/* <Link href="/about">About</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Button variant="ghost">Login (Coming Soon)</Button>
          <Button variant="ghost">Sign Up (Coming Soon)</Button> */}
        </nav>
      </div>
    </header>
  );
}
