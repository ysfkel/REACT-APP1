import React from 'react';
import { Link } from 'react-router';
  const ListItem =({item})=>{
    conole.log(item)
        var inlinestyle={color:'red'}
        return(
            <li>
              <Link ><span style={inlinestyle}>{item.FileName}</span></Link>
            </li>
        );
    
}

export default ListItem;