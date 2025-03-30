import React, { useState } from 'react';
import { useTarefas } from './hooks/useTarefas';
import TarefaList from './components/TarefaList';
import TarefaForm from './components/TarefaForm';
import { Tarefa, NovaTarefa } from './types';
import './App.css';

function App() {
  const {
    tarefas,
    loading,
    error,
    addTarefa,
    removeTarefa,
    modifyTarefa,
  } = useTarefas();

  const [editingTarefa, setEditingTarefa] = useState<Tarefa | null>(null);

  const handleFormSubmit = async (tarefaData: NovaTarefa | Tarefa) => {
    if ('id' in tarefaData) {

      await modifyTarefa(tarefaData.id, tarefaData);
    } else {

      await addTarefa(tarefaData);
    }
    setEditingTarefa(null);
  };

  const handleEdit = (tarefa: Tarefa) => {
    setEditingTarefa(tarefa);
  };

  const handleCancelEdit = () => {
    setEditingTarefa(null);
  };

  const handleToggleConcluida = async (id: number, concluida: boolean) => {
    await modifyTarefa(id, { concluida });
  }

  return (
    <div className="App">
    <h1>Lista tarefas</h1>

    <TarefaForm
    onSubmit={handleFormSubmit}
    initialData={editingTarefa}
    isLoading={loading}
  onCancelEdit={handleCancelEdit}
  />

  <h2>Tarefas</h2>
  { }
  {loading && <p>Carregando...</p>}
  {error && <p style={{ color: 'red' }}>Erro: {error}</p>}

  { }
  {!error && (
    <TarefaList
    tarefas={tarefas}
    onDelete={removeTarefa}
    onEdit={handleEdit}
    onToggleConcluida={handleToggleConcluida}
    isLoading={loading}
    />
  )}
  </div>
  );
}

export default App;
