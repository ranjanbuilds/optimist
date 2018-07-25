import React from "react";

class EditGoal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { goal, nickname, i } = this.props;
        
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    ref={`_goal${i}`}
                    data-goal={i}
                    type="text"
                    name="goal"
                    placeholder="enter your goal, mother fucker!"
                    value={goal}
                    onChange={(e) => { this.props.handleChange(i, 'goal', e)} }
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
                        onChange={(e) => { this.props.handleChange(i, 'nickname', e) }}
                    />
                    <input type="submit" value="✓" />
                    <button data-goal={i} 
                        onClick={() => { this.props.handleDelete(i) }}>
                            Delete
                    </button>
                </div>
            </form>
        );
    }

}

export default EditGoal;