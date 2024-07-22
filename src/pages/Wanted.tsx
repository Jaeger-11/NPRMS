import profile from "../assets/character.png";
import {wantedData} from "../missing";

const Wanted = () => {
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
      
      <section className="border rounded-sm p-2 grid-cols-3 grid gap-2 bg-gray-50 flex-1 max-h-[80svh] overflow-y-scroll">
        {
          wantedData.map((item, index) => {
            return (
              <section key={index} className="flex gap-2 items-center border bg-white p-1 cursor-pointer">
                <div className="border w-[5rem]">
                  <img className="" src={item.profileUrl} alt="" />
                  {/* <img src={profile} className="w-full aspect-square object-cover object-center" alt="" /> */}
                </div>
                <article className="leading-tight flex-1">
                  <div className="flex justify-between">
                  <p className="text-gray-500">{item.caseId}</p>
                  {/* <div className={`capitalize py-1 px-2 border ${item.casetype === 'civil case' ? 'bg-green-100' : 'bg-blue-100'} `}>{item.casetype}</div> */}
                  </div>
                  
                  <h5 className="capitalize text-base font-medium">{item.firstName} {item.lastName}</h5>
                  <p>Charges: <span>{item.charges}</span></p>
                  {/* <p>Missing since: <span className="font-medium">{item.missingSince}</span> </p> */}
                </article>
              </section>
            )
          })
        }
        
      </section>
    </main>
  )
}

export default Wanted