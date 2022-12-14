import { HiChevronRight } from "react-icons/hi";
import PaymentStatus from "./PaymentStatus";

const Card = () => {
  return (
    <article className="p-6 rounded-lg bg-lighter-navy md:h-24 md:flex md:items-center md:justify-between">
      <div className="grid items-center w-full grid-cols-2 grid-rows-2 gap-4 md:grid-cols-5 md:grid-rows-1">
        <h4 className="self-start font-bold md:self-auto">
          <span className="font-bold text-darker-grey">#</span>RT3080
        </h4>
        <span className="self-start text-sm md:text-base md:self-auto justify-self-end md:justify-self-center text-lighter-grey md:col-start-3">
          Jensen Huang
        </span>
        <span className="self-end text-sm md:text-base md:self-auto text-lighter-grey second md:col-start-2 md:row-start-1">
          Due 19 Aug 2021
        </span>
        <h3 className="self-end col-start-1 text-xl font-bold md:self-auto md:col-start-4 md:justify-self-center">
          £1,800.90
        </h3>
        <PaymentStatus status="pending" />
      </div>
      <HiChevronRight
        size={20}
        className="hidden ml-4 text-darker-purple md:block"
      />
    </article>
  );
};

export default Card;
