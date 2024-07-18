import data from "../data.json";
const Officers = () => {
  return (
    <main className="flex flex-col gap-4">
      <section>
        <input type="text" placeholder="Search"/>
        search  and filters
      </section>
      <div className="border rounded-md flex-1 max-h-[80svh] overflow-y-scroll bg-gray-100 p-2">
        <table className="w-full text-left officers-list text-dark">
          <tr className="border-b text-white bg-gray-600">
            <th>No</th>
            <th>Force No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Rank</th>
            <th>Branch</th>
            <th>Phone Num.</th>
            <th>Email</th>
          </tr>
          {data.map((item, index) => {
            return (
              <tr className="border-b cursor-pointer" key={index} >
              <td>{index + 1}</td>
              <td className="text-customred font-medium">{item.forceNo}</td>
              <td className="text-lightblue">{item.firstName}</td>
              <td className="text-lightblue">{item.lastName}</td>
              <td>{item.gender}</td>
              <td>{item.currentRank}</td>
              <td>{item.PPA.station}</td>
              <td>{item.contact.phoneNumber}</td>
              <td className="text-lightblue">{item.contact.email}</td>
            </tr>
            )
          })}
        </table>
      </div>
      
    </main>
  )
}

export default Officers