import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAuthentication() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/unauthorized');
        }
    }, [user, navigate]);

    return user;
}
