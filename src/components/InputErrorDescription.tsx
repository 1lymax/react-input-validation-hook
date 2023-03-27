import * as React from 'react';
import {FC} from "react";

type Props = {
    errors: string[]
};
export const InputErrorDescription: FC<Props> = ({ errors }) => {
    return (
        <div>
            {errors.length > 0 &&
                errors.map(error => (
                    <div key={error} style={{ color: "red" }}>
                        {error}
                    </div>
                ))}
        </div>
    );
};