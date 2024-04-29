import logoUrl from '../assets/imgs/logo.svg';
import likeUrl from '../assets/imgs/liked-ico.svg';
import cartUrl from '../assets/imgs/cart-ico.svg';
import { css } from '@emotion/react';


const Nav = () => {

  const ulCss = {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  }


  const linklCss = css`
    color: #000;
    text-decoration: none;
    font-size: 15px;
    font-weight: 400;
    padding-right: 60px;
    cursor: pointer;
    &:hover {
      filter: drop-shadow(0 0 1rem #000);
    };
    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: black;
      transition: width .3s;
    };
    &:hover::after {
      width: 100%;
    }

  `

  return (
    <nav css={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>

      <ul css={[ulCss, { flex: 1 }]}>
        <li css={linklCss}>Shop</li>
        <li css={linklCss}>Delivery</li>
        <li css={linklCss}>About us</li>
      </ul>

      <img src={logoUrl} alt="logo" css={{
        width: '50px',
        height: '50px',
        display: 'block',
        flex: 1,
      }} />
      <div css={{ flex: 1, display: "flex", justifyContent: "center", alignItems: 'center', }}>
        <div css={linklCss}>
          search
        </div>
        <div>
          <img src={likeUrl} alt="" />
        </div>
        <div>
          <img src={cartUrl} alt="" />
        </div>
      </div>
    </nav >
  )
};

export const Header = () => {
  return (
    <header
      css={{
        paddingTop: '20px',
        paddingBottom: '20px',
        borderBottom: '1px solid #D9D9D9',
      }}
    >
      <Nav />
    </header>
  );
}
