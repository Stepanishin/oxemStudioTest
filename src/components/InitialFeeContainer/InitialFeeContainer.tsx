import React, { FC,useEffect,useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { initialFeeSlice } from '../../store/reducers/getInitialFeeReducer';
import InputRange from '../UI/InputRange/InputRange';
import styles from './InitialFeeContainer.module.css'

interface IInitialFeeContainer {
    min: string,
    max: string,
}

const InitialFeeContainer: FC<IInitialFeeContainer> = ({min, max}) => {

    let [leasingFee, setLeasingFee] = useState(10)

    const {initialFeeProcent} = useAppSelector(state => state.initialFeeSlice)
    const {number:carCost} = useAppSelector(state => state.carCostSlice)
    const { initialFee } = initialFeeSlice.actions
    const dispatch = useAppDispatch()
    let result = (carCost * (initialFeeProcent / 100)).toFixed(0)
    const { isLoading } = useAppSelector(state => state.loaderSlice)

    const changeNumber = (e:any) => {
        setLeasingFee(e.target.value)   
    }

    useEffect(() => {      
        if (leasingFee >= 10 && leasingFee <= 60) {
            dispatch(initialFee(leasingFee))
        } else if (leasingFee <= 10) {
            dispatch(initialFee(10))
        } else {
            dispatch(initialFee(60))
        }
    }, [changeNumber])

    return (
        <div className={styles.InitialFeeContainer}>
            <h3 className={styles.InitialFeeContainer_title}>Первоначальный взнос</h3>

            {
                isLoading 
                ?
                <div className={styles.InitialFeeContainer_container}>
                    <div className={styles.InitialFeeContainer_container_disabled}></div>
                    <div className={styles.InitialFeeContainer_content_container}>
                        <p className={styles.InitialFeeContainer_content_number}>{result} ₽</p>
                        <div className={styles.InitialFeeContainer_content_description_container}>
                            <input className={styles.InitialFeeContainer_content_description} min='1000000' max='6000000' onChange={changeNumber} type="number" value={leasingFee} />
                            <p className={styles.InitialFeeContainer_content_description_procent}>%</p>
                        </div>
                        
                    </div>
                    <InputRange min={min} max={max} changeNumber={changeNumber} value={leasingFee} />
                </div>
                :
                <div className={styles.InitialFeeContainer_container}>
                    <div className={styles.InitialFeeContainer_content_container}>
                        <p className={styles.InitialFeeContainer_content_number}>{result} ₽</p>
                        <div className={styles.InitialFeeContainer_content_description_container}>
                            <input className={styles.InitialFeeContainer_content_description} min='1000000' max='6000000' onChange={changeNumber} type="number" value={leasingFee} />
                            <p className={styles.InitialFeeContainer_content_description_procent}>%</p>
                        </div>
                        
                    </div>
                    <InputRange min={min} max={max} changeNumber={changeNumber} value={leasingFee} />
                </div>
            }

        </div>
    );
};

export default InitialFeeContainer;