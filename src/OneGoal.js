import React from "react";

class OneGoal extends React.Component {

  render() {
    return (
        <div className="OneGoal">
            <ul>
                <li><a href="/goals">Goals</a></li>  
                <li>Check-In</li>
                <li>Today</li>
                <li>Yesterdays</li>
                <li>Account</li>
            </ul>
        </div>
    );
  }
}

export default OneGoal;