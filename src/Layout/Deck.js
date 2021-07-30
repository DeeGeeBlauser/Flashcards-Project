import React from "react";
import { Route, Link, useHistory } from "react-router-dom";

function Deck() {
  const history = useHistory();
  return (
<>
<nav ariaLabel="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">
              <span class="oi oi-home"></span>Home
            </Link>
          </li>
          <li class="breadcrumb-item active" ariaCurrent="page">
            INSERT DECK NAME
          </li>
        </ol>
      </nav>
</>
  )
}

export default Deck