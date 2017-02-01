import React from 'react';


export default class Layout extends React.Component{
      render(){
          return(
              <nav>
                  <ul>
                    <li>  <Link to="home">Home</Link></li>
                  </ul>
              </nav>
          );
      }
}