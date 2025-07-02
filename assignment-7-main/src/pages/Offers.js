import React from "react";

function Offers() {
  const offers = [
    {
      title: "Buy 1 Get 1 Free",
      date: "Valid till: June 30, 2025",
      highlight: "Applicable on select movie tickets using XYZ Bank cards.",
      image: "https://picsum.photos/300?random=51",
    },
    {
      title: "50% Off on Food Combos",
      date: "Valid: Weekends Only",
      highlight: "Save big on popcorn and drinks at select cinemas!",
      image: "https://picsum.photos/300?random=52",
    },
    {
      title: "Student Discount Days",
      date: "Ongoing Offer",
      highlight: "Flat ₹75 off with valid student ID.",
      image: "https://picsum.photos/300?random=53",
    },
    {
      title: "Super Saver Wednesdays",
      date: "Every Wednesday",
      highlight: "Movie tickets starting at ₹99!",
      image: "https://picsum.photos/300?random=54",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">🎁 Latest Offers</h2>
      <div className="row">
        {offers.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                  🗓 {item.date} <br />
                  💡 {item.highlight}
                </p>
                <button className="btn btn-outline-success w-100">
                  Grab Offer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
