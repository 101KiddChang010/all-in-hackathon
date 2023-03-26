const Navbar: React.FC<{ classNameExtras?: string }> = ({
  classNameExtras,
}) => {
  return (
    <nav
      className={
        "flex h-16 w-full items-center justify-between text-2xl " +
        classNameExtras
      }
    >
      <p className="ml-16">Diversify</p>
      <div className="mr-16">
        <p className="rounded-full border-2 border-solid border-black px-3 py-1">
          LOGIN
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
