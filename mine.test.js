
function showBoard(bombs) {

  const board = [];

  bombs.forEach((row, index) => {
    let rowHints = "";
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const cell = row[colIndex];
      if (cell === "*") {
        rowHints += "*";
      } else {
        rowHints += "0";
      }
    }
    board.push(rowHints);
  });

  return board;
}

test('map with bombs', () => {
  const map = ['*'];
  const expected = ['*'];
  expect(showBoard(map)).toEqual(expected);
});

test('map has correct size', () => {
  const map = ['***', '***'];
  const expected = ['***', '***'];
  expect(showBoard(map)).toEqual(expected);
});

test('map has shows empty cells', () => {
  const map = ['...', '...'];
  const expected = ['000', '000'];
  expect(showBoard(map)).toEqual(expected);
});

test.skip('map counts bombs to the right', () => {
  const map = ['.*'];
  const expected = ['1*'];
  expect(showBoard(map)).toEqual(expected);
});
