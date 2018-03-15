import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

const Home = () => (
  <div>
  <Header textAlign="center" as="h3">Welcome To Notes</Header>
    <Link to="/notes">
    Enter Notes
    </Link>
  </div>
)

export default Home;