import React, { Component } from "react";
import BotCollection from "./BotCollection";
import BotArmy from "./YourBotArmy";


const baseURL = "http://localhost:6001"
class BotsPage extends Component {
  //start here with your code for step one
  state = {
    bots: [],
    botArmy: []
  }


  componentDidMount() {
    fetch(`${baseURL}/bots`)
      .then(response => response.json())
      .then(bots => this.setState({bots}))
  }

  addToArmy = (newbot) => {
    if(!this.state.botArmy.find(bot => bot === newbot)) {
      this.setState({botArmy: [...this.state.botArmy, newbot]})
    }
  }

  removeBotA = (botA) => {
    const updatedbotArmy = this.state.botArmy.filter(bot => bot !== botA)
    this.setState({botArmy: updatedbotArmy})
  }

  deleteBot = (bot_1) => {
    console.log("hello world")
    const updatedbotArmy = this.state.botArmy.filter(bot => bot !== bot_1)
    const updatedbots = this.state.bots.filter(bot => bot !== bot_1)

    this.setState({
      bots: updatedbots,
      botArmy: updatedbotArmy 
    })

    fetch(`${baseURL}/bots/${bot_1.id}`, {
        method: "DELETE"})
  }

  render() {
    return (
      <div>
        <BotArmy key={"botArmy"} botArmy={this.state.botArmy} removeBotA={this.removeBotA} deleteBot={this.deleteBot}/>
        <BotCollection key={"bots"} bots={this.state.bots} addToArmy={this.addToArmy} deleteBot={this.deleteBot}/>
      </div>
    )  
  }
}

export default BotsPage;
