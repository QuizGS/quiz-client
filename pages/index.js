
import WelcomePanel from "../components/common/WelcomePanel";
import Sparkers from "../public/images/sparkers.svg"

export default function Home() {

    //hiding elements from layout we dont want
    // document.getElementById('coursesIcon').style.display = 'none';
    // document.getElementById('courseHeader').style.display = 'none';


    return (
        <div className="flex">
            <WelcomePanel />
            <main className='flex w-full max-h-screen p-8 justify-end'>
                <Sparkers className="w-1/2" />
            </main>
        </div>
    );
}