import React, { useState } from 'react';

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target: { value }
        } = event;
        let willUpdate = true;
        if ( typeof validator === 'function' ) {
            willUpdate = validator(value);
        }
        if ( willUpdate ) {
            setValue(value);
        }
    };
    return { value, onChange };
}


const UseInput = () => {
    const maxLen = (value) => !value.includes('@');
    const name = useInput('Mr.', maxLen);
    return (
        <div className="about__container">
            <h1>Hello</h1>
            <input placeholder="Name" {...name}/>
            {/*<input placeholder="Name" value={name.value} onChange={name.onChange/>*/}
        </div>
    );
}

export default UseInput;