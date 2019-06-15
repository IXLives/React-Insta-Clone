import React from 'react';

class CommentInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newComment: ''
        };
    }

    changeHandler = e => {
        this.setState({ newComment: e.target.value });
    };

    submitHandler = e => {
        e.preventDefault();
        this.props.addNewComment(this.state.newComment);
        this.setState({ newComment: '' });
    };

    render() {
        return (
            <form onSubmit = {this.submitHandler}>
                <input 
                    value={this.state.newComment}
                    placeholder='Add a comment...'
                    type = 'text'
                    onChange = {this.changeHandler}
                />
                <button>...</button>
            </form>
        );
    }
}

export default CommentInput;