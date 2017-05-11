var loadJsonFixture = require('./load-json');

describe('loadJsonFixture', () => {
  it('loads json from the fixture directory', () => {
    var json = loadJsonFixture('simple.json')
    expect(json).to.eql({ 'name': 'Bruce' });
  });
});
