import { useState } from "react";
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

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
    <>
      <Header onHandleOpenModal={handleOpenModal}/>
      <Dashboard />
      <NewTransactionModal isOpen={isModalOpen} onRequestClose={handleCloseModal}/>
      <GlobalStyles />
    </>
  )
}
  
