define([
    'js/data/requestFactory',
    'js/data/models/BaseModel',
    'js/data/collections/BaseCollection'
    
], function(requestFactory, BaseModel, BaseCollection) {

    /**
     * @class BaseTreeModel contains common data for all tree items
     */
    var BaseTreeModel = BaseModel.extend({
        type:"Tree",
        childrenLoaded:false,
        parentModel:null,
        rootModel:null,
        additionalIds:null,
        idAttribute:'itemId',
        requiresReload:false,
        defaults:{
            itemId: null,
            displayName: "",
            genericCount:0,
            parentId:null,
            depth: 0,
            childrenCount: 0,
            canEdit:true,
            isOpen:false,
            isSelected:false,
            children: null
        },
        
        initialize:function()
        {
            this.listenTo(this, 'change:isSelected', this.onItemSelected, this);
            BaseModel.prototype.initialize.apply(this);
        },
       url:function(){
           
           var jsonURL = "../testjson/tree";
           if(this.loadParams.loadType === "getChildren"){
               jsonURL += "-item-" + this.loadParams.itemId
           }
           jsonURL +=  ".json";
           console.log("json static url = " + jsonURL); 
           return jsonURL;
        },
        parse:function(response)
        {
            if(!response.children)
            {
                response.children = [];
            }
            return this.parseChildren(response);
        },
        
        parseChildren:function(response)
        {
            if(this.get('children') && this.get('children').length > 0)
            {
                this.additionalIds = _.pluck(response.children, 'itemId');
                this.get('children').add(response.children, {parse:true});
                response = _.omit(response, 'children');
            }
            else
            {
                response.children = new BaseCollection(response.children, {
                    parse: true, model:this.constructor
                });
            }
            return response;
        },
        
        resetChildren:function()
        {
            if(this.get('children') !== null){
                this.get('children').reset();
                this.childrenLoaded = false;
            }
        },
        
        getLoadOffset:function()
        {
            if(this.get('children') !== null)
            {
                var lastPos = this.get('children').length;
                return Math.ceil(lastPos/this.rootModel.get('limit')) + 1;
            }
            return 1;
        },
        
        onLoadSuccess:function()
        {
            this.setParentModels();
            if(this.get('children').length === this.get('childrenCount'))
            {
                this.childrenLoaded = true;
            }
        },
        
        setParentModels:function()
        {
            var that = this;
            _.each(this.get('children').models, function(mod)
            {
                mod.parentModel = that;
                mod.rootModel = that.rootModel;
            });
        },
        
        toggleOpenItemChildren:function(open)
        {
            _.each(this.get('children').models, function(mod)
            {
                mod.set('isOpen', open);
            });
        },
        
        toggleOpenNestedChildren:function(open)
        {
            this.set('isOpen', open);
            _.each(this.get('children').models, function(mod)
            {
                mod.toggleOpenNestedChildren(open);
            });
        },
        
        onItemSelected:function()
        {
            //to be overridden - should be handled separately for individual models
        },
        
        getIsAlreadyLoaded:function()
        {
            return false;//this.get('isLoaded');
        },
        
        destroy:function(loadOptions)
        {
            this.loadParams.loadType = "delete";
            BaseModel.prototype.destroy.apply(this, [loadOptions]);
        },
        getTreeItem:function(itemId)
        {
            if(this.get('itemId') === itemId)
            {
                return this;
            }
            return this.getChildMatch(this.get('children'), 'children', 'itemId', itemId);
        },
        nestedModels:{
            children: BaseCollection
        }
    });
    return BaseTreeModel;
});

