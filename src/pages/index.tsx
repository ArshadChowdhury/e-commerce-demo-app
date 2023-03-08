import { Footer, Herobanner, Newsletter, Navbar, Layout } from "../components";

export default function Home() {
  return (
    <>
      <div className="container mx-auto p-5">
        <Navbar />
        <Herobanner />
        {/* <div>
        <h2 className="text-center my-3 text-sky-800 text-2xl font-extrabold">Best Selling Products</h2>
        <p className="text-center text-black text-lg">Speakers of many variations</p>
        <Products />
      </div>
      <div>
        {["Product 1", "Product 2", "Product 3"].map((product)=> product)

        }
      </div> */}
      <Layout />
      <Newsletter />
      <Footer />
      </div>
    </>
  );
}
