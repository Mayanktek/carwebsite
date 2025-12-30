import properties from "../data/properties";
import PropertyCard from "../components/PropertyCard";

function Properties() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Our Properties</h2>

      <div className="row">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <div className="text-center mt-4">
        <h5>Looking for something specific?</h5>
        <button className="btn btn-success">Enquire Now</button>
      </div>
    </div>
  );
}

export default Properties;
