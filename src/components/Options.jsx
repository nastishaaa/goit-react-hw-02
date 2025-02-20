export default function Options({updateFeedback, resetFeedback, totalFeedback}){
    const isFeedback = totalFeedback > 0;
    return (<div>
        <button onClick={() => updateFeedback("good")}>Good</button>
        <button onClick={() => updateFeedback("bad")}>Bad</button>
        <button onClick={() => updateFeedback("neutral")}>Neutral</button>
        {isFeedback && <button onClick={resetFeedback}>Reset</button>}
    </div>)
}