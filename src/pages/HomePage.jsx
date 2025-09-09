import Navbar from "../components/Navbar"
import ItemCard from "../components/ItemCard"
import products from "../data/product.js"

function HomePage() {

  return (
    <>
        <Navbar  />
        <div className="grid grid-cols-3 gap-x-4 gap-y-4 px-4 py-6">
            {products.map((p) => (
              <ItemCard
                key={p.id}
                itemName={p.name}
                seller={p.seller}
                place={p.place}
                price={p.priceTag}
                itemImg={p.image}
                />
            ))}
        </div>
    </>
  )
}

export default HomePage