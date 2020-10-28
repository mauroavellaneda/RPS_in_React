import React from "react";
import { mount } from "enzyme";
import ResetButton from "../components/ResetButton";

describe("<ResetButton />", () => {
  const wrapper = mount(<ResetButton />);
  it("resets the score board on click", () => {
    wrapper.find("#rst-btn").simulate("click");
    expect(wrapper.state().playerScore).toEqual(0);
    expect(wrapper.state().computerScore).toEqual(0);
  });
});
