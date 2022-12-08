interface Props {
  isOpen: boolean;
}

const Form = ({ isOpen }: Props) => {
  return (
    <aside
      className={`hidden lg:block z-20 bg-darker-navy relative max-w-[500px] h-screen border-2 border-red-600 left-24 transition-all duration-500 ${
        isOpen ? "" : "-translate-x-full"
      }`}
    >
      {/* 
        className={`
    bg-white fixed right-0 top-0 z-20 h-screen w-[500px] px-4 py-5 transition-all duration-500 
    ${isOpen ? "" : "translate-x-full"}
  `}
        */}
      <h1>Edit #XM9141</h1>
    </aside>
  );
};

export default Form;
