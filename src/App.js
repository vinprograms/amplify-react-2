import './App.css';
import "@aws-amplify/ui-react/styles.css";

import {
	React,
	useState,
	useEffect,
} from 'react';

import {
	ThemeProvider,
	Theme,
	Text,
	Heading,
	Button,
	Card,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Tabs,
	withAuthenticator,
	Image,
	View
} from '@aws-amplify/ui-react';

import { listSamples } from './graphql/queries';

import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import config from './amplifyconfiguration.json';
Amplify.configure(config);

const client = generateClient();

const theme = {
  name: 'custom-theme',
  tokens: {
    components: {
		card: {
			backgroundColor: { value: '{colors.neutral.10]}' },
			outlined: {
			  borderColor: { value: '{colors.black}' },
			  borderRadius: { value: '{radii.small}' },
			},
		},
		heading: {
			color: { value: '{colors.red.60}' },
			fontWeight: { value: '{fontWeights.semibold}' },
			fontSize: { value: '{fontSizes.xl}' },
		},
		text: {
			color: { value: '{colors.black}' },
		},
		tabs: {
			borderColor: { value: '{colors.black}' },
			borderRadius: { value: '{radii.xs}' },
			item: {
			  color: { value: '{colors.blue.80}' },
			  fontSize: { value: '{fontSizes.xl}' },
			  fontWeight: { value: '{fontWeights.normal}' },

			  _hover: {
				color: { value: '{colors.red.60}' },
			  },
			  _focus: {
				color: { value: '{colors.red.60}' },
			  },
			  _active: {
				color: { value: '{colors.red.60}' },
				borderColor: { value: '{colors.red.80}' },
				backgroundColor: { value: '{colors.neutral.40}' },
			  },
			  _disabled: {
				color: { value: 'gray' },
				backgroundColor: { value: 'transparent' },
			  },
			},
		},
		table: {
			row: {
			  hover: {
				backgroundColor: { value: '{colors.blue.20}' },
			  },

			  striped: {
				backgroundColor: { value: '{colors.blue.10}' },
			  },
			},

			header: {
				color: { value: '{colors.blue.60}' },
				fontSize: { value: '{fontSizes.medium}' },
				fontWeight: { value: '{fontWeights.normal}' },
			},

			data: {
				color: { value: '{colors.black}' },
				fontSize: { value: '{fontSizes.medium}' },
				fontWeight: { value: '{fontWeights.light}' },
			},
		},
	},
  },
};

// Example of a data array that
// you might receive from an API
const data = [
    { id: "22", meas: "V1", value: 100 },
    { id: "22", meas: "V2", value: 200 },
    { id: "22", meas: "V3", value: 300 },
];

function App({ signOut }) {
	
	const [samples, setSamples] = useState([]);
	
	useEffect(() => {
		fetchSamples();
	}, []);
	
	const fetchSamples = async () => {
		try {
			const apiData = await client.graphql({ query: listSamples});
			const samplesFromAPI = apiData.data.listSamples.items;
			console.log('sample list', samplesFromAPI);
			setSamples(samplesFromAPI);
		} catch (error) {
			console.log('error on fetching samples', error);
		}
	}
	
	return (
		<View className="App">
		  <Card>
			<Heading level={1}>We now have Auth!</Heading>
		  </Card>
		  <Button onClick={signOut}>Sign Out</Button>
		</View>
	
		/*<ThemeProvider theme={theme}>
			<Card variation="outlined">
				<div className="margin-small">
					<Heading level={4}>PowerSight: Remote Monitoring</Heading>
					<Heading className="heading-blue" level={4}>Measurements</Heading>
				</div>
				<div>
					<Tabs
					  spacing="equal"
					  justifyContent="center"
					  indicatorPosition="top"
					  defaultValue='Tab 1'
					  items={[
						{
							label: 'Voltage',
							value: 'Tab 1',
							content: (
								<Table highlightOnHover variation="striped">
									<TableBody>
									{data.map((val, key) => {
										return (	
											<TableRow key={key}>
												<TableCell>{val.id}</TableCell>
												<TableCell>{val.meas}</TableCell>
												<TableCell>{val.value}</TableCell>
											</TableRow>
										)
									})}
									</TableBody>
								</Table>
							),
						},
						{
							label: 'Current',
							value: 'Tab 2',
							content: (
								<Table highlightOnHover variation="striped">
								  <TableHead>
									<TableRow>
									  <TableCell as="th">Device ID</TableCell>
									  <TableCell as="th">Measurement</TableCell>
									  <TableCell as="th">Value</TableCell>
									</TableRow>
								  </TableHead>
								  <TableBody>
									<TableRow>
									  <TableCell>22</TableCell>
									  <TableCell>I1</TableCell>
									  <TableCell>1000</TableCell>
									</TableRow>
									<TableRow>
									  <TableCell>22</TableCell>
									  <TableCell>I2</TableCell>
									  <TableCell>2000</TableCell>
									</TableRow>
									<TableRow>
									  <TableCell>22</TableCell>
									  <TableCell>I3</TableCell>
									  <TableCell>3000</TableCell>
									</TableRow>
								  </TableBody>
								</Table>
							),
						},
						{ label: 'Power', value: 'Tab 3', content: 'Tab content #3' },
						{ label: 'THD', value: 'Tab 4', content: 'Tab content #4', isDisabled: true },
						{ label: 'Phasors', value: 'Tab 5', content: 'Tab content #5', isDisabled: true },
					  ]}
					/>
				</div>
			</Card>
		</ThemeProvider>*/
  );
};
 
export default App;