// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let maxSum = 0;
    let minSum = 0;
    arr.sort();

    for (let i = 0; i < arr.length - 1; ++i) {
        minSum += arr[i];
    }
    for (let i = 1; i < arr.length; ++i) {
        maxSum += arr[i];
    }
    console.log(minSum, maxSum)

}