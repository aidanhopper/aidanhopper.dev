import Card from "./card"

export default function Portfolio() {
  return (
    <div className="absolute bg-[#d8dee9] h-screen w-screen text-[#4c566a] flex items-center justify-center">
      <div className="grid grid-rows-3">
        <h1 className="row-span-full text-center my-10  2xl:my-20 text-6xl font-bold">
          My projects.
        </h1>
        <div className="grid grid-cols-3 gap-8 text-[#4c566a]">
          <Card title="Chess"
            description="Chess game written in Python that uses Pygame for a graphical front end."
            github="https://github.com/aidanhopper/chess" />
          <Card title="Wazzoot"
            description="Created a clone of kahoot for the crimson code 2023 hackathon."
            github="https://github.com/aidanhopper/crimsoncode2023" />
          <Card title="Linux Install Script"
            description="Created a POSIX compliant shell script to install my preferred linux development setup using git."
            github="https://github.com/aidanhopper/dotfiles" />
          <div className="hidden 2xl:block">
            <Card title="Sudoku Solver"
              description="Created a sudoku solver in C, which solves any sudoku puzzle iteratively given theres exists a solution."
              github="https://github.com/aidanhopper/sudoku_solver" />
          </div>
        </div>
        <a href="#" className="flex items-center justify-center text-xl mt-8">See more.</a>
      </div>
    </div>
  )
}
