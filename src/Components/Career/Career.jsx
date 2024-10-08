import React from 'react';
import './Career.css';
import contact from '../../assets/contact.png';

const Career = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5b70b7a2-9899-45f8-b4fe-6ae75960ba1d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='career'>
      <h1>Together, Let’s Create Something Extraordinary!</h1>
      <div className='contact'>
        <div className='contact-col1'>
          <img src={contact} alt='contact' />
        </div>
        <div className='contact-col2'>
          <p>COME JOIN US</p>
          <form onSubmit={onSubmit}>
            <div className="name-row">
              <div className="name-col">
                
                <input type='text' name='first-name' placeholder='First Name' required />
              </div>
              <div className="name-col">
                
                <input type='text' name='last-name' placeholder='Last Name' required />
              </div>
            </div>
            <div className="phone-row">
              <div className="phone-col">
                
                <input type='email' name='email' placeholder='Email' required />
              </div>
              <div className="phone-col">
                
                <input type='tel' name='phone' placeholder='Phone Number' required />
              </div>
            </div>
            
            <select name='dropdown' required>
              <option value='' disabled selected>Select an option</option>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </select>
            
            <textarea name="message" rows='6' placeholder='Message' required></textarea>
            <button type='submit' className='career_btn'>Send Message</button>
          </form>
          <span>{result}</span>
        </div>
      </div>

      {/* New section after the columns */}
      <div className="extra-section">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        <button className="appointment-btn">Take an appointment</button>
      </div>
    </div>
  );
}

export default Career;
