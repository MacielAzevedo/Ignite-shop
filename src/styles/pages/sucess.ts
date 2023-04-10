import { styled } from '..';
import Link from 'next/link';

export const SucessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
    strong: {
      color: '$green300',
    },
  },
  '@media (max-width: 768px)': {
    height: 'auto',
    p: {
      marginTop: '1.2rem',
    },
  },
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 145,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  marginTop: '4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '@media (max-width: 768px)': {
    marginTop: '1.2rem',
  },
});

export const Button = styled(Link, {
  fontSize: 'lg',
  marginTop: '5rem',
  color: '$green500',
  textDecoration: 'none',
  fontWeight: 'bold',

  '&:hover': {
    color: '$green300',
  },

  '@media (max-width: 450px)': {
    margin: '0.5rem 0',
  },

  '@media (max-width: 768px)': {
    margin: '1.5rem 0',
  },
});
