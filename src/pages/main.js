import React, { Component } from "react";
import { TextComponent } from '../components/text';

export class Main extends Component {
  render() {
    return (
      <>
        <TextComponent
          tag="h1"
          content="Welcome!"
        />
        <TextComponent
          tag="p"
          content="To choose pizza go to the Pizzas page!"
        />
      </>
    );
  }
}
 