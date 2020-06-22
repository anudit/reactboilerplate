import React, { useState } from 'react'

import './App.css';

import Nav from './pages/components/Nav';
import Home from './pages/Home';
import About from './pages/About';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Torus from "@toruslabs/torus-embed";

import Web3context from './contexts/Web3context.js'

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

  async function isLogin(){
    if (getWeb3 === undefined){
      return false;
    }
    else{
      return true;
    }
  }

  return (
    <Router>
      <div className="App">
        <Nav/>
        <Web3context.Provider value={{getWeb3, loginWeb3, logoutWeb3, isLogin}}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Web3context.Provider>
      </div>
    </Router>
  );
}

export default App;
