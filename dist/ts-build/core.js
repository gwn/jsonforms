"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uischema_registry_1 = require("./core/uischema.registry");
var renderer_service_1 = require("./core/renderer.service");
var styling_registry_1 = require("./core/styling.registry");
var schema_service_1 = require("./core/schema.service");
/**
 * Global JSONForms object that holds services and registries.
 */
var JsonForms = (function () {
    function JsonForms() {
    }
    JsonForms.rendererService = new renderer_service_1.RendererService();
    JsonForms.jsonFormsServices = [];
    JsonForms.uischemaRegistry = new uischema_registry_1.UISchemaRegistryImpl();
    JsonForms.stylingRegistry = new styling_registry_1.StylingRegistryImpl();
    return JsonForms;
}());
exports.JsonForms = JsonForms;
/**
 * Annotation for registering a class as JSONForms service.
 * @param config
 * @constructor
 */
// Disable rule because it is used as an decorator
// tslint:disable:variable-name
exports.JsonFormsServiceElement = function (config) { return function (cls) {
    JsonForms.jsonFormsServices.push(cls);
}; };
// tslint:enable:variable-name
exports.instantiateSchemaService = function (schema) {
    JsonForms.schemaService = new schema_service_1.SchemaServiceImpl(schema);
};
//# sourceMappingURL=core.js.map