import './characterCard.css';

const CharacterCard = (props) => {
  const { personaje } = props;
  return (
    <section className="card mb-3" style={{ maxWidth: 450 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={personaje.image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{personaje.name}</h5>
            <p className="card-text mb-2 d-flex">
            <span
                className="dot-status"
                style={{backgroundColor:personaje.status === "Alive"? "green": personaje.status === "Dead"? "red": "gray",}}/>
              {personaje.status} - {personaje.species}
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Primer aparición en:
              </small>
              <br />
              {personaje.origin.name}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CharacterCard