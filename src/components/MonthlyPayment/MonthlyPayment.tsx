import React, { FC,useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { initialFeeSlice } from '../../store/reducers/getInitialFeeReducer';
import InputRange from '../UI/InputRange/InputRange';
import styles from './MonthlyPayment.module.css'
import numberWithSpaces from '../../hooks/numberWithSpace'

const MonthlyPayment: FC = () => {

    const {initialFeeProcent} = useAppSelector(state => state.initialFeeSlice)
    const {number:carCost} = useAppSelector(state => state.carCostSlice)
    const {leasingTermAmount} = useAppSelector(state => state.leasingTermSlice)

    let initialFeeAmount = (carCost * (initialFeeProcent / 100))
    let resultMonthlyPayment = ((carCost - initialFeeAmount) * ((0.035 * Math.pow((1 + 0.035), leasingTermAmount)) / (Math.pow((1 + 0.035), leasingTermAmount) - 1))).toFixed(0);

    return (
        <div className={styles.MonthlyPayment}>
            <h3 className={styles.MonthlyPayment_title}>Ежемесячный платеж от</h3>
            <p className={styles.MonthlyPayment_content}>{numberWithSpaces(resultMonthlyPayment)} ₽</p>
        </div>
    );
};

export default MonthlyPayment;