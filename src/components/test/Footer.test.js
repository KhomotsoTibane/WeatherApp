import React from "react";
import Footer from "../Footer";
import renderer from "react-test-renderer";



test("renders correctly without error",() => {
    const tree = renderer.create(<Footer/>).toJSON();
    expect(tree).toMatchSnapshot();
})

