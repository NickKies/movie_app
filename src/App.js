import React from 'react';

function Food({ fav }) {
    return <h3>I like {fav}</h3>
}

function App() {
  return (
      <div>
        <h1>Hello!!</h1>
        <Food fav="kimchi" />
        <Food fav="egg" />
        <Food fav="LA noodle" />
        <Food fav="삼겹살" />
      </div>
  );
}

export default App;
