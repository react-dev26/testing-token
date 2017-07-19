import React from 'react';
import Recaptcha from 'react-recaptcha';

import styles from './styles';

function CustomForm() {
  return (
    <form style={styles.container}>
      <h2 style={styles.h2}>Email Us</h2>
      <div style={styles.field1}>
        <input name="name" style={styles.input} placeholder="Name" type="text" />
      </div>
      <div style={styles.field2}>
        <input name="email" style={styles.input} placeholder="Email" type="email" />
      </div>
      <div style={styles.field3}>
        <textarea name="message" style={{...styles.input, ...styles.textarea}} rows="6" placeholder="Message" />
      </div>
      <div>
        <Recaptcha
          sitekey="6LdyjSQUAAAAALqjkzSjfG7UbEP38s7Sn8moden8"
        />
        <ul style={styles.actions}>
          <li style={styles.li}><input value="Send Message" style={styles.button} type="submit" /></li>
        </ul>
      </div>
    </form>
  );
}

export default CustomForm;
