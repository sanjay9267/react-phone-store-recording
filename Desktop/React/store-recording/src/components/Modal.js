import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <div>
        <h1>hellow from modmdfdsfsfal</h1>
      </div>
    )
    /*
    return (
      <ProductConsumer>
        {(value) => {
          const {modalOpen, closeModal} = value;
          const {img, title, Price } = value.modalProduct;

          if(!modalOpen) {
            return null;
          }
          else {
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                    <h5>item added to the cart</h5>
                  </div>
                </div>
              </div>
            </ModalContainer>
          }
        }}
      </ProductConsumer>*/
    )
  }
}

const ModalContainer = styled.div`
position:fixed;
top: 0;
left:0;

`