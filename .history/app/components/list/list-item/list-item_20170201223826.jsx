import React from 'react';

export default class ListItem extends React.Component{
    render(){
        var inlinestyle={color:'red'}
        return(
            <li>
              <Link to="details" ><span style={inlinestyle}>{this.props.item.FileName}</span></Link>
            </li>
        );
    }
}