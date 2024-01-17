import styles from "./my-books-list.module.scss";

const {REACT_APP_FILE_URL} = process.env;
console.log(REACT_APP_FILE_URL)

const MyBooksList = ({ items, onDeleteMovie }) => {
    const elements = items.map(({ _id, title, director, poster }) => (
        <li className={styles.listItem} key={_id}>
            {poster && <img className={styles.listItemPoster} src={`${REACT_APP_FILE_URL}/${poster}`} />}
            Title: {title}. Director: {director}. <button onClick={() => onDeleteMovie(_id)}>delete</button>
        </li>
    ))

    return (
        <ol className={styles.list}>
            {elements}
        </ol>
    )
}

export default MyBooksList;