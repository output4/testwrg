import React, {useState} from 'react';

export default function (initialValue: number = 0, min: number = 100, max: number = 0): [number, Function] {
    const [val, setVal] = useState(initialValue);

    return [
        val,
        (e: React.ChangeEvent<HTMLInputElement> & React.ChangeEventHandler<HTMLInputElement>) => {
            let value = Number(e.target.value);
            if (value < min) {
                value = min;
            }
            if (value > max) {
                value = max;
            }
            setVal(value);
        }
    ]
}
