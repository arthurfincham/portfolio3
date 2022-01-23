import { NavLink } from 'react-router-dom';

export default function NavLinks({ className }) {
  return (
    <div className={className}>
      <NavLink to="/">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/CV">CV</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}
