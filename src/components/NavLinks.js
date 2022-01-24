import { NavLink } from 'react-router-dom';

export default function NavLinks({ className, handleClick }) {
  return (
    <div className={className} onClick={handleClick}>
      <NavLink activeclassname="active" className="text-lg NavLink font-a2" to="/">
        About
      </NavLink>

      <NavLink activeclassname="active" className="text-lg NavLink font-a2" to="/projects">
        Projects
      </NavLink>
      <NavLink activeclassname="active" className="text-lg NavLink font-a2" to="/CV">
        CV
      </NavLink>
      <NavLink activeclassname="active" className="text-lg NavLink font-a2" to="/contact">
        Contact
      </NavLink>
    </div>
  );
}
