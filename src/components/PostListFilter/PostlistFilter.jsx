import React from 'react'
import './PostListFilter.css'

export default class PostListFilter extends React.Component {

   constructor(props){
      super(props);
      this.buttons = [
         {name: 'all', label:'All' },
         {name:'like', label:'Like'}
      ]
   }

   render(){
      const buttons = this.buttons.map(({name, label})=>{
         const active = this.props.filter === name;
         const clazz = active ? 'btn-info' : 'btn-outline-secondary' 
         return(

            <button 
               type = "button"
               className = {`btn ${clazz}`} 
               onClick = {() => this.props.onFilterSelect(name) }
               key = {name}
            >
               {label}
            </button>
         
         )
      })
      return(
         <div className="btn-group">
            {buttons}
         </div>
      )

   }

}

 