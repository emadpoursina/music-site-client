import SearchInput from "./SearchInput";
import logo from "../assets/react.svg";

const TopBar = () => (
  <header className="w-full flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white">
    <div className="w-24 h-8 bg-gray-100 rounded flex items-center justify-center">
      Box
    </div>
    <div className="flex-1 flex justify-center">
      <SearchInput />
    </div>
    <div className="w-24 flex items-center justify-end">
      <img src={logo} alt="React Logo" className="h-8 w-auto" />
    </div>
  </header>
);

export default TopBar;
