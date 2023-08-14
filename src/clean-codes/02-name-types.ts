(() => {

    /**
     * NOMBRES POR TIPOS:
     * 
     * ARRAYS: TIENEN QUE DESCRIBIR QUE SON LISTAS de algo con significado semantico
     * BOOLEAN: TIENEN QUE QUE DESCRIBIR QUE ES UN VALOR BOOLEANO COMO ISfruit, SHOWfruitL de algo con significado semantico
     * FUNCIONES: DEBEN COMENZAR CON EL VERBO DE LA FUNCION A EJECUTAR y con significado semantico
     * 
     */

    // arreglo de temperaturas celsius
    const temperatureCelciousList = [33.6, 12.34];

    // Dirección ip del servidor
    const ipAdressServer = '123.123.123.123';

    // Listado de usuarios
    const usersInfoList = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    const userEmailsList = usersInfoList.map( user => user.email );

    // Variables booleanas de un video juego
    const canJumping = false;
    const canRun = true;
    const hasItems = false;
    const isLoading = false;

    // Otros ejercicios
    // tiempo inicial
    const startTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    const finalTime = new Date().getTime() - startTime;


    // Funciones
    // Obtiene los libros
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    function getBooksFromUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
    // obtiene el área de un cuadrado basado en sus lados
    function calculateSquareArea( side: number ) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    function printJob() {
        throw new Error('Function not implemented.');
    }
    
    




})();