import hostImg from '../../assets/desktop/image-host.jpg'
import styled from 'styled-components'

export const Container = styled.div`
  margin: 130px 0 130px 165px;
  height: 640px;
  background: url(${hostImg}) no-repeat right;
  display: flex;
  justify-content: space-between;

  .layout {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .img-logo {
      margin-top: -28px;
      width: 135px;
      height: 56px;
    }
  }

  .dots-img {
    width: 232px;
    height: 104px;
    position:absolute;
    top:718px;
    right:0;
  }
`

export const Content = styled.div`
  width: 723px;
  height: 509px;
  background: var(--background);

  h1 {
    margin-top: 88px;
    color: var(--green);
    font-size: 52px;
    text-transform: uppercase;
    line-height: 62px;
  }

  .highlighted-h1 {
    margin-top: 0;
    color: var(--white);
  }

  p {
    margin-top: 24px;
    line-height: 28px;
    color: var(--ligh-gray);
    font-size: 18px;
    width: 445px;
  }
`

export const Form = styled.form`
  width: 427px;
  height: 56px;
  background: var(--dark-gray);
  border-radius: 28px;
  margin: 40px 0 8px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    background: var(--dark-gray);
    border: 0;
    margin: 14px 32px;
    color: var(--white);
    font-size: 14px;
    line-height: 28px;
    font-family: 'Chivo';
    font-weight: 700;
    width: 188px;

    -webkit-text-fill-color: var(--white) !important;
    transition: background-color 5000s ease-in-out 0s;

    &::placeholder {
      color: var(--white);
      opacity: 0.5;
      font-size: 14px;
      line-height: 28px;
      font-family: 'Chivo';
      font-weight: 700;
    }
  }

  button {
    background: var(--green);
    border: 0;
    border-radius: 28px;
    width: 162px;
    height: 46px;
    margin: 5px;
    font-size: 14px;
    line-height: 28px;
    font-family: 'Chivo';
    font-weight: 700;

    transition: background-color 0.2s;

    &:hover {
    background: #B3FFE2;
    }
  }
`

export const ErrorMessage = styled.span`
  width: 157px;
  height: 14px;
  font-family: 'Chivo';
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #FB3E3E;
  margin-left: 32px;
`

export const Logos = styled.div`
  width: 536px;
  height: 29px;


  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: 741px;

  img {
    opacity: 0.4;
  }
`