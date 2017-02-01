import React from 'react';

export default class ListItem extends React.Component{
    render(){
        return(
            <li>
              <Link to=>{this.props.item.FileName}</Link>
            </li>
        );
    }
}