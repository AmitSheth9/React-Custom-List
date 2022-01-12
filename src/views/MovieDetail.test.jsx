
import { screen, render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import MovieDetail from './MovieDetail';

import App from '../App';

const server = setupServer(
rest.get(`https://api.themoviedb.org/3/movie/634649?api_key=${process.env.apikey}`, (req, res, ctx) => {
    return res(ctx.json({
        id: 634649,
        title: 'Spider-Man: No Way Home',
        vote_average: 8.4,
        budget: 200000000,
        revenue: 1535856116
    }

        
))}));

describe('MovieDetail', () => {
    beforeAll(() => {
        server.listen({onUnhandledRequest: 'warn'});
    })
    afterAll(() => {
        server.close();
    })
    it('should render a movie detail', async () => {
        render(
            <MemoryRouter initialEntries={['/movies/634649']}>
                <Route path='/movies/:id'>
               <MovieDetail/>
               </Route>
            </MemoryRouter>
        )

        screen.getByText('Loading');
        screen.debug();
        await screen.findByText('Spider-Man: No Way Home');
    })
})
