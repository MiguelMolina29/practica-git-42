const request = require('request');
const {Banda} = require ('./Banda'); 

const obtenBanda = (banda) => {
    const URL = `http://www.theaudiodb.com/api/v1/json/1/search.php?s=${banda}`;
    request(URL , (error, response, body) => {
    
        if(error){
            console.log('Ocurrio un error');
        }
        else{
            //console.log('No hay error');
            //console.log(response.statusCode);
            //Parse JSON
            const res = JSON.parse(body)
            if(res.artists !== null){
                //console.log(res.artists[0].strArtist);
                //console.log(res.artists[0].strGenre);
                //console.log(res.artists[0].strMood);
                const { strArtist, strGenre, intFormedYear, strMood} = res.artists[0];
                const nuevabanda = new Banda (
                    strArtist,
                     strGenre,
                     intFormedYear,
                      strMood);
                      console.log(nuevabanda);
            }
            else{
                console.log(`No encontre a ${banda} o esta mal escrito`);
            }
            
        }
        
    
    });
}

obtenBanda('Juan Gabriel');
obtenBanda('Eminem');
obtenBanda('Charlie Puth');
