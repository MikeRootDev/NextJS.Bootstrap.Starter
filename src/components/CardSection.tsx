import Card from "./Card";

export default function CardSection() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <Card />
        </div>

        <div className="col-lg-4">
          <Card />
        </div>

        <div className="col-lg-4">
          <Card />
        </div>
      </div>
    </div>
  );
}
