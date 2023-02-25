import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader/Loader'

import { Header, StyledNavLink } from './MainNavigation.styled';

export const MainNavigation = () => {
    return (
        <>
      <Header>
        <nav>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </Header>

      <Suspense fallback={Loader()}>
        <Outlet />
      </Suspense>
    </>
  );
}