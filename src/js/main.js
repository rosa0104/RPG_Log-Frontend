/**
 * Created by kraus on 21.08.2016.
 */
function sendData() {
    function buildParams() {
        var author = document.getElementById("author-field").value;
        var date = document.getElementById("date-field").value;
        var text = document.getElementById("text-field").value;
        return "author-field=" + author + "&date-field=" + date + "&text-field=" + text;
    }

    function callBack(){
        var entryList = JSON.parse(request.responseText);
        var htmlList = "";
        for (var i=0; i<entryList.length;i++) {
            htmlList = htmlList +"<li>" +  entryList[i] + "</li>";
        }

        document.getElementById("result").innerHTML = htmlList;
    }

    var request = new XMLHttpRequest();
    request.open("POST", "http://localhost:8080/rpglog/entry", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = callBack;

    request.send(buildParams());
}