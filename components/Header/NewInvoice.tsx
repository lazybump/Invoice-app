import { AiFillPlusCircle } from "react-icons/ai";

const NewInvoice = () => {
  return (
    <button className="flex items-center justify-between w-20 px-2 py-1 rounded-full md:w-36 bg-darker-purple">
      <AiFillPlusCircle size={30} />
      <p>
        New<span className="hidden md:inline"> invoice</span>
      </p>
    </button>
  );
};

export default NewInvoice;
