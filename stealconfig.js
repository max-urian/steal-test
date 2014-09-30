System.config({
    baseURL: "/",
    paths: {
        jquery: "bower_components/jquery/dist/jquery.min.js"                        
    },
    map: {
        "jquery/jquery": "jquery"
    },
    meta: {jquery: { exports: "jQuery" } }
});