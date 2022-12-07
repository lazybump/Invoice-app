import { TbPacman } from "react-icons/tb";
import { BsSunFill } from "react-icons/bs";
import man from "../public/man.jpg";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 flex items-center w-full h-20 bg-primary-color">
      {/* Logo */}
      <div className="relative flex items-center justify-center w-24 h-full overflow-hidden rounded-r-3xl bg-secondary-color">
        <TbPacman fill="white" size={40} className="z-10 -rotate-90" />
        <div className="absolute bottom-0 w-full h-1/2 bg-tertiary-color rounded-tl-3xl"></div>
      </div>
      {/* Theme icon */}
      <BsSunFill className="ml-auto mr-4 text-grey-color" size={25} />
      {/* Profile icon */}
      <div className="flex items-center justify-center w-20 h-full border-l-2 border-grey-color">
        <Image
          src={man}
          width="40"
          height="15"
          alt="software engineer"
          className="rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
