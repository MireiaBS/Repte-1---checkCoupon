function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    // Teniendo en cuenta que la fecha vendría en formato MM/DD/AA, separado por comas o por barras, he creado este ejemplo para validar.
    // let enteredCode = '454X-3323-WE45';
    // let expirationDate = '26,11,2022';
    // let currentDate = '02,07,2022';
    // let correctCode; 

    if (Number(expirationDate.substring(6, 11)) > Number(currentDate.substring(6, 11))) {
        correctCode = true;
    } else if
        (
        (
            Number(expirationDate.substring(0, 2)) < Number(currentDate.substring(0, 2)) &&
            Number(expirationDate.substring(3, 5)) <= Number(currentDate.substring(3, 5))
        )
        || Number(expirationDate.substring(3, 5)) < Number(currentDate.substring(3, 5))
        || Number(expirationDate.substring(6, 11)) < Number(currentDate.substring(6, 11))
        )
    {
        correctCode = false;
    } else {
        correctCode = true;
    }
    
    //return ('El cupó ' + enteredCode + (correctCode ? ' és vàlid.' : ' està caducat.');
    return correctCode;
}
