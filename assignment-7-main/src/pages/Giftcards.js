import React from "react";

function Giftcards() {
  const giftcards = [
    {
      title: "₹500 Gift Card",
      date: "Ideal for occasional treats",
      highlight: "Valid across all movies & events",
      image: "https://picsum.photos/300?random=61",
    },
    {
      title: "₹1000 Gift Card",
      date: "Perfect for families",
      highlight: "Can be used over multiple bookings",
      image: "https://picsum.photos/300?random=62",
    },
    {
      title: "₹2000 Gift Card",
      date: "Best value option",
      highlight: "Includes bonus cashback offers",
      image: "https://picsum.photos/300?random=63",
    },
    {
      title: "Custom Gift Card",
      date: "You set the value",
      highlight: "Great for any special occasion",
      image: "https://picsum.photos/300?random=64",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">🎁 BookyShow Gift Cards</h2>
      <div className="row">
        {giftcards.map((card, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow">
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">
                  🛍 {card.date} <br />
                  💳 {card.highlight}
                </p>
                <button className="btn btn-success w-100">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-5" />
      <div className="text-center text-muted">
        <small>
          All gift cards are valid for 12 months from the date of purchase.
        </small>
      </div>
    </div>
  );
}

export default Giftcards;
