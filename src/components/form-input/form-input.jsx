import React from 'react';

import './form-input.scss';

const FormInput = ({ handleChange, label, name, ...otherProps }) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange(name)} {...otherProps}/>
            {label ? (
                <label 
                className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>

                ) : null}
        </div>
    )
}

export default FormInput;