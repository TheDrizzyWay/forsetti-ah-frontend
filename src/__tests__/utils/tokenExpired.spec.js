import { tokenExpired } from '../../utils';
const mockToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6Ijg1MDA3MDk1LTg1MWUtNDc3Ni1iZThhLTNlYmE2MmE1NzVmNiIsImlhdCI6MTU1ODM2MzI2MywiZXhwIjoxNTU4MzY2ODg3fQ.Kkvi3Afles9-PgEFxTfhALXK5HIHjd9WstMMEmAtGI4'

test('should return false for expired token', () => {
  expect(tokenExpired(mockToken)).toEqual(false);
});
