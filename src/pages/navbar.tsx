import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex sticky top-0 shadow-lg items-center justify-between flex-wrap bg-[#eceff4] p-2">
      <div className="flex items-center flex-shrink-0 text-[#4c566a] mr-6 mx-10">
        <span className="font-bold text-xl tracking-tight ">aidanhopper.dev</span>
      </div>
      <div className="justify-end flex-grow flex items-center w-auto">
        <div className="">
          <Link href="#" className="inline-block text-[#4c566a] px-4 py-3 leading-none hover:bg-[#e5e9f0] rounded">Home</Link>
          <Link href="#" className="inline-block text-[#4c566a] px-4 py-3 leading-none hover:bg-[#e5e9f0] rounded">Projects</Link>
          <Link href="#" className="inline-block text-[#4c566a] px-4 py-3 leading-none hover:bg-[#e5e9f0] rounded">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
