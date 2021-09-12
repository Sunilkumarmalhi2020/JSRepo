import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';
import BlogA from './containers/Blog/BlogA';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BlogA />
      </div>
    );
  }
}

export default App;
