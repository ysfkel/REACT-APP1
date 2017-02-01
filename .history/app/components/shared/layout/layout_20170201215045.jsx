import React from 'react';


export default class Layout extends React.Component{
      render(){
          return(
              <nav>
                  <ul>
                      <Link to="home">Home</Link>
                  </ul>
              </nav>
          );
      }
}