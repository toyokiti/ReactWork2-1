import { Link } from "react-router-dom";

const Main3: React.FC = () => {

    return (
        <>
            <main className="App-main">
            <div className="App-main_title">
                <p className="App-main_title_step">STEP3</p>
                <p className="App-main_title_text">ご相談内容をご記入ください</p>
            </div>
            <div className="App-main_sex">
                <form>
                    <p>-ご相談内容-</p>
                    <textarea className="textarea"></textarea>
                </form>
            </div>
            </main>
            <button className="button beforebutton"><Link to={`/step2/`}>前へ戻る</Link></button> 
            <button className="button nextbutton"><Link to={`/`}>次へ進む</Link></button>  
        </>
    )
}

export default Main3;