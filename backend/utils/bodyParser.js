//isteğin body kısmındaki veriye erişebilmek için parça parça gelen  bütün bytleri
//birleştirip fonksiyonun çağırıldığı yere return et 


const bodyParser = async (req) => {

    return new Promise((reseolve, reject) => {
        try {
            let body = "";
            // frontend'den body'nin her parçası geldiğinde onu al ve yukarıdaki stringe ekle
            req.on("data", (chunk) => {

                body += chunk;
            });

            //yükleme bittiğinde json verisini js verisine çevir
            req.on("end", () => {

                //fonkisyonun çağırşdığı yere body içeriğini return et
                reseolve(JSON.parse(body));
            })
        } catch (err) {
            //hata oluşursa hatayı döndür
            reject(err)
        }
    });




};

module.exports = bodyParser;