import React, { FC,useEffect,useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { carCostSlice } from '../../store/reducers/getCarCostReducer';
import InputRange from '../UI/InputRange/InputRange';
import styles from './CarCostContainer.module.css'
import numberWithSpaces from '../../hooks/numberWithSpace'

interface ICarCostContainer {
    min: string,
    max: string,
}

const CarCostContainer: FC<ICarCostContainer> = ({min, max}) => {

    let [carPrice, setCarPrice] = useState(1000000)

    const { number } = useAppSelector(state => state.carCostSlice)
    const { carCost } = carCostSlice.actions
    const dispatch = useAppDispatch()
    const { isLoading } = useAppSelector(state => state.loaderSlice)

    const changePrice = (e:any) => {
        setCarPrice(e.target.value)
    }

    const changeNumber = (e:any) => {
        setCarPrice(e.target.value)    
    }

    useEffect(() => {      
        if (carPrice >= 1000000 && carPrice <= 6000000) {
            dispatch(carCost(carPrice))
        } else if (carPrice <= 1000000) {
            dispatch(carCost(1000000))
        } else {
            dispatch(carCost(6000000))
        }
    }, [changeNumber])

    return (
        <div className={styles.CarCostContainer}>
            <h3 className={styles.CarCostContainer_title}>Стоимость автомобиля</h3>
            {
                isLoading
                ?
                <div className={styles.CarCostContainer_container}>
                    <div className={styles.CarCostContainer_container_disabled}></div>
                    <div className={styles.CarCostContainer_content_container}>
                        <input className={styles.CarCostContainer_content_number} min='1000000' max='6000000' onChange={changeNumber} type="number" value={carPrice} />
                        <p className={styles.CarCostContainer_content_description}>₽</p>
                    </div>
                    <InputRange min={min} max={max} changeNumber={changeNumber} value={carPrice} />
                </div>
                :
                <div className={styles.CarCostContainer_container}>
                    <div className={styles.CarCostContainer_content_container}>
                        <input className={styles.CarCostContainer_content_number} min='1000000' max='6000000' onChange={changeNumber} type="number" value={carPrice} />
                        <p className={styles.CarCostContainer_content_description}>₽</p>
                    </div>
                    <InputRange min={min} max={max} changeNumber={changeNumber} value={carPrice} />
                </div>
            }

        </div>
    );
};

export default CarCostContainer;