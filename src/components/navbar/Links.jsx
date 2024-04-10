"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/constants/links";

const Links = () => {
  const pathname = usePathname();
  const isAdmin = true;
  const isLoggedIn = true;

  return (
    <>
      {links.map((link, index) => {
        return (
          <Link
            key={link.value}
            href={link.path}
            className={`text-md px-4 py-2 rounded-2xl hover:underline font-semibold ${
              pathname == link.path
                ? "bg-white text-black hover:no-underline"
                : "text-white "
            }`}
          >
            {link.value}
          </Link>
        );
      })}

      {isLoggedIn && isAdmin && (
        <button
          className={`text-md px-4 py-2 text-white rounded-2xl hover:underline font-semibold`}
        >
          Admin
        </button>
      )}

      {isLoggedIn ? (
        <button
          className={`text-md px-4 py-2 text-white rounded-2xl hover:underline font-semibold`}
        >
          Logout
        </button>
      ) : (
        <button
          className={`text-md px-4 py-2 text-white rounded-2xl hover:underline font-semibold`}
        >
          Login
        </button>
      )}
    </>
  );
};

export default Links;
