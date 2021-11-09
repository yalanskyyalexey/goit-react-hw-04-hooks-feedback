import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ name, onLeaveFeedback }) => {
	return (
		<button
			type='button'
			name={name}
			onClick={() => onLeaveFeedback(name)}
			className={styles.btn}
		>
			{name}
		</button>
	);
};

Button.propTypes = {
	name: PropTypes.string.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
};

export default Button;
