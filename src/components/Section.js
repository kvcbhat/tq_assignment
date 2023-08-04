import React, { useState } from 'react';
import Card from './Card';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Section = ({ section, cards }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };

  const filteredCards = cards.filter(card => card.parent_sec_no === section.sec_no);
  const cardsToShow = showMore ? filteredCards : filteredCards.slice(0, 3);

  return (
    <div className='d-flex justify-content-center align-item-center'>
        <div className="container">
          <div className={section.cN}>
            <h1 className='text-center p-3 mt-md-5 mt-3'>{section.title}</h1>
            {cardsToShow.map(card => (
                <Card key={card.id} card={card} />
            ))}
          </div>
          { filteredCards.length > 3 && !showMore && <button onClick={handleShowMore} className='btn btn-secondary btn-lg mt-3' >Show More</button>}
          { filteredCards.length > 3 && showMore && <button onClick={handleShowLess} className='btn btn-secondary btn-lg mt-3' >Show Less</button>}
        </div>
    </div>
  );
};

export default Section;