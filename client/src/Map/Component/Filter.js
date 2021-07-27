import React from 'react';
import styled from 'styled-components';

const Filter = props => {
  const { name } = props;
  console.log(name);
  return (
    <>
      {name.length > 0 &&
        name.map((elm, index) => {
          return (
            <>
              <Button>
                <Title key={index}>{elm}</Title>
              </Button>
            </>
          );
        })}
    </>
  );
};

const Button = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  height: 2vw;
  border: 1px solid rgb(176, 176, 176);
  background-color: rgb(255, 255, 255);
  border-radius: 30px;
`;
const Title = styled.span`
  margin: 10px;
  color: rgb(34, 34, 34);
  font-size: 1.22rem;
  text-align: center;
`;

export default Filter;
