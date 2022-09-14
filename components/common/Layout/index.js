import NavBar from "./Navbar.js";

const Layout = ({ children }) => {
  return (
    <div className="flex w-screen flex-row overflow-hidden">
      <NavBar />

      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;