import Navbar from "../components/Navbar"
import ItemCard from "../components/ItemCard"

function HomePage() {


  return (
    <>
        <Navbar />
        <div className="grid grid-cols-3 gap-x-4 gap-y-4 px-4 py-6">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
    </>
  )
}

export default HomePage
