import React from 'react';
import './_Card.scss';

function Card({ title, description }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default function CardContainer() {
  // Dummy data for three cards
  const cards = [
    {
      title: 'Take The Skincare Quiz',
      description: '',
    },
    {
      title: 'Take The Haircare Quiz',
      description: '',
    },
    {
      title: 'Take The Shower Quiz',
      description: '',
    },
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}
