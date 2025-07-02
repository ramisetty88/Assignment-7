import React from "react";

function Corporates() {
  const corporateOffers = [
    {
      title: "Bulk Movie Booking",
      date: "Available Year-Round",
      highlight: "Host company movie nights at scale.",
      image: "https://picsum.photos/300?random=51",
    },
    {
      title: "Private Screening",
      date: "On Request",
      highlight: "Book an entire theatre for your team.",
      image: "https://picsum.photos/300?random=52",
    },
    {
      title: "Team Building Events",
      date: "Flexible Dates",
      highlight: "Engaging workshops & screenings for HR.",
      image: "https://picsum.photos/300?random=53",
    },
    {
      title: "Corporate Gift Cards",
      date: "Starts at ₹500",
      highlight: "Perfect rewards for clients or employees.",
      image: "https://picsum.photos/300?random=54",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">🏢 Corporate Entertainment</h2>
      <div className="row">
        {corporateOffers.map((offer, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow">
              <img
                src={offer.image}
                className="card-img-top"
                alt={offer.title}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{offer.title}</h5>
                <p className="card-text">
                  🗓 {offer.date} <br />
                  💼 {offer.highlight}
                </p>
                <button className="btn btn-info text-white w-100">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-5" />
      <p className="text-center text-muted">
        Email us at <strong>corporate@bookyshow.com</strong> to create your
        custom entertainment plan.
      </p>
    </div>
  );
}

export default Corporates;
