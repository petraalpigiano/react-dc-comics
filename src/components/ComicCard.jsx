export default function ComicCard({ image, title, id }) {
  return (
    <>
      <div className="col">
        <div className="card" id={id}>
          <div className="card-image">
            <img src={image} alt={title} />
          </div>
          <div className="card-content">{title}</div>
        </div>
      </div>
    </>
  );
}
