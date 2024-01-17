import styles from "./chat.module.css";

const Chat = ({items}) => {
    const elements = items.map(({id, type, nickname, message}) => {
        const className = type === "you" ? styles.youMessage : styles.userMessage;
        const sender = type === "you" ? "You" : nickname;
        return <p key={id} className={className}>{sender}: {message}</p>
    });
    
    return (
        <div className={styles.chat}>
            {elements}
        </div>
    )
}

export default Chat;

Chat.defaultProps = {
    items: []
}