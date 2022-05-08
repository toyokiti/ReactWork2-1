import React, { useState }  from "react";
import { MAIN2_QUESTIONS } from "../utils";
import { Link } from "react-router-dom";
import {Question} from './index'

const Main2: React.FC = () => {
    const [isQuestion1, setQuestion1] = useState(true);
    const [isQuestion2, setQuestion2] = useState(true);

    const isRadioButton = (name: string, value: string) => {
        console.log(name);
        switch (name) {
            case "isQestion1":
                if(value === 'yes') {
                    setQuestion1(true);
                } else {
                    setQuestion1(false);
                }
                break;
            case 'isQestion2': 
                if(value === 'yes') {
                    setQuestion2(true);
                } else {
                    setQuestion2(false);
                }
                break;
            default:
                break;
        }
    } 

    let question2;
    if(!isQuestion1) {
        question2 = (
            <div className="main2_question2 main2_questions">
            <p>{MAIN2_QUESTIONS.question2}</p>
            <input 
                type="radio"
                name="isQestion2"
                value="yes"
                onChange={event => isRadioButton(event.target.name, event.target.value)}
            />
            <label>はい</label> 
            <input 
                type="radio"
                name="isQestion2"
                value="no"
                onChange={event => isRadioButton(event.target.name, event.target.value)}
            />
            <label>いいえ</label>
            </div>
        )
    }

    let question3;
    if(!isQuestion1 && !isQuestion2) {
        question3 = (
            <div className="main2_question3 main2_questions">
            <p>{MAIN2_QUESTIONS.question3}</p>
            <input 
                type="radio"
                name="isQestion3"
                value="yes"
                onChange={event => isRadioButton(event.target.name, event.target.value)}
            />
            <label>はい</label> 
            <input 
                type="radio"
                name="isQestion3"
                value="no"
                onChange={event => isRadioButton(event.target.name, event.target.value)}
            />
            <label>いいえ</label>
            </div>
        )
    }

    return (
        <>
            <main className="App-main">

            <div className="App-main_title">
                <p className="App-main_title_step">STEP2</p>
                <p className="App-main_title_text">以下にお答えください</p>
            </div>

            <div className="App-main_sex">
                <form>

                    <Question
                        question = {MAIN2_QUESTIONS.question1}
                        state = {isQuestion1}
                        setState = {setQuestion1}
                        isRadioButton = {isRadioButton} 
                    />
                    
                    {question2}
                    {question3}

                </form>
            </div>
        </main>
        <button className="button beforebutton"><Link to={`/`}>前へ戻る</Link></button> 
        <button className="button nextbutton"><Link to={`/step3/`}>次へ進む</Link></button>  
        
        
        </>
    )
}

export default Main2;