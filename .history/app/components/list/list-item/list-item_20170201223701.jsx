import React from 'react';

export default class ListItem extends React.Component{
    render(){
        var 
        return(
            <li>
              <Link to="details">{this.props.item.FileName}</Link>
            </li>
        );
    }
}