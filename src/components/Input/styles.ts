import styled, { css } from 'styled-components';
import tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilld: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #f4ede8;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  input {
    background: transparent;
    border: 0;
    width: 100%;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
    color: #666360;

    ${props =>
      props.isFocused &&
      css`
        color: #ff9000;
      `}

    ${props =>
      props.isFilld &&
      css`
        color: #ff9000;
      `}
  }
`;

export const Error = styled(tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background-color: #c53030;
    color: #f4ede8;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
