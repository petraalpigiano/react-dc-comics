import comics from "../data/comics";
import ComicCard from "./ComicCard";

export default function ComicList() {
  return (
    <>
      <div className="container content-main">
        <div className="row">
          {comics.map(function (comic) {
            return (
              <ComicCard
                image={comic.thumb}
                title={comic.title}
                key={comic.id}
              ></ComicCard>
            );
          })}
        </div>
      </div>
    </>
  );
}
