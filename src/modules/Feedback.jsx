//  import { Component } from "react";
import { useState } from "react";
import { FeedbackOption } from "./FeedbackOption/FeedbackOption";
import { Statistics } from "./Statistics/Statistics";
 import { Notification } from 'modules/Notification/Notification';
const voteOptions = ["good", "neutral", "bad"];

const Feedback = () => {
     const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0
     });
    
      const leaveFeedback = name => {
        setVotes(prevState => {
            const value = prevState[name];
            
            return {...prevState, [name]: value + 1}
        })
    }
    const { good, neutral, bad } = votes;
    const total = good + bad + neutral;
      const calcPercent = (propName) => {
        if(!total) {
            return 0;
        }
        const value = good; 
        const result = ((value / total) * 100).toFixed(2);
        return Number(result);
    }

    const positiveFeebackPercent = calcPercent("good");
    
        return (
            <>
                    <h3>Please leave feedback</h3>
                     <FeedbackOption
                    leaveFeedback={leaveFeedback}
                    options={Object.keys(votes)}
          ></FeedbackOption>
               
                 <div>
                    <h3>Statistics</h3>
                 {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeebackPercent}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )} 
                </div>
 
       </>
            
        )
}
export default Feedback;


// class Feedback extends Component {
//     state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//     }
//     dropDown() {
//           const total = this.calcTotal();
//         const positiveFeebackPercent = this.calcPercent("good");
//         const { good, neutral, bad } = this.state;
       
//             if(!total) {
//             return `No feedback given`;
//         }
//         return (
//                 <div>
                 
//                     <p>Good:{ good }</p>
//                     <p>Neutral:{ neutral }</p>
//                     <p>Bad:{bad}</p>
//                     <p>Total:{total}</p>
//                     <p>Positive feedback: { positiveFeebackPercent } %</p>
//         </div>
//            )
           
    
//     }
//     leaveFeedback = (name) => {
//         this.setState(prevState => {
//             return {
//                 [name]: prevState[name] + 1
//             }
//         });
//     }

//     calcTotal() {
//         const { good, neutral, bad } = this.state;
//         const total = good + neutral + bad;  
//         return total;
//     }
//       calcPercent(good) {
//         const total = this.calcTotal();
//         if(!total) {
//             return 0;
//         }
//         const value = this.state.good; 
//         const result = ((value / total) * 100).toFixed(2);
//         return Number(result);
//     }

//     render() {
      
       
//         return (
//             <div>
//                 <div>
//                     <h3>Please leave feedback</h3>
//                     <button onClick = {() => this.leaveFeedback("good")}>Good</button>
//                     <button onClick={() => this.leaveFeedback("neutral")}>Neutral</button>
//                     <button onClick={() => this.leaveFeedback("bad")}>Bad</button>
//                 </div>
//                  <div>
//                     <h3>Statistics</h3>
//                     {this.dropDown()}
//                 </div>
 
//             </div>
            
//         )
        
//     }

// }
// export default Feedback;