import React from 'react';
import axios from 'axios';
import ListItem from './list-item.jsx';

export default class List extends React.Component{

     constructor(props){
         super(props);

     }

       componentDidMount() {
           let data=axios.get('http://localhost:5000/reports');
           data.then(data=>{
               this.setState({
                   data:data
               });
           })
       }
       
        render(){
     
              console.log(this.state)
           
         
            return(
               <ul>
                    {
                        
                    }
               </ul>
            );
        }
}