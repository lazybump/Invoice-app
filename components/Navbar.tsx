import { MdIncompleteCircle } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import man from "../public/man.jpg";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 flex items-center w-full h-20 bg-lighter-navy">
      {/* Logo */}
      <div className="relative flex items-center justify-center w-24 h-full overflow-hidden rounded-r-3xl bg-darker-purple">
        <MdIncompleteCircle
          fill="white"
          size={40}
          className="z-10 rotate-[20deg]"
        />
        <div className="absolute bottom-0 w-full h-1/2 bg-lighter-purple rounded-tl-3xl"></div>
      </div>
      {/* Theme icon */}
      <BsSunFill className="ml-auto mr-4 text-darker-grey" size={25} />
      {/* Profile icon */}
      <div className="flex items-center justify-center w-20 h-full border-l-2 border-darker-grey">
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
