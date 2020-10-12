import { useAuthentication } from 'context/AuthContext';

export default function Home() {
  const { loggedIn, login, logout, user } = useAuthentication();

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
