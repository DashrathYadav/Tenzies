import './SingleDice.css'
export function SingleDice({pos,Number,selected,diceHoldStatetoggle}){

  let color= selected ? "#00ffff" : "white"
  
  let bgColor={
    backgroundColor:color

  }

  return <button onClick={(e)=>{ diceHoldStatetoggle(pos)}} style={bgColor} id="dice">{Number}</button>
  
}