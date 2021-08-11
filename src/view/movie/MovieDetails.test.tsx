import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import MovieDetails, { MovieDetailsProps, movieDataDetails } from "./MovieDetails";

export const mockdata: Array<movieDataDetails> = [
    {
        id: 1979600,
        name: "Minute Whambam 90's Ride",
        show: {
            image: {
                medium: "https://static.tvmaze.com/uploads/images/medium_portrait/105/264401.jpg"
            }
        },
        url: "https://www.tvmaze.com/episodes/1979386/patis-mexican-table-9x09-cooking-for-my-crew-in-sonora",
    },
    {
        id: 1979601,
        name: "Minute Whambam 90's Ride",
        show: {
            image: {
                medium: "https://static.tvmaze.com/uploads/images/medium_portrait/105/264401.jpg"
            }
        },
        url: "https://www.tvmaze.com/episodes/1979386/patis-mexican-table-9x09-cooking-for-my-crew-in-sonora",
    },
]

describe("MovieDetails", () => {
    let wrapper: any
    beforeAll(() => {
        wrapper = shallow(<MovieDetails movieData={mockdata} />);
    });    

    it("matches snapshot", () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    // it('render component div', () => {
    //     expect(wrapper.firstChild.classList.contains('div.container')).toBe(true)
    // });

});