function mapMaker(input) {

  var map = [];

  input.forEach((row) => {
    for (let index = 0; index < row.length; index++) {
      const cell = row[index];
      if (cell == '.') {
        map.push('0');
      } else {
        map.push('1');
      }
    }
  })

  return map;
}

test('mapMaker creates one row, without bombs', () => {
  var input = ['.'];
  const fact = ['0'];
  expect(mapMaker(input)).toEqual(fact);
});

test.skip('mapMaker shows bombs', () => {
  var input = ['*'];
  const fact = ['*'];
  expect(mapMaker(input)).toEqual(fact);
});
