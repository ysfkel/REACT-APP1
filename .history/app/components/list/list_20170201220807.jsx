import React from 'react';

export default class List extends React.Component{

       componentDidMount() {
           let data=axios.get('http://localhost:5000/reports');
           data.then(data=>{
               this.setState({
                   data:data
               })
           })
       }
       
        render(){
            return(
               <ul>
                   <li>hi</li>
               </ul>
            );
        }
}