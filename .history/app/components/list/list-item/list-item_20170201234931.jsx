import React from 'react';
import { Link } from 'react-router';
  const ListItem =({item})=>{
  
        var inlinestyle={color:'red'}
        return(
            <li>
              <Link to="details"  params={{name:}}><span style={inlinestyle}>{item.FileName}</span></Link>
            </li>
        );
    
}

export default ListItem;