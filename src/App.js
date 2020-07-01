import React, { useState } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './pages/components/Nav';
import Home from './pages/Home';
import About from './pages/About';

import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Torus from "@toruslabs/torus-embed";

import Web3context from './contexts/Web3context.js';
import Themecontext from './contexts/ThemeContext.js'




function App() {

  const [getWeb3, setWeb3] = useState(undefined)

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          16110: "https://betav2.matic.network"
        }
      }
    },
    torus: {
      package: Torus,
      options: {
        networkParams: {
          host: "https://betav2.matic.network",
          chainId: 16110,
          networkId: 16110
        },
        config: {
          buildEnv: "development"
        }
      }
    }
  };

  const web3Modal = new Web3Modal({
    cacheProvider: false,
    theme: "dark",
    providerOptions
  });

  async function loginWeb3(){
    let provider = await web3Modal.connect()
    let w3 = new Web3(provider)
    setWeb3(w3)
    console.log(w3)
  }

  async function logoutWeb3(){
    web3Modal.clearCachedProvider();
    setWeb3(undefined)
  }

  function trimAdd(add = "0x00", l = 5){
    return String(add).slice(0,2) + String(add).slice(2,2+l) + "..." + String(add).slice(add.length-l,add.length)
  }

  const [isDark, setTheme] = useState(true)

  function toggleTheme () {
    setTheme(!isDark)
  }

  return (
    <Web3context.Provider value={{getWeb3, loginWeb3, logoutWeb3, trimAdd}}>
      <Themecontext.Provider value={{isDark, toggleTheme}}>
        <Router>
          <div className={isDark === true ? 'bg-dark text-light' :'bg-light text-dark'}>
            <Nav/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      </Themecontext.Provider>
    </Web3context.Provider>
  );
}

export default App;
