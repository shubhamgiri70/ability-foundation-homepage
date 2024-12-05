import "bootstrap/dist/css/bootstrap.min.css";
import "./events.css";

const Events = () => {
  return (
    <div className="events">
      <div className="container">
        <div className="event-text text-center">
          <h2>Snapshots from our recent events</h2>
          <p>Glimpses from our most recent events.</p>
        </div>
        <div className="event-images d-flex">
          <img
            src="https://abilityfoundation.org/2024-new/wp-content/gallery/thumbs/cache/AG_4470.JPG-nggid0211-ngg0dyn-400x400x100-00f0w010c011r110f110r010t010.JPG"
            alt="01"
          />
          <img
            src="https://abilityfoundation.org/2024-new/wp-content/gallery/thumbs/AG_4493.JPG"
            alt="02"
          />
          <img
            src="https://abilityfoundation.org/2024-new/wp-content/gallery/thumbs/AG_4490.JPG"
            alt="03"
          />
          <img
            src="https://abilityfoundation.org/2024-new/wp-content/gallery/thumbs/AG_4490.JPG"
            alt="03"
          />
          <img
            src="https://abilityfoundation.org/2024-new/wp-content/gallery/thumbs/AG_4490.JPG"
            alt="03"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
