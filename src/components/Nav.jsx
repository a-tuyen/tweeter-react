import React from "react";

import './Nav.css';

export default function Nav () {

  return (

    <nav>
      <span>
        <span class="logo">tweeter</span>
        <button type="button" id="form-toggle-button"><span><span class="write1">Write</span> a new tweet</span></button>
      </span>
    </nav>

  )

}

