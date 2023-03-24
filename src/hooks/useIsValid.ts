import {useEffect, useState} from "react";

export const Validations = {
    isLongerThan: 'isLongerThan',
    isShorterThan: 'isShorterThan',
    isEmpty: 'isEmpty',
    isEmailValid: 'emailValid',
    isChecked: 'isChecked'
}

type Validation = {
    validation: string,
    value?: number | string | boolean
}

export const useIsValid = (value: any, title: string, validations: Validation[]  ) => {
    const [isEmpty, setIsEmpty] = useState<boolean>(false)
    const [isLongerThan, setIsLongerThan] = useState<boolean>(false)
    const [isShorterThan, setIsShorterThan] = useState<boolean>(false)
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true)
    const [isChecked, setIsChecked] = useState<boolean>(true)
    const [errors, setErrors] = useState<string[]>([])

    const removeError = (error: string) => {
        setErrors(prevState => prevState.filter(item => item !== error))
    }

    const addError = (error: string) => {
        if (errors.indexOf(error) < 0) {
            setErrors(prevState => [...prevState, `${error}`])
        }

    }

    useEffect(() => {
        for ( const validation of validations ) {
            switch (validation.validation) {
                case Validations.isEmpty:
                    if (value.length < 1) {
                        setIsEmpty(true)
                        addError(`${title} cannot be empty`)
                    }else {
                        setIsEmpty(false)
                        removeError(`${title} cannot be empty`)
                    }
                    break
                case Validations.isLongerThan:
                    if (validation.value && value.length > validation.value) {
                        setIsLongerThan(true)
                        addError(`${title} cannot be more than ${validation.value} symbols`)
                    }else {
                        setIsLongerThan(false)
                        removeError(`${title} cannot be more than ${validation.value} symbols`)
                    }
                    break
                case Validations.isShorterThan:
                    if (validation.value && value.length < validation.value) {
                        setIsShorterThan(true)
                        addError(`${title} cannot be less than ${validation.value} symbols`)
                    }else {
                        setIsShorterThan(false)
                        removeError(`${title} cannot be less than ${validation.value} symbols`)
                    }
                    break
                case Validations.isEmailValid:
                    if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                        setIsEmailValid(false)
                        addError(`${title} is wrong`)
                    }else {
                        setIsEmailValid(true)
                        removeError(`${title} is wrong`)
                    }
                    break
                case Validations.isChecked:
                    if (value) {
                        setIsChecked(true)
                        removeError(`${title}`)
                    }else {
                        setIsChecked(false)
                        addError(`${title}`)
                    }
                    break
                default:
                    break
            }
        }

    }, [value])

    const isValid = !isEmpty && !isLongerThan && !isShorterThan && isEmailValid && isChecked

    return {
        isValid,
        errors: errors
    }
}