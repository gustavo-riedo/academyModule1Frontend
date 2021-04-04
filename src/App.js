import React, { Component } from 'react';
import Axios from 'axios';
import tradeList from './components/tradeList';
import './App.css';
import placeholderImage from './placeholder.png';
const userID = '6066193c12959abda73a385c'; // PLACEHOLDER

class App extends Component {
   state = {
      userData: {},
      tradeHistory: [],
   };

   constructor() {
      super();
      Axios.get('http://localhost:3333/users/' + userID).then((response) => {
         this.setState({ userData: response.data });
      });
      Axios.get('http://localhost:3333/users/recent/' + userID).then(
         (response) => {
            this.setState({ tradeHistory: response.data });
         }
      );
   }

   render() {
      return (
         <div className="App">
            <header className="App-header">
               <nav>
                  <ul>
                     <li className="navbarItem">
                        <a href="#" className="navbarLink">
                           <label>
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 height="24px"
                                 viewBox="0 0 24 24"
                                 width="24px"
                                 fill="#7E3FF2"
                              >
                                 <path d="M0 0h24v24H0z" fill="none" />
                                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                              </svg>
                              Dashboard
                           </label>
                        </a>
                     </li>
                     <li className="navbarItem">
                        <a href="#" className="navbarLink">
                           <label>
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 height="40px"
                                 viewBox="0 0 24 24"
                                 width="40px"
                                 fill="#7E3FF2"
                              >
                                 <path d="M0 0h24v24H0V0z" fill="none" />
                                 <path
                                    d="M13 13l-3-2.25L7 13V4H6v16h12V4h-5z"
                                    opacity="0"
                                 />
                                 <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z" />
                              </svg>
                              Trades
                           </label>
                        </a>
                     </li>
                     <li className="navbarItem">
                        <a href="#" className="navbarLink">
                           <label>
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 enable-background="new 0 0 24 24"
                                 height="40px"
                                 viewBox="0 0 24 24"
                                 width="40px"
                                 fill="#7E3FF2"
                              >
                                 <g>
                                    <path d="M0,0h24v24H0V0z" fill="none" />
                                 </g>
                                 <g>
                                    <path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z" />
                                 </g>
                              </svg>
                              Trades
                           </label>
                        </a>
                     </li>
                  </ul>
               </nav>
               <main>
                  <div className="mainCard">
                     <div className="profileSection">
                        <img src={placeholderImage} alt="Profile pic" />
                        <div className="accountData">
                           <label>
                              Name
                              <p className="profileText">
                                 {this.state.userData.username}
                              </p>
                           </label>
                           <label>
                              Email
                              <p className="profileText">
                                 {this.state.userData.email}
                              </p>
                           </label>
                        </div>
                        <label>
                           Account balance
                           <p className="profileText">
                              {this.state.userData.accountBalance}
                           </p>
                        </label>
                     </div>
                     <div className="tradeOperation">
                        <form className="tradeType">
                           <p>GBPRATEVAR</p>
                           <p>USD to GBP rate</p>
                           <label>
                              Value
                              <input type="number" />
                           </label>
                           <input type="submit" value="Buy GBP" />
                        </form>
                        <form className="tradeType">
                           <p>USDRATEVAR</p>
                           <p>GBP to USD rate</p>
                           <label>
                              Value
                              <input type="number" />
                           </label>
                           <input type="submit" value="Buy USD" />
                        </form>
                     </div>
                     <div className="recentTrades">
                        {tradeList(this.state.tradeHistory)}
                     </div>
                  </div>
               </main>
            </header>
         </div>
      );
   }
}

export default App;
