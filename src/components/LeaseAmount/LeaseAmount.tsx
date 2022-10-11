import React, { FC,useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import styles from './LeaseAmount.module.css'
import numberWithSpaces from '../../hooks/numberWithSpace'

const LeaseAmount: FC = () => {

    const {initialFeeProcent} = useAppSelector(state => state.initialFeeSlice)
    const {number:carCost} = useAppSelector(state => state.carCostSlice)
    const {leasingTermAmount} = useAppSelector(state => state.leasingTermSlice)

    let initialFeeAmount = (carCost * (initialFeeProcent / 100))
    let resultMonthlyPayment = (carCost - initialFeeAmount) * ((0.035 * Math.pow((1 + 0.035), leasingTermAmount)) / (Math.pow((1 + 0.035), leasingTermAmount) - 1));
    let resultLeaseAmount = (initialFeeAmount + (leasingTermAmount * resultMonthlyPayment)).toFixed(0)

    return (
        <div className={styles.LeaseAmount}>
            <h3 className={styles.LeaseAmount_title}>Сумма договора лизинга</h3>
            <p className={styles.LeaseAmount_content}>{numberWithSpaces(resultLeaseAmount)} ₽</p>
        </div>
    );
};

export default LeaseAmount;