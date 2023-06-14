import GameSavingLoader from '../GameSavingLoader';
import GameSaving from '../GameSaving';

jest.setTimeout(15000);

test('check GameSavingLoader', async () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  const saving = await GameSavingLoader.load();
  expect(saving).toEqual(new GameSaving(expected));
});
