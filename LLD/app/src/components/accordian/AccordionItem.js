const AccordionItem = ({ title, body, isOpen, setIsOpen }) => {
  return (
    <div className="border border-black ">
      <div
        className="font-bold p-2 bg-slate-200 flex justify-between cursor-pointer"
        onClick={() => {
          // Here setIsOpen is a function that toggles the value of isOpen and it also calls the function that is passed from the parent component
          // The function passed from the parent component is responsible for setting the openIndex state
          // So, here setIsOpen does two things: it toggles the value of isOpen and it also sets the openIndex state
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        <span>{title}</span>
        {isOpen ? <span>⬇️</span> : <span>⬆️</span>}   
      </div>
      {isOpen && <div className="p-2">{body}</div>}
    </div>
  );
};
export default AccordionItem;
