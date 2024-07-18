import data from "../data.json";
const Officers = () => {
  return (
    <main className="flex flex-col gap-4">
      <section>
        <input type="text" placeholder="Search"/>
        search  and filters
      </section>
      <div className="border rounded-md flex-1 max-h-[80svh] overflow-y-scroll bg-gray-100 p-2">
        <table className="w-full text-left officers-list">
          <tr className="border-b text-gray-500">
            <th>No</th>
            <th>Force No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Branch</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
          {data.map((item, index) => {
            return (
              <tr className="border-b cursor-pointer" key={index} >
              <td>{index + 1}</td>
              <td className="text-darkblue font-medium">{item.forceNo}</td>
              <td >{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.gender}</td>
              <td>{item.PPA.station}</td>
              <td>{item.contact.phoneNumber}</td>
              <td>{item.contact.email}</td>
            </tr>
            )
          })}
          {data.map((item, index) => {
            return (
              <tr className="border-b cursor-pointer" key={index} >
              <td>{index + 1}</td>
              <td className="text-darkblue font-medium">{item.forceNo}</td>
              <td >{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.gender}</td>
              <td>{item.PPA.station}</td>
              <td>{item.contact.phoneNumber}</td>
              <td>{item.contact.email}</td>
            </tr>
            )
          })}
        </table>
      </div>
      
    </main>
  )
}

export default Officers