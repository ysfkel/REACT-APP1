import React from 'react';

export default class ListItem extends React.Component{
    render(){
        var inlinestyle={''}
        return(
            <li>
              <Link to="details">{this.props.item.FileName}</Link>
            </li>
        );
    }
}