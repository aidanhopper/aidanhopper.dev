import Card from "./card"

export default function Portfolio() {
  return (
    <div className="absolute bg-[#d8dee9] h-screen w-screen text-[#4c566a] flex items-center justify-center ">
      <div className="grid grid-rows-3 items-center justify-center">
        <h1 className="row-span-full items-center justify-center text-6xl font-bold">
          My projects.
        </h1>
        <div className="grid grid-cols-3 gap-8 text-[#4c566a]">
          <Card title="Chess"
            description="Chess game written in Python that uses Pygame for a graphical front end."
            github="https://github.com/aidanhopper/chess" />
          <Card title="Kahoot clone"
            description="Created a clone of kahoot for the crimson code 2023 hackathon."
            github="https://github.com/aidanhopper/chess" />
          <Card title="Chess"
            description="Chess game written in Python that uses Pygame for a graphical front end."
            github="https://github.com/aidanhopper/chess" />
          <Card title="Kahoot clone"
            description="Created a clone of kahoot for the crimson code 2023 hackathon."
            github="https://github.com/aidanhopper/chess" />
        </div>
        <a href="#" className="flex items-center justify-center text-xl mt-8">See more.</a>
      </div>
    </div>
  )
}
