import React from 'react';
import { Link } from 'react-router';
  const ListItem =({item})=>{
    console.log(item)
        var inlinestyle={color:'red'}
        return(
            <li>
              <span >{item.FileName}</span>
            </li>
        );
    
}

export default ListItem;