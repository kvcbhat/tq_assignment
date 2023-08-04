import React from "react";
import Section from "./components/Section";
import Banner from "./components/Banner";
import {cards, sections, banners} from './data/data';



function App() {
  
  return (
    <div className="App">
      <Banner banners={banners}/>
      {sections.map(section => (
        <Section  key={section.id} section={section} cards={cards}  />
      ))}
    </div>
  );
}

export default App;