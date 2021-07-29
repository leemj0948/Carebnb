import styled from 'styled-components';
export const PaymentWrap = styled.div`
  padding-bottom: 10%;
  font-family: 'Open Sans Condensed';
  .icon {
    cursor: pointer;
  }
`;
export const PamentHeader = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
  font-size: 3rem;
  font-weight: 600;
  padding: 2rem 0;
  .arrow {
    font-size: 2.5rem;
    padding-top: 0.5rem;
  }
`;
export const PamentBody = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 0 auto;
`;
export const Left = styled.div`
  width: 46%;
  h1 {
    font-size: 2rem;
    font-weight: 600;
    padding: 1rem 0;
  }
  p {
    font-size: 1.3rem;
    color: gray;
    padding: 0.5rem 0 1rem;
  }
  .bold {
    font-weight: 600;
    font-size: 1.5rem;
    padding: 0.5rem 0;
    color: black;
  }
`;

export const Right = styled.div`
  width: 46%;
  height: 26rem;
  border: 1px solid #dddddd;
  border-radius: 25px;
  position: sticky;
  right: 10%;
  top: 10%;
  h1 {
    font-size: 2rem;
    font-weight: 600;
    padding: 1rem 0;
  }
  .flex-row {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    .summary {
      padding: 0 1rem;
    }
  }
  img {
    width: 10rem;
    border-radius: 10px;
    height: 10rem;
  }
  p {
    font-size: 1.3rem;
    color: gray;
    padding: 0.5rem 0;
  }
  .bold {
    font-weight: 600;
    font-size: 1.5rem;
    color: black;
  }
  .total {
    border-top: 1px solid #dddddd;
    padding: 1rem;
    .space-around {
      display: flex;
      justify-content: space-between;
    }
  }
`;
export const Notice = styled.div`
  border-top: 1px solid gray;
  font-size: 1rem;
  padding: 1rem 0;
`;
