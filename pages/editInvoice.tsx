import Form from "../components/Form";

interface Props {
  isOpen: boolean;
}

const editInvoice = ({ isOpen }: Props) => {
  return (
    <div>
      <Form isOpen={isOpen} />
    </div>
  );
};

export default editInvoice;
