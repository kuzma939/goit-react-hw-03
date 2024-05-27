import css from './Contact.module.css'
const Contact = ({ name, number, onDelete }) => {
    return (
      <li className="css.list">
       <p>{name} : {number}</p>
        <button onClick={onDelete}>Delete</button>
      </li>
    );
  }

  export default Contact;