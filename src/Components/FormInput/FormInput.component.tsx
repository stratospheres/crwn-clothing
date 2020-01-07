import React from 'react';

import './FormInput.styles.scss';
import { isString } from 'util';

export interface FormInputProps 
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    handleChange: (e : React.ChangeEvent<HTMLInputElement>) => void;
    label: string;

    // next value is tricky - see index.d.ts for type definition of HTMLInput value property:
    // interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    // ...
    //     value?: string | string[] | number;
    // ...
    // }

    value: string | number | string[];
}

export const FormInput = (
    { handleChange, label, value, ...otherProps } : FormInputProps
) => {

    // ok - figure out the value length - we'll use it for a style later
    let length = 0;
    if (value) {
        if (typeof value === "string") {
            length = value.length
        }
    }

    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps} />
            {
                label ? 
            (<label className={`${length > 0 ? 'shrink' : ''} form-input-label`}>{label}</label>) : 
                null
            }
        </div>
    );
}