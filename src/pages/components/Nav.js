import React, { useContext, useEffect } from 'react'
import Web3context from '../../contexts/Web3context.js'
import Themecontext from '../../contexts/ThemeContext.js'

import { Link } from 'react-router-dom';

function Nav() {

  const web3context = useContext(Web3context)
  let {getWeb3, logoutWeb3, loginWeb3, trimAdd} = web3context;
  const themecontext = useContext(Themecontext)
  let {isDark, toggleTheme} = themecontext;

  useEffect(()=>{

  }, [])

  return (
    <>
      <nav className={isDark === true? "navbar navbar-expand-md bg-dark navbar-dark" : "navbar navbar-expand-md navbar-light"} >
        <div className={"container-fluid"}>
          <div className={"navbar-brand"} href="#">Web3 Boilerplate</div>
          <button className={"navbar-toggler"} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className={"navbar-toggler-icon"}></span>
          </button>
          <div className={"collapse navbar-collapse"} id="navbarTogglerDemo02">
            <ul className={"navbar-nav mr-auto mb-2 mb-lg-0"}>
              <li className={"nav-item"}>
                <Link className={"nav-link active"} to="/">
                  Home
                </Link>
              </li>
              <li className={"nav-item"}>
                <Link className={"nav-link"} to="/about">
                  About
                </Link>
              </li>

            </ul>

            <div className={"d-flex"}>
              <div className={"btn-group"} role="group">

                  {getWeb3 !== undefined
                    ?
                      <div className={"btn-group"} role="group">
                        <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                          My Account
                        </button>
                        <ul className={"dropdown-menu"} aria-labelledby="btnGroupDrop1">
                            <li className={"dropdown-item"}> {trimAdd(getWeb3.currentProvider.selectedAddress)}</li>
                            <li className={"dropdown-item"} onClick={logoutWeb3} >Logout</li>
                        </ul>
                      </div>
                    :
                      <button className={"btn btn-primary"} onClick={loginWeb3} ><i className={"fa fa-sign-in"}></i> Login</button>
                  }
                  <button className={"btn btn-primary"} onClick={toggleTheme} ><i className={isDark === true? "fa fa-moon-o" : "fa fa-sun-o"}></i></button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
