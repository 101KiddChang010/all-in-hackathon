import Link from "next/link";

const Navbar: React.FC<{ classNameExtras?: string }> = ({
  classNameExtras = " ",
}) => {
  return (
    <div
      className={
        // "flex h-14 w-full items-center justify-center text-[#343434] " +
        "flex h-14 w-full items-center justify-center text-[#43A9F4] " +
        classNameExtras
      }
    >
      <nav
        className={
          "xl:h-18 container flex items-center justify-between px-6 md:px-16 xl:text-2xl "
        }
      >
        <Link href="/" className="duration-400 transition hover:text-[#DE8746]">
          <h1>Diversify</h1>
        </Link>
        <Link
          href="/"
          className="duration-400 rounded-full border-2 border-solid border-[#43A9F4] px-3 py-1 transition hover:border-[#DE8746] hover:text-[#DE8746]"
        >
          <p>login</p>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
