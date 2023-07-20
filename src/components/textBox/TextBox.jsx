import React, { useRef } from "react";
import { useState } from "react";
import "./TextBox.css";
const getText = () =>
  `hello my name is great king britain and i am the king of the world and a dictator you need to listen to me and do as i say`.split(' ')
//   .sort(()=>
//     Math.random() > 0.5 ? 1 : -1)

const Word=(props)=>{
    const {active,text,correct}=props;
    
    if(active){
      return  <span className="active" style={{fontWeight:'bold'}}>{text} </span>
        
    }
    if(correct===true){
        return <span className="correct">{text} </span>
    }
    if(correct===false){
       return <span className="incorrect">{text} </span>
    }
    
    return <span>{text} </span>
}
Word=React.memo(Word);
const TextBox = () => {
  const [userInput, setUserInput] = useState("");
  const text=useRef(getText());
  const [activeWordIndex,setActiveWordIndex]=useState(0);
  const [correctWordArray,setCorrectWordArray]=useState([]);
  const processInput=(value)=>{
        if(value.endsWith(' ')){
            setUserInput('');
            setActiveWordIndex((prev)=>prev+1);

            setCorrectWordArray(data=>{
                const word=value.trim();
                const newRes=[...data];
               newRes[activeWordIndex]=word===text.current[activeWordIndex];
               return newRes;
            })
        } 
            else{
                setUserInput(value);
            }
  }
  return (
    <div>
        <p>{text.current.map((word,index)=>{
            // if(idx==activeWordIndex){
            //     return <b>{word} </b>
            // }
            // return <span>{word} </span>
            return <Word text={word} active={index===activeWordIndex}  key={index}
            correct={correctWordArray[index]}
            />
        })}</p>
      <input
        type="text"
        value={userInput}
        onChange={(e) => {
          processInput(e.target.value);
        }}
      />
    </div>
  );
};

export default TextBox;
