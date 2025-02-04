import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <h6 className="ml-2 text-3xl font-bold bg-gradient-to-r from-green-500 via-purple-500 to-pink-500 text-transparent bg-clip-text hidden sm:block dancing-font">
              Arham Memorial Coaching
            </h6>
          </Link>
        </div>
      </div>
    </nav>
  );
}
