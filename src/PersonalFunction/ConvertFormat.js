export const EmptyStringToNull = (Value) => {
    if (Value) {
        return Value
    } else {
        return undefined
    }
}

export const NullToEmptyString = (Value) => {
    if (Value === null || Value === undefined || Value === 'null') {
        return ''
    } else {
        return Value
    }
}

export const NullToDashString = (Value) => {
    if (Value === null || Value.length === 0 || Value === undefined) {
        return '-'
    } else {
        return Value
    }
}

export const DateConversion = ({ value }) => {
    if (!value) {
        return <div>خطا</div>;
    }

    // Parse the date string into a Date object
    const [dateStr, timeStr] = value.split(' ');
    const [year, month, day] = dateStr.split('-');
    const [hours, minutes] = timeStr.split(':'); // No need to capture seconds
    const date = new Date(year, month - 1, day, hours, minutes);

    // Convert to Solar Hijri date
    const solarHijriDate = date.toLocaleDateString('fa-IR');
    const solarHijriTime = date.toLocaleTimeString('fa-IR', {
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <div style={{ display: 'inline-flex' }}>
            <div style={{ marginRight: '8px' }}>{solarHijriDate}</div>
            <div>{solarHijriTime}</div>
        </div>
    );
};
