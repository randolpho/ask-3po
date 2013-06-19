"use strict";

var DecisionProxy = Object.freeze({

    getDecision: function GetDecision(question, callback) {
        var uri = "/decision?q=" + encodeURIComponent(question);
        this.send(uri, "GET", null, callback);
    },

    // callback will be called with three parameters: json, status, response. 
    //   json       the JSON Parsed response as an object
    //   status     the http status code returned
    //   response   the raw response text; json will be null if the response didn't parse as JSON. 
    send: function Send(uri, method, data, callback) {
        var request = new XMLHttpRequest();
        request.open(method, uri, true);
        request.responseType = "text";
        request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        request.setRequestHeader("Accept", "application/json");

        request.onreadystatechange = function ResponseHandler() {
            if (request.readyState != 4) return; // skip the other states; only interested in finished state
            var json = null;
            var response = request.responseText;
            try {
                json = JSON.parse(response);
            }
            catch (e) { /* do nothing */ }
            callback(json, request.status, response);
        }
        if (data && typeof (data) !== "string") {
            data = JSON.stringify(data);
        }
        request.send(data);
    }
});