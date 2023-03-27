import React, {useState} from "react";


interface IUseCheckboxInput {
    (initialValue: boolean):
        {
            type: string,
            checked: boolean,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
        }
}

export const useCheckboxInput: IUseCheckboxInput = (initialState) => {
    const [checked, setChecked] = useState(initialState)
    const type = "checkbox"

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
    }

    return {
        type,
        checked,
        onChange
    }
}
