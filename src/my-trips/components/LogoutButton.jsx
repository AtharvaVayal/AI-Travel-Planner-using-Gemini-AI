import { useNavigate } from "react-router-dom";

function LogoutButton() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <button onClick={handleLogout} className='mt-5 bg-red-500 text-white py-2 px-4 rounded'>
            Logout
        </button>
    );
}

export default LogoutButton;
