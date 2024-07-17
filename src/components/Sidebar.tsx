import { Link, useLocation } from "react-router-dom";
import { CaseIcon, ComplaintIcon, DashboardIcon, IncidentIcon, MissingIcon, OfficerIcon, ReportIcon, WantedIcon } from "./NavIcons";
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
    icon: <IncidentIcon/>,
  },
  {
    name: "cases",
    path: "/cases",
    icon: <CaseIcon/>,
  },
]
const navcontents2 = [
  {
    name: "wanted",
    path: "/wanted",
    icon: <WantedIcon/>,
  },
  {
    name: "missing",
    path: "/missing",
    icon: <MissingIcon/>,
  },
  {
    name: "complaint",
    path: "/complaint",
    icon: <ComplaintIcon/>,
  },
  {
    name: "officers",
    path: "/officers",
    icon: <OfficerIcon/>,
  },
]

const Sidebar = () => {
  const pathname = useLocation().pathname;
  console.log(pathname);
  return (
    <aside className="py-4 h-svh min-w-48 text-lg bg-dark text-white sidebar">
      <div className="m-4 mt-0 space-y-2">
        <h2 className="">NPRMS</h2>
        <section className="border-lightblue border rounded-md p-2 flex justify-between">
          <h4>Akinwale John</h4>
          <p>SP</p>
        </section>
      </div>
      <section className="text-[#b3b9c6] p-4 flex flex-col gap-1 border-t-[0.2px] border-white border-opacity-45">
        {navcontents.map(({name, path, icon}:navItem) => {
          return (
            <Link to={path} className={`${pathname === path ? ' bg-lightblue text-white rounded-md svgactive' : 'nav-content'} px-2 py-1 flex gap-2 items-center`}>
              {icon}
              <p className="capitalize">{name}</p>
            </Link>
          )
        })}
      </section>
      <section className="text-[#b3b9c6] p-4 flex flex-col gap-1 border-t-[0.2px] border-white border-opacity-45">
        {navcontents2.map(({name, path, icon}:navItem) => {
          return (
            <Link to={path} className={`${pathname === path ? ' bg-lightblue text-white rounded-md svgactive' : 'nav-content'} px-2 py-1 flex gap-2 items-center`}>
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