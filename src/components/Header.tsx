import { useLocation } from "react-router-dom"

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className="p-3 border-b">
        <h3 className="font-semibold text-lg uppercase">{pathname.slice(1)}</h3>
    </div>
  )
}

export default Header;