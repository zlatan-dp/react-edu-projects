import { Suspense } from 'react';
import { Container, Header, Link, Nav } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <Link to="/" end>
            Counter
          </Link>
          <Link to="/modal" end>
            Modal
          </Link>
          <Link to="/quiz" end>
            Quiz
          </Link>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
