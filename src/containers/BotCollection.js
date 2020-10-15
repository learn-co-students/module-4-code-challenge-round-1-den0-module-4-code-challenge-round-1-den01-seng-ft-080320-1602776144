import React, { Component } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {
  //your code here
  displaybots = () => this.props.bots.map(botinfo => {
    return (
    <div className="unlisted-bots" onClick={(event) => this.handleClick(event, botinfo)}>
      <BotCard key={botinfo.id} bot={botinfo} deleteBot={this.props.deleteBot}/>
    </div>
    )
  })

  handleClick = (event, botinfo) => {
    event.stopPropagation()
    this.props.addToArmy(botinfo)
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          Collection of all bots
          {this.displaybots()}
        </div>
      </div>
    );
  }
}

export default BotCollection;
