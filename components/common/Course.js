import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faFile, faClipboardQuestion, faF } from '@fortawesome/free-solid-svg-icons';

export default function Course(props) {
	return (
		// TODO: everything :)
		<section className="card bg-primary shadow-sm">
			<div className=" card-body text-center items-center text-primary-content w-80 h-80">
				<i className="text-6xl">
					{/* !!! This will be an image but for now using an icon to illustrate */}
					<FontAwesomeIcon icon={faImage} size="2x" />
				</i>
				<h2 className=" card-title mt-5">{props.Name}</h2>
				<p className="">{props.Description}</p>
				<div className="flex flex-row gap-6">
					<a className="text-3xl">
						{/* INFO: Link to flashCards */}
						<FontAwesomeIcon icon={faFile} className="rotate-90" />
					</a>
					<a href="\quiz\quiz" className="text-3xl">
						{/* INFO: Link to flashCards */}
						<FontAwesomeIcon icon={faClipboardQuestion} />
					</a>
				</div>
			</div>
		</section>
	);
}
