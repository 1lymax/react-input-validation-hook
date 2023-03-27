import * as React from 'react';
import {FC} from "react";

type Props = {
    visible: boolean
    errors: string[]
};
export const InputErrorDescription: FC<Props> = ({ visible, errors }) => {
    return (
        <div>
            {visible && errors.length > 0 &&
                errors.map(error => (
                    <div key={error} style={{ color: "red" }}>
                        {error}
                    </div>
                ))}
        </div>
    );
};