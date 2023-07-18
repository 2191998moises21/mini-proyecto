/* eslint-disable react/prop-types */
const StayCard = ({ stay }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img
          src={stay.photo}
          alt={stay.title}
          className="card-img-top rounded"
        />
        {stay.superHost && (
          <span className="badge bg-primary position-absolute top-0 start-0 mt-2 ms-2">
            SuperHost
          </span>
        )}
        <div className="card-body">
          <h5 className="card-title">{stay.title}</h5>
          <div className="row">
            <div className="col">
              <p className="card-text">
                {stay.city}, {stay.country}
              </p>
              <p className="card-text">
                <strong>Tipo:</strong> {stay.type}
              </p>
              <p className="card-text">
                <strong>Camas:</strong> {stay.beds}
              </p>
            </div>
            <div className="col">
              <p className="card-text">
                <strong>Huespedes:</strong> {stay.maxGuests}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="rating">
                    <i className="bi bi-star-fill text-warning"></i>
                  </span>
                  <span className="rating-value">{stay.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
