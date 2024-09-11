export default async function Home({ params }) {
  const API_BASE = process.env.NEXT_PUBLIC_API_URL;
  const data = await fetch(`${API_BASE}/product/${params.id}`, { cache: "no-store" });
  const product = await data.json();
  console.log({ product, category: product.category });
  // const id = params.id;
  return (
    <div className="m-4">
      <h1>Product</h1>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.category.name}</p>
    </div>
  );
}
