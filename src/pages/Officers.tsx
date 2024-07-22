import data from "../data.json";
const Officers = () => {
  return (
    <main className="flex flex-col gap-4">
      <section className="flex justify-between">
        <div className="flex gap-2 p-1 px-2 items-center border rounded-md w-max">
          <svg className="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          <input type="text" 
          placeholder="Search" 
          className="bg-transparent min-w-52 focus:outline-none"
          />
        </div>
        
        search  and filters
      </section>
      <div className="border rounded-md flex-1 max-h-[80svh] overflow-y-scroll bg-gray-50 p-2">
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