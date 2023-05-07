import "./AppHeader.scss";
import appLogo from "../../media/images/logo.svg";

export default function AppHeader() {
  return (
    <header className="header">
      <img src={appLogo} width={87} height={54} className="header__logo" alt="Splitter" />
    </header>
  );
}
