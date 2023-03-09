import { Footer, Herobanner, Newsletter, Navbar, Collections } from "../components";

export default function Home() {
  return (
    <>
      <div className="container mx-auto p-5">
        <Navbar />
        <Herobanner />
        <Collections />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}
