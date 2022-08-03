import SidePanel from "../components/common/SidePanel";
import WelcomePanel from "../components/common/WelcomePanel";

export default function Home() {

    //hiding elements from layout we dont want
    // document.getElementById('coursesIcon').style.display = 'none';
    // document.getElementById('courseHeader').style.display = 'none';


    return (
        <div className="flex">
            <WelcomePanel />
            <main className=' w-full'>
                <p>Hello</p>
            </main>
        </div>
    );
}