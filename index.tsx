import React, { Component } from 'react';
import { render } from 'react-dom';
import Component1 from './components/component1';
import Component2 from './components/component2';
import Component3 from './components/component3';
import Component4 from './components/component4';
import Component5 from './components/component5';
import Component6 from './components/component6';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
  components: Array<string>;
}

const ComponentList = {
  component1: Component1,
  component2: Component2,
  component3: Component3,
  component4: Component4,
  component5: Component5,
  component6: Component6,
};

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      components: [
        'component1',
        'component2',
        'component3',
        'component4',
        'component5',
        'component6',
      ],
    };
    this.shuffle = this.shuffle.bind(this);
  }

  shuffle() {
    const list = this.state.components;
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = list[i];
      list[i] = list[j];
      list[j] = temp;
    }
    this.setState({ ...this.state, components: list });
  }

  createComponent(block) {
    console.log(block);
    return React.createElement(ComponentList[block], {
      block: block,
    });
  }

  render() {
    return (
      <div id="app">
        <div class="shuffle">
          <button class="btn" onClick={this.shuffle}>
            Shuffle
          </button>
        </div>
        <div className="componentList">
          {this.state.components.map((block) => this.createComponent(block))}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
