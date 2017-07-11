define([
    'js/data/dataStore',
    'js/data/models/tree/BaseTreeModel'

], function(dataStore, treeModel) {

    var adminDataStore = dataStore.extend({
        
        defaults:{
           tree:null
        },
        
        initialize: function() {
            dataStore.prototype.initialize.apply(this);
            this.set('tree', new treeModel());
        }
    });
    return new adminDataStore();
});
