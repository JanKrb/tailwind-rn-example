import {TailwindProvider} from 'tailwind-rn';
import TestComponent from './components/TestComponent';
import utilities from './tailwind.json';

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
		<TestComponent />
	</TailwindProvider>
  );
}