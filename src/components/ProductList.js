import Product from "./Product";

export default function ProductList({ products, setBasket }) {
  return (
    <section className="product-list">
      {products.map((p) => (
        <Product key={p.id} setBasket={setBasket} {...p} />
      ))}
    </section>
  );
}
