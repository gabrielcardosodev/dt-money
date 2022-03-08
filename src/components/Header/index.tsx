import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
  onHandleOpenModal: () => void
}

export function Header({onHandleOpenModal}: HeaderProps) {
  return (
    <Container>
        <Content>
        <img src={logoImg} alt="dt money" />
        <button onClick={onHandleOpenModal} type='button'>
          Nova Transação
        </button>
        </Content>
    </Container>
  )
}
