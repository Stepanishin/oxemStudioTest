import React, { FC } from 'react';
import CarCostContainer from '../components/CarCostContainer/CarCostContainer';
import InitialFeeContainer from '../components/InitialFeeContainer/InitialFeeContainer';
import LeaseAmount from '../components/LeaseAmount/LeaseAmount';
import LeasingTermContainer from '../components/LeasingTermContainer/LeasingTermContainer';
import MonthlyPayment from '../components/MonthlyPayment/MonthlyPayment';
import Title from '../components/Title/Title';
import SubmitBtn from '../components/UI/SubmitBtn/SubmitBtn';
import styles from './LeasingCar.module.css'


const LeasingCar:FC = () => {

    return (
        <main className={styles.LeasingCar}>
            <div className={styles.LeasingCar_container}>
                <Title title={'Рассчитайте стоимость автомобиля в лизинг'}/>
                <div className={styles.LeasingCar_data_container}>
                    <CarCostContainer min={'1000000'} max={'6000000'} />
                    <InitialFeeContainer min={'10'} max={'60'} />
                    <LeasingTermContainer min={'1'} max={'60'} />
                </div>
                <div className={styles.LeasingCar_total_container}>
                    <LeaseAmount />
                    <MonthlyPayment />
                    <SubmitBtn title={'Оставить заявку'} />
                </div>
            </div>
        </main>
    );
};

export default LeasingCar;