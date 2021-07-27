import styled from 'styled-components';

export const DropDownWrap = styled.div`
  button {
    border: none;
    background: none;
    padding: 0.7rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: left;
    border: 2px solid gray;
    border-radius: 10px;
    .vertical {
      display: flex;
      flex-direction: column;
      .accent {
        font-weight: 600;
      }
      .text {
        font-size: 1rem;
      }
    }
  }
  .active {
    display: block;
  }
  .inactive {
    display: none;
  }
  ul {
    list-style: none;
    li {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      .accent {
        font-weight: 500;
        font-size: 1.2rem;
      }
    }
  }
`;

export const DownArrowWrap = styled.span`
  font-size: 2rem;
`;
