import React from "react";
import Weather from "../Weather";
import renderer from "react-test-renderer";
import {AppContext} from "../App"


test("renders correctly",() => {

    renderer(
        <AppContext.Provider value={null}>
          <Weather />
        </AppContext.Provider>
      );
    expect(<Weather/>).toMatchSnapshot();
})

