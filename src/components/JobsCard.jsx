 import "bootstrap/dist/css/bootstrap.min.css";
function JobCard({ imageSrc, title, text, lastUpdated }) {
    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img 
                src={imageSrc} 
                className="img-fluid rounded-start" 
                alt={title} 
                style={{ objectFit: "cover", height: "100%", width: "100%" }} 
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    {`Last updated ${lastUpdated}`}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      );

}

export default JobCard;