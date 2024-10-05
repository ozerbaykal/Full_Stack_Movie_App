const http = require("http");
const getRequest = require("./methods/get");

const postRequest = require("./methods/post");
const deleteRequest = require("./methods/delete");
const defaultRequestRequest = require("./methods/default");

//1.server oluştur
const server = http.createServer((req, res) => {
    //bütün cevaplara eklenicek ortak veri tipi header'ı ekleyelim
    res.setHeader("Content-Type", "application/json")

    //gelen isteğin method türüne göre cleint'a farklı ceavapar göndereceğiz
    //kod kalabalığı olmaması için isteklere cevap gönderecel olan fonk. ları ayrı dosyalarda tanımladık.
    switch (req.method) {
        case "GET":
            return getRequest(req, res);
        case "POST":
            return postRequest(req, res);
        case "DELETE":
            return deleteRequest(req, res);
        default:
            //cevabı client'a gönder
            return defaultRequestRequest(req, res);
    }
});

//2 belirli porta gelen istekleri dinle
const port = 3030;

server.listen(port, () => {
    console.log(` server ${port} gelen istekleri dinlemeye başladı`);
});
