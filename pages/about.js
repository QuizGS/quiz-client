import ContactCard from "@/components/common/ContactCard";

export default function About() {
  return (
    <main className="main-content ">
      <div className="card h-full w-full items-center bg-base-200 shadow">
        <div className="flex h-full max-w-4xl flex-col items-center justify-around p-8 text-center">
          <section className="flex flex-col items-center gap-8">
            <h1 className="card-title text-4xl font-bold">About QuizSpark</h1>
            <p className=" text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              tincidunt mauris at arcu eleifend volutpat. Proin placerat
              condimentum orci ac tincidunt. Phasellus imperdiet dolor auctor
              aliquet vestibulum. Aenean venenatis vitae lectus ornare feugiat.
              Fusce sed est eros. Aliquam posuere odio lacinia purus cursus
              dictum. Praesent pellentesque feugiat erat in varius. Fusce non
              nunc condimentum, viverra neque vitae, accumsan leo. Praesent
              felis eros, finibus a nunc nec, faucibus eleifend mi.
            </p>
          </section>

          <section className="flex flex-col items-center gap-8">
            <h1 className=" card-title text-4xl font-bold">The Team</h1>
            {/* TODO: contact card needs props to pass to to show each person and this should be a forloop kinda thing*/}
            <div className="flex flex-row flex-wrap justify-center gap-8">
              <ContactCard
                Name="Person Name"
                Bio="Frogs are very cool 🐸🐸🐸"
              />
              <ContactCard
                Name="Person Name"
                Bio="Frogs are very cool 🐸🐸🐸"
              />
              <ContactCard
                Name="Person Name"
                Bio="Frogs are very cool 🐸🐸🐸"
              />
              <ContactCard
                Name="Person Name"
                Bio="Frogs are very cool 🐸🐸🐸"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
