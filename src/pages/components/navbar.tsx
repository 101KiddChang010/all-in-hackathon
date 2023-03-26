import Link from "next/link";

const Navbar: React.FC<{ classNameExtras?: string }> = ({
  classNameExtras,
}) => {
  return (
    <nav
      className={
        "flex h-12 w-full items-center justify-between text-base xl:h-16 xl:text-2xl " +
        classNameExtras
      }
    >
      <Link href="/" className="ml-16">
        Diversify
      </Link>
      <div className="mr-16">
        <p className="rounded-full border-2 border-solid border-black px-3 py-1">
          LOGIN
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
