// Complete the plusMinus function below.
function plusMinus(arr) {
    let positives = 0
    let negatives = 0
    let zeros = 0
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] > 0) {
            const tens = 1 / arr.length
            positives = positives + tens;
        }
    }
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] < 0) {
            const tens = 1 / arr.length
            negatives = negatives + tens;
        }
    }
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === 0) {
            const tens = 1 / arr.length
            zeros = zeros + tens;
        }
    }

    console.log(positives)
    console.log(negatives)
    console.log(zeros)

}