import { AiFillPlusCircle } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between mb-8">
      <div>
        <h2 className="text-2xl font-bold md:mb-2">Invoices</h2>
        <p className="text-sm text-lighter-grey">
          <span className="hidden md:inline">There are </span>3 invoices
        </p>
      </div>
      <div className="flex items-center space-x-2 font-semibold">
        <p>
          Filter<span className="hidden md:inline"> by status</span>
        </p>
        <button>
          <FaAngleDown size={18} className="text-darker-purple" />
        </button>
        <button className="flex items-center justify-between w-20 px-2 py-1 rounded-full md:w-36 bg-darker-purple">
          <AiFillPlusCircle size={30} />
          <p>
            New<span className="hidden md:inline"> invoice</span>
          </p>
        </button>
      </div>
    </header>
  );
};

export default Header;
