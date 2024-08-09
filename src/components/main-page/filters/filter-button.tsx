import styles from './filter-button.module.css'


type FilterButtonProps = {
    text: String;
}

function FilterButton(props: FilterButtonProps) {
    return (
        <select id={props.text} className={styles.button}>
            <option value={props.text}>{props.text}</option>
            <option value="smph">smph</option>
        </select>
    );
}
export default FilterButton;
