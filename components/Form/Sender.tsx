const Sender = () => {
  return (
    <section className="mb-6">
      <h4 className="mb-3 font-bold text-xxs text-darker-purple">Bill From</h4>

      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        <div className="flex flex-col col-span-3">
          <label htmlFor="s-address">Street Address</label>
          <input type="text" id="s-address" className="data-input" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="s-city">City</label>
          <input type="text" id="s-city" className="data-input" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="s-postcode">Post Code</label>
          <input type="text" id="s-postcode" className="data-input" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="s-country">Country</label>
          <input type="text" id="s-country" className="data-input" />
        </div>
      </div>
    </section>
  );
};

export default Sender;
