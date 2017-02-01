import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component{
      render(){
          return(
              <div>
                  <nav>
                  <ul>
                    <li>  <Link to="home">Home</Link></li>
                    <li>  <Link to="list">List</Link></li>
                  </ul>
              </nav>
              <div>
                  {this.props.ch}
              </div>
              </div>
          );
      }
}