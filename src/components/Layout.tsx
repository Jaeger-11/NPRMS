import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="grid grid-cols-5">
      <aside className="col-span-1">
        <Sidebar/>
      </aside>
      <main className="col-span-4">
        <Header/>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout