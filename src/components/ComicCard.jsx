export default function ComicCard({ image, title, key }) {
  return (
    <>
      <div className="col">
        <div className="card" key={key}>
          <div className="card-image"></div>
          <img src={image} alt={title} />
          <div className="card-content">{title}</div>
        </div>
      </div>
    </>
  );
}
