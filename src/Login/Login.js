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

const Login = () => {
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
  return (
    <Form>
      <LoginModal>
        <Header>
          <CloseBtn>
            <IoCloseOutline style={{ fontSize: '2.5vw' }} />
          </CloseBtn>
          <Title>로그인 또는 회원가입</Title>
        </Header>
        <Body>
          <BodyHeader>케어비엔비에 오신 것을 환영합니다.</BodyHeader>
          <PhoneInfo>
            <CountryPack>
              국가/지역
              <Country name="Number" id="number">
                <option value="+82" selected>
                  한국 (+82)
                </option>
                <option value="+33">프랑스 (+33)</option>
                <option value="+86">중국 (+86)</option>
                <option value="+34">스페인 (+34)</option>
              </Country>
            </CountryPack>
            <PhonePack
              onClick={() => {
                clickHandler();
              }}
            >
              <Placeholder>
                <PhName switchs={switchs}>전화번호</PhName>
              </Placeholder>
              <InputNumber>
                <FirstNumber>{switchs && firstNumber}</FirstNumber>
                <Phone type="number" id="phoneNumber"></Phone>
              </InputNumber>
            </PhonePack>
          </PhoneInfo>
          <Info onClick={() => setSwitchs(false)}>
            전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및
            데이터 요금이 부과됩니다.
          </Info>
          <Btn
            margin="1vw 0"
            color="white"
            backColor="rgb(208, 52, 97)"
            border="none"
          >
            계속
          </Btn>
          <OR>
            <Line />
            <Text>또는</Text>
            <Line />
          </OR>
          <Btn>
            <Logo>
              <IoLogoFacebook style={{ color: 'blue', fontSize: '1.5vw' }} />
            </Logo>
            페이스북으로 로그인하기
          </Btn>
          <Btn>
            <Logo>
              <IoLogoGoogle style={{ fontSize: '1.5vw' }} />
            </Logo>
            구글로 로그인하기
          </Btn>
          <Btn>
            <Logo>
              <IoLogoApple style={{ fontSize: '1.5vw' }} />
            </Logo>
            Apple계정으로 로그인하기
          </Btn>
          <Btn>
            <Logo>
              <IoMailOutline style={{ fontSize: '1.5vw' }} />
            </Logo>
            이메일로 로그인하기
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
  background: rgba(0, 0, 0, 0.6);
  z-index: 2000;
`;

const LoginModal = styled.div`
  position: fixed;
  width: 40%;
  left: 30%;
  top: 0;
  z-index: 2001;
  background-color: white;
  border-radius: 1.5vw;
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
`;
const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 1vw 3vw;
  overflow: auto;
  /* overflow-y: auto; */
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
  border: 1px solid #484848;
  border-radius: 4px;
  font-size: 0.2vw;
  color: #484848;
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
  height: 100%;
`;
const PhName = styled.p`
  position: absolute;
  width: 11vw;
  height: 2.5vw;
  font-size: 1.6vw;
  left: 1vw;
  top: 1vw;
  color: #484848;
  transform: ${props => props.switchs && `scale(70%) translate(-30%,-25%)`};
  transition: all 0.5s;
`;
const InputNumber = styled.div`
  display: flex;
`;
const FirstNumber = styled.span`
  padding-left: 1vw;
  width: 12%;
`;
const Phone = styled.input`
  width: 80%;
`;
const Info = styled.p`
  margin: 0.9vw 0;
  font-size: 0.8vw;
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

export default Login;
