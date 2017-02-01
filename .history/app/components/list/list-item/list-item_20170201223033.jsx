import React from 'react';

export default class ListItem extends React.Component{
    render(){
        console.log(this.props)
        return(
            <li>{this.props.FileName}</li>
        );
    }
}