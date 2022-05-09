import React, { useState }  from "react";
import { MAIN2_QUESTIONS } from "../utils";
import { Link } from "react-router-dom";
import { Question } from './index';

const Main2: React.FC = () => {
    const [isQuestion1, setQuestion1] = useState(true);
    const [isQuestion2, setQuestion2] = useState(true);

    // ラジオボタンが何を選択されているか管理
    const isRadioButton = (name: string, value: string) => {
        switch (name) {
            case "question1":
                if(value === 'yes') {
                    setQuestion1(true);
                } else {
                    setQuestion1(false);
                }
                break;
            case 'question2': 
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
    // 質問1でいいえを選択したら、question2に質問2を代入
    if(!isQuestion1) {
        question2 = (
            <Question
            question = {MAIN2_QUESTIONS.question2}
            name = {'question2'}
            state = {isQuestion1}
            setState = {setQuestion1}
            isRadioButton = {isRadioButton} 
            />
        )
    }

    let question3;
    // 質問1でいいえ かつ 質問2いいえ 選択で、question3に質問3を代入
    if(!isQuestion1 && !isQuestion2) {
        question3 = (
            <Question
            question = {MAIN2_QUESTIONS.question3}
            name = {'question3'}
            state = {isQuestion1}
            setState = {setQuestion1}
            isRadioButton = {isRadioButton} 
            />
        )
    }

    return (
        <>
            <main className="App-main">
            <div className="App-main_title">
                <p className="App-main_title_step">STEP2</p>
                <p className="App-main_title_text">以下にお答えください</p>
            </div>
            <div className="App-main_content">
                <form>
                    {/* 質問1の描画 */}
                    <Question
                        question = {MAIN2_QUESTIONS.question1}
                        name = {'question1'}
                        state = {isQuestion1}
                        setState = {setQuestion1}
                        isRadioButton = {isRadioButton} 
                    />
                    {/* 質問2の描画 */}
                    {question2}
                    {/* 質問3の描画 */}
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