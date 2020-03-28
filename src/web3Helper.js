import Web3 from "web3";
import Torus from "@toruslabs/torus-embed";

// 16110 for https://betav2.matic.network
const enabledNetworkId = 16110;

const getWeb3 = () =>
  new Promise(async (resolve, reject) => {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.enable();

          const networkId = await web3.eth.net.getId();
          console.log(networkId)
          if (networkId === enabledNetworkId){
            resolve(web3);
          }
          else{
            alert("Invalid Network")
            reject("Invalid Network");
          }
        } catch (error) {
          reject(error);
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log("Injected web3 detected.");
        const networkId = await web3.eth.net.getId();
        // console.log(networkId)
          if (networkId === enabledNetworkId){
            resolve(web3);
          }
          else{
            alert("Invalid Network")
            reject("Invalid Network");
          }
      }
      else {
        const torus = new Torus();
        await torus.init({
            network: {
              host: "https://betav2.matic.network",
              networkName: "Matic Network" // optional
            }
        })
        const web3 = new Web3(torus.provider);
        console.log("Using Torus");
        resolve(web3)
      }
});

export default getWeb3;
