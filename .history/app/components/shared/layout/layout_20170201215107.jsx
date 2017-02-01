import React from 'react';


export default class Layout extends React.Component{
      render(){
          return(
              <nav>
                  <ul>
                    <li>  <Link to="home">Home</Link></li>
                    <li>  <Link to="home">List</Link></li>
                  </ul>
              </nav>
          );
      }
}