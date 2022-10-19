import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";

function Navigation() {
  const { locale } = useContext(LocaleContext);
  return (
    <nav className='navigation'>
      <ul>
        <li>
          <Link to='/archives'>
            {locale === "id" ? "Terarsip" : "Archived"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
