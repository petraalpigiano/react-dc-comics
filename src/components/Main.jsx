import ComicList from "./ComicList";

export default function Main() {
  return (
    <>
      <div className="background-teenTitans">
        <div className="container current-series">CURRENT SERIES</div>
      </div>
      <div className="background-main">
        <ComicList />
        <div className="container content-button">
          <button>LOAD MORE</button>
        </div>
      </div>
    </>
  );
}
