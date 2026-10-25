export const validateName = (input) => {
    const rules = {
        isEmpty: input.length === 0,
        hasDigit: /[۰-۹]/.test(input) || /^\d+$/.test(input) || /[0-9]/.test(input),
        noSupportFormat: /[~!@#$%^&*()_+-={};':",./<>?|]/.test(input) || input.includes('[') || input.includes(']') || input.includes('\\'),
        hasLatinChars: /[a-z]/.test(input) || /[A-Z]/.test(input),
    };

    return rules;
};