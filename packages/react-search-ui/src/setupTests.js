// setup file
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

jest.useFakeTimers();
configure({ adapter: new Adapter() });
