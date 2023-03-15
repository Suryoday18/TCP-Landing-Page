import React from "react";
import { useState } from "react";

export const FeedbackComplaint=()=>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [complaint, setComplaint] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault()
    // You can add your code here to submit the complaint
  }

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Complaint:</label>
        <textarea id="complaint" value={complaint} onChange={(e) => setComplaint(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

