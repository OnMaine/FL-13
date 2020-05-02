function countPoints(gameResults){
  return gameResults.reduce((totalPoints, currentResult) => {
    const [resultA, resultB] = currentResult.split(':');
    let points = 1;
    if (resultA > resultB) points = 3;
    if (resultA < resultB) points = 0;
    totalPoints += points;
    return totalPoints;
  }, 0);
}

console.log(countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']));
