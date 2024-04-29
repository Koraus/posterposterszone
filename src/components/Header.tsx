import logoUrl from '../assets/imgs/logo.svg';
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
    margin-right: 60px;
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
          Search
        </div>
        <div css={[linklCss, { position: "relative" }]}>
          Liked
          <div css={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: 'gray',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '12px',
            marginLeft: '5px',
            position: 'absolute',
            bottom: '-10px',
            right: '-20px',
          }}>
            0
          </div>
        </div>
        <div css={{ display: "flex", }}>
          <div css={[linklCss, { marginRight: "10px", position: "relative" }]}> bag
            <div css={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              backgroundColor: 'gray',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '12px',
              marginLeft: '5px',
              position: 'absolute',
              bottom: '-10px',
              right: '-50px',
            }}>
              0
            </div>
          </div>

          <img src={cartUrl} alt="" css={{ maxHeight: "24px" }} />
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
        marginBottom: '20px',
      }}
    >
      <Nav />
    </header>
  );
}
