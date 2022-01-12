import { render } from "@testing-library/react";
import Detail from "./Detail";

const movie = {
    title: 'Spider-Man: No Way Home',
    vote_average: 8.4,
    budget: 200000000,
    revenue: 1535856116
};

it('renders a movie', () => {
    const container = render(<Detail movie={movie} />);
    expect(container).toMatchSnapshot();
})