class ProductManager {
    constructor() {
      this.products = [];
       
       this.nextProductId = 1; 
    }
  
    
    addProduct(title, description, price, thumbnail, code, stock) {

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son obligatorios");
            return;
          }

          const existingProduct = this.products.find(product => product.code === code);
    if (existingProduct) {
      console.log("El código de producto ya existe");
      return;
    }


      const product = {
        id: this.nextProductId,
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        code: code,
        stock: stock
      };
      this.nextProductId++;
      this.products.push(product);
    }
  
    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
          return product;
        } else {
          console.log("Producto no encontrado");
        }
      }

    
    getAllProducts() {
      return this.products;
    }
  
    
    getProductByCode(code) {
      return this.products.find(product => product.code === code);
    }
  
    
    updateStock(code, newStock) {
      const product = this.getProductByCode(code);
      if (product) {
        product.stock = newStock;
      }
    }
  
    
    deleteProductByCode(code) {
      this.products = this.products.filter(product => product.code !== code);
    }
  }
  
  // PROCESO DE TESTING

  const manager = new ProductManager();
  
  // Agregar productos
  manager.addProduct("Producto1", "Descripción A", 200, "imagen1", "001", 50);
  manager.addProduct("Producto2", "Descripción B", 1900, "imagen2", "002", 20);
  manager.addProduct("Producto3", "Descripción C", 900, "imagen3", "003", 100);
  
 
  const products = manager.getProductById(2);
  console.log(products);
  
  //  obtener un producto inexistente
  const nonExistentProduct = manager.getProductById(4);
 
  // Obtener todos los productos
  const allProducts = manager.getAllProducts();
  console.log(allProducts);
  
  // Obtener un producto por código
  const product = manager.getProductByCode("002");
  console.log(product);
  
  // Actualizar el stock de un producto
  manager.updateStock("002", 15);
  
  // Eliminar un producto por código
  manager.deleteProductByCode("001");
  
  // Obtener todos los productos 
  const updatedProducts = manager.getAllProducts();
  console.log(updatedProducts);
  