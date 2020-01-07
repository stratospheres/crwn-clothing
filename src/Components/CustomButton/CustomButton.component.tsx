import React from 'react';

import './CustomButton.styles.scss';

type ButtonOrInput = 
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & 
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export interface CustomButtonProps 
    extends ButtonOrInput {
    // we don't need extra props, but just a way to easily combine
    // props for either an HTML input (used as a button) or an HTML button
    isGoogleSignIn?: boolean;
}

// note that typing this as React.FC is what we need to get access to the "children" property
export const CustomButton = ({children, isGoogleSignIn, ...otherProps}: CustomButtonProps) => 
    (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);