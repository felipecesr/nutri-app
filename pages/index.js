import { useEffect, useState } from 'react';
import netlifyAuth from '../netlifyAuth.js';

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);
  const [user, setUser] = useState(null);

  useEffect(() => {
    netlifyAuth.initialize((user) => {
      setLoggedIn(!!user);
      setUser(user);
    });
  }, [loggedIn]);

  const login = () => {
    netlifyAuth.authenticate((user) => {
      setLoggedIn(!!user);
      setUser(user);
      netlifyAuth.closeModal();
    });
  };

  const logout = () => {
    netlifyAuth.signout(() => {
      setLoggedIn(false);
      setUser(null);
    });
  };

  return (
    <>
      {loggedIn ? (
        <div>
          You are logged in!
          {user && <>Welcome {user?.user_metadata.full_name}!</>}
          <br />
          <button onClick={logout}>Log out here.</button>
        </div>
      ) : (
        <button onClick={login}>Log in here.</button>
      )}
    </>
  );
}
