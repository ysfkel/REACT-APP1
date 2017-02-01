import React from 'react';
import { Link } from 'react-router';
  const ListItem =()=>{
  
        var inlinestyle={color:'red'}
        return(
            <li>
              <Link to="details" ><span style={inlinestyle}>{this.props.item.FileName}</span></Link>
            </li>
        );
    
}