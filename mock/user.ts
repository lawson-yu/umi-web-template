import { defineMock } from 'umi';

const withResponseInfo = (data: any) => ({
  data,
  code: 200,
  info: 'success',
});

export default defineMock({
  'GET /api/users': withResponseInfo({ id: 1, name: 'foo' }),
});
