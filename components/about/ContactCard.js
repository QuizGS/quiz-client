import Link from "next/link";
import Image from "next/image";

export default function ContactCard(props) {
  return (
    <section className="contact-card card w-64 bg-primary shadow-sm">
      <Link className="link" href={props.link}>
        <div className="card-body items-center text-center text-primary-content">
          <i className="text-6xl">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <Image src={props.img} alt="avatar_image" layout="fill" />
              </div>
            </div>
          </i>
          <h2 className="card-title">{props.name}</h2>
        </div>
      </Link>
    </section>
  );
}
