React form validation using hooks
----------------------------

useInput.ts - return properties of html text input element (value, onChange) that can be desctucture inside JSX element
<hr>
useCheckboxInput.ts - return properties of html checkbox element (type, checked, onChange) that can be desctucture inside JSX element
<hr>
useIsValid.ts - hook than validates inputs.

Receive Props: 
1. Value to be tested. Value of input element.
2. Array with objects of conditions e.g. 

<code>[
{validation: 'isLongerThan', value: 20},
{validation: isEmpty},
{validation: lessThan, value: 6 }
]</code>

Returns object with two properties:

1. isValid - boolean. Does value satisfies the conditions?

2. error array with descriptions
<hr>
Current validation rules:

isEmpty - check if field is empty

emailValid - check if email satisfies Regex pattern

moreThan - value is not greater than value in validation property

lessThan - value is not less than value in validation property
<hr>
InputErrorDescription.tsx - Component that renders errors