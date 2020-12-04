import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { auth, createUserProfileDocument } from '../../firebase/firebase.util';
import './sign-up.scss';


class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (field) => {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            console.log(displayName)
            await createUserProfileDocument(user, { displayName } );

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })

        } catch(err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput 
                        type='email'
                        name='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput 
                        type='password'
                        name='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <FormInput 
                        type='password'
                        name='confirmPassword'
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />

                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;
