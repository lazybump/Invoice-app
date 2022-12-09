import { IoMdTrash } from "react-icons/io";

const Item = () => {
  return (
    <>
      <input type="text" className="col-span-4 data-input" />
      <input type="text" className="px-1 text-center data-input" />
      <input type="text" className="col-span-2 px-4 data-input" />
      <input
        type="text"
        className="px-1 py-2 font-medium text-center rounded text-xxs bg-darker-navy"
      />
      <button className="justify-self-end">
        <IoMdTrash className="text-darker-grey" />
      </button>
    </>
  );
};

export default Item;
