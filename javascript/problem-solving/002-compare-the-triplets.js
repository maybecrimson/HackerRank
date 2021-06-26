// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let result = [0, 0];

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            result[0]++;
        } else if (a[i] < b[i]) {
            result[1]++;
        }
    }
    return result;
}