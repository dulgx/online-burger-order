import React, { Component } from "react";

import { MyCoolButton } from "../MyButton";




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
            <div>
                <div>{this.state.comment}</div>
                <div>Зохиогч: {this.props.zohiogch}</div>
                <textarea onChange={this.bichih}></textarea>
                <MyCoolButton
                    comment={this.state.comment}
                    tovchNer="Коммент"
                    text="Хадгал"
                />
            </div>
        )
    }
}