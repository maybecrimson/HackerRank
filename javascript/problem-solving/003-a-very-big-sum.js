// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
    let acm = 0;
    for (let i = 0; i < ar.length; ++i) {
        const tens = ar[i]
        acm = acm + tens;
    }

    return acm;
}