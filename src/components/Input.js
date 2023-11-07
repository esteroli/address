import styles from './Input.module.css'

export default function Input({text, type, placeholder, onChange}) {
    return (
        <div className={styles.data_form}>
            <label>{text}</label>
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            ></input>
        </div>
    )
}