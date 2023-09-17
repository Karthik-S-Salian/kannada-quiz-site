import "./card.css"

function Card(props) {

  return (
    <div onClick={props.handleClick} className="type-card">
        <h3>{props.title}</h3>

        {props.description && <p>{props.description}</p>}

    </div>
  )
}

export default Card