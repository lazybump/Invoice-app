import { MdIncompleteCircle } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import man from "../public/man.jpg";
import Image from "next/image";

interface Props {
  toggle: () => void;
}

const Navbar = ({ toggle }: Props) => {
  return (
    <nav className="fixed top-0 z-50 flex items-center w-full h-16 lg:justify-between lg:w-24 lg:flex-col lg:h-screen bg-lighter-navy lg:rounded-r-3xl lg:overflow-hidden">
      {/* Logo */}
      <div
        className="relative flex items-center justify-center min-w-[70px] max-w-1/5 h-full overflow-hidden lg:h-24 lg:w-full rounded-r-3xl bg-darker-purple lg:cursor-pointer"
        onClick={toggle}
      >
        <MdIncompleteCircle
          fill="white"
          size={40}
          className="z-10 rotate-[20deg]"
        />
        <div className="absolute bottom-0 w-full h-1/2 bg-lighter-purple rounded-tl-3xl"></div>
      </div>
      {/* Theme icon */}
      <BsSunFill
        className="ml-auto mr-4 lg:m-auto lg:mb-10 text-darker-grey"
        size={25}
      />
      {/* Profile icon */}
      <div className="flex items-center justify-center w-20 h-full border-l-2 lg:border-l-0 lg:border-t-2 lg:w-full lg:h-24 border-darker-grey">
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
