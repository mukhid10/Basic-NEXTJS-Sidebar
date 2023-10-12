import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="w-full bg-blue-300">
        <Navbar/>
      </div>
    </div>
  )
}
