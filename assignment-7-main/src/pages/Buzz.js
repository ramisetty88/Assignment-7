import React from "react";

function Buzz() {
  const buzzItems = [
    {
      title: "Top 10 Box Office Hits",
      date: "Updated: June 18, 2025",
      highlight: "See which movies are dominating the charts!",
      image: "https://picsum.photos/300?random=41",
    },
    {
      title: "Behind the Scenes - The Batman 2",
      date: "Revealed: June 10, 2025",
      highlight: "Exclusive insights from the set of Gotham.",
      image: "https://picsum.photos/300?random=42",
    },
    {
      title: "Stars on the Red Carpet",
      date: "Event: June 25, 2025",
      highlight: "A look at the best dressed celebs!",
      image: "https://picsum.photos/300?random=43",
    },
    {
      title: "Streaming Wars: Netflix vs Prime",
      date: "Analysis: June 16, 2025",
      highlight: "Who's winning the OTT race?",
      image: "https://picsum.photos/300?random=44",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">🚨 Entertainment Buzz</h2>
      <div className="row">
        {buzzItems.map((item, index) => (
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
                  🔥 {item.highlight}
                </p>
                <button className="btn btn-outline-danger w-100">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buzz;
