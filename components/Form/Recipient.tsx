const Recipient = () => {
  return (
    <section className="mb-6">
      <h4 className="mb-3 font-bold text-xxs text-darker-purple">Bill To</h4>

      <div className="grid grid-cols-3 grid-rows-4 gap-4">
        <div className="flex flex-col col-span-3">
          <label htmlFor="c-name">Client's Name</label>
          <input type="text" id="c-name" className="data-input" />
        </div>

        <div className="flex flex-col col-span-3">
          <label htmlFor="c-email">Client's Email</label>
          <input type="text" id="c-email" className="data-input" />
        </div>

        <div className="flex flex-col col-span-3">
          <label htmlFor="c-address">Street Address</label>
          <input type="text" id="c-address" className="data-input" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="c-city">City</label>
          <input type="text" id="c-city" className="data-input" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="c-postcode">Post Code</label>
          <input type="text" id="c-postcode" className="data-input" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="c-country">Country</label>
          <input type="text" id="c-country" className="data-input" />
        </div>
      </div>
    </section>
  );
};

export default Recipient;
