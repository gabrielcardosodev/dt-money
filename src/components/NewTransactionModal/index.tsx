import Modal from 'react-modal';
import imgIncome from '../../assets/income.svg'
import imgOutcome from '../../assets/outcome.svg'
import imgClose from '../../assets/close.svg'
import { Container, RadioButton, TransactionTypeContainer } from './styles';
import { useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit')

    return (
        <Modal
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
        >

        <button 
        type='button' 
        onClick={onRequestClose} 
        className='react-modal-close'>
            <img src={imgClose} alt="Fechar modal" />    
        </button>

        <Container>
          <h2>Cadastrar transação</h2>
          <input type='text' placeholder='Título' />

          <input type='number' placeholder='Valor' />
        
        <TransactionTypeContainer>
            <RadioButton 
                type='button'
                onClick={() => setType('deposit')}
                isActive={type === 'deposit'}
                activeColor={'green'}
                >
                <img src={imgIncome} 
                alt="Entrada" />
                <span>Entrada</span>
            </RadioButton>

            <RadioButton 
            type='button'
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor={'red'}
            >
                <img src={imgOutcome}
                alt="Saída" />
                <span>Saída</span>
            </RadioButton>
        </TransactionTypeContainer>

          <input type="text" placeholder='Categoria' />

          <button type="submit">Cadastrar</button>
        </Container>
        </Modal>
    )
}