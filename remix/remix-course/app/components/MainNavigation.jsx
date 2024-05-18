import { NavLink } from "@remix-run/react";

const MainNavigation = () => {
  return (
    <nav id="main-navigation">
      <ul>
        <li className="nav-item">
          <NavLink to={'/'}>Home</NavLink>
          {/* navlink adds a extra feature to 
            normal link tag that is the active
            css style to link that is currently
            active is it is added in css
          */}
        </li>
        <li className="nav-item">
          <NavLink to={'/notes'}>My Notes</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation;
