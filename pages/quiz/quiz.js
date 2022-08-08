import SidePanel from "../../components/common/SidePanel";

export default function Quiz() {
    return (
        <div className="flex w-full">
            <SidePanel>
                <h2 className=" card-title">
                    Java Course
                </h2>
                <p>
                    Quiz 11
                </p>
            </SidePanel>
            <main className=" w-full">
                QuizViewHere
            </main>
        </div>
    );
}