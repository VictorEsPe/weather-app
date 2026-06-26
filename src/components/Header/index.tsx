import Logo from "../../assets/images/logo.svg";
import { UnitsDropdown } from "../UnitsDropdown";

export function Header() {
  return (
    <header className="flex items-center justify-between p-5 md:px-20 text-white">
      <img src={Logo} alt="Logo Weather Now" className="h-7 md:h-9 " />

      <UnitsDropdown />
    </header>
  );
}
