import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-300 h-[60px] fr justify-end px-8">
      <div className="fr space-x-6 items-center">
        <NavLink to="/">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/Education">Education</NavLink>
        <NavLink to="/Experience">Experience</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </div>
    </nav>
  );
}
