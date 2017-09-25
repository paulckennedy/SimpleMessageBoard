import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { required, errStyle } from '../helpers/ReduxFormValidation.js';

class SubmitComment extends Component{
    commentComponent(field) {
        const{ meta: touched, error } = field;
        return (
            <div>
                <textarea className="form-control" style={touched && error ? errStyle : null}{...field.input} />
            </div>
        );
    }

    onSubmit(values) {

    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="comment"
                    component={this.commentComponent}
                    validate={required}
                />
                <button type="submit" className="btn btn-success btn-small">Save</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'SubmitCommentForm'
})(
    connect(null, {})(SubmitComment)
);