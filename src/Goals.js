import React from "react";

class Goals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goals: {
                goal_1: {
                    goal: "",
                    nickname: "",
                    open: true
                }
            }
        }
        // This binding is necessary to make `this` work in the callback
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEdit() {
        let open = true;

        this.setState({
            goals: {
                goal_1: {
                    ...this.state.goals.goal_1,
                    open
                }
            }
        });
    }

    handleChange(e) {
        let name = e.target.name;
        let goal_1;
        
        if(name == "goalNickname") {
            let nickname = e.target.value;

            goal_1 = {
                ...this.state.goals.goal_1,
                nickname
            } 
        } else {
            let goal = e.target.value;

            goal_1 = {
                ...this.state.goals.goal_1,
                goal
            } 
        }

        this.setState({
            goals: {
                goal_1
            }
        });
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
                    <input 
                        ref="_goal1" 
                        type="text" 
                        name="goal" 
                        placeholder="enter your goal, mother fucker!"
                        value={goal}
                        onChange={this.handleChange}
                    />
                    <div className="nickNameContainer nickNameContainer1">
                        <input 
                            ref="_nickName1" 
                            type="text" 
                            name="goalNickname" 
                            className="nickName nickName1" 
                            placeholder="nickname plz" 
                            value={nickname}
                            onChange={this.handleChange}
                        />
                        <input type="submit" value="✓"/>
                    </div>
                </form>;
        } else {
            goalOneSummary = <div className="goalSummary">{goal}<button onClick={this.handleEdit}>Edit</button></div>; 
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