import "./header.scss";

const Header = ({ children }) => {
  return (
    <header className="kanban__header">
      <h1>Kanban</h1>
      {children}
    </header>
  );
};

export default Header;
