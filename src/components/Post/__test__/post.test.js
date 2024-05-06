import { render } from '@testing-library/react';
import Post from '..';

describe('Post component', () => {
  test('renders post with correct image and text', () => {
    const imageUrl = 'https://example.com/image.jpg';
    const text = 'This is a post text';

    const { getByAltText, getByText, getByTestId } = render(
      <Post imageUrl={imageUrl}>{text}</Post>
    );

    // Verifica se a imagem é renderizada corretamente
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const postImage = getByAltText('Post');
    expect(postImage).toBeInTheDocument();
    expect(postImage.src).toBe(imageUrl);

    // Verifica se o texto do post é renderizado corretamente
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const postText = getByText(text);
    expect(postText).toBeInTheDocument();

    // Verifica se o componente PostComments é renderizado corretamente
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const postCommentsWrapper = getByTestId('post-comments-wrapper');
    expect(postCommentsWrapper).toBeInTheDocument();
  });
});
