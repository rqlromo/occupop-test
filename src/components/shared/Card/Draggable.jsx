const Draggable = ({ children, info }) => {
  const onDragStart = (e, info) => {
    const dataToTransfer = JSON.stringify(info);

    e.dataTransfer.setData("dataToTransfer", dataToTransfer);
  };

  return (
    <div onDragStart={(e) => onDragStart(e, info)} draggable>
      {children}
    </div>
  );
};

export default Draggable;
