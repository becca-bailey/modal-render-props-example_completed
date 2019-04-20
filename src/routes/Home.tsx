import * as React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Modal from "../components/Modal";
import ModalManager from "../components/ModalManager";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
`;

const Image = styled.img`
  display: block;
  margin: auto;
  padding-bottom: 1rem;
  width: 20rem;
`;

class Home extends React.Component {
  public render() {
    return (
      <Container>
        <ModalManager>
          {({ showModal, hideModal, visible }) => {
            return (
              <React.Fragment>
                <Button onClick={() => showModal()}>Click me!</Button>
                <Modal visible={visible}>
                  <h1>Surprise!</h1>
                  <Image src="/assets/surprise.gif" />
                  <Button onClick={() => hideModal()}>Close</Button>
                </Modal>
              </React.Fragment>
            );
          }}
        </ModalManager>
        <ModalManager>
          {({ showModal, hideModal, visible }) => {
            return (
              <React.Fragment>
                <Button onClick={() => showModal()}>
                  No, click me instead!
                </Button>
                <Modal visible={visible}>
                  <h1>Kittens!</h1>
                  <Image src="/assets/kittens.gif" />
                  <Button onClick={() => hideModal()}>Close</Button>
                </Modal>
              </React.Fragment>
            );
          }}
        </ModalManager>
      </Container>
    );
  }
}

export default Home;
