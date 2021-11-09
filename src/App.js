import { useState } from 'react';
import Section from './components/Section/index';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/';
import Notification from './components/Notification/';
import './App.css';

function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const feedbackType = ['Good', 'Neutral', 'Bad'];

	const addFeedback = btnName => {
		switch (btnName) {
			case 'Good':
				setGood(prevState => prevState + 1);
				break;
			case 'Neutral':
				setNeutral(prevState => prevState + 1);
				break;
			case 'Bad':
				setBad(prevState => prevState + 1);
				break;
			default:
				return;
		}
	};

	const countTotalFeedback = () => good + neutral + bad;

	const countPositiveFeedbackPercentage = () => {
		return Math.floor((good / countTotalFeedback()) * 100);
	};

	return (
		<div className='appWrapper'>
			<Section title='Please leave feedback'>
				<FeedbackOptions
					onLeaveFeedback={addFeedback}
					btnNames={feedbackType}
				></FeedbackOptions>
			</Section>
			<Section title='Statistics'>
				{countTotalFeedback() > 0 ? (
					<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={countTotalFeedback()}
						positivePercentage={countPositiveFeedbackPercentage()}
					></Statistics>
				) : (
					<Notification message='No feedback'></Notification>
				)}
			</Section>
		</div>
	);
}
export default App;
