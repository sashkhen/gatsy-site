import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constants/style';

const Wrapper = styled.header`
  flex: 0 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 20px;

  background-color: ${COLOR.black};
  color: ${COLOR.white};
`;

export default Wrapper;
