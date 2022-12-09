import ItemList from "./ItemList";
import Recipient from "./Recipient";
import Sender from "./Sender";
import ServiceInfo from "./ServiceInfo";
import { GoPlus } from "react-icons/go";

interface Props {
  isOpen: boolean;
}

const Form = ({ isOpen }: Props) => {
  return (
    <form
      action="#"
      className={`hidden lg:block z-20 bg-darker-navy p-8 relative max-w-[500px] h-screen rounded-r-3xl left-24 transition-all duration-500 ${
        isOpen ? "" : "-translate-x-full"
      }`}
      onSubmit={(e) => e.preventDefault()}
    >
      <h1 className="mb-6 text-lg font-bold">
        Edit <span className="text-darker-grey">#</span>XM9141
      </h1>
      <Sender />
      <Recipient />
      <ServiceInfo />
      <ItemList />
      <button className="flex items-center justify-center w-full py-3 mt-3 rounded-full bg-lighter-navy">
        <GoPlus size={7} /> <span className="ml-1 text-xxs">Add New Item</span>
      </button>
      <div className="flex justify-end mt-6 space-x-2 font-semibold text-xxs">
        <button className="px-4 py-2 rounded-full bg-lighter-navy">
          Cancel
        </button>
        <button className="px-4 py-2 rounded-full bg-darker-purple">
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default Form;
