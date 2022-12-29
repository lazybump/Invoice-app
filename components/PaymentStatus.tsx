import { BsCircleFill } from "react-icons/bs";

interface Props {
  status: "paid" | "pending" | "draft";
}

const PaymentStatus = ({ status }: Props) => (
  <div
    className={`flex items-center justify-center h-10 col-start-2 py-2 space-x-2 rounded-lg w-28 bg-${status}-transparent justify-self-end md:col-start-5`}
  >
    <BsCircleFill className={`fill-${status}`} size={9} />
    <span className={`font-semibold text-${status}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  </div>
);

export default PaymentStatus;
