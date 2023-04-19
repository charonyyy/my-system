import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Form = styled.form`
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
`;



function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        login(username, password)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                history.push('/');
            })
            .catch(err => {
                // console.log(err);
                alert('登录失败，请检查用户名和密码是否正确！');
            });
    }

    function login(username, password) {
        return axios.post('/login', { username, password });
      }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>登录</h1>
            <Form onSubmit={handleSubmit}>
                <Input type="text" value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="用户名"
                />
                <Input type="password" value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="密码"
                />
                <button type="submit">登录</button>
            </Form>
        </div>
    );
}

export default Login;