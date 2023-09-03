(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {

        private httpClient!: Object;
        
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        } 
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService!: ProductService;
        private mailer!: Mailer;

        loadProduct( id: number ) {
            this.productService.loadProduct( id );
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct( product );
        } 
        notifyClients() {
           this.mailer.sendEmail();
        }
    
    }
    

    class CartBloc {
        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }

    class Mailer {
        sendEmail() {
            console.log('Enviando correo a los clientes');
        }
    }


    const productBloc = new ProductBloc();
    const cartBloc = new CartBloc();
    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);








})();