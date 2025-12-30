function PropertyCard({ property }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{property.title}</h5>
          <p><strong>Location:</strong> {property.location}</p>
          <p><strong>Price:</strong> {property.price}</p>
          <p><strong>Size:</strong> {property.size}</p>
          <p><strong>Status:</strong> {property.status}</p>
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
