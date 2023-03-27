import React, {useState} from "react";

interface IUseInput {
    (initialValue: string):
        {
            value: string,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
        }
}

export const useInput: IUseInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return {
        value,
        onChange
    }
}