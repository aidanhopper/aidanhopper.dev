export default function Landing() {
  return (
    <div className="flex h-screen w-screen items-center text-[#4c566a] justify-center -my-20">
      <div className="grid grid-cols-2">
        <h1 className="text-8xl font-bold -mx-20">
          I make <br />
          cool stuff.
        </h1>
      </div>
      <div className="grid grid-cols-2">
        <ul>
          <li><a href="#" className="text-2xl text-[#4c566a]">Github</a></li>
          <li><a href="#" className="text-2xl text-[#4c566a]">LinkedIn</a></li>
          <li><a href="#" className="text-2xl text-[#4c566a]">Discord</a></li>
        </ul>
      </div>
    </div>
  )
}
