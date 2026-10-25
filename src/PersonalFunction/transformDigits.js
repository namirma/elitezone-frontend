export function transformDigits(value) {
    const persianDigits = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
    const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let transformedValue = value;
    persianDigits.forEach((digit, index) => {
        transformedValue = transformedValue.replace(digit, englishDigits[index]);
    });

    return transformedValue;
}