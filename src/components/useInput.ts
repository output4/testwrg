import React, {useState} from 'react';

export default function (initialValue: string | number = ''): [string | number, Function] {
    const [val, setVal] = useState(initialValue);

    return [
        val,
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setVal(e.target.value);
        }
    ]
}
