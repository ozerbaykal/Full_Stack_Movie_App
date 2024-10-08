const http = require("http");
const getRequest = require("./methods/get");

const postRequest = require("./methods/post");
const deleteRequest = require("./methods/delete");
const defaultRequestRequest = require("./methods/default");
const optionsRequest = require("./methods/options");
//1.server oluştur
const server = http.createServer((req, res) => {
    console.log(req.method)
    //bütün cevaplara eklenicek ortak veri tipi header'ı ekleyelim
    res.setHeader("Content-Type", "application/json")

    //kaynak paşlaşımında sorun yaşamamak için (Cors)
    res.setHeader("Access-Control-Allow-Origin", "*")

    //gelen isteğin method türüne göre cleint'a farklı ceavapar göndereceğiz
    //kod kalabalığı olmaması için isteklere cevap gönderecel olan fonk. ları ayrı dosyalarda tanımladık.
    switch (req.method) {
        case "GET":
            return getRequest(req, res);
        case "POST":
            return postRequest(req, res);
        case "DELETE":
            return deleteRequest(req, res);
        case "OPTIONS":
            return optionsRequest(req, res);



        default:
            //cevabı client'a gönder
            return defaultRequestRequest(req, res);
    }
});

//2 belirli porta gelen istekleri dinle
const port = 3030;

server.listen(port, () => {
    console.log(` server ${port} gelen istekleri dinlemeye başladı!!!`);
});
