import styled from 'styled-components';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

export const WrapperTypeProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: flex-start;
  height: 44px;
  padding: 0 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover {
    color: #fff;
    background: rgb(13, 92, 182);
    span {
      color: white;
    }
  }
  width: 240px;
  text-align: center;
  margin-top: 20px;
`;

export const WrapperProducts = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 20px;
  flex-wrap: wrap;
  padding: 20px;
  background-color: #efefef;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

