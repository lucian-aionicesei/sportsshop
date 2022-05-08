import Product from "./Product";

export default function ProductList({products}) {
  return (
    <section className="product-list">
      {products.map (p =><Product {...p}/>)}
    </section>
  );
}
