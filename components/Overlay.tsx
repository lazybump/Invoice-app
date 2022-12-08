interface Props {
  isOpen: boolean;
}

const Overlay = ({ isOpen }: Props) => {
  return (
    <div
      className={`bg-black absolute inset-0 z-10 pointer-events-none transition-opacity duration-200 ${
        isOpen ? "opacity-50" : "opacity-0"
      }
      `}
    />
  );
};

export default Overlay;
