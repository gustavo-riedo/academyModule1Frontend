// External elements import
import React, { Component } from 'react';
import Axios from 'axios'; // Axios to make requests

// Internal elements import
import placeholderImage from './placeholder.png';
import './App.css'; // Main stylesheet
import { subscribeToRatesUpdate } from './socketClient'; // Real time data

// React components
import Navbar from './components/navbar';
import tradeList from './components/tradeList';

const dbAPIaddress = 'http://localhost:3333/'; // Database operations API address

const userID = '606f19c23d1a2f605457b538'; // PLACEHOLDER, replace with login auth

// Main app
class App extends Component {
   state = {
      userData: {
         accountBalance: {},
      },
      recentTrades: [],
      rates: {},
      inputValue: null,
   };

   constructor() {
      super();

      // Initial data gathering
      this.updateUserData();
      this.updateRecentTrades();

      // Real time data subscription with the socket server
      subscribeToRatesUpdate((err, data) => this.setState({ rates: data }));
   }

   // Function to update recent trades list
   updateRecentTrades = () => {
      Axios.get(dbAPIaddress + 'users/recent/' + userID).then((response) => {
         this.setState({ recentTrades: response.data });
      });
   };

   updateUserData = () => {
      Axios.get(dbAPIaddress + 'users/' + userID).then((response) => {
         this.setState({ userData: response.data });
      });
   };

   createOperation = (type, rate) => {
      const operationData = {
         owner_Id: userID,
         type: type,
         income: this.state.inputValue,
         rate: rate,
      };
      Axios.post(dbAPIaddress + 'operations', operationData).then(
         (response) => {
            if (response.status === 201) {
               this.updateUserData();
               this.updateRecentTrades();
            } else {
               alert("Currency amount isn't enough");
            }
            this.setState({ inputValue: 0 });
            this.cancelCourse();
         }
      );
   };

   depositValue = () => {
      const depositData = {
         accountBalance: {
            USD:
               Number(this.state.userData.accountBalance.USD) +
               Number(this.state.inputValue),
            GBP: this.state.userData.accountBalance.GBP,
         },
      };
      Axios.patch(dbAPIaddress + 'users/wallet/' + userID, depositData).then(
         (response) => {
            if (response.status === 201) {
               this.updateUserData();
            } else {
               alert('Unable to deposit');
            }
            this.setState({ inputValue: 0 });
            this.cancelCourse();
         }
      );
   };

   cancelCourse = () => {
      document.getElementById('form1').reset();
      document.getElementById('form2').reset();
      document.getElementById('form3').reset();
   };

   getData = (val) => {
      this.setState({ inputValue: val.target.value });
   };

   // Main React Structure
   render() {
      return (
         <div className="App">
            <header className="App-header">
               <Navbar></Navbar>
               <main>
                  <div className="mainContainer">
                     <div className="profileSection">
                        <img src={placeholderImage} alt="Profile pic" />
                        <div className="accountData">
                           <label>
                              Name
                              <p>{this.state.userData.username}</p>
                           </label>
                           <label>
                              Email
                              <p>{this.state.userData.email}</p>
                           </label>
                        </div>
                        <div className="accountBalance">
                           <label>
                              USD balance
                              <p>
                                 {Math.round(
                                    (parseFloat(
                                       this.state.userData.accountBalance.USD
                                    ) +
                                       Number.EPSILON) *
                                       100
                                 ) /
                                    100 +
                                    ' USD'}
                              </p>
                           </label>
                           <label>
                              GBP balance
                              <p>
                                 {Math.round(
                                    (parseFloat(
                                       this.state.userData.accountBalance.GBP
                                    ) +
                                       Number.EPSILON) *
                                       100
                                 ) /
                                    100 +
                                    ' GBP'}
                              </p>
                           </label>
                        </div>
                     </div>
                     <div className="tradeSection">
                        <form
                           id="form1"
                           onSubmit={() => {
                              this.createOperation(
                                 'USD to GBP',
                                 this.state.rates.USDtoGBP
                              );
                           }}
                        >
                           <p className="tradeRate">
                              {Math.round(
                                 (parseFloat(this.state.rates.USDtoGBP) +
                                    Number.EPSILON) *
                                    1000
                              ) / 1000}
                           </p>
                           <p>USD to GBP rate</p>
                           <label>
                              Value
                              <input
                                 type="number"
                                 defaultValue="0"
                                 onChange={this.getData}
                              />
                           </label>
                           <input type="submit" value="Buy GBP" />
                        </form>
                        <form
                           id="form2"
                           onSubmit={() => {
                              this.depositValue();
                           }}
                        >
                           <label>
                              Deposit
                              <input
                                 type="number"
                                 defaultValue="0"
                                 onChange={this.getData}
                              />
                           </label>
                           <input type="submit" value="Deposit" />
                        </form>
                        <form
                           id="form3"
                           onSubmit={() => {
                              this.createOperation(
                                 'GBP to USD',
                                 this.state.rates.GBPtoUSD
                              );
                           }}
                        >
                           <p className="tradeRate">
                              {Math.round(
                                 (parseFloat(this.state.rates.GBPtoUSD) +
                                    Number.EPSILON) *
                                    1000
                              ) / 1000}
                           </p>
                           <p>GBP to USD rate</p>
                           <label>
                              Value
                              <input
                                 type="number"
                                 defaultValue="0"
                                 onChange={this.getData}
                              />
                           </label>
                           <input type="submit" value="Buy USD" />
                        </form>
                     </div>
                     <div className="historySection">
                        {tradeList(this.state.recentTrades)}
                     </div>
                  </div>
               </main>
            </header>
         </div>
      );
   }
}

export default App;
