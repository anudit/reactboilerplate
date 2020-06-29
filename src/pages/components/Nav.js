import React, { useContext, useEffect } from 'react'
import Web3context from '../../contexts/Web3context.js'
import Themecontext from '../../contexts/ThemeContext.js'

import { Link } from 'react-router-dom';

import {
  Alignment,
  Button,
  ButtonGroup,
  Navbar,
  Classes,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading
} from "@blueprintjs/core";


function Nav() {

  const web3context = useContext(Web3context)
  let {getWeb3, logoutWeb3, loginWeb3, trimAdd} = web3context;
  const themecontext = useContext(Themecontext)
  let {isDark, toggleTheme} = themecontext;

  useEffect(()=>{

  }, [])

  return (
    <>
      <Navbar className={isDark === true ? 'bp3-dark' :''}>
        <NavbarGroup>
          <NavbarHeading>Web3 Boilerplate</NavbarHeading>
          <NavbarDivider />
          <Link className={[Classes.BUTTON, Classes.MINIMAL].join(" ")} to="/">
            Home
          </Link>
          <Link className={[Classes.BUTTON, Classes.MINIMAL].join(" ")} to="/about">
            About
          </Link>
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <ButtonGroup>
            {getWeb3 !== undefined
              ?
                <>
                  <Button icon="tick-circle">Acc: {trimAdd(getWeb3.currentProvider.selectedAddress)}</Button>
                  <Button  onClick={logoutWeb3} icon="log-out" text="Log Out" />
                </>
              :
                <Button onClick={loginWeb3} icon="log-in" text="Log In" />
            }
            <Button icon={isDark===true ? 'flash':'moon'} onClick={toggleTheme}></Button>
          </ButtonGroup>
        </NavbarGroup>

      </Navbar>
    </>
  );
}

export default Nav;
