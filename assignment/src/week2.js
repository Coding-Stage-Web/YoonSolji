import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, ListGroup, ListGroupItem, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Week2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Navbar입니다.</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <br />
        <ListGroup>
          <ListGroupItem>동아리 웹페이지</ListGroupItem>
          <ListGroupItem>만드실 분</ListGroupItem>
          <ListGroupItem>계신가용?</ListGroupItem>
          <ListGroupItem>사랑해용</ListGroupItem>
          <ListGroupItem>잘자용</ListGroupItem>
        </ListGroup>
        <br />
        <Button color="primary" onClick={this.toggle}>Open Modal</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal Title</ModalHeader>
          <ModalBody>
            Modal Content
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>ok</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Week2;
