import styled from "styled-components";

export default styled.input`
  padding: 12px 16px;
  border: 2px solid #ffffff;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  width: 40%;
  border-radius: 8px;
  text-align: center;

  &::placeholder {
    color: #fff;
    text-align: center;
  }

  &:focus {
    outline: none;
  }
`;
