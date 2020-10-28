import React from "react";
import { shallow } from "enzyme";
import Header from "../components/Header";

describe("Header component", () => {
  const onClickHandler = jest.fn();
  const wrapper = shallow(<Header onClickHandler={onClickHandler} />);

  it("on click the onClickHandler is being called", () => {
    wrapper.find("#srt-btn").simulate("click");
    expect(onClickHandler).toHaveBeenCalled();
  });
});
