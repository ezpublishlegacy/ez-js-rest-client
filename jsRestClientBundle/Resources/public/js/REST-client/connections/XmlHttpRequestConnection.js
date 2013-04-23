var XmlHttpRequestConnection = (function() {
    "use strict";

    /**
     * Creates an instance of XmlHttpRequestConnection object
     *
     * @constructor
     */
    var XmlHttpRequestConnection = function () {

        this.xhr_ = new XMLHttpRequest();

        /**
         * Basic request implemented via XHR technique
         *
         * @method request
         * @param method {string} request method ("POST", "GET" etc)
         * @param url {string} requested REST resource
         * @param data {JSON}
         * @param headers {object}
         * @param callback {function} function, which will be executed on request success
         */
        this.execute = function(request, callback) {

            var XHR = this.xhr_;

            // Create the state change handler:
            XHR.onreadystatechange = function() {
                if (XHR.readyState != 4) return; // Not ready yet
                if (XHR.status >= 400) {
                    callback(XHR.status, XHR.responseText);
                    return;
                }
                // Request successful
                callback(false, XHR.responseText);
            };


            if (request.httpBasicAuth) {
                XHR.open(request.method, request.url, true, request.user, request.password);
            } else {
                XHR.open(request.method, request.url, true);
            }


            for (var headerType in request.headers) {
                XHR.setRequestHeader(
                    headerType,
                    request.headers[headerType]
                );
            }

            XHR.send(request.body);
        };
    };

    // static method
    XmlHttpRequestConnection.isCompatible = function(){
        return !!window.XMLHttpRequest;
    }

    return XmlHttpRequestConnection;


}());