import React, { useState } from 'react';
import styled from 'styled-components';
import { Login } from '../../Components/Auth/Login/Login';
import { Register } from '../../Components/Auth/Register/Register';
import Carousel from '../../Components/Cards/Carousel/Carousel';

const AuthContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: hsla(259.4117647058824, 100%, 63%, 1);
  background-image: radial-gradient(circle at 15% 85%,  hsla(318, 80%, 97%, 1) 19%, transparent 84%), radial-gradient(circle at 31% 1%, hsla(161.47058823529412, 99%, 84%, 1) 12%, transparent 85%), radial-gradient(circle at 88% 87%, hsla(163, 90%, 78%, 1) 3.6400864520532363%, transparent 75.20902830975928%), radial-gradient(circle at 30% 27%, hsla(314, 91%, 59%, 1) 14%, transparent 90%);
  background-blend-mode: normal, normal, normal, normal;
`;

const LeftSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-right: 5px solid black;
`;

const RightSection = styled.div`
  width: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 5px solid black;
`;

export const AuthPages = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);

 

  const switchAuthHandler = () => {
    setIsLoginActive(prevState => !prevState);
  };

  return (
    <AuthContainer>
      <LeftSection>
        {isLoginActive ? (
          <Login switchAuthHandler={switchAuthHandler} />
        ) : (
          <Register switchAuthHandler={switchAuthHandler} />
        )}
      </LeftSection>
      <RightSection>
        <Carousel />
      </RightSection>
    </AuthContainer>
  );
};

export default AuthPages;