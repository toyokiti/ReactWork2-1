interface questionprops {
    question : string;
    name: string;
    state : boolean;
    setState : Function;
    isRadioButton: Function;
}

const Question = (props: questionprops) => {
    return (
        <>
            <div className="main2_questions">
                <p>{props.question}</p>
                <input 
                    type="radio"
                    name={props.name}
                    value="yes"
                    onChange={event => props.isRadioButton(event.target.name, event.target.value)}
                />
                <label>はい</label> 
                <input
                    type="radio"
                    name={props.name}
                    value="no"
                    onChange={event => props.isRadioButton(event.target.name, event.target.value)}
                />
                <label>いいえ</label>
            </div>
        </>
    )   
}

export default Question;
