import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';
import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';

import imgIncome from '../../assets/income.svg'
import imgOutcome from '../../assets/outcome.svg'
import imgClose from '../../assets/close.svg'

import { Container, RadioButton, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
const { createTransaction } = useContext(TransactionsContext);

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        createTransaction({
            title,
            amount,
            category,
            type
        })
    }

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

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>
          <input 
            placeholder='Título' 
            value={title}
            onChange={event => setTitle(event.target.value)}
          />

          <input 
            type='number'
            placeholder='Valor'
            value={amount}
            onChange={event => setAmount(Number(event.target.value))}
          />
        
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

          <input 
            type="text" 
            placeholder='Categoria'
            value={category}
            onChange={event => setCategory(event.target.value)} 
            />

          <button type="submit">Cadastrar</button>
        </Container>
        </Modal>
    )
}