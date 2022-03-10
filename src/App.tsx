import { useState } from "react";
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

import { GlobalStyles } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onHandleOpenModal={handleOpenModal}/>
      <Dashboard />
      <NewTransactionModal isOpen={isModalOpen} onRequestClose={handleCloseModal}/>
      <GlobalStyles />
    </TransactionsProvider>
  )
}
  
