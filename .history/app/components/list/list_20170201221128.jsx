import React from 'react';
import axios from 'axios';

export default class List extends React.Component{

     constructor(){

     }

       componentDidMount() {
           let data=axios.get('http://localhost:5000/reports');
           data.then(data=>{
               setState({
                   data:data
               });
           })
       }
       
        render(){
            if(this){
                
            }
            console.log(this.state)
            return(
               <ul>
                   <li>hi</li>
               </ul>
            );
        }
}