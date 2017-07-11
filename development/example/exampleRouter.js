define([

    'js/router',
    'dataStore',
    'js/views/sectionsStack/examples/DualFocusStackPageView',
    'js/views/sectionsStack/examples/SliderStackPageView'
    
], function(Router, dataStore, DualFocusStackPageView, SliderStackPageView) {

    var exampleRouter = Router.extend({
        routes: {
            // Define URL routes

            'dualFocusStack':'showSectionsStackPage',
            'sliderStack':'showSectionsStackPage',
            'error':'showError',
            // Default
            '*actions': 'defaultView'
        },
        switchableViews:[
            'DualFocusStackPageView',
            'SliderStackPageView'
        ],
        initialize: function() {
            Router.prototype.initialize.apply(this);
        },
        
        
        showSectionsStackPage:function(){
            var path = window.location.href,
                selectedPageIdentifier = path.substr(path.lastIndexOf('#') + 1),
                newView = "";
            switch(selectedPageIdentifier)
            {
                case 'dualFocusStack':
                    newView = DualFocusStackPageView
                    break;
                case 'sliderStack':
                    newView = SliderStackPageView
                    break;
            }
            this.switchView(newView, null, true);
        },     
        showError:function(){
            //console.log("Error");
            //this.switchView(Error);
        },
        switchView: function(view, viewType, showHeader)
        {
            /*if(!showHeader){
                this.headerView.hide();
            }else{
                this.headerView.show();
            }*/
            Router.prototype.switchView.apply(this,[view,viewType]);
        },   
        defaultView: function() {
            window.location.hash = "dualFocusStack";
        }
        
    });
    
    var initialize = function() {
        var router = new exampleRouter;
        Backbone.history.start();
    };
    
    return {
        initialize: initialize
    };
});
