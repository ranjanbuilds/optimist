import React from "react";

class Dashboard extends React.Component {

  render() {
    return (
        <div className="Dashboard">
            <ul>
                <li>Goals</li>
                <li>Check-In</li>
                <li>Today</li>
                <li>Yesterdays</li>
                <li>Account</li>
            </ul>
        </div>
    );
  }
}

export default Dashboard;