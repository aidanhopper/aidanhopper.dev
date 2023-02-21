export default function Landing() {
  return (
    <div className="flex h-screen w-screen items-center text-[#4c566a] justify-center">
      <div className="mb-20">
        <div className="grid grid-cols-2">
          <h1 className="text-8xl font-bold">
            I make <br />
            cool stuff.
          </h1>
          <div className="flex items-center justify-center">
            <div className="grid grid-rows-3">
              <a href="#" className="text-2xl text-[#4c566a]">Github</a>
              <a href="#" className="text-2xl text-[#4c566a]">LinkedIn</a>
              <a href="#" className="text-2xl text-[#4c566a]">Discord</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
