/*
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(ar) {
    let acm = 0;
    for (let i = 0; i < ar.length; ++i) {
        acm = acm + ar[i];
    }

    return acm;
}