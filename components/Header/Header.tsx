import { AiFillPlusCircle } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import NewInvoice from "./NewInvoice";

const Header = () => {
  return (
    <header className="flex justify-between mb-8">
      <div>
        <h2 className="text-2xl font-bold lg:text-4xl md:mb-2">Invoices</h2>
        <p className="text-sm text-lighter-grey">
          <span className="hidden md:inline">There are </span>3{" "}
          <span className="hidden lg:inline">total </span>invoices
        </p>
      </div>
      <div className="flex items-center space-x-2 font-semibold">
        <p>
          Filter<span className="hidden md:inline"> by status</span>
        </p>
        <button>
          <FaAngleDown size={18} className="text-darker-purple lg:mr-6" />
        </button>
        <NewInvoice />
      </div>
    </header>
  );
};

export default Header;
