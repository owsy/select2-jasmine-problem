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
    });

    it('does not crash', function () {
        expect($('#selectTest').val()).toBe('2');
        $('#selectTest').select2().val('1');
        expect($('.select2').val()).toBe('1');
        $('#selectTest').select2().val('2');
        expect($('.select2').val()).toBe('2');
    });
});
