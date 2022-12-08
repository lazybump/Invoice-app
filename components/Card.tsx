import { BsCircleFill } from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi";

const Card = () => {
  return (
    <div className="p-6 rounded-lg bg-lighter-navy md:h-28">
      <div className="grid items-center grid-cols-2 grid-rows-2 md:justify-items-center md:grid-cols-5 md:grid-rows-1">
        <h4 className="self-start font-bold md:self-auto">
          <span className="font-bold text-darker-grey">#</span>RT3080
        </h4>
        <span className="self-start text-sm md:text-base md:self-auto justify-self-end text-lighter-grey md:col-start-3">
          Jensen Huang
        </span>
        <span className="self-end text-sm md:text-base md:self-auto text-lighter-grey second md:col-start-2 md:row-start-1">
          Due 19 Aug 2021
        </span>
        <h3 className="self-end col-start-1 text-xl font-bold md:self-auto md:col-start-4">
          £1,800.90
        </h3>
        <div className="flex items-center justify-center w-3/4 col-start-2 py-2 space-x-2 rounded-lg bg-paid-transparent justify-self-end md:col-start-5">
          <BsCircleFill className="fill-paid" size={9} />
          <span className="font-semibold text-paid">Paid</span>
        </div>
      </div>
      <HiChevronRight size={20} className="text-darker-purple" />
    </div>
  );
};

export default Card;
