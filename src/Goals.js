import React from "react";

class Goals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goals: [
                {
                    goal: "",
                    nickname: "",
                    open: true
                }
            ]
        }
        // This binding is necessary to make `this` work in the callback
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddGoal = this.handleAddGoal.bind(this);
    }

    handleEdit() {
        let open = true;

        this.setState({
            goals: [
                {
                    ...this.state.goals[0],
                    open
                }
            ]
        });
    }

    handleChange(e) {
        let name = e.target.name;
        let goal_1;
        
        if(name == "goalNickname") {
            let nickname = e.target.value;

            goal_1 = {
                ...this.state.goals[0],
                nickname
            } 
        } else {
            let goal = e.target.value;

            goal_1 = {
                ...this.state.goals[0],
                goal
            } 
        }

        this.setState({
            goals: [
                goal_1
            ]
        });
    }

    handleAddGoal() {
        let defaultGoal = [{
            goal: "",
            nickname: "",
            open: true
        }];

        let newGoals = [...this.state.goals, ...defaultGoal]

        this.setState({
            goals: newGoals
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const { _goal1, _nickName1 } = this.refs;
        this.setState({
            goals: [
                { 
                    goal: _goal1.value,
                    nickname: _nickName1.value,
                    open: false
                }
            ]
        });
    }
    
    render() {
        
        return (
            <div className="optimistApp">
                <div className="Goals">
                    <ol>
                        {this.state.goals.map((goal, i) => 
                            <li key={i}>
                                <form onSubmit={this.handleSubmit}>
                                    <input 
                                        ref={`_goal${i}`}
                                        type="text" 
                                        name="goal" 
                                        placeholder="enter your goal, mother fucker!"
                                        value={goal.goal}
                                        onChange={this.handleChange}
                                    />
                                    <div className="nickNameContainer nickNameContainer1">
                                        <input 
                                            ref={`_nickName${i}`} 
                                            type="text" 
                                            name="goalNickname" 
                                            className="nickName nickName1" 
                                            placeholder="nickname plz" 
                                            value={goal.nickname}
                                            onChange={this.handleChange}
                                        />
                                        <input type="submit" value="✓"/>
                                    </div>
                                </form>

                                <div className="goalSummary">{goal.goal}
                                    <button onClick={this.handleEdit}>Edit</button>
                                </div>
                            </li>
                        )}
                    </ol>
                    <button onClick={this.handleAddGoal}>add goal</button>
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


// how do I loop over something in the stache? 
    // this.props.items.map((ingredient, i) =>
    //     React.createElement("li", { key: i }, ingredient)
    // ) // but this isn't using jsx 

    // <ul>
    //     {this.props.ingredients.map((ingredient, i) => 
    //         <li key={i}>{ingredient}</li>
    //     )}
    // </ul>

// binding this to all the event handlers?
// creating small, stateless components to handle things
// simpilar way to modify state?

// higher order functions

//     - currying
//     - recursion -> used instead of loops but not optimal for all js engines
//     - composition -> chaining small, pure functions

// react components 

//     - react.createClass({}) or class componentName extends React.Component
//     - stateless components are just functions that take properties and return dom elements, no functionality
//         - const componentName = ({items}) =>z 
