import React from "react";
import update from 'immutability-helper';
import EditGoal from './EditGoal';

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
    handleDelete(index) {
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

    handleChange(index, name, e) {
        let thisGoal;
        let fieldValue = e.target.value;
        
        thisGoal = {
            ...this.state.goals[index],
            [name]: fieldValue
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
                                display = <EditGoal goal={goal} i={i} nickname={nickname} 
                                                    handleChange={(i, name, e) => this.handleChange(i, name, e)} 
                                                    handleDelete={(i) => this.handleDelete(i)}/>
                                    
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

// break this component down into smaller, reusable pieces
// get less working and clean up the css

/*
    validating properties: 

    propTypes: {
        ingredients: PropTypes.array
        title: PropTypes.string
    }

    default props

    custom property validation

    class static properties
*/ 

