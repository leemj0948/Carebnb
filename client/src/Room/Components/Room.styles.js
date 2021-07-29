import styled from 'styled-components';
import { IoStar, IoHeartOutline, IoShareOutline } from 'react-icons/io5';
export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 3rem;
`;
export const Span = styled.span`
  padding: 5px;
`;
export const OneDesc = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 2rem;
  color: gray;
`;
export const StarContainer = styled.p`
  padding-top: 5px;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 32% 20% 14% 20%;
  grid-template-rows: 200px 268px;
  grid-template-areas:
    'mainImg mainImg img1 img2'
    'mainImg mainImg img3 img4';
  grid-gap: 63px;
`;

export const MainImg = styled.img`
  grid-area: mainImg;
  width: 770px;
  border-radius: 21px 0px 1px 20px;
  height: 512px;
`;

export const Img1 = styled.img`
  grid-area: img1;
  width: 230px;
  height: 250px;
`;
export const Img2 = styled.img`
  grid-area: img2;
  width: 230px;
  border-radius: 0px 20px 0px 0px;
  height: 250px;
`;
export const Img3 = styled.img`
  grid-area: img3;
  width: 230px;
  height: 250px;
`;
export const Img4 = styled.img`
  grid-area: img4;
  width: 230px;
  height: 250px;
  border-radius: 0px 0px 20px 0px;
`;

export const Descprtion = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RoomType = styled.p``;

export const DetailBox = styled.div`
  width: 65%;
`;
export const BillBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 0 auto;
  padding: 2%;
  width: 30%;
  display: flex;
  flex-direction: column;
  border: 1px solid #dddddd;
  border-radius: 20px;
  .oneLine {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
  }
  #paddingB {
    padding-bottom: 1.5rem;
  }
  .totalStyle {
    border-top: 1px solid gray;
    padding: 1rem 0;
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Subtitle = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 3rem;
`;

export const Section = styled.div`
  border-bottom: 1px solid #dddddd;
  margin: 0 auto;
  padding: 25px 0px;
`;

export const Button = styled.button`
  background-color: #fc365b;
  color: white;
  border-radius: 6px;
  width: 100%;
  height: 2.5rem;
`;
export const Line = styled.p`
  display: flex;
  line-height: 1.5rem;
  span {
    line-height: 2rem;
  }
`;
export const AdditionalFee = styled.p`
  display: flex;
  justify-content: space-between;
  line-height: 1.5rem;
`;
export const Price = styled.span`
  font-weight: bold;
  font-size: 1.8rem;
`;

export const Notice = styled.span`
  font-size: 0.8rem;
  line-height: 1.5rem;
  text-align: center;
`;
export const Icons = styled.span`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #80808012;
    border-radius: 5px;
  }
`;

export const Star = styled(IoStar)`
  color: red;
`;
export const Heart = styled(IoHeartOutline)``;
export const Share = styled(IoShareOutline)``;
export const Div = styled.div`
  display: flex;
  flex-direction: row;
`;
