import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import MovieDetail from './MovieDetail';
import App from '../App';

const server = setupServer();
rest.get(`http://api.themoviedb.org/3/movie/${id}?api_key=${process.env.apikey}`, (req, res, ctx) => {
    return res(ctx.json({
        title: 'Spider-Man: No Way Home',
        vote_average: 8.4,
        budget: 200000000,
        revenue: 1535856116
    },

        
))});

describe('MovieList', () => {
    beforeAll(() => {
        server.listen();
    })
    afterAll(() => {
        server.close();
    })
    it('should render a movie detail', async () => {
        render(
            <MemoryRouter initialEntries={['/movies/:id']}>
               <MovieDetail/>
            </MemoryRouter>
        )

        
        await screen.findByText('Spider-Man: No Way Home');
    })
})
