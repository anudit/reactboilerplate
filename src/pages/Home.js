import React, { useContext, useEffect } from 'react'
import Web3context from '../contexts/Web3context.js'

import '../App.css';
export default function Home () {

  const web3context = useContext(Web3context)
  let {getWeb3, logoutWeb3, loginWeb3} = web3context;

  useEffect(()=>{

  }, [])

  return (

    <div>

      {getWeb3 !== undefined
        ?
          <div>
            <p>Acc: {getWeb3.currentProvider.selectedAddress}</p>
            <button onClick={logoutWeb3}>
              Log Out
            </button>
          </div>
        : <button onClick={loginWeb3}>
            Log In
          </button>
      }

    </div>
    )
}
