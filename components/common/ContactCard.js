import Link from "next/link";

export default function ContactCard(props) {
  return (
    <section className="card w-64 bg-primary shadow-sm">
      <div className=" card-body items-center text-center text-primary-content">
        <i className="text-6xl">
          <div class="avatar">
            <div class="w-24 rounded-full">
              <img src={props.img} alt="avatar_image" />
            </div>
          </div>
        </i>
        <a class="link" href={props.link}>
          <h2 className=" card-title">{props.Name}</h2>
        </a>
      </div>
    </section>
  );
}
