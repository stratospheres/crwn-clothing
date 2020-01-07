import React, { useState } from 'react';

import { FormInput } from '../../Components/FormInput/FormInput.component';
import { CustomButton } from '../../Components/CustomButton/CustomButton.component';
import { SignInWithGoogle } from '../../Firebase/Firebase.utils';

import './SignIn.styles.scss';

export interface SignInState {
    email: string;
    password: string;
}

export const SignIn = () => {
    const [signInState, setSignInState ] = useState({
        email: '',
        password: ''
    } as SignInState);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        setSignInState({
            email: "",
            password: ""
        });
        event.preventDefault();
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // be tricky here - grab the value and the _name_ of the element that sent
        // it... that way we can reuse this for the onchange for any input
        // on the form instead of creating tons of different ones...
        const { value, name } = event.target;

        // merge from left to right for the sources (parms 2-N)
        setSignInState( 
            Object.assign(
                {}, // place results in an empty object 
                signInState, // start with the current signInState
                { [name]: value } // and override the particular field we got a change event for
                )
            ); 
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput label="email" name="email" type="email" required 
                    value={signInState.email} 
                    handleChange={ handleChange } />
                <FormInput label="password" name="password" type="password" required
                    value={signInState.password}  
                    handleChange={ handleChange } />
                <CustomButton type="submit" >Sign In</CustomButton>
                <CustomButton onClick={ SignInWithGoogle } isGoogleSignIn={true}>Sign In With Google</CustomButton>
            </form>
        </div>
    );
}