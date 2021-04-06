const getImagenPromesa = () => new Promise( (resolve) => resolve('https://asdasdasd.com'));
const getImagen = async () => {
    try {
        const api_key = 'Ty4tbOyPUVhPkLn29iqTB04AI6Zv7JCO';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    } catch (error) {
        console.error(error);
    }
};

getImagenPromesa().then( console.log );

getImagen();