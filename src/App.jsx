import "./App.css";
import { Header } from "./Components/Header";
import { Btn } from "./Components/Btn";
import { Instructions } from "./Components/Instructions";
import { Dices } from "./Components/Dices";
import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import ConfettiExplosion from 'react-confetti-explosion';
//
export function App() {
  //random value generator
  function randomGenetator() {
    return (Math.floor(Math.random() * 1000) % 6) + 1;
  }


  
  function isDiceOnHold(dice) {
    return dice[1] ? true : false;
  }

  // lazy state initilization 2D Array
  const [currDiceVals, setcurrDiceVals] = useState(() => {
    let temp = [];
    for (let i = 0; i < 15; i++) {
      temp.push([randomGenetator(), false]); // col[0]-> random val  | col[1] -> selected or not
    }

    return temp;
  });

  // counter initilization
  const [timerStart, setTimerStart] = useState(() => {
    false;
  });

  // game finish status
  const [gameStatus, setGameStatus] = useState("")


  const [isExploding, setIsExploding] = useState(false);


  let timer;

  //Dice Roll Handler
  function handleRollClick() {

    
    if (!timerStart) {
      document.getElementById("timer").classList.remove("invisble");
      setTimerStart(true);
    }

    if(gameStatus==="notStart")
    {
      
     timer= setTimeout(()=>{
    console.log("Time Out is on time")
    setGameStatus("notStart");
    document.getElementById("timer").classList.add("invisble");
    setTimerStart(false)
    location.reload();

  },25000)
    }
    
   
    let newDiceVals = currDiceVals.map((dice, indx) => {
      if( gameStatus==="notStart")
      dice[1]=false;

      return isDiceOnHold(dice)
        ? [dice[0],dice[1]]
        : [randomGenetator(), dice[1]];
    });

   
    setcurrDiceVals((oldDicevals) => newDiceVals);
  }

  //Dice  Hold state Toggler
  //
  function diceHoldStatetoggle(indx) {

    if(gameStatus ==="notStart")
    return;


    setcurrDiceVals((oldDicevals) => {
      let holdState = !oldDicevals[indx][1];
      let newDiceVals = [...oldDicevals];
      newDiceVals[indx][1] = holdState;

      return newDiceVals;
    });
  }


  // checking if all dice are on hold then check for win
  //use effect on dice roll or say Rollbutton click
  useEffect(() => {
    
    let firstDieVal = currDiceVals[0][0];
    let win = true;
    currDiceVals.forEach((dice) => {
      if (dice[0] !== firstDieVal || dice[1] !== true) {
        win = false;
        return;
      }
    });

    if( gameStatus==="")
    {
      setGameStatus("notStart");
    }
    else{

    if (gameStatus === "notStart") setGameStatus("start");

    if (win === true) {
      console.log("You win");
      setGameStatus("notStart");
      clearTimeout(timer);
      setIsExploding(true)
      setTimeout(()=>{
        location.reload();
    
      },2000)
    }
  }
  }, [currDiceVals]);


 useEffect(()=>{
  if(isExploding !==false)
  setIsExploding(false);
  
 },[])


  return (
    <div className="App">
      <div className="clock invisble " id="timer">
        <CountdownCircleTimer
          isPlaying={timerStart}
          duration={25}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          
          onComplete={() => {
            // do your stuff here
            return { shouldRepeat: true}}}
        >
          {({ remainingTime }) => remainingTime}

          
        </CountdownCircleTimer>
      </div>

      <Header />
      <Instructions />
       <>{isExploding && <ConfettiExplosion />}</>

      <Dices DiceVals={currDiceVals} diceHoldStatetoggle={diceHoldStatetoggle} />
      <Btn handleRollClick={handleRollClick} gameStatus={gameStatus} />
    </div>
  );
}
