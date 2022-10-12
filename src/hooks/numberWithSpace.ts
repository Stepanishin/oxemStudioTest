// Функция ждя разделея числа между разпядами через пробел

const numberWithSpaces = (x:number|string) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default numberWithSpaces