import NavBar from "./navbar";
import SidePanel from "./SidePanel";


const Layout = ({ children }) => {

    return (

        <div className='flex flex-row w-screen'>

            <NavBar />

            <div className="w-full">
                {children}
            </div>

        </div>

    );

}

export default Layout;