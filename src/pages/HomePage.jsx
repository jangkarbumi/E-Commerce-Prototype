import Navbar from "../components/Navbar"
import ItemCard from "../components/ItemCard"
import products from "../data/products.js"

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 px-4 py-6">
        {products.map((p) => (
          <ItemCard
            key={p.id}
            itemName={p.name}
            seller={p.seller}
            place={p.place}
            price={p.priceTag}
            itemImg={p.image}
            product={p}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;