let UrlQuery = function(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return '';
};

export default {
    baseUrl : "",
    lang: function(){
        return UrlQuery('language') || localStorage.lang || 'en'
    },
    appType : 1
}
