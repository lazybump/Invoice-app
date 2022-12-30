import { useState } from "react";
import Item from "./Item";

const ItemList = () => {
  const [items, setItems] = useState<HTMLElement[] | null>(null);

  return (
    <section>
      <h3 className="mb-3 text-xs font-semibold text-darker-grey">Item List</h3>

      <header className="grid grid-cols-9 gap-3 mb-1">
        <label className="col-span-4">Item Name</label>
        <label>Qty.</label>
        <label htmlFor="" className="col-span-2">
          Price
        </label>
        <label htmlFor="">Total</label>
      </header>
      <ul className="space-y-3">
        {items?.map((item) => (
          <Item />
        ))}

        {/* <Item />
        <Item /> */}
      </ul>
    </section>
  );
};

export default ItemList;
