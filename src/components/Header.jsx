export default function Header() {
  return (
    <>
      <header className="container content-header">
        <img
          className="header-logo"
          src="/p_img/dc-logo.png"
          alt="DC logo"
        ></img>
        <nav>
          <a className="header-link" href="#">
            CHARACTER
          </a>
          <a className="header-link" href="#">
            COMICS
          </a>
          <a className="header-link" href="#">
            MOVIES
          </a>
          <a className="header-link" href="#">
            TV
          </a>
          <a className="header-link" href="#">
            GAMES
          </a>
          <a className="header-link" href="#">
            COLLECTIBLES
          </a>
          <a className="header-link" href="#">
            VIDEO
          </a>
          <a className="header-link" href="#">
            FANS
          </a>
          <a className="header-link" href="#">
            NEWS
          </a>
          <a className="header-link" href="#">
            SHOP
          </a>
        </nav>
      </header>
    </>
  );
}
