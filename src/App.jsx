import './App.css'
import { useState } from 'react'
import Modal from './components/modal'

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [openModalCursos, setOpenModalCursos] = useState(false)

  return (
    <div className='App'>
    school web
      <div>
        <button onClick={() => setOpenModal(true)}>Alunos</button>
        <button onClick={() => setOpenModalCursos(true)}>Cursos</button>
      </div>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
         Castrar Alunos
      </Modal>
      <Modal
        isOpen={openModalCursos}
        setModalOpen={() => setOpenModalCursos(!openModalCursos)}
      >
        Cadastrar cursos
      </Modal>
    </div>
  )
}

export default App