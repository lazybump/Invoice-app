const ServiceInfo = () => {
  return (
    <section className="grid grid-cols-2 grid-rows-2 gap-4 mb-5">
      <div className="flex flex-col">
        <label htmlFor="date">Invoice Date</label>
        <input type="date" id="date" className="data-input" />
      </div>

      <div className="flex flex-col">
        <label htmlFor="payment-terms">Payment Terms</label>
        <select id="payment-terms" className="data-input">
          <option value="30">Net 30 Days</option>
          <option value="60">Net 60 Days</option>
          <option value="90">Net 90 Days</option>
        </select>
      </div>

      <div className="flex flex-col col-span-2">
        <label htmlFor="description">Project Description</label>
        <input type="text" id="description" className="data-input" />
      </div>
    </section>
  );
};

export default ServiceInfo;
