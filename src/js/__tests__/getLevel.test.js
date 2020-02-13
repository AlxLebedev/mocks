import fetchData from '../http';
import getLevel from '../app';

jest.mock('../http');
beforeEach(() => {
  jest.resetAllMocks();
});

test('return current URI', () => {
  fetchData.mockReturnValue(JSON.stringify({}));
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('return current status', () => {
  fetchData.mockReturnValue({ status: 'ok' });
  expect(getLevel(1)).toContain('Ваш текущий уровень:');
});
