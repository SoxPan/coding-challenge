import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { StyledListitemLink } from "./listItem";
import { ListItem } from "./listItem";
import data from "../../../public/mock.json";

describe("<ListItem />", () => {
    it("Item of list renders correctly", () => {
        const tree = renderer.create(<ListItem job={data[0]} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("Item of list renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<ListItem job={data[0]} />, div);
    });

    it("Should change route correctly", () => {
        const wrapper = shallow(<ListItem job={data[0]} />);
        expect(wrapper.find(StyledListitemLink).length).toBe(1);
        expect(wrapper.find(StyledListitemLink).props().to).toBe("/1");
    });
});
