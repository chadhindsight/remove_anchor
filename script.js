function removeUrlAnchor(url){
    // Use the built in replace method to work with string input
    return url.replace(/#.*/gi,"");
}