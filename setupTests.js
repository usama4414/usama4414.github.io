// https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });