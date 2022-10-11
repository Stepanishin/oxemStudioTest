import React, { FC } from 'react';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useAddNewRequestMutation } from '../../../store/reducers/fetchApi';
import { loaderSlice } from '../../../store/reducers/getLoaderReducer';
import { IRequest } from '../../../types/IRequest';
import styles from './SubmitBtn.module.css'

interface ISubmitBtn {
    title: string,
}

const SubmitBtn: FC<ISubmitBtn> = ({title}) => {

    let [fetchNewRequest] = useAddNewRequestMutation()

    const {initialFeeProcent} = useAppSelector(state => state.initialFeeSlice)
    const {number:carCost} = useAppSelector(state => state.carCostSlice)
    const {leasingTermAmount} = useAppSelector(state => state.leasingTermSlice)
    const { isLoading } = useAppSelector(state => state.loaderSlice)
    const { getLoader } = loaderSlice.actions
    const dispatch = useAppDispatch()

    let initialFeeAmount = Math.round((carCost * (initialFeeProcent / 100)))
    let resultMonthlyPayment = Math.round((carCost - initialFeeAmount) * ((0.035 * Math.pow((1 + 0.035), leasingTermAmount)) / (Math.pow((1 + 0.035), leasingTermAmount) - 1)));
    let resultLeaseAmount = Math.round(initialFeeAmount + (leasingTermAmount * resultMonthlyPayment))

    let contact: IRequest = {
        car_coast: carCost,
        initail_payment: initialFeeAmount,
        initail_payment_percent: initialFeeProcent,
        lease_term: leasingTermAmount,
        total_sum: resultLeaseAmount,
        monthly_payment_from: resultMonthlyPayment
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        dispatch(getLoader())
        e.preventDefault();
        fetchNewRequest(JSON.stringify(contact))
        setTimeout(() => {
            dispatch(getLoader())
        },2000)
    }

    return (
            <form onSubmit={onSubmit} className={styles.SubmitBtn_container}>                   
                    {
                        isLoading
                        ?
                        <>
                        <div className={styles.SubmitBtn_btn_disabled}></div>
                        <button className={styles.SubmitBtn_btn} type='submit'><span className={styles.loader}></span></button>
                        </>
                        :
                        <button className={styles.SubmitBtn_btn} type='submit'>{title}</button>
                    }
            </form>
    );
};

export default SubmitBtn;