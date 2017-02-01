import React from 'react';

export default class List extends React.Component{

       componentDidMount() {
           let data=axios.get('http://localhost:5000/reports')
       }
       
        render(){
            return(
               <ul>
                   <li>hi</li>
               </ul>
            );
        }
}