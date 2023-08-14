(() => {

    // función para obtener información de una película por Id
    function getMovieInformationById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getCastInformationById( castId: string ) {
        console.log({ castId });
    }

    // funcion para obtener el bio del actor por el id
    function getCastBioById( castId: string ) {
        console.log({ castId });
    }
    
    // Crear una película
    function createAMovie(title: string, description: string, rating: number, cast: string[] ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    


})();
