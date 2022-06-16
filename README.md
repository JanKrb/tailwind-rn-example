# tailwind-rn example

This is a simple example for a installation of [react native](https://reactnative.dev/) and [tailwind-rn](https://github.com/vadimdemedes/tailwind-rn).

# Installation process

1. Create a new react native project using `expo init <project_name>` and open this or open up your existing project.
2. Install tailwind-rn `npm install tailwind-rn`
3. Setup tailwind-rn using npx `npx setup-tailwind-rn` or using the manual way (see tailwind-rn readme)
4. Start the compiler using `npm run dev:tailwind`
5. Setup tailwindcss.config.js as needed
For example you will need to fill out the content field or disable JIT mode. A sample configuration file could look like this:

```js
module.exports = {
  content: [
    './App.js',
    './components/**/*.{js,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}

```
6. Inside your `App.js` (or when using TypeScript) `App.ts`, import TailwindProvider and your tailwind.json using
```js
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
```
7. Wrap your App with the TailwindProvider like this:
```js
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

const App = () => (
	<TailwindProvider utilities={utilities}>
		...
	</TailwindProvider>
);

export default App;
```
8. Create a component using the utilities (as you can see in the "Usage" Tab in the original repository). Example matching my tailwind.config.js:
`./components/HelloComponent.js`
```js
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';

const HelloComponent = () => {
	const tailwind = useTailwind();

	return (
		<SafeAreaView style={tailwind('h-full')}>
			<View style={tailwind('pt-12 items-center')}>
				<View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
					<Text style={tailwind('text-blue-800 font-semibold')}>
						Hello Tailwind
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Hello;
```
9. Import and register your created component in your root file (e.g. `App.js`). The code as a whole could look like this:
```js
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import HelloComponent from './components/HelloComponent';

const App = () => (
	<TailwindProvider utilities={utilities}>
		<HelloComponent />
	</TailwindProvider>
);

export default App;
```

Voilà, you successfully embedded TailwindCSS into your react native app using tailwind-rn. :)
