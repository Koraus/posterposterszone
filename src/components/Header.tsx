import logoUrl from '../assets/imgs/logo.svg';
import cartUrl from '../assets/imgs/cart-ico.svg';
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { paths } from '../main';
import { useRecoilValue } from 'recoil';
import { cartRecoil } from '../cartRecoil';
import { favoritesRecoil } from '../favoriteRecoil';

const Nav = () => {

  const cart = useRecoilValue(cartRecoil);
  const favorites = useRecoilValue(favoritesRecoil);

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

      <ul css={[ulCss, { flex: 1 },]}>
        <li css={{ marginRight: "60px", }}>
          <NavLink to={paths.home} css={linklCss}> Home</NavLink>
        </li>
        <li css={{ marginRight: "60px", }}>
          <NavLink to={paths.delivery} css={linklCss}> Delivery</NavLink>
        </li>
        <li css={{ marginRight: "60px", }}>
          <NavLink to={paths.about} css={linklCss}> About us</NavLink>
        </li>
      </ul>

      <img src={logoUrl} alt="logo" css={{
        width: '50px',
        height: '50px',
        display: 'block',
        flex: 1,
      }} />
      <div css={{ flex: 1, display: "flex", justifyContent: "center", alignItems: 'center', }}>
        <div css={[linklCss, { marginRight: "60px" }]} >
          <NavLink to={paths.search} css={linklCss}> Search</NavLink>
        </div>
        <div css={[linklCss, { position: "relative", marginRight: "60px" }]}>
          <NavLink to={paths.liked} css={linklCss}> Liked</NavLink>
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
            {favorites.length || 0}
          </div>
        </div>
        <div css={{ display: "flex", }}>

          <div css={[linklCss, { marginRight: "10px", position: "relative" }]}>
            <NavLink to={paths.cart} css={linklCss}> Cart</NavLink>
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
              {cart.length || 0}
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
