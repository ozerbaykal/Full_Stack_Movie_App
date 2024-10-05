const defaultRequest = (req, res) => {
    //cevabı göndermeden önce drum kodunu belirle
    res.statusCode = 404

    //cevaba gönderilecek içeriğin tipini header olarak ekle
    //res.setHeader("Content-Type", "application/json")

    //cevap'ın içeriğini belike
    res.write(JSON.stringify({ message: "istek adresi tanımsız" }))

    //
    res.end()




}



module.exports = defaultRequest;
