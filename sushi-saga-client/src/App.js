import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    sushisToShow: [],
    lastSushiIndex: 0,
    emptyPlates: [],
    moneyRemaining: 100
  }
  
  componentDidMount() {
    fetch(API).then(res => res.json()).then(sushis => { 
      sushis = sushis.map(sushi => ({...sushi, eaten: false}));
      this.setState({
        sushis,
        sushisToShow: sushis.slice(0, 4),
        lastSushiIndex: 4
      })
    });
  }

  showMoreSushis = () => {
    this.setState(prevState => {
      const lastIndex = prevState.lastSushiIndex;
      const sushis = prevState.sushis;
      if (prevState.lastSushiIndex + 4 > prevState.sushis.length) {
        return {
          ...prevState, 
          sushisToShow: sushis.slice(lastIndex, sushis.length + 1).concat(sushis.slice(0, lastIndex + 4 - sushis.length)),
          lastSushiIndex: lastIndex + 4 - sushis.length  
        }
      }
      return {
        ...prevState, 
        sushisToShow: sushis.slice(lastIndex, lastIndex + 4),
        lastSushiIndex: lastIndex + 4
      };
    });
  }

  eatSushi = sushi => this.setState(prevState => {
    if (!sushi.eaten && prevState.moneyRemaining > sushi.price) {
      const index = prevState.sushis.findIndex(s => s.id === sushi.id);
      const newState = {...prevState};
      newState.sushis[index].eaten = true;
      newState.emptyPlates.push(index);
      newState.moneyRemaining = prevState.moneyRemaining - sushi.price;
      return newState;
    }
  })

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushis={this.state.sushisToShow} 
          showMoreSushis={this.showMoreSushis} 
          onClick={this.eatSushi}/>
        <Table emptyPlates={this.state.emptyPlates} moneyRemaining={this.state.moneyRemaining} />
      </div>
    );
  }
}

export default App;