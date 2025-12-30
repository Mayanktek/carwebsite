function Contact() {
  return (
    <div className="container mt-5">
      <h2>Get in Touch</h2>
      <p>We’re here to help you find the best property deals.</p>

      <div className="mb-4">
        <p><strong>Address:</strong> MG Road, Bangalore – 560001</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Email:</strong> info@primenestproperties.com</p>
      </div>

      <form>
        <input className="form-control mb-2" placeholder="Full Name" />
        <input className="form-control mb-2" placeholder="Email Address" />
        <input className="form-control mb-2" placeholder="Mobile Number" />
        <select className="form-control mb-2">
          <option>Buy</option>
          <option>Sell</option>
          <option>Rent</option>
        </select>
        <textarea className="form-control mb-3" placeholder="Message"></textarea>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
