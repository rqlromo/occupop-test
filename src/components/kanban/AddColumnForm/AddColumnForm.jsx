import { useRef } from "react";
import "./addColumnForm.scss";

const AddColumnForm = ({ addColumn }) => {
  const inputRef = useRef();

  const handleAddColumnClick = () => {
    if (inputRef.current.value !== undefined && inputRef.current.value !== "") {
      addColumn(inputRef.current.value);
    }
  };

  return (
    <div>
      <input className="add-column-form__input" type="text" ref={inputRef} />
      <button
        className="add-column-form__button"
        onClick={handleAddColumnClick}
      >
        Add column
      </button>
    </div>
  );
};

export default AddColumnForm;
