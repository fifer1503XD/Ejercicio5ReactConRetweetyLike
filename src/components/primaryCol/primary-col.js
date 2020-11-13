import React from 'react';
import Feed from '../feed';
import {feed} from '../../source';
class PrimaryCol extends React.Component{
    constructor(props){
        super();
        this.state = {
            
            tweet:feed
        }
    }
   
      
      
    render(){
    return (
        <div className="t-col-container">
            <h3>Inicio</h3>
          
            <Feed 
            feed={this.state.tweet} 
            profileUrl={this.props.profileUrl}
            writeInInput={this.writeInInput} />
        </div>
        
    )
    
}}
// handleInput = (evento) => {
//     //Capturar lo que está escribiendo el usuario
//     const message = evento.target.value;
//     this.setState({ newMessage: message });
//   };
export default PrimaryCol;