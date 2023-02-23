export default function Landing() {

  return (
    <div className="flex h-screen bg-opacity-70 bg-[url(../images/nvim_blur.png)] -my-5 bg-cover bg-center w-screen items-center text-[#d8dee9] justify-center">
      <div className="mb-20">
        <div className="grid grid-cols-2">
          <h1 className="text-8xl font-bold">
            I make <br />
            cool stuff :)
          </h1>
          <div className="flex items-center justify-center">
            <div className="grid grid-rows-3">
              <a href="https://github.com/aidanhopper" className="text-2xl text-[#d8dee9]">Github</a>
              <a href="https://linkedin.com/in/aidanhopper" className="text-2xl text-[#d8dee9]">LinkedIn</a>
              <a href="#" className="text-2xl text-[#d8dee9]">Discord</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
