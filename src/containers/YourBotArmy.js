import React, { Component } from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {
  //your bot army code here...
  displaybotArmy = () => this.props.botArmy.map(botAinfo => {
    console.log(botAinfo)
    return (
      <div className="botA" onClick={(event) => this.handleClickR(event, botAinfo)}>
        <BotCard key={botAinfo.id} bot={botAinfo} deleteBot={this.props.deleteBot}/>
      </div>
      ) 
    })

    handleClickR = (event, botAinfo) => {
      event.stopPropagation()
      this.props.removeBotA(botAinfo)
    }

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.displaybotArmy()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
