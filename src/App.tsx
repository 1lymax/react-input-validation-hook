import React from 'react';
import {useInput} from "./hooks/useInput";
import {useIsValid, Validations} from "./hooks/useIsValid";
import {InputErrorDescription} from "./components/InputErrorDescription";
import {useCheckboxInput} from "./hooks/useCheckboxInput";

function App() {
    const email = useInput('')
    const emailCheck = useIsValid(email.value, 'Email',
        [
            { validation: Validations.IS_EMAIL_VALID }
        ])

    const password = useInput('')
    const passwordCheck = useIsValid(password.value, 'Password',
        [
            { validation: Validations.IS_LONGER_THAN, value: 30 },
            { validation: Validations.IS_SHORTER_THAN, value: 5 }
        ])

    const agreeToRules = useCheckboxInput(false)
    const agreeToRulesCheck = useIsValid(agreeToRules.checked, 'You must agree to our rules',
        [
        { validation: Validations.IS_CHECKED }
        ])


    const isValidForm: boolean = emailCheck.isValid &&
        passwordCheck.isValid &&
        agreeToRulesCheck.isValid

    return (
        <div>
            <input {...email} placeholder={"Email"}/>
            <InputErrorDescription errors={emailCheck.errors}/>

            <br/><br/>

            <input {...password} placeholder={"Password"}/>
            <InputErrorDescription errors={passwordCheck.errors}/>

            <br/><br/>

            <input {...agreeToRules}/> Agree to our rules
            <InputErrorDescription errors={agreeToRulesCheck.errors}/>

            <br/><br/>

            <button type={"submit"} disabled={!isValidForm}>Login</button>
        </div>
    );
}

export default App;
