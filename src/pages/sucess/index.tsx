import {
  Button,
  ImageContainer,
  SucessContainer,
} from '@/src/styles/pages/sucess';

export default function Sucess() {
  return (
    <SucessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer></ImageContainer>

      <p>
        Uhuul <strong>Diego Fernandes</strong>, sua{' '}
        <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua
        casa.
      </p>

      <Button href="/">Voltar ao catálogo</Button>
    </SucessContainer>
  );
}
