import logoUrl from '../assets/imgs/logo.svg';
import likeUrl from '../assets/imgs/liked-ico.svg';
import cartUrl from '../assets/imgs/cart-ico.svg';


const Nav = () => {

  const ulCss = {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  }
  const linklCss = {
    color: '#000',
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    paddingRight: '20px',
    cursor: 'pointer',
  }

  return (
    <nav css={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
    }}>

      <ul css={ulCss}>
        <li css={linklCss}>shop</li>
        <li css={linklCss}>delivery</li>
        <li css={linklCss}>about us</li>
      </ul>

      <img src={logoUrl} alt="logo" css={{
        width: '50px',
        height: '50px',
        display: 'block',
      }} />
      <div css={linklCss}>
        search
      </div>
      <div>
        <img src={likeUrl} alt="" />
      </div>
      <div>
        <img src={cartUrl} alt="" />
      </div>
    </nav>
  )
};

export const Header = () => {
  return (
    <header>
      <Nav />
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      </div>
    </header>
  );
}
