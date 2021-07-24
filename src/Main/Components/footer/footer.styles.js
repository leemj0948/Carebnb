import styled from 'styled-components';
export const FooterBox = styled.div`
  /* margin-top: 3rem; */
  background-color: #dddddd;
  /* padding-top: 4.5rem; */
  z-index: 99999;
  /* position: absolute; */
  flex-direction: row;
  /* top: 50vw; */
  bottom: 0;
  right: 0;
  left: 0;
`;
export const FooterWrap = styled.div`
  display: flex;
  border-top: 1px solid #c1c1c1;
  justify-content: space-evenly;
  margin: 0 auto;
  width: 80%;
`;
export const MainFooter = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding: 0px 0px 15px 10px; */
  padding: 2vw 0;
  width: 100%;
  height: 15vh;
`;
export const CountrySetting = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 2vw 0;
  width: 20%;
`;
export const SnSInfo = styled.div`
  justify-content: space-between;
  padding: 2.5vw 0;
  display: flex;
  width: 10%;
  font-size: 23px;
`;

export const Text = styled.p`
  padding-top: 0.5rem;
`;
