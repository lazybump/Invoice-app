import { AiFillPlusCircle } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between mb-8">
      <div>
        <h2 className="text-2xl font-bold">Invoices</h2>
        <span className="text-sm text-lighter-grey">3 invoices</span>
      </div>
      <div className="flex items-center space-x-2 font-semibold">
        <span>Filter</span>
        <button>
          <FaAngleDown size={18} className="text-darker-purple" />
        </button>
        <button className="flex items-center justify-between w-20 px-2 py-1 rounded-full bg-darker-purple">
          <AiFillPlusCircle size={30} />
          <span>New</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
