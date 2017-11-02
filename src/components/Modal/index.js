import React, { Component } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import PropTypes from 'prop-types';

const ModalWrapper = styled.div`
  ${props => {
    if (!props.visable) {
      return css`
        display: none;
      `;
    } else {
      return css`
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0, 0, 0); /* Fallback color */
        background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
      `;
    }
  }};
`;
const StyledModal = styled.div`
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  width: 50%;
  border-radius: 8px;
  background-color: #f4f5f9;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.5);
`;

const StyledModalHead = styled.div`
  margin-top: 0;
  height: 30px;
  background-color: #ffffff;
  border-radius: 8px 8px 0 0;
  width: 100%;
  padding: 10px 0;
`;
const StyledModalFooter = styled.div``;

export default class Modal extends Component {
  render() {
    return (
      <ModalWrapper visable={this.props.visable}>
        <StyledModal>
          {this.props.modalHeader.length > 0 && (
            <StyledModalHead>{this.props.modalHeader}</StyledModalHead>
          )}
          {this.props.children}
          <StyledModalFooter>
            <button onClick={() => this.props.onSubmit()}>Button</button>
          </StyledModalFooter>
        </StyledModal>
      </ModalWrapper>
    );
  }
}

Modal.propTypes = {
  visable: PropTypes.bool.isRequired,
  modalHeader: PropTypes.string,
  length: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.shape.isRequired,
};
Modal.defaultProps = {
  modalHeader: '',
};
