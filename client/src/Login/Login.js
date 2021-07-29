import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import {
  IoCloseOutline,
  IoLogoFacebook,
  IoLogoApple,
  IoLogoGoogle,
  IoMailOutline,
} from 'react-icons/io5';
import { connect } from 'react-redux';
import { modalHandler } from '../redux/header/header.action';

const { Kakao } = window;
const Login = ({ onModal }) => {
  const [firstNumber, setFirstNumber] = useState('');
  const [switchs, setSwitchs] = useState(false);
  const clickHandler = () => {
    let getNumber = document.getElementById('number');
    let Numbers = getNumber.options[getNumber.selectedIndex].value;
    let getFocus = document.getElementById('phoneNumber');
    getFocus.focus();
    setFirstNumber(Numbers);
    setSwitchs(true);
  };
  const clickEventOff = () => {
    let getId = document.getElementById('phoneNumber');
    if (getId.value.length > 0) {
      setSwitchs(true);
    } else {
      setSwitchs(false);
    }
  };
  const kakaoLogin = () => {
    Kakao.Auth.login({
      success: function (response) {
        Kakao.API.request({
          url: '/v2/user/me',
          success: function (response) {
            console.log(response);
            //토큰값 받고 history.push할것
          },
          fail: function (error) {
            console.log(error);
          },
        });
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };
  return (
    <Form>
      <LoginModal>
        <Header>
          <CloseBtn onClick={onModal}>
            <IoCloseOutline style={{ fontSize: '2.5vw' }} />
          </CloseBtn>
          <Title>Log in or sign up</Title>
        </Header>
        <Body>
          <BodyHeader>Welcome to Carebnb.</BodyHeader>
          <PhoneInfo>
            <CountryPack>
              Nation/Region
              <Country name="Number" id="number">
                <option value="+82" selected>
                  KR (+82)
                </option>
                <option value="+33">FR (+33)</option>
                <option value="+86">CN (+86)</option>
                <option value="+34">SP (+34)</option>
              </Country>
            </CountryPack>
            <PhonePack
              onClick={() => {
                clickHandler();
              }}
            >
              <Placeholder>
                <PhName switchs={switchs}>Phone Number</PhName>
              </Placeholder>
              <InputNumber>
                <FirstNumber>{switchs && firstNumber}</FirstNumber>
                <Phone type="tel" id="phoneNumber"></Phone>
              </InputNumber>
            </PhonePack>
          </PhoneInfo>
          <Info
            onClick={() => {
              clickEventOff();
            }}
          >
            I'll check the phone number by phone or text. Regular text message
            rates and There will be a data charge.
          </Info>
          <Btn
            margin="1vw 0"
            color="white"
            backColor="rgb(208, 52, 97)"
            border="none"
          >
            Continue
          </Btn>
          <OR>
            <Line />
            <Text>or</Text>
            <Line />
          </OR>
          <Btn onClick={() => kakaoLogin()}>
            <Logo>
              <IoLogoFacebook style={{ color: 'blue', fontSize: '1.5vw' }} />
            </Logo>
            Continue with KakaoTalk
          </Btn>
          <Btn>
            <Logo>
              <IoLogoGoogle style={{ fontSize: '1.5vw' }} />
            </Logo>
            Continue with Google
          </Btn>
          <Btn>
            <Logo>
              <IoLogoApple style={{ fontSize: '1.5vw' }} />
            </Logo>
            Continue with Apple
          </Btn>
          <Btn>
            <Logo>
              <IoMailOutline style={{ fontSize: '1.5vw' }} />
            </Logo>
            Continue with Email
          </Btn>
        </Body>
      </LoginModal>
    </Form>
  );
};
const Form = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-family: 'Open Sans Condensed';
  font-size: 1.3rem;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2000;
`;
const LoginModal = styled.div`
  position: fixed;
  width: 40%;
  height: 42vw;
  left: 30%;
  top: 10%;
  z-index: 2001;
  background-color: white;
  border-radius: 1.5vw;
  overflow: hidden;
`;
const Header = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  height: 5vw;
  border-bottom: 0.1px solid #484848;
`;
const CloseBtn = styled.div`
  position: absolute;
  left: 2vw;
  cursor: pointer;
`;
const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 16vw 3vw 1vw;
  height: 36vw;
  overflow: scroll;
`;
const BodyHeader = styled.div`
  margin-top: 1vw;
  font-size: 2vw;
`;
const Title = styled.h1``;
const PhoneInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vw;
  width: 100%;
`;
const CountryPack = styled.div`
  padding: 0.5vw;
  width: 100%;
  height: 4vw;
  border: 1px solid #484848;
  border-radius: 4px;
  font-size: 1rem;
  color: #484848;
  cursor: pointer;
`;
const Country = styled.select`
  width: 100%;
  border: none;
  font-size: 1vw;
  padding-top: 0.5vw;
`;
const PhonePack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 4vw;
  border: 1px solid #484848;
  border-radius: 4px;
`;
const Placeholder = styled.div`
  position: relative;
  height: 55%;
`;
const PhName = styled.p`
  position: absolute;
  width: 11vw;
  height: 2.5vw;
  font-size: 1.6vw;
  left: 1vw;
  top: 1vw;
  color: #484848;
  transform: ${props => props.switchs && `scale(70%) translate(-30%,-40%)`};
  transition: all 0.5s;
  z-index: 99;
`;
const InputNumber = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`;
const FirstNumber = styled.span`
  position: absolute;
  padding-left: 1vw;
  top: 12px;
  width: 12%;
  font-size: 1.4vw;
`;
const Phone = styled.input`
  margin-left: 15%;
  padding-top: 5px;
  font-size: 1.4vw;
  width: 83%;
  outline: none;
  cursor: auto;
`;
const Info = styled.p`
  margin: 0.9vw 0;
  font-size: 1rem;
  color: #484848;
`;
const Btn = styled.div`
  margin: ${props => props.margin || '1vw 0'};
  padding: 1.5vw 0;
  position: relative;
  width: 100%;
  height: 4vw;
  color: ${props => props.color || ''};
  border: ${props => props.border || '1px solid gray'};
  border-radius: 1vw;
  background-color: ${props => props.backColor || ''};
  text-align: center;
  font-size: 1.2rem;
  cursor: pointer;
`;
const OR = styled.div`
  margin: 1vw 0;
  display: flex;
  width: 100%;
`;
const Line = styled.span`
  margin-top: 0.5vw;
  width: 43%;
  height: 1px;
  background-color: gray;
`;
const Text = styled.span`
  width: 15%;
  text-align: center;
  font-size: 1.3vw;
  color: gray;
`;
const Logo = styled.span`
  position: absolute;
  left: 2vw;
  top: 1vw;
`;
const mapDispatchToProps = dispatch => ({
  onModal: () => dispatch(modalHandler()),
});

export default connect(null, mapDispatchToProps)(Login);
