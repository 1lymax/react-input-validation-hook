// @flow
import * as React from 'react';

type Props = {
    isValid: boolean;
    errors: string[]
};
export const InputErrorDescription = (props: Props) => {
    const {isValid, errors} = props
    return (
        <div>
            {!isValid &&
            errors.map(error => (
                <div key={error} style={{color: "red"}}>
                    {error}
                </div>
            ))}
        </div>
    );
};