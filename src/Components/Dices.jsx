import { SingleDice } from "./SingleDice";
import "./Dices.css";
export function Dices({DiceVals,diceHoldStatetoggle}) {

  let currDiceVals =DiceVals 
  let ButtonArr =[]

  currDiceVals.map( (diceVal,indx)=>{
      
    ButtonArr.push(<SingleDice key={indx} pos={indx} Number={diceVal[0]} selected={diceVal[1]}  diceHoldStatetoggle={diceHoldStatetoggle} />);

  })

  return <div className="buttonContainer">{ButtonArr}</div>;
}
