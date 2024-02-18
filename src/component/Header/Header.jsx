import Search from "../UI/Search/Search";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <a className="logo" href="/">
        Adventure Forecast
      </a>
      <Search />
    </header>
  );
};

export default Header;
