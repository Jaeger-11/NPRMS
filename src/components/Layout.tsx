import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex h-svh overflow-hidden">
      <aside className="min-w-52">
        <Sidebar/>
      </aside>
      <div className="flex-1 flex h-svh flex-col">
        <Header/>
        <div className="flex-1"><Outlet/></div>
      </div>
    </div>
  )
}

export default Layout