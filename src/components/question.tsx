interface questionprops {
    question : string;
    state : boolean;
    setState : object;
    isRadioButton: Function;
}

const Question = (props: questionprops) => {
    console.log(props)
    return (
        <>
            <div className="main2_question1 main2_questions">
                <p>{props.question}</p>
                <input 
                    type="radio"
                    name="isQestion1"
                    value="yes"
                    onChange={event => props.isRadioButton(event.target.name, event.target.value)}
                />
                <label>はい</label> 
                <input
                    type="radio"
                    name="isQestion1"
                    value="no"
                    onChange={event => props.isRadioButton(event.target.name, event.target.value)}
                />
                <label>いいえ</label>
            </div>
        </>
    )   
}

export default Question;
