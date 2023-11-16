import styles from "./Block.scss"

export default function Block({title, text}) {
    return (
      <div className="block">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    );
  }
