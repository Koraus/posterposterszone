import logoUrl from '../assets/imgs/logo.svg';
import likeUrl from '../assets/imgs/liked-ico.svg';
import cartUrl from '../assets/imgs/cart-ico.svg';

const Nav = () => {

  return (
    <nav>
      <ul>
        <li>all posters</li>
        <li>delivery</li>
        <li>about us</li>
      </ul>
    </nav>
  )
};

export const Header = () => {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
    }}>
      <div>
        <img src={logoUrl} alt="" style={
          {
            display: 'block',
            maxHeight: '50px',
          }
        } />
      </div>
      <Nav />
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",


      }}>
        <div>
          <img src={likeUrl} alt="" />
        </div>
        <div>
          <img src={cartUrl} alt="" />
        </div>
      </div>
    </header>
  );
}
