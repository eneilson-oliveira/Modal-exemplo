import './App.css'
import { useState } from 'react'
import Modal from './components/modal'
import {useForm} from 'react-hook-form'
import FormAluno from './components/FormAluno'
import CursosForm from './components/CursosForm'
function App() {
  const [openModal, setOpenModal] = useState(false)
  const [openModalCursos, setOpenModalCursos] = useState(false)

  return (
    <div className='App'>

      <div className='navbar'>
        <h2>School web</h2>
        <nav>
          <button onClick={() => setOpenModal(true)}>Alunos</button>
          <button onClick={() => setOpenModalCursos(true)}>Cursos</button>
        </nav>
      </div>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
          <FormAluno/>
      </Modal>
      <Modal
        isOpen={openModalCursos}
        setModalOpen={() => setOpenModalCursos(!openModalCursos)}
      >
        <CursosForm/>
      </Modal>
    </div>
  )
}

export default App