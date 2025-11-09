import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t-[0.5px] border-primary py-4 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-text">&copy; 2025 Kook. All rights reserved.</p>
        <nav className="flex space-x-4 mt-2 md:mt-0">
          <Link href="/privacy-policy">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
}
