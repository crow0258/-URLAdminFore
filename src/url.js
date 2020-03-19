let url = "%address%";
if(url.indexOf("http://")<0){
    url = "http://" + url + "/api/";
}
export {url};