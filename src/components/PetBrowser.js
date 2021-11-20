import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

createPetCards = () => this.props.pets.map(pet => <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet}/>)

  render() {
    return <div className="ui cards">{this.createPetCards()}</div>
  }
}

export default PetBrowser
