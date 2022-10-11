import React, { FC,useEffect,useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { leasingTermSlice } from '../../store/reducers/getLeasingTermReducer';
import InputRange from '../UI/InputRange/InputRange';
import styles from './LeasingTermContainer.module.css'

interface ILeasingTermContainer {
    min: string,
    max: string,
}

const LeasingTermContainer: FC<ILeasingTermContainer> = ({min, max}) => {

    let [term, setTerm] = useState(1)

    const {leasingTermAmount} = useAppSelector(state => state.leasingTermSlice)
    const { leasingTerm } = leasingTermSlice.actions
    const dispatch = useAppDispatch()
    const { isLoading } = useAppSelector(state => state.loaderSlice)

    const changeNumber = (e:any) => {
        setTerm(e.target.value) 
    }

    useEffect(() => {      
        if (term >= 1 && term <= 60) {
            dispatch(leasingTerm(term))
        } else if (term <= 1) {
            dispatch(leasingTerm(1))
        } else {
            dispatch(leasingTerm(60))
        }
    }, [changeNumber])

    return (
        <div className={styles.LeasingTermContainer}>
            <h3 className={styles.LeasingTermContainer_title}>Срок лизинга</h3>
            {
                isLoading
                ?
                <div className={styles.LeasingTermContainer_container}>
                    <div className={styles.LeasingTermContainer_container_disabled}></div>
                    <div className={styles.LeasingTermContainer_content_container}>
                        <input className={styles.LeasingTermContainer_content_number} min='1' max='60' onChange={changeNumber} type="number" value={term} />
                        <p className={styles.LeasingTermContainer_content_description}>мес.</p>
                    </div>
                    <InputRange min={min} max={max} changeNumber={changeNumber} value={term} />
                </div>
                :
                <div className={styles.LeasingTermContainer_container}>
                    <div className={styles.LeasingTermContainer_content_container}>
                        <input className={styles.LeasingTermContainer_content_number} min='1' max='60' onChange={changeNumber} type="number" value={term} />
                        <p className={styles.LeasingTermContainer_content_description}>мес.</p>
                    </div>
                    <InputRange min={min} max={max} changeNumber={changeNumber} value={term} />
                </div>
            }
        </div>
    );
};

export default LeasingTermContainer;