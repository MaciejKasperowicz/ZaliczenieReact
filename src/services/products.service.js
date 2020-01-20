import products from "../mocks/products";

class ProductsService {
  static getProducts() {
    return products;
  }
  static getFeaturedProductsByCategory(category) {
    return products.filter(
      product => product.category === category && product.featured
    );
  }

  static getProductsByName(name) {
    return products.filter(product =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  static getProductsByManufacturer(maker) {
    return products.filter(product => product.manufacture === maker);
  }

  static getManufacturers() {
    return [...new Set(products.map(product => product.manufacture))];
  }
}

export default ProductsService;
