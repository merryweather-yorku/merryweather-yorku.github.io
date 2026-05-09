import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !company.trim() || !message.trim()) return;
    
    const lastSentStr = localStorage.getItem('lastContactMessageTime');
    if (lastSentStr) {
      const lastSent = parseInt(lastSentStr, 10);
      const twentyFourHours = 24 * 60 * 60 * 1000;
      if (Date.now() - lastSent < twentyFourHours) {
        setErrorMessage('You can only send one message every 24 hours.');
        setStatus('error');
        return;
      }
    }

    setStatus('sending');
    setErrorMessage('');

    // Your new Cloudflare Worker middleman
    const webhookUrl = "https://discord-proxy-worker.tnewman057.workers.dev"; 

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, company, message }), 
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setCompany('');
        setMessage(''); // Clear the input
        localStorage.setItem('lastContactMessageTime', Date.now().toString());
      } else {
        setStatus('error');
        setErrorMessage('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setErrorMessage('Failed to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '500px' }}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={status === 'sending'}
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === 'sending'}
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        required
      />
      <input
        type="text"
        placeholder="Company/Organization"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        disabled={status === 'sending'}
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        required
      />
      <textarea
        placeholder="Enter a message here:"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={status === 'sending'}
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical', height: '120px' }}
        required
      />
      <button 
        type="submit" 
        disabled={status === 'sending'}
        style={{ padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', alignSelf: 'flex-start' }}
      >
        {status === 'sending' ? 'Sending...' : 'Submit'}
      </button>
      
      {status === 'success' && <span style={{ color: 'green' }}>Sent successfully!</span>}
      {status === 'error' && <span style={{ color: 'red' }}>{errorMessage || 'Failed to send.'}</span>}
    </form>
  );
};

export default ContactForm;