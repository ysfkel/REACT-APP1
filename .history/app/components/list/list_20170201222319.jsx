import React from 'react';
import axios from 'axios';
import ListItem from './list-item/list-item.jsx';

export default class List extends React.Component{

     constructor(props){
         super(props);

         this.state.items={
             data:{}
         }

     }

       componentDidMount() {
           let data=axios.get('http://localhost:5000/reports');
           data.then(res=>{
               this.setState({
                   data:res.data
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