import React from 'react';
import { Link } from 'react-router';
export   const ListItem =()=>{
  
        var inlinestyle={color:'red'}
       {
            <li>
              <Link to="details" ><span style={inlinestyle}>{this.props.item.FileName}</span></Link>
            </li>
    
    
}