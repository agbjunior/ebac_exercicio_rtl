import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '..';

describe('PostComments component', () => {
  test('renders without crashing', () => {
    render(<PostComments />);
    const textareaElement = screen.getByRole('textbox');
    expect(textareaElement).toBeInTheDocument();
  });

  test('allows adding comments', () => {
    render(<PostComments />);
    const textareaElement = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /comentar/i });

    // Simulate user input
    fireEvent.change(textareaElement, { target: { value: 'This is a test comment' } });

    // Submit the form
    fireEvent.click(submitButton);

    // Check if the comment is rendered
    expect(screen.getByText('This is a test comment')).toBeInTheDocument();
  });
});
