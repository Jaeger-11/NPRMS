import logo from "../assets/police_logo.png";
import bgImage from "../assets/police_auth_bg.webp"

const Authentication = () => {
  return (
    <div className="flex flex-col justify-center items-center h-svh auth-cont">
      <img src={bgImage} alt="" className="absolute top-0 left-0 z-[-2] w-full h-full" />
      <section className="bg-white p-4 py-6 rounded-md min-w-80">
        <img src={logo} alt="police logo" className="w-12 mx-auto" />
        <h3 className="text-center text-lg">Nigeria Police Records Management System <br /><span className="font-bold">NPRMS</span></h3>
        <section className="space-y-2 flex flex-col mt-4">
            <div>
              <input type="text" name="policeID" id="policeID" placeholder="Identification Number"/>
            </div>
            <div>
              <input type="text" name="password" placeholder="Password" />
            </div>
            <button className="w-max bg-lightblue">Login</button>
        </section>
      </section>
    </div>
  )
}

export default Authentication;