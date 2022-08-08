import NavBar from "./Navbar.js";
import SidePanel from "./SidePanel.js";
const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div class="container">
        <SidePanel />
        {children}
      </div>
    </div>
  );
};

export default Layout;
