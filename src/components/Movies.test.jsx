import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Movies from "./Movies";

const movies = [{
    title: 'Spider-Man: No Way Home',
    backdrop_path: 'https://image.tmdb.org/t/p/w500/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg'
},
{
title: "Encanto",
backdrop_path: 'https://image.tmdb.org/t/p/w500/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg'
}]

it('renders movies', () => {
    const container = render (
        <MemoryRouter initialEntries={['/']}>
            <Movies movies={movies}/>
        </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    
} );