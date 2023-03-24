import React, {useState} from "react";

export const useCheckboxInput = (initialState: boolean) => {
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