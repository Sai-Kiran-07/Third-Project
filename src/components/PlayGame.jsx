import { useState } from "react"
import NumberSelector from "./NumberSelector"
import RoleDice from "./RoleDice"
import Score from "./Score"
import styled from "styled-components"
import { Button,OutlinedButton } from "../styled/Button"
import Rules from "./Rules"


const PlayGame=()=> {
  const [score,setScore] = useState(0);
  const [selectedNumber,setSelectedNumber] = useState(); 
  const [currentDice,setCurrentDice] = useState(1);
  const [error,setError] = useState("");
  const [showRules,setShowRules] = useState(false);

  const generateRandomNumber = (max,min) =>{
    return Math.floor(Math.random()*(max-min)+min);
  } 

  const roleDice = ()=>{
    if(!selectedNumber) {
      setError("You have not selected any number")
      return;
    }
    setError("");
    const randomnum = generateRandomNumber(1,7);
    setCurrentDice((prev)=>randomnum);

    if(selectedNumber === randomnum)
      setScore((prev=>prev+randomnum));
    else
      setScore((prev)=>prev-2);

      setSelectedNumber(undefined)
  }

  const resetScore = () =>{
    setScore(0);
  }

  return (
    <MainContainer>
        <div className="top_section">
        <Score score={score}/>
        <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice}/>
        <div className="btns">
          <OutlinedButton onClick={resetScore}>Reset</OutlinedButton>
          <Button onClick={()=>setShowRules((prev)=>!prev)}>{showRules?"Hide":"Show"} Rules</Button>
        </div>
        {showRules?<Rules/>:" "}
    </MainContainer>
  )
}

export default PlayGame

const MainContainer = styled.main`
  padding-top:40px;
.top_section{
  display: flex;
  justify-content: space-around;
  align-items: end;
}

.btns{
  margin-top: 40px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
`;