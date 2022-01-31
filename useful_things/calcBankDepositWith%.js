calcYearlyDepositIncome = (depositSize, percent) => {
    let months = 12;
    let totalIncome = depositSize;
    while (months != 0) {
        totalIncome += Math.floor(totalIncome / 100 * percent / 12);
        months--;
    }
    return totalIncome - depositSize;
} //вычисляет доход от годового вклада с капитализацией процентов