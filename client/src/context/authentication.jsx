import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { toast } from 'react-toastify';
import LoadingScreen from '../components/loading-screen';

const AuthContext = React.createContext();

function AuthProvider(props) {
  const navigate = useNavigate();
  const [state, setState] = useState({
    loading: null,
    user: null
  });

  const adminLogin = async (userLoginData) => {
    const data = {
      email: userLoginData.email,
      password: userLoginData.password
    };
    try {
      // setState({ ...state, loading: true });
      const result = await axios.post(
        'http://localhost:4000/auth/admin/login',
        data
      );
      setState({ loading: true });
      const token = result.data.token;
      localStorage.setItem('token', token);
      const userDataFromToken = jwtDecode(token);
      setState({
        ...state,
        user: userDataFromToken,
        loading: false
      });
      toast.success(result.data.message);
      navigate('/admin/home');
    } catch (error) {
      console.log(error);
    } finally {
      setState({ ...state, loading: false });
    }
  };

  if (state.loading === true) {
    return <LoadingScreen />;
  }

  const adminLogout = () => {
    localStorage.removeItem('token');
    setState({
      ...state,
      user: null
    });
    navigate('/admin/login');
  };

  const login = async (userLoginData) => {
    const data = {
      email: userLoginData.email,
      password: userLoginData.password
    };
    try {
      //setState({ ...state, loading: true });
      const result = await axios.post('http://localhost:4000/auth/login', data);
      console.log(result);
      const token = result.data.token;
      localStorage.setItem('token', token);
      const userDataFromToken = jwtDecode(token);
      setState({
        ...state,
        user: userDataFromToken,
        loading: false
      });
      toast.success(result.data.message);
      navigate('/home');
    } catch (error) {
      toast.error(error.response.data.message);
      setState({
        ...state,
        loading: false
      });
      console.log(error);
    } finally {
      setState({
        ...state,
        loading: false,
        error: error
      });
    }
  };

  if (state.loading) return <LoadingScreen />;

  const logout = () => {
    localStorage.removeItem('token');
    setState({
      ...state,
      user: null
    });
    navigate('/login');
  };

  const isAuthenticated = Boolean(localStorage.getItem('token'));
  let isToken;
  if (isAuthenticated) {
    isToken = jwtDecode(localStorage.getItem('token'));
  }

  const register = async (data) => {
    try {
      setState({ ...state, loading: true });
      const result = await axios.post(
        'http://localhost:4000/auth/register',
        data
      );
      toast.success(result.data.message);
      navigate('/login');
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setState({ ...state, loading: false });
    }
  };

  if (state.loading) return <LoadingScreen />;

  return (
    <AuthContext.Provider
      value={{
        state,
        adminLogin,
        adminLogout,
        isAuthenticated,
        isToken,
        login,
        logout,
        register
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
