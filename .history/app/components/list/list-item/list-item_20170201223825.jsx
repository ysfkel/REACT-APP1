import React from 'react';

export default class ListItem extends React.Component{
    render(){
        var inlinestyle={color:'red'}
        return(
            <li>
              <Link to="details" ><span style={inlinestyle}></span></Link>
            </li>
        );
    }
}