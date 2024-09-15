import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  // Initial state with some FAQs
  const [faqs, setFaqs] = useState([
    { id: 1, question: 'How Protein Shakes are Healthy?', answer: 'Protein shakes can be a convenient and effective way to boost your protein intake, especially for those with higher protein needs like athletes or active individuals. They help in muscle recovery and growth.', image: 'https://www.healthifyme.com/blog/wp-content/uploads/2019/12/protein-shake-1.jpg', title: 'Protein Shakes' },
    { id: 2, question: 'Are bananas good for muscle recovery?', answer: 'Bananas are high in potassium, which can help with muscle recovery and prevent cramps. They are also a good source of energy for workouts.', image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/271/271157/bananas-chopped-up-in-a-bowl.jpg', title: 'Bananas' }
  ]);

  // Form data for adding/editing FAQs
  const [formData, setFormData] = useState({ id: null, question: '', answer: '', image: '', title: '' });

  // Flag to toggle between adding and editing
  const [isEditing, setIsEditing] = useState(false);

  // Handle input change for form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle adding a new FAQ
  const handleAddFaq = () => {
    if (formData.question && formData.answer && formData.image && formData.title) {
      const newFaq = {
        id: faqs.length + 1,
        question: formData.question,
        answer: formData.answer,
        image: formData.image,
        title: formData.title
      };
      setFaqs([...faqs, newFaq]);
      setFormData({ id: null, question: '', answer: '', image: '', title: '' }); // Clear form
    }
  };

  // Handle editing an FAQ
  const handleEditFaq = (faq) => {
    setIsEditing(true);
    setFormData(faq); // Load FAQ data into form
  };

  // Handle updating the edited FAQ
  const handleUpdateFaq = () => {
    const updatedFaqs = faqs.map((faq) =>
      faq.id === formData.id ? { ...formData } : faq
    );
    setFaqs(updatedFaqs);
    setIsEditing(false);
    setFormData({ id: null, question: '', answer: '', image: '', title: '' }); // Clear form
  };

  // Handle deleting an FAQ
  const handleDeleteFaq = (id) => {
    const updatedFaqs = faqs.filter((faq) => faq.id !== id);
    setFaqs(updatedFaqs);
  };

  return (
    <div className='Faq-Main-Box'>
      <h2 style={{ textAlign: 'center', fontFamily: '"Nunito", sans-serif', color: 'white' }}>Faq Section</h2>

      {/* Form Section */}
      <div style={{ padding: '10px', textAlign: 'center' }}>
        <input
          type="text"
          name="title"
          placeholder="Enter image title"
          value={formData.title}
          onChange={handleInputChange}
          style={{ padding: '5px', marginBottom: '10px', width: '80%' }}
        />
        <input
          type="text"
          name="question"
          placeholder="Enter question"
          value={formData.question}
          onChange={handleInputChange}
          style={{ padding: '5px', marginBottom: '10px', width: '80%' }}
        />
        <input
          type="text"
          name="answer"
          placeholder="Enter answer"
          value={formData.answer}
          onChange={handleInputChange}
          style={{ padding: '5px', marginBottom: '10px', width: '80%' }}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleInputChange}
          style={{ padding: '5px', marginBottom: '10px', width: '80%' }}
        />
        <div>
          {isEditing ? (
            <button onClick={handleUpdateFaq} className='btn'>Update FAQ</button>
          ) : (
            <button onClick={handleAddFaq} className='btn'>Add FAQ</button>
          )}
        </div>
      </div>

      {/* FAQ Cards */}
      {faqs.map((faq) => (
        <div className='Box' key={faq.id}>
          <div className='image1-box'>
            <img src={faq.image} alt={faq.title} className='image1' />
            <p className='image-text'>{faq.title}</p>
          </div>
          <div className='content1-box'>
            <h6 style={{ color: 'red' }}>{faq.question}</h6>
            <p style={{ fontSize: 'x-small', overflowWrap: 'break-word' }}>{faq.answer}</p>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <button onClick={() => handleEditFaq(faq)} className='btn'>Edit</button>
              <button onClick={() => handleDeleteFaq(faq.id)} className='btn'>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
