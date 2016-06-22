var t         = require("tcomb-form");
var catalogue = require("tcomb-conditional-forms").catalogue;
var tic       = require("tcomb-input-collection");

var Components = require("../components");

catalogue.add({
    name: "Text",
    fields: {},
    schemaGetter: function (fieldFormValue) {
        return {
            type: "string",
            required: fieldFormValue.required
        };
    },
    component: t.form.Textbox
});

catalogue.add({
    name: "Tags",
    fields: {},
    schemaGetter: function (fieldFormValue) {
        return {
            type: "list",
            of: {
                type: "string"
            },
            required: fieldFormValue.required
        };
    },
    component: tic.SimpleStringList
});

catalogue.add({
    name: "Multiselect",
    fields: {
        allowedValues: true
    },
    schemaGetter: function (fieldFormValue) {
        return {
            type: "list",
            of: {
                type: "string",
                allowedValues: fieldFormValue.allowedValues || [],
                required: false
            },
            required: fieldFormValue.required
        };
    },
    component: tic.Multiselect,
    options: {
        config: {
            columns: 2
        }
    }
});

catalogue.add({
    name: "Checkbox",
    fields: {
        required: false
    },
    schemaGetter: function (fieldFormValue) {
        return {
            type: "string",
            allowedValues: ["True", "False"],
            required: true
        };
    },
    component: Components.TcombInputs.Checkbox
});

catalogue.add({
    name: "Select",
    fields: {
        allowedValues: true
    },
    schemaGetter: function (fieldFormValue) {
        return {
            type: "string",
            allowedValues: fieldFormValue.allowedValues || [],
            required: fieldFormValue.required
        };
    },
    component: Components.TcombInputs.Select
});

catalogue.add({
    name: "Entity",
    fields: {
        required: false
    },
    schemaGetter: function (fieldFormValue) {
        return {
            type: "structure",
            shape: {
                entityId: {
                    type: "string"
                },
                Type: {
                    type: "string"
                },
                Status: {
                    type: "string"
                }
            },
            required: false
        };
    },
    component: Components.TcombInputs.Entity
});

catalogue.add({
    name: "Users List",
    fields: {},
    schemaGetter: function (fieldFormValue) {
        return {
            type: "list",
            of: {
                type: "string"
            }
        };
    },
    component: Components.TcombInputs.UsersList
});

catalogue.add({
    name: "Business Card List",
    fields: {
        required: false
    },
    schemaGetter: function (fieldFormValue) {
        return {
            type: "list",
            of: {
                type: "structure",
                shape: {
                    "Full Name": {
                        type: "string"
                    },
                    "Role": {
                        type: "string"
                    },
                    "Email Addresses": {
                        type: "list",
                        of: {
                            type: "structure",
                            shape: {
                                "Label": {
                                    type: "string"
                                },
                                "Email": {
                                    type: "string"
                                }
                            }
                        }
                    },
                    "Telephones": {
                        type: "list",
                        of: {
                            type: "structure",
                            shape: {
                                "Label": {
                                    type: "string"
                                },
                                "Number": {
                                    type: "string"
                                }
                            }
                        }
                    },
                    "Addresses": {
                        type: "list",
                        of: {
                            type: "structure",
                            shape: {
                                "Label": {
                                    type: "string"
                                },
                                "Address": {
                                    type: "string"
                                }
                            }
                        }
                    }
                }
            },
            required: false
        };
    },
    component: Components.TcombInputs.BusinessCardList
});

catalogue.add({
    name: "Textarea",
    fields: {},
    schemaGetter: function (fieldFormValue) {
        return {
            type: "string",
            required: fieldFormValue.required
        };
    },
    component: t.form.Textbox,
    options: {
        type: "textarea"
    }
});

catalogue.add({
    name: "Datepicker",
    fields: {},
    schemaGetter: function (fieldFormValue) {
        return {
            type: "string",
            required: fieldFormValue.required
        };
    },
    component: t.form.Textbox,
    options: {
        type: "date"
    }
});

catalogue.add({
    name: "Year Picker",
    fields: {},
    schemaGetter: function (fieldFormValue) {
        return {
            type: "string",
            required: fieldFormValue.required
        };
    },
    component: Components.TcombInputs.YearPicker
});

catalogue.add({
    name: "Country Picker",
    fields: {},
    schemaGetter: function (fieldFormValue) {
        return {
            type: "string",
            required: fieldFormValue.required
        };
    },
    component: Components.TcombInputs.CountryPicker
});

catalogue.add({
    name: "Number",
    fields: {},
    schemaGetter: function (fieldFormValue) {
        return {
            type: "number",
            required: fieldFormValue.required
        };
    },
    component: t.form.Textbox,
    options: {
        type: "number"
    }
});
