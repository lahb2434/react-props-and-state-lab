import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  
  state = {
    pets: [],
    filters: {
      type: 'all'
    }
  }
  
  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = (filterType) => {
    let str = '/api/pets';

    if(filterType !== 'all'){
      str = str + `?type=${this.state.filters.type}`
    }
  
    fetch(str)
    .then(response => response.json())
    .then(items => { 
      this.setState({pets: items})
    })
  }

  onAdoptPet = (petId) => {
    const pets = this.state.pets.map(pet => pet.id === petId ? { ...pet, isAdopted: true } : pet )
    this.setState({pets: pets})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={() => this.onFindPetsClick(this.state.filters.type)}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
     
    )
  }
}

export default App
