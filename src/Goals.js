import React from "react";
import update from 'immutability-helper';

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
        this.handleDelete = this.handleDelete.bind(this);
    }
    // I can probably just send this index number, instead of using data attributes
    handleDelete(e) {
        let index = parseInt(e.target.dataset.goal);
    
        this.setState({
            goals: update(this.state.goals, { $splice: [[index, 1]] })
        });
    }

    handleEdit(e) {
        let index = parseInt(e.target.dataset.goal);

        this.setState({
            goals: update(this.state.goals, { [index]: { open: {$set: true} } })
        });
    }

    handleChange(e) {
        let index = parseInt(e.target.dataset.goal);
        let name = e.target.name;
        let thisGoal;
        
        if(name == "goalNickname") {
            let nickname = e.target.value;

            thisGoal = {
                ...this.state.goals[index],
                nickname
            } 
        } else {
            let goal = e.target.value;

            thisGoal = {
                ...this.state.goals[index],
                goal
            } 
        }
        // Is there a way to do this without updating the state continously?
        this.setState({
            goals: update(this.state.goals, {[index]: {$set: thisGoal}})
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
        // target is the form - targeting first input
        let index = parseInt(e.target[0].dataset.goal);

        // getting the value using refs *shrug*
        let goal = this.refs[`_goal${index}`].value;
        let nickname = this.refs[`_nickname${index}`].value;

        let thisGoal = {
            goal,
            nickname,
            open: false
        }

        this.setState({
            goals: update(this.state.goals, {[index]: {$set: thisGoal}})
        });
    }
    
    render() {
        
        return (
            <div className="optimistApp">
                <div className="Goals">
                    <ol>
                        {this.state.goals.map((thisGoal, i) => {
                            let {goal, nickname, open} = thisGoal;
                            let display;
                            if(open) {
                                display = 
                                    <form onSubmit={this.handleSubmit}>
                                        <input 
                                            ref={`_goal${i}`}
                                            data-goal={i}
                                            type="text" 
                                            name="goal" 
                                            placeholder="enter your goal, mother fucker!"
                                            value={goal}
                                            onChange={this.handleChange}
                                        />
                                        <div className="nicknameContainer">
                                            <input 
                                                ref={`_nickname${i}`}
                                                data-goal={i} 
                                                type="text" 
                                                name="goalNickname" 
                                                className="nickname" 
                                                placeholder="nickname plz" 
                                                value={nickname}
                                                onChange={this.handleChange}
                                            />
                                            <input type="submit" value="✓"/>
                                            <button data-goal={i} onClick={this.handleDelete}>Delete</button>
                                        </div>
                                    </form>
                                    
                            } else {
                                display =
                                    <div className="goalSummary">
                                        {goal}
                                        <button data-goal={i} onClick={this.handleEdit}>Edit</button>
                                        <button data-goal={i} onClick={this.handleDelete}>Delete</button>
                                    </div>
                            }

                            let finalDisplay = 
                                <li key={i}>
                                    {display}
                                </li>

                            return finalDisplay;

                        })}
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
