const optionsRequest = (req, res) => {
    //frontend' den bir post,put,patch,delete isteği atıldığı zaman tarayıcı öncelikle server'ın bu istek tiplerini kabul  ettiğini kontrol etmek amacıyla options http methoduyla istek atıyor.Eğer isteğe cevap göndermezsek yukarudaki  istek türlerini API ' ın kabul etmediğini zannediyor ve asıl isteği hiç bir zaman atmıyor.
    //Options isteği gelince doğru header'lar cevap gönderirsek(veri tipi vs) options 'ın arkasından gerçek ieteği atıyor

    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS"
    );

    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    res.end();

}

module.exports = optionsRequest;
