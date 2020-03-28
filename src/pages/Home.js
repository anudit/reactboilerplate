import React from 'react';

import {TODO_LIST_ADDRESS, TODO_LIST_ABI} from '../contractData'
import getWeb3 from "../web3Helper";
import '../App.css';

class Home extends React.Component {

  state = { storageValue: 0, web3: null, accounts: [], contract: null };

  componentDidMount = async () => {
    // Setup Web3 on page
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    const instance = new web3.eth.Contract(
      TODO_LIST_ABI,
      TODO_LIST_ADDRESS,
    );

    this.setState({ web3, accounts, contract: instance })
    this.runExample();
  };

  runExample = async () => {
    const { contract } = this.state;

    // Stores a given value, 5 by default.
    // await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.taskCount().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  render() {
    return (<div>
        <h1>Site is Up <span role="img" aria-label='rocket'>🚀</span></h1>
    <p>Hi {this.state.accounts[0]}</p>
        <div>The stored value is: {this.state.storageValue}</div>
      </div>)
  }
}

export default Home;
