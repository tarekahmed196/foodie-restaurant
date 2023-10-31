import React, { useState } from 'react';

const FaqItem = ({ question, answer, expanded, onClick }) => (
  <div className="faq-item">
    <div className="faq-question" onClick={onClick}>
      {question}
      <span>{expanded ? '-' : '+'}</span>
    </div>
    {expanded && <div className="faq-answer">{answer}</div>}
  </div>
);

const FaqSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleItemClick = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const faqData = [
    {
      question: 'What are your opening hours?',
      answer: 'We are open from 11:00 AM to 10:00 PM every day.',
    },
    {
      question: 'Do you offer vegetarian options?',
      answer: 'Yes, we have a dedicated vegetarian menu available.',
    },
    {
      question: 'Can I make a reservation?',
      answer: 'Yes, you can make a reservation through our website or by calling us.',
    },
  ];

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          expanded={expandedIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default FaqSection;
