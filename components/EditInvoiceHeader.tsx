import PaymentStatus from "./PaymentStatus";

const EditInvoiceHeader = () => {
  return (
    <header className="flex justify-between p-6 mt-6 rounded-lg bg-lighter-navy">
      <div className="flex items-center">
        <span className="mr-4 text-sm text-darker-grey">Status</span>
        <PaymentStatus status="paid" />
      </div>
      <div>
        <button className="mr-2 px-5 py-2 text-sm font-bold bg-[#282944] rounded-3xl">
          Edit
        </button>
        <button className="px-5 py-2 text-sm font-bold bg-red-500 rounded-full">
          Delete
        </button>
      </div>
    </header>
  );
};

export default EditInvoiceHeader;
