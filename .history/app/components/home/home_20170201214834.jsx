import React from 'react';
import { Link } from 'react-router';
export default class Home extends React.Component{
      render(){
          return(
              <nav>
                  Logo
                  <Link to="list">list</Link>
                        <Link to="list">list</Link>
              </nav>
          );
      }
}

 