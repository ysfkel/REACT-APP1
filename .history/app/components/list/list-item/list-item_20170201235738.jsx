import React from 'react';
import { Link } from 'react-router';
  const ListItem =({item})=>{
    console.log(item)
        var inlinestyle={color:'red'}
        return(
            <li>
              <Link to=`details/kel" ><span >{item.FileName}</span></Link>
            </li>
        );
    
}

export default ListItem;