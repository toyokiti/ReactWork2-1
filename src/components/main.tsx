import React from 'react';
import { YEAR_LISTS, MONTH_LISTS, DAY_LISTS } from '../utils/index'
import { Link } from "react-router-dom";

const Main: React.FC = () => {
    return ( 
        <>
        <main className="App-main">
            <div className="App-main_title">
                <p className="App-main_title_step">STEP1</p>
                <p className="App-main_title_text">お客様の名前を入れてください</p>
            </div>

            <div className="App-main_content">
                <form>
                    <p>-性別-</p>
                    <input type="radio" name="sextype" value="male"/>
                    <label >男性</label> 
                    <input type="radio" name="sextype" value="feale"/>
                    <label >女性</label>

                    <p>-生年月日-</p>
                    <select name="year">
                        {YEAR_LISTS.map((value, index) => (
                            <option value={value[0]} key={index}>{value[1]}</option>
                        ))}
                    </select>
                    <label>年</label>
                    <select name="month">
                        {MONTH_LISTS.map((value, index) => (
                            <option value={value[0]} key={index}>{value[1]}</option>
                        ))}
                    </select>
                    <label>月</label>
                    <select name="day">
                        {DAY_LISTS.map((value, index)=>(
                            <option value="dec" key={index}>{value}</option>
                        ))}
                    </select>
                    <label>日</label>   
                </form>
            </div>
        </main>
        <button className="nextbutton"><Link to={`/step2/`}>次へ進む</Link></button>   
        </>
    )
}

export default Main;