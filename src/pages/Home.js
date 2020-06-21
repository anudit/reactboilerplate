import React, { useState, useContext, useEffect } from 'react'
import {TODO_LIST_ADDRESS, TODO_LIST_ABI} from '../contractData'
// import getWeb3Setup from '../web3Helper'
import '../App.css';

import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Torus from "@toruslabs/torus-embed";


export default function Home () {

  const [getWeb3, setWeb3] = useState({})
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
    providerOptions
  });

  useEffect(() => {

  }, []);

  async function setupLogin(){
    let provider = await web3Modal.connect()
    let w3 = new Web3(provider)
    setWeb3(w3)
    console.log(web3Modal)
    console.log(w3)
  }

  return (
    <div>
      <p>Acc: {getWeb3.selectedAddress}</p>
      <button onClick={setupLogin}>
        {getWeb3.currentProvider != null ? 'Logged In' : 'Login'}
      </button>
    </div>
    )
}
