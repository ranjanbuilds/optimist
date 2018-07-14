import React from "react";

class Goals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goals: {
                goal_1: {
                    goal: null,
                    nickname: null,
                    open: true
                }
            }
        }
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(e){
        let goalNumber = e.target.dataset.goal;
        let relatedNick = document.getElementsByClassName(`nickNameContainer${goalNumber}`);
        relatedNick[0].classList.remove("hide")
    }

    handleSubmit(e){
        e.preventDefault();
        const { _goal1, _nickName1 } = this.refs;
        this.setState({
            goals: {
                goal_1: {
                    goal: _goal1.value,
                    nickname: _nickName1.value,
                    open: false
                }
            }
        });
        
    }
    
    render() {
        const { goal, nickname, open } = this.state.goals.goal_1;
        let goalOneInput;
        let goalOneSummary;

        if(open) {
            goalOneInput = 
                <form onSubmit={this.handleSubmit}>
                    <input ref="_goal1" type="text" name="goal" placeholder="enter your goal, mother fucker!"/>
                    <button type="button" className="goal1" data-goal='1' onClick={this.handleClick}>+</button>
                    <div className="nickNameContainer nickNameContainer1 hide">
                        <input ref="_nickName1" type="text" name="goalNickname" className="nickName nickName1" placeholder="nickname plz"/>
                        <input type="submit" value="done!"/>
                    </div>
                </form>;
        } else {
            goalOneSummary = <div>{goal}</div>; 
        }

        return (
            <div className="optimistApp">
                <div className="Goals">
                    <ol>
                        <li>
                            {goalOneInput}
                            {goalOneSummary}
                        </li>
                    </ol>
                </div>
            </div> 
        );
    }
}

Goals.propTypes = {
    
}

Goals.defaultProps = {

}

export default Goals;