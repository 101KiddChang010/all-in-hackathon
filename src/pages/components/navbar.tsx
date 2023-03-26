import Link from "next/link";

const Navbar: React.FC<{ classNameExtras?: string }> = ({
  classNameExtras,
}) => {
  return (
    <nav
      className={
        "flex h-12 w-full items-center justify-between px-16 xl:h-16 xl:text-2xl " +
        classNameExtras
      }
    >
      <Link
        href="/"
        className="duration-400 text-[#343434] transition hover:text-[#DE8746]"
      >
        <h1>Diversify</h1>
      </Link>
      <Link
        href="/"
        className="duration-400 rounded-full border-2 border-solid border-[#343434] px-3 py-1 text-[#343434] transition hover:border-[#DE8746] hover:text-[#DE8746]"
      >
        <p>LOGIN</p>
      </Link>
    </nav>
  );
};

export default Navbar;
