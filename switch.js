switchSetup = function (initialState, switchCallback, elementId, externalUpdate, paletteOverride, styleOverride) {
  var domElement = document.getElementById(elementId);

  var dataContext = {
    switchCallback: switchCallback,
    guid: generateGuid(),
    switchState: new ReactiveVar(initialState),
    style: style(paletteOverride, styleOverride),
    update: externalUpdate // an external ReactiveVar that changes the switch state
  };

  renderedView = Blaze.renderWithData(Template.switch, dataContext, domElement);
};

Template.switch.helpers({
  openState: function () {
    var data = Template.instance().data;
    return data.switchState.get();
  },
  style: function () {
    var data = Template.instance().data;
    return css.styleString(data.style.general);
  },
  switchLabel: function () {
    var data = Template.instance().data;

    if (data.switchState.get()) {
      return css.styleString(css.merge(data.style.switchLabelBase, data.style.switchLabelOpen));
    }
    else {
      return css.styleString(css.merge(data.style.switchLabelBase, data.style.switchLabelClosed));
    }
  },
  nub: function () {
    var data = Template.instance().data;
    data.switchState.set(data.update.get()); // external changes will trigger redraw

    if (data.switchState.get()) {
      return css.styleString(css.merge(data.style.switchBase, data.style.open));
    }
    else {
      return css.styleString(css.merge(data.style.switchBase, data.style.closed));
    }
  }
});

Template.switch.events({
  'click .switch': function (event, template) {
    var newState = !template.data.switchState.get();
    template.data.switchState.set(newState);
    template.data.switchCallback(newState);
  }
});