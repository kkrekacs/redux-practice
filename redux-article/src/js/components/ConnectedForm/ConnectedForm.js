import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../../actions';

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
};

class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({ 
            [event.target.id]: event.target.value
        });
    };

    handleSubmit() {
        const { title } = this.state;
        this.props.addArticle({ title });
        this.setState({ title: "" });
    };

    render() {
        const { title } = this.state;
        return (
            <div>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={ title } onChange={ this.handleChange } />
                </div>
                <button onClick={ this.handleSubmit }>Save</button>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(ConnectedForm);