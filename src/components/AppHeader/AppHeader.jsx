import "./AppHeader.scss";
import appLogo from "../../media/images/logo.svg";

export default function AppHeader() {
  return (
    <header className="header">
      <img src={appLogo} className="header__logo" alt="Splitter" />
    </header>
  );
}
