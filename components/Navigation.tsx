import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#56B7E6] hover:text-[#3A9BC8] transition-colors">
              Spoon
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#56B7E6] px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-[#56B7E6] px-3 py-2 text-sm font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-[#56B7E6] px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#56B7E6] px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/donate"
              className="bg-[#56B7E6] text-white hover:bg-[#3A9BC8] px-6 py-2 rounded-md text-sm font-medium transition-all shadow-sm hover:shadow-md"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
