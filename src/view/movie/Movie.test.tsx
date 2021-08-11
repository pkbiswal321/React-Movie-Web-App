import React from "react";
import { mount, shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Movie from ".";
import { GetMoves } from "../../service/MovieServices";
import axios from "axios";
import MockAdapter from 'axios-mock-adapter'
import { mockdata } from "./MovieDetails.test";

describe("Movie", () => {

  let wrapper: any
  beforeAll(() => {
    wrapper = shallow(<Movie />);
  });

  const setState = jest.fn();
  const useStateMock: any = (initState: any) => [initState, setState];
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("matches snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('check div tag', () => {
    expect(wrapper.find('div').length).toEqual(1)
  });

  it('check children component', () => {
    expect(wrapper.find('MovieDetails').length).toEqual(1)
  });

  it('Is a test where we want to mock useState', () => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    expect(setState).toHaveBeenCalledTimes(0);
  });

  it('api testing', async () => {
    const response = await GetMoves();
    expect(response.data[0].id).toEqual(1979600)
  })

  it('should render a api data', done => {
    const mock = new MockAdapter(axios);
    mock.onGet('http://api.tvmaze.com/schedule?country=US&date=2020-12-01').reply(200, mockdata);
    const component = mount(<Movie />);
    setImmediate(() => {
      component.update();
      console.log(component.debug());
      done();
    });
  });
  // describe('movie api test', () => {
  //   // const spy = jest.spyOn(Movie.prototype, '_getMoves');
  //   beforeEach(() => {
  //     const mock = new MockAdapter(axios);
  //     mock
  //       .onGet('http://api.tvmaze.com/schedule?country=US&date=2020-12-01')
  //       .reply(200, mockdata);
  //   });

  //   // it('calls the `_getMoves` function', () => {
  //   //   expect(spy).toHaveBeenCalled();
  //   // });

  //   it('success test', async () => {
  //     expect(wrapper.movieData[0].id).toEqual(mockdata[0].id);
  //   })
  // })

});