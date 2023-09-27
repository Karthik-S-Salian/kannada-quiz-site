import "./card.css"

export default function Card(props) {
  return (
      <div onClick={props.handleClick} className="card">
        <h3>{props.title}</h3>
        {props.description && <p>{props.description}</p>}
      </div>
  )
}