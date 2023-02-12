import { Component } from "react";

class Feedback extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0
    }
    dropDown() {
          const total = this.calcTotal();
        const positiveFeebackPercent = this.calcPercent("good");
        const { good, neutral, bad } = this.state;
       
            if(!total) {
            return `No feedback given`;
        }
        return (
                <div>
                 
                    <p>Good:{ good }</p>
                    <p>Neutral:{ neutral }</p>
                    <p>Bad:{bad}</p>
                    <p>Total:{total}</p>
                    <p>Positive feedback: { positiveFeebackPercent } %</p>
        </div>
           )
           
    
    }
    leaveFeedback = (name) => {
        this.setState(prevState => {
            return {
                [name]: prevState[name] + 1
            }
        });
    }

    calcTotal() {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;  
        return total;
    }
      calcPercent(good) {
        const total = this.calcTotal();
        if(!total) {
            return 0;
        }
        const value = this.state.good; 
        const result = ((value / total) * 100).toFixed(2);
        return Number(result);
    }

    render() {
      
       
        return (
            <div>
                <div>
                    <h3>Please leave feedback</h3>
                    <button onClick = {() => this.leaveFeedback("good")}>Good</button>
                    <button onClick={() => this.leaveFeedback("neutral")}>Neutral</button>
                    <button onClick={() => this.leaveFeedback("bad")}>Bad</button>
                </div>
                 <div>
                    <h3>Statistics</h3>
                    {this.dropDown()}
                </div>
 
            </div>
            
        )
        
    }

}
export default Feedback;