import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="flex justify-end text-3xl p-7 bg-gray-400 text-white gap-6">
      <NavLink to="" className={({ isActive }) => (isActive ? "text-yellow-400" : "")}>
        Home
      </NavLink>
      <NavLink to="create-emp" className={({ isActive }) => (isActive ? "text-yellow-400" : "")}>
        CreateEmp
      </NavLink>
      <NavLink to="list" className={({ isActive }) => (isActive ? "text-yellow-400" : "")}>
       List Of Employees
      </NavLink>
    </nav>
  );
}

export default Header;