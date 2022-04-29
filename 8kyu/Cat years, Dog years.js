var humanYearsCatYearsDogYears = function(humanYears) {
  return [humanYears, (15 + ((humanYears > 2) ? (9 + (humanYears - 2) * 4) : humanYears == 2 ? 9 : 0) ), (15 + ((humanYears > 2) ? (9 + (humanYears - 2) * 5) : humanYears == 2 ? 9 : 0))];
}
