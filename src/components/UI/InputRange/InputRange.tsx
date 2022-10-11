import React, { FC } from 'react';
import './InputRange.css'

interface IInputRange {
    min: string,
    max: string,
    changeNumber: any,
    value: number
}

const InputRange: FC<IInputRange> = ({ min, max, changeNumber, value }) => {

    for (let e of document.querySelectorAll('input[type="range"].slider_progress') as any) {
        e.style.setProperty('--value', e.value);
        e.style.setProperty('--min', e.min == '' ? '0' : e.min);
        e.style.setProperty('--max', e.max == '' ? '100' : e.max);
        e.addEventListener('input', () => e.style.setProperty('--value', e.value));
    }

    return (

        <input className='styled_slider slider_progress' onChange={changeNumber} type="range" min={min} max={max} step="1" value={value}></input>

    );
};

export default InputRange;

