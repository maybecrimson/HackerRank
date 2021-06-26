// Complete the breakingRecords function below.
function breakingRecords(scores) {
    let scoreMayor = scores[0];
    let scoreMenor = scores[0];
    let mayores = 0;
    let menores = 0;

    for (let i = 0; i < scores.length; ++i){
        if (scores[i] > scoreMayor){
            mayores += 1;
            scoreMayor = scores[i]
        }
        else if (scores[i] < scoreMenor){
            menores += 1;
            scoreMenor = scores[i]
        }
    };

    return [mayores, menores];
}