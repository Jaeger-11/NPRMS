import { Link, useNavigate } from "react-router-dom";
import { DashboardIcon, ReportIcon } from "./NavIcons";
import { navItem } from "../types/interfaces";
const navcontents = [
  {
    name: "dashboard",
    path: "/",
    icon: <DashboardIcon/>,
  },
  {
    name: "reports",
    path: "/reports",
    icon: <ReportIcon/>,
  },
  {
    name: "incidents",
    path: "/incidents",
    icon: <DashboardIcon/>,
  },
  {
    name: "cases",
    path: "/cases",
    icon: <DashboardIcon/>,
  },
]
const navcontents2 = [
  {
    name: "wanted",
    path: "/wanted",
    icon: <DashboardIcon/>,
  },
  {
    name: "missing",
    path: "/missing",
    icon: <ReportIcon/>,
  },
  {
    name: "compliants",
    path: "/compliants",
    icon: <DashboardIcon/>,
  },
  {
    name: "cases",
    path: "/cases",
    icon: <DashboardIcon/>,
  },
]

const Sidebar = () => {
  // const { pathname } = useNavigate()
  return (
    <aside className="py-4 h-svh min-w-48 text-lg bg-dark text-white">
      <div className="m-4 space-y-2">
        <h2 className="">NPRMS</h2>
        <section className="border-customgreen border rounded-md p-2 flex justify-between">
          <h4>Akinwale John</h4>
          <p>SP</p>
        </section>
      </div>
      <section className="text-[#b3b9c6] p-4 flex flex-col gap-3 border-t-[0.2px] border-white border-opacity-45">
        {navcontents.map(({name, path, icon}:navItem) => {
          return (
            <Link to={path} className="flex gap-2 items-center nav-content">
              {icon}
              <p className="capitalize">{name}</p>
            </Link>
          )
        })}
      </section>
      <section className="text-[#b3b9c6] p-4 flex flex-col gap-3 border-t-[0.2px] border-white border-opacity-45">
        {navcontents2.map(({name, path, icon}:navItem) => {
          return (
            <Link to={path} className="flex gap-2 items-center nav-content">
              {icon}
              <p className="capitalize">{name}</p>
            </Link>
          )
        })}
      </section>
      <div className="text-[#b3b9c6] p-4 flex flex-col justify-right gap-3 border-t-[0.2px] border-white border-opacity-45">
        <p className="">LogOut</p>
      </div>
    </aside>
  )
}

export default Sidebar