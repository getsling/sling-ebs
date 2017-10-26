import React, { Component } from 'react';
import styled from 'styled-components';

export default class Footer extends Component {
  render() {
    const Footer = styled.div`
      position: absolute;
      height: 50px;
      display: flex;
      justify-content: space-around;
      background-color: #0085ff;
      box-sizing: border-box;
      width: 100%;
      padding-top: 10px;
      margin-top: 1%;
      color: white;
    `;

    return (
      <Footer>
        <p>This is the left part of the footer</p>
        <p>This is the right part of the footer</p>
        <p>This is the center part of the footer</p>
      </Footer>
    );
  }
}
