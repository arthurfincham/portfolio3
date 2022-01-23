import { NavLink } from 'react-router-dom';

export default function NavLinks({ className }) {
  return (
    <div className={className}>
      <NavLink to="/">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/Education">Education</NavLink>
      <NavLink to="/Experience">Experience</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
    </div>
  );
}
