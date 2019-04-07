import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import characters from "./characters.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    clickedCharacter: [],
    point: 0,

  };




  gameOver = () => {
    if (this.state.point < 11) {
      console.log('you lose');
      this.state.point = 0;
      this.state.clickedCharacter = [];
      alert('YOU LOSE! Try Again?');
    }
    else {
      console.log('you win');
      this.state.point = 0;
      this.state.clickedCharacter = [];
      alert('YOU WIN! ');
    }
  }


  clickCharacter = id => {


    if (this.state.point < 11) {
      if (this.state.clickedCharacter.includes(id)) {
        this.gameOver();
      }
      else {
        this.state.point++;
        this.state.clickedCharacter.push(id);
        for (let i = 0; i < characters.length; i++) {
          let j = Math.floor(Math.random() * (i + 1));
          [characters[i], characters[j]] = [characters[j], characters[i]];
        }
      }
    }
    else {
      this.gameOver();
    }



    // Set this.state.images equal to the new images array
    this.setState({ characters });

  };


  render() {
    return (
      <div>
        <Header>{this.state.point}</Header>
        <Wrapper>

          {this.state.characters.map(character => (
            <CharacterCard
              clickCharacter={this.clickCharacter}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}


export default App;
