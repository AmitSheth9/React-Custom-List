import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import MovieList from './MovieList';

const server = setupServer();
rest.get('https://api.themoviedb.org/3/movie/popular?api_key=${process.env.apikey}&language=en-US&page=1', (req, res, ctx) => {
    return res(ctx.json([{
        title: 'Spider-Man: No Way Home',
        backdrop_path: 'https://image.tmdb.org/t/p/w500/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg'
    },
{
    title: "Encanto",
    backdrop_path: 'https://image.tmdb.org/t/p/w500/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg'
}]
        
))})

describe('MovieList', () => {
    beforeAll(() => {
        server.listen();
    })
    afterAll(() => {
        server.close();
    })
    it('should render a movie list', async () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <MovieList/>
            </MemoryRouter>
        )

        screen.getByText('Popular Movies');
        await screen.findByText('Spider-Man: No Way Home');
        await screen.findAllByText('Encanto')
    })
})
