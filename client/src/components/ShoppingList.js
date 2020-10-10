import React, {Component} from "react";
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from "react-transition-group";

class ShoppingList extends Component {
    state = {
        items: [
            {id: Math.random(), name: "Eggs"},
            {id: Math.random(), name: "Milk"},
            {id: Math.random(), name: "Water"}]
    }

    render() {
        return (
            <Container>
                <Button
                    color="dark"
                    style={{marginBottom: "2rem"}}
                    onClick={() => {
                        const name = prompt('Enter item')
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, {id: Math.random(), name}]
                            }))
                        }
                        console.log(this.state.items)
                    }}>
                    Add item
                </Button>

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {this.state.items.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames={"fade"}>
                                <ListGroupItem>
                                    <Button
                                        className={"remove-btn"}
                                        color={"danger"}
                                        size={"sm"}
                                        onClick={() => {
                                            this.setState({
                                                items: this.state.items.filter(item => item.id !== id)
                                            })
                                        }}>
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

export default ShoppingList