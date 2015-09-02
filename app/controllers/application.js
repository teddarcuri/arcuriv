import Ember from 'ember';

export default Ember.Controller.extend({
    // This is the logic that determines which pages to hide the main nav on
    isIndex: false,
    navClasses: " ",
    hireBtnClasses: "pill-btn",
    currentPathChange: function () {
        var currentPath = this.get("currentPath");
        var isIndex = currentPath ? currentPath.indexOf("index") === 0 : false;
        this.set("isIndex", isIndex);

        $("#main-logo").velocity("callout.bounce", {         duration: 2000,
            easing: "spring",
            complete: function() {
                $("#main-logo").velocity({ rotateZ: "0deg"}, 0);
            }
        });

        if ( this.get("isIndex") == true ) {
            // this.set("navClasses", "index-page");
            // this.set("hireBtnClasses", "index-page pill-btn");
        } else {
            this.set("navClasses", "");
            this.set("hireBtnClasses", "pill-btn");
        }

    }.observes('currentPath').on("init")
});
