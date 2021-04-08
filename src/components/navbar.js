import { switchTheme } from './theme'; // Theme customization
import React from 'react';

class Navbar extends React.Component {
   render() {
      return (
         <>
            <nav>
               <ul>
                  <li>
                     <a href="#">
                        <label>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="40px"
                              viewBox="0 0 24 24"
                              width="40px"
                              fill="#7E3FF2"
                           >
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                           </svg>
                           Dashboard
                        </label>
                     </a>
                  </li>
                  <li>
                     <a href="#" onClick={switchTheme}>
                        <label>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              enable-background="new 0 0 24 24"
                              height="40px"
                              viewBox="0 0 24 24"
                              width="40px"
                              fill="#7E3FF2"
                           >
                              <rect fill="none" height="24" width="24" />
                              <path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z" />
                           </svg>
                           Switch colors
                        </label>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <label>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="40px"
                              viewBox="0 0 24 24"
                              width="40px"
                              fill="#7E3FF2"
                           >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                           </svg>
                           Exit
                        </label>
                     </a>
                  </li>
               </ul>
            </nav>
         </>
      );
   }
}

export default Navbar;
