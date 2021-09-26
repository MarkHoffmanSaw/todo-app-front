const Header = ({ btnTitle, onToggle }) => {
  return (
    <header>
      <h1>Current tasks list</h1>
      <button className="btn btn__form" onClick={onToggle}>
        {btnTitle}
      </button>
    </header>
  );
};

Header.defaultProps = {
  btnTitle: String,
};

export default Header;
