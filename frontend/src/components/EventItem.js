import classes from './EventItem.module.css';
import { Link, useSubmit } from 'react-router-dom'

const EventItem = ({ event }) => {
  const submit = useSubmit();

  const startDeleteHandler = () => {
    const proceed = window.confirm('Are you shure?')

    if (proceed) {
      submit(null, { method: 'delete' })
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;