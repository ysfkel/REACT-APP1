import React from 'react';
import { Link } from 'react-router';
  const ListItem =({item})=>{
  
        var inlinestyle={color:'red'}
        return(
            <li>
              <Link to="details" ><span style={inlinestyle}>{this.props.item.FileName}</span></Link>
            </li>
        );
    
}

export default ListItem;