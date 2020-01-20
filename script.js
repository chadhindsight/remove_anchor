function removeUrlAnchor(url){
    // Use the built in replace method
    return url.replace(/#.*/gi,"");
}