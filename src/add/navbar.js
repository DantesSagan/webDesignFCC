import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../const/router';

export default function Navbar() {
  return (
    <header style={{ textAlign: 'center' }}>
      <div>
        {/* Main page */}
        <div>
          <Link to={ROUTES.Main}>
            <h2>Main</h2>
          </Link>
        </div>
        {/* Cats page */}
        <div>
          <Link to={ROUTES.Cats}>
            <h2>Cats page</h2>
          </Link>
        </div>
      </div>
    </header>
  );
}
