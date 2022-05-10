const htmlDom = require('./html.js');

const html = `<form>
  <select name="selectTest" id="selectTest" class="select2">
    <option value="1">Label 1</option>
    <option selected value="2">Label 2</option>
  </select>
</form>
`;

describe('Loading select2', function () {
    beforeEach(function () {
        htmlDom.setup(html);
        $('.select2').select2();
    });

    it('does not crash', function () {
        expect(1).toBe(1);
    });
});
