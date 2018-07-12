import React from "react";

class Goals extends React.Component {
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick(e){
        let goalNumber = e.target.dataset.goal;
        let relatedNick = document.getElementsByClassName(`nickName${goalNumber}`);
        relatedNick[0].classList.remove("hide")
    }
    render() {
        return (
            <div className="optimistApp">
                <div className="Goals">
                    <ol>
                        <li>
                            <form onSubmit={this.submit}>
                                <input type="text" name="goal" placeholder="enter your goal, mother fucker!"/>
                                <button type="button" className="goal1" data-goal='1' onClick={this.handleClick}>+</button>
                                <input type="text" name="goalNickname" className="nickName nickName1 hide" placeholder="nickname plz"/>
                                <input type="submit" value="done!"/>
                            </form>
                        </li>
                    </ol>
                </div>
            </div> 
        );
    }
}

export default Goals;