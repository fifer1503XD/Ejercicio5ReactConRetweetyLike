import React from 'react';
import './style.css'
import { FaSistrix } from "react-icons/fa";

// const SearchSideBar = () => {
//     return(
//         <>
//             <div className="search-style">
//                 <FaSistrix className="lupa"/>
//                 <input 
//                     type="text" 
//                     placeholder= "Buscar en twitter"
//                     className="input-style"
//                     onChange={()=>this.props.change}
//                     value={()=>this.props.valueChangeInput}
//                 />
//             </div>
            
//         </>
//     )
// }
    class SearchSideBar extends React.Component{
        constructor(){
            super();
        }
        render(){
          return (
              <>
               <div className="search-style">
                    <FaSistrix className="lupa"/>
                    <form>
                        <input 
                            type="text" 
                            placeholder= "Buscar en twitter"
                            className="input-style"
                            onChange={this.props.change}
                            value={this.props.valueChangeInput}
                        />
                    </form>
                </div> 
              </>
          )  
        }
    }

export default SearchSideBar;