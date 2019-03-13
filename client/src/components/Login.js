import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validator from 'validator';
import { connect } from 'react-redux'

import { signIn } from '../actions'

class Login extends React.Component {

    renderField = ({ input, meta, label, type }) => {
        return (
            <div>
                <label>{label}</label>
                <input {...input} type={type} autoComplete='off' />
                {meta.touched && <div>{meta.error}</div>}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.signIn(formValues)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="email" component={this.renderField} label="Enter email" type="text" />
                <Field name="password" component={this.renderField} label="Enter password" type="password" />
                <button>Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {}

    if (!formValues.email) {
        errors.email = 'Email is required'
    }
    else if (!validator.isEmail(formValues.email)) {
        errors.email = 'Email is invalid'
    }

    if (!formValues.password) {
        errors.password = 'Password is required'
    }
    else if (formValues.password.length < 6) {
        errors.password = 'Password length must be above 5'
    }

    return errors
}

const formWrapped = reduxForm({
    form: 'login', // must be 'form'
    validate
})(Login)

export default connect(null, { signIn })(formWrapped)