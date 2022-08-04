import NavBar from "./Navbar.js";
import SidePanel from "./SidePanel.js";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row w-screen">
      <NavBar />

      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;
