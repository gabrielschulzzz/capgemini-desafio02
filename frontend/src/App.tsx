import { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Navbar } from "./components/Navbar";
import { AdModal } from './components/AdModal'
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';

Modal.setAppElement('#root')


function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  return (
    <>
      <GlobalStyle />
      <AdModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
      <Navbar onModalOpen={openModal} />
      <Dashboard />
    </>
  );
}

export default App;
