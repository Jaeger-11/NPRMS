import Sidebar from "../components/Sidebar"

const Dashboard = () => {
  return (
    <div className="grid grid-cols-5">
      <aside className="col-span-1">
        <Sidebar/>
      </aside>
      <main className="col-span-4">

      </main>
    </div>
  )
}

export default Dashboard