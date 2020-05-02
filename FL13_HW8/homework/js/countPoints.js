function countPoints(gameResults){
return gameResults.reduce((totalPoints, current) => {totalPoints += current[0] > current[2] ? 3 : current[0]===current[2] ? 1 : 0;return totalPoints;},0);
}

console.log(countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']));
