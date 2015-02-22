Tinytest.add('Test Switch Styles', function (test) {
  var s = style();

  // XXX: these are provisional, and brittle. just enough to make sure that I don't break too much as I monkey around with straightsix
  var expectedGeneralStyle = "border: 1px solid rgba(229,229,229,1);position:relative;display:inline-block;height:2em;width:5em;background:rgba(255,255,255,1);border-radius:1000px;cursor:pointer;overflow:hidden;margin-top:0.25em;font-weight:600;text-transform:uppercase;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;"
  test.equal(css.styleString(s.general), expectedGeneralStyle, "Expected " + expectedGeneralStyle);

  var expectedSwitchBaseStyle = "display:inline-block;height:100%;width:40%;border-radius:75%;-webkit-transition: margin-left cubic-bezier(0.34,1.61,0.7,1) 250ms;-moz-transition: margin-left cubic-bezier(0.34,1.61,0.7,1) 250ms;transition: margin-left cubic-bezier(0.34,1.61,0.7,1) 250ms;"
  test.equal(css.styleString(s.switchBase), expectedSwitchBaseStyle, "Expected " + expectedSwitchBaseStyle);
});