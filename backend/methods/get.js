const fs = require("fs")


const getRequest = (req, res) => {
    //url'in temel adresini değişkene aktar(sondaki param hariç)

    const path = req.url.slice(0, 11)

    //url'in sonındaki id değerini değişkene aktardık
    const id = req.url.split("/")[3]

    //url ' ın sonundaki  parametrenin değerini al
    const param = req.url.split("=").pop().toLowerCase().trim();



    //yola id eklenirse bir film gönder

    if (path === "/api/movies" && id) {
        //1. json dosyasından filmleri al
        const data = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"))

        //2.url'deki id'ye karşılık gelen eleemanı dizi de ara
        const movie = data.find((i) => i.id === id);

        //3.eğer film bulunursa client'a gönder
        if (movie) {

            return res.end(JSON.stringify(movie))

        }
        //4.eğer film bulunamazsa hata gönder
        res.writeHead(404)
        return res.end(
            JSON.stringify({ message: "Aranılan film bulunamadı" })

        );

    };

    //temel url 'ye istek atılırsa bütün filmleri gönder
    if (path === "/api/movies") {

        //1. json 'dan verileri al
        const movies = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8")
        )
        //2.client cevap gönder

        //eğer parametre varsa filtrelenmiş  filmleri gönder
        if (param && param !== "/api/movies") {
            const filtred = movies.filter((movie) => movie.title.toLowerCase().includes(param))



            return res.end(JSON.stringify(filtred))


        }
        //eğerparametre yoksa bütün filmleri gönder
        return res.end(JSON.stringify(movies))







    }




    //yol yanlışsa hata gönder
    res.writeHead(404)
    res.end(JSON.stringify({ message: "yol bulunamadı bulunamadı" })
    )

};


module.exports = getRequest;