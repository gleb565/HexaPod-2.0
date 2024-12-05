import Control from '../components/screens/control/Control'
import Servo from '../components/screens/servo/Servo'
import SpecialControl from '../components/screens/special control/SpecialControl'

export const routes = [
	{
		path: '/servo',
		component: Servo,
	},
	{
		path: '/',
		component: Control,
	},
	{
		path: '/specialControl',
		component: SpecialControl,
	}
]