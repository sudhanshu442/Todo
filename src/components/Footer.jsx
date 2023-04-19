import React from "react";
import '../styles/Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <form className="todo-form">
        <input type="text" placeholder="Add a to-do item" />
        <button type="submit">Add</button>
      </form>
    </footer>
  );
};

export default Footer;
