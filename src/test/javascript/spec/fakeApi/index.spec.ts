import api from 'app/fakeApi/index';

describe('addition', () => {
    it('should add one plus one', () => {
      expect(api.add(1, 1)).toEqual(2);
    });
});
