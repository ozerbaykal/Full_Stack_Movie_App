const bodyParser = require("./utils//bodyParser")

const postRequest = (req, res) => {

    if (req.url === "/api/movies") {
        //isteğin body kısmına eriş

        res.end("film oluşturuldu")
    } else {
        res.writeHead(404)
        res.end("geçersiz yola istek atıldı")
    }



}


module.exports = postRequest;
