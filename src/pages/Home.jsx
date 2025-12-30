function Home() {
  return (
    <div className="container mt-5">
      
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1>Find Your Perfect Home Today</h1>
        <p>
          Discover verified residential and commercial properties across prime locations.
        </p>
        <button className="btn btn-primary me-2">Browse Properties</button>
        <button className="btn btn-outline-dark">Contact Agent</button>
      </div>

      {/* About Us */}
      <section className="mb-5">
        <h3>Who We Are</h3>
        <p>
          PrimeNest Properties is a trusted real estate consultancy helping buyers,
          sellers, and investors find the right property with complete transparency.
        </p>
      </section>

      {/* Why Choose Us */}
      <section>
        <h3>Why Choose Us</h3>
        <ul>
          <li>Verified Properties</li>
          <li>Zero Hidden Charges</li>
          <li>Expert Property Advisors</li>
          <li>Legal & Documentation Support</li>
          <li>Residential & Commercial Deals</li>
        </ul>
      </section>

    </div>
  );
}

export default Home;
