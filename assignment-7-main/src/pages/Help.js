import React from "react";

function Help() {
  const helpItems = [
    {
      title: "How to Cancel a Ticket",
      date: "Updated: June 12, 2025",
      highlight: "Step-by-step guide to cancel your booking.",
      image: "https://picsum.photos/300?random=61",
    },
    {
      title: "Refund Policy Explained",
      date: "Updated: June 5, 2025",
      highlight: "Know when and how refunds are processed.",
      image: "https://picsum.photos/300?random=62",
    },
    {
      title: "Booking for a Group?",
      date: "Guide: June 20, 2025",
      highlight: "Learn about group discounts and bookings.",
      image: "https://picsum.photos/300?random=63",
    },
    {
      title: "Facing Payment Issues?",
      date: "Help Updated: June 8, 2025",
      highlight: "Troubleshoot failed or delayed payments.",
      image: "https://picsum.photos/300?random=64",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">🆘 Help & Support</h2>
      <div className="row">
        {helpItems.map((item, index) => (
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
                  📌 {item.highlight}
                </p>
                <button className="btn btn-outline-primary w-100">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Help;
