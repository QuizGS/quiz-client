import Question from '../../components/common/Question';
import SidePanel from '../../components/common/SidePanel';

export default function Quiz() {
	return (
		<div className="flex w-full">
			<SidePanel>
				<h2 className=" card-title">Java Course</h2>
				<p>Quiz 11</p>
			</SidePanel>
			<main className=" main-content">
				<Question />
				<Question />
				<Question />
			</main>
		</div>
	);
}
