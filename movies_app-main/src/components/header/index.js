import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarText
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Example(args) {
  return (
    <div>
      <Navbar
        {...args}
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <NavbarBrand href="/my-app">Movies Data Application</NavbarBrand>
        <NavbarText>
          <FontAwesomeIcon icon={faUser} style={{ paddingRight: "10px" }} />
          User Profile
        </NavbarText>
      </Navbar>
    </div>
  );
}

export default Example;
