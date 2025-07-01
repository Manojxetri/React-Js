export default function Card({ name, price,category }) {
  return (
    <div className="card">
        <img src="#"></img>
      <h2 className="product-name">{name}</h2>
      <p className="product-price">{price}</p>
      <p className="category">{category}</p>
    </div>
  );
}
