import { useQueryClient } from '@tanstack/react-query';
import { useUser } from '../../contexts/authContext';
import config from '../../utils/config';

function LogoutButton() {
  const queryClient = useQueryClient();
  const { setUser } = useUser();

  function handleClickLogout() {
    queryClient.clear();
    sessionStorage.removeItem(config.BROWSER_STORAGE_USER_KEY);
    setUser(null);
  }
  return (
    <button className="btn" type="button" onClick={handleClickLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;
