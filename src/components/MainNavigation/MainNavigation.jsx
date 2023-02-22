import { Header, StyledNavLink } from './MainNavigation.styled';

export const MainNavigation = () => {
    return (
        <>
      <Header>
        <nav>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
                    <StyledNavLink to="/movies">
                        Movies</StyledNavLink>
        </nav>
      </Header>
    </>
  );
}