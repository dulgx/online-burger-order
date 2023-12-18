import React, { Component } from "react";
import { MyCoolButton } from "../MyButton";
import "./style.css";



export class Comment extends Component {
    constructor() {
        super();

        this.state = {
            publisher: "",
            comment: ""
        }
    }

    bichih = (e) => {
        this.setState({ comment: e.target.value });
    }

    render() {
        return (
            <div className="CommentContainer">
                <div className="coolText">{this.state.comment}</div>
                <div>Зохиогч: {this.props.zohiogch}</div>
                <textarea onChange={this.bichih}></textarea>
                <MyCoolButton
                    comment={this.state.comment}
                    tovchNer="Коммент"
                    text="Хадгал"
                />
                <MyCoolButton
                    comment={this.state.comment}
                    tovchNer="Коммент бичих 2"
                    text="Хадгал"
                />
            </div>
        )
    }
}