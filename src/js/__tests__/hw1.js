import ErrorRepository from '../hw1';

test('test ErrorRepository translate', () => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate(1)).toBe('Ошибка № 1');
});

test('test ErrorRepository translate if Error not at list', () => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate(4)).toBe('Unknown error');
});
