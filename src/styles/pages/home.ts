import { styled } from '..';
import Link from 'next/link';

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
  '@media (min-width: 320px) and (max-width: 1440px)': {
    minHeight: 'calc(100vh - 120px)',
  },
  '@media (min-width: 768px) and (max-width:768px)': {
    maxWidth: 'calc(100vw - ((100vw - 668px) / 2))',
  },
  '@media (min-width: 1024px) and (max-width:1024px)': {
    maxWidth: 'calc(100vw - ((100vw - 924px) / 2))',
  },
});

export const Product = styled(Link, {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  overflow: 'hidden',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },

  '@media (max-width: 768px)': {
    marginBottom: '0.5rem',
    img: {
      height: 350,
    },
    footer: {
      alignItems: 'flex-start',
      'strong, span': {
        fontSize: '$md',
      },
    },
  },

  '@media (min-width: 1024px) and (max-width: 1440px)': {
    marginBottom: '0.5rem',
    footer: {
      alignItems: 'flex-start',
      'strong, span': {
        fontSize: '$md',
      },
    },
  },
});
