import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { List } from "../list/list";
import data from "../../../public/mock.json";

describe("<List />", () => {
    it("List renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<List jobs={data} />, div);
    });

    it("List renders correctly", () => {
        const tree = renderer.create(<List jobs={data} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
