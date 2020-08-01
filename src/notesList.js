import React from 'react'
import Notas from './notas'
import axios from 'axios'


class DatosList extends React.Component{

  state = {
    notes: []
}

async componentDidMount() {
    this.getNotes();
}

getNotes = async () => {
    const res = await axios.get('http://localhost:4000/api/notes')
    this.setState({notes: res.data});
    console.log(res.data);
}

  render(){
    return(
      <section className="top-cards">
    <div className="wrapper">
      <div className="grid">
      {
        this.state.notes.map((cardData ) => <Notas key={cardData._id} {...cardData}/>)
      }
         
      </div>
      </div>
        
    </section>
      
    ) 

    }
  }  
  

      export default DatosList