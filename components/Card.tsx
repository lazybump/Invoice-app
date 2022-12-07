import { BsCircleFill } from "react-icons/bs";

const Card = () => {
  return (
    <div className="grid items-center grid-cols-2 grid-rows-2 p-6 rounded-lg h-36 bg-lighter-navy">
      <h4 className="self-start font-semibold">
        <span className="font-bold text-darker-grey">#</span>RT3080
      </h4>
      <span className="self-start text-sm justify-self-end text-lighter-grey">
        Jensen Huang
      </span>
      <div>
        <span className="text-sm text-lighter-grey">Due 19 Aug 2021</span>
        <h3 className="text-xl font-bold">£1,800.90</h3>
      </div>
      <div className="flex items-center justify-center w-3/4 py-2 space-x-2 rounded-lg bg-paid-transparent justify-self-end">
        <BsCircleFill className="fill-paid" size={9} />
        <span className="font-semibold text-paid">Paid</span>
      </div>
    </div>
  );
};

export default Card;
