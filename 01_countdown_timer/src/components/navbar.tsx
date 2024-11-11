// src/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 text-white pt-2 pb-0 px-8  flex items-center justify-between shadow-md">
      {/* Logo Section */}
      <div className="text-2xl font-bold">
        <Link href="/">
          <button className="text-gray-800">AdeelProj</button>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="space-x-4 flex">
        <Link href="/liveclock">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition">
            Live Clock
          </button>
        </Link>
        <Link href="./">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition">
            Timer Countdown
          </button>
        </Link>
        <Link href="/alarm">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition">
            Set Alarm
          </button>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
