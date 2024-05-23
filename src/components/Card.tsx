import Image from "next/image";

export default function Card() {
  const src =
    "https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png";

  return (
    <div className="card">
      <Image
        src={src}
        className="card-img-top"
        alt="..."
        width="100"
        height="200"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
      </div>
    </div>
  );
}
