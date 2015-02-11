define([
    'dojo/request',
    'dojo/dom',
    'dijit/registry',
    'dojo/_base/array',
    'dojo/_base/declare',
    'dijit/layout/ContentPane',
    './_ViewBaseMixin',
    'dojo/text!./templates/AppView.html',
    'dojo/i18n!../nls/common',
    "dojo/domReady!"
], function(request, dom, registry, array, declare, ContentPane, _ViewBaseMixin, template, nls) {

    return declare([_ViewBaseMixin], {
        templateString: template,
        nls: nls,

        postCreate: function(){
            this.inherited(arguments);
        }
    });
});
