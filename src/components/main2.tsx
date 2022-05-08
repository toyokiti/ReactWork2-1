import React, { useState }  from "react";
import { MAIN2_QUESTIONS } from "../utils";

const Main2: React.FC = () => {
    const [isQuestion1, setQuestion1] = useState(true);
    const [isQuestion2, setQuestion2] = useState(true);
    const [isQuestion3, setQuestion3] = useState(true);

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
            case 'isQestion3': 
                if(value === 'yes') {
                    setQuestion3(true);
                } else {
                    setQuestion3(false);
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
                    <div className="main2_question1 main2_questions">
                        <p>{MAIN2_QUESTIONS.question1}</p>
                        <input 
                            type="radio"
                            name="isQestion1"
                            value="yes"
                            onChange={event => isRadioButton(event.target.name, event.target.value)}
                            />
                        <label>はい</label> 
                        <input
                            type="radio"
                            name="isQestion1"
                            value="no"
                            onChange={event => isRadioButton(event.target.name, event.target.value)}
                        />
                        <label>いいえ</label>
                    </div>
                    
                    {question2}
                    {question3}
                    
                </form>
            </div>
        </main>
        {/* <button className="nextbutton"><Link to={`/step2/`}>次へ進む</Link></button>    */}
        
        
        </>
    )
}

export default Main2;