function removeUrlAnchor(url){
    // Use the built in replace method to work with string
    return url.replace(/#.*/gi,"");
}