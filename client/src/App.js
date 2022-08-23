import './App.css';
import {ethers} from "ethers";
import { useState, useEffect } from 'react';

function App() {
  const [provider, setProvider] = useState(undefined)
  const [signer, setSigner] = useState(undefined)

  useEffect(() => {
    initConnection();

  }, []);

  const initConnection = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);

    } else {
      console.log("Please install Metamask!");
    }
  }

  const getSigner = async provider => {
    provider.send("eth_requestAccounts", [])
    const signer = provider.getSigner();
    setSigner(signer);
  }

  const isConnected = () => signer !== undefined;

  return (
    <div className="App">
      {isConnected() ? (
          <div>
            Connected
          </div>
      ) : (
          <div
              onClick={() => getSigner(provider)}
              className="swapButton"
          >
            Connect Wallet
          </div>
      )}
    </div>
  );
}

export default App;
