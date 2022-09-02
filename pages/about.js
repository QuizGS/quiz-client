import ContactCard from "@/components/common/ContactCard";

export default function About() {
  return (
    <main className="main-content ">
      <div className="card h-full w-full items-center bg-base-200 shadow">
        <div className="flex h-full max-w-4xl flex-col items-center justify-around p-8 text-center">
          <section className="flex flex-col items-center gap-8">
            <h1 className="card-title text-4xl font-bold">About QuizSpark</h1>
            <p className=" text-xl indent-2">
              QuizSpark contains all multiple choices questions from the
              GenSpark Java fullstack curriculum. It is designed to help
              GenSpark students to review key Java concepts in a user-friendly
              UI. Questions are sorted by topics and by weeks. There is also a
              flashcard version available.
            </p>
          </section>

          <section className="flex flex-col items-center gap-4">
            <h1 className=" card-title text-4xl font-bold">The Team</h1>
            {/* TODO: contact card needs props to pass to to show each person and this should be a forloop kinda thing*/}
            <div className="flex justify-evenly gap-8">
              <ContactCard
                Name="John O'Rourke"
                img="https://avatars.githubusercontent.com/u/34101601?v=4"
                link="https://github.com/johnoro"
              />
              <ContactCard
                Name="Chris Toph"
                img="https://avatars.githubusercontent.com/u/36116606?v=4"
                link="https://github.com/TophC7"
              />
              <ContactCard
                Name="Abby Xie"
                img="https://avatars.githubusercontent.com/u/60021932?v=4"
                link="https://github.com/zzbbcsd"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
