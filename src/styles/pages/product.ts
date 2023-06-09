import { styled } from '..';

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'stretch',
  gap: '4rem',
  maxWidth: 1180,
  margin: '0 auto',
  '@media (max-width: 768px)': {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '0 1.5rem',
    marginBottom: '1.2rem',
  },
  '@media (max-width:1024px)': {
    maxWidth: 924,
  },
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
  '@media (min-width: 1024px) and (max-width:1440px)': {
    height: '100%',
  },
});

export const ProductDetail = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray100',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },

  '@media (max-width: 768px)': {
    'h1, span ': {
      textAlign: 'center',
    },
    p: {
      fontSize: '$2xl',
      textAlign: 'justify',
    },
    button: {
      marginTop: '2rem',
      fontSize: '$xl',
    },
  },
});
