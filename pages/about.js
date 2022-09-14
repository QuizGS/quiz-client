import ContactCard from "@/components/about/ContactCard";

export default function About() {
  const getImgLink = (userId) =>
    `https://avatars.githubusercontent.com/u/${userId}?v=4`;
  const getGithubLink = (userName) => `https://github.com/${userName}`;
  const team = [
    {
      name: "John O'Rourke",
      userId: 34101601,
      userName: "johnoro",
    },
    {
      name: "Chris Toph",
      userId: 36116606,
      userName: "TophC7",
    },
    {
      name: "Abby Xie",
      userId: 60021932,
      userName: "zzbbcsd",
    },
  ];

  return (
    <main className="main-content">
      <div className="card h-full w-full items-center bg-base-200 shadow">
        <div className="flex h-full max-w-4xl flex-col items-center justify-around p-8 text-center">
          <section className="flex flex-col items-center gap-8">
            <h1 className="card-title text-4xl font-bold">About QuizSpark</h1>
            <p className="indent-2 text-xl">
              QuizSpark contains all multiple choices questions from the
              GenSpark Java fullstack curriculum. It is designed to help
              GenSpark students to review key Java concepts in a user-friendly
              UI. Questions are sorted by topics and by weeks. There is also a
              flashcard version available.
            </p>
          </section>

          <section className="flex flex-col items-center gap-4">
            <h1 className="card-title text-4xl font-bold">The Team</h1>
            <div className="flex justify-evenly gap-8">
              {team.map((member) => (
                <ContactCard
                  key={member.name}
                  name={member.name}
                  img={getImgLink(member.userId)}
                  link={getGithubLink(member.userName)}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
