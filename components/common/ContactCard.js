import Link from "next/link";
import Image from "next/image";

export default function ContactCard(props) {
  return (
    <section className="card w-64 bg-primary shadow-sm">
      <div className="card-body items-center text-center text-primary-content">
        <i className="text-6xl">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <Image src={props.img} alt="avatar_image" layout='fill' />
            </div>
          </div>
        </i>
        <Link className="link" href={props.link}>
          <h2 className="card-title">{props.Name}</h2>
        </Link>
      </div>
    </section>
  );
}
