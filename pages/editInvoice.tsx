import { HiChevronLeft } from "react-icons/hi";
import EditInvoiceHeader from "../components/EditInvoiceHeader";

const EditInvoice = () => {
  return (
    <div className="px-12 py-8 mx-auto mt-16 md:w-3/4 md:min-w-[750px] max-w-[1000px]">
      <button className="flex items-center">
        <HiChevronLeft className="text-darker-purple" />
        <span className="ml-4 text-sm text-lighter-grey">Go back</span>
      </button>

      <EditInvoiceHeader />

      <section className="px-6 py-4 mt-4 rounded-lg bg-lighter-navy">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="font-bold">
              <span className="text-darker-grey">#</span>RT3080
            </p>
            <span className="text-sm text-darker-grey">Re-branding</span>
          </div>
          <div className="flex flex-col text-sm text-end text-darker-grey">
            <p>
              19 Union Terrace
              <br />
              London
              <br />
              E1 3EZ
              <br />
              United Kingdom
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 mt-6">
          <div>
            <h2 className="text-sm text-darker-grey">Invoice Date</h2>
            <span className="font-bold">18 Aug 2021</span>
          </div>

          <div className="row-span-2">
            <h2 className="text-sm text-darker-grey">Bill To</h2>
            <span className="font-bold">Jensen Huang</span>
            <p className="text-sm text-darker-grey">
              106 Kendall Street
              <br />
              Sharrington
              <br />
              NR24 5WQ
              <br />
              United Kingdom
            </p>
          </div>

          <div>
            <h2 className="text-sm text-darker-grey">Sent to</h2>
            <span className="font-bold">jensenh@mail.com</span>
          </div>

          <div className="self-end">
            <h2 className="text-sm text-darker-grey">Payment Due</h2>
            <span className="font-bold">19 Aug 2021</span>
          </div>
        </div>

        <div className="px-8 rounded-t-lg py-6 text-sm mt-16 bg-[#282944] space-y-4">
          <div className="grid grid-cols-4 text-darker-grey">
            <h3>Item Name</h3>
            <h3 className="justify-self-center">QTY.</h3>
            <h3>Price</h3>
            <h3 className="justify-self-end">Total</h3>
          </div>
          <div className="grid grid-cols-4 font-bold">
            <p>Brand Guidelines</p>
            <p className="justify-self-center">1</p>
            <p>£1,800.9</p>
            <p className="justify-self-end">£1,800.9</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-8 py-6 bg-black rounded-b-lg">
          <span className="text-sm font-bold">Amount Due</span>
          <span className="text-xl font-bold">£1,800.9</span>
        </div>
      </section>
    </div>
  );
};

export default EditInvoice;
