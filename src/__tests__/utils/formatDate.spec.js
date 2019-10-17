import { formatDate } from '../../utils/';

test('should return a readable date format', () => {
    expect(formatDate('2019-05-15T10:59:12.703Z')).toBe('May 15, 2019');
});
