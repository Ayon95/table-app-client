import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import login from '../api/login';
import { useUser } from '../../../contexts/authContext';
import config from '../../../utils/config';

export default function useLogin() {
  const navigate = useNavigate();
  const { setUser } = useUser();

  return useMutation({
    mutationFn: login,
    onSuccess: data => {
      sessionStorage.setItem(config.BROWSER_STORAGE_USER_KEY, JSON.stringify(data));
      setUser(data);
      navigate('/');
    },
  });
}
