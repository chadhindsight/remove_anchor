function removeUrlAnchor(url){
    // Use the built in replace method to do stuff
    return url.replace(/#.*/gi,"");
}