import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Tarefa, NovaTarefa } from '../types';

interface TarefaFormProps {
    onSubmit: (tarefaData: NovaTarefa | Tarefa) => Promise<void>;
    initialData?: Tarefa | null;
    isLoading?: boolean;
    onCancelEdit?: () => void;
}

const TarefaForm: React.FC<TarefaFormProps> = ({
    onSubmit,
    initialData,
    isLoading = false,
    onCancelEdit
}) => {
    const [formData, setFormData] = useState<NovaTarefa>({ titulo: '', concluida: false });
    const isEditing = !!initialData;

    useEffect(() => {
        if (initialData) {

            setFormData({ titulo: initialData.titulo, concluida: initialData.concluida });
        } else {

            setFormData({ titulo: '', concluida: false });
        }
    }, [initialData]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!formData.titulo.trim()) {
            alert('Estar vazio.');
            return;
        }

        const dataToSend = isEditing ? { ...formData, id: initialData!.id } : formData;
        await onSubmit(dataToSend);

        if (!isEditing) {
            setFormData({ titulo: '', concluida: false });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <h2>{isEditing ? 'Editar' : 'Adicionar'}</h2>
        <div>
        <label htmlFor="titulo">titulo:</label>
        <input
        type="text"
        id="titulo"
        name="titulo"
        value={formData.titulo}
        onChange={handleInputChange}
        placeholder="Nome da tarefa"
        required
        disabled={isLoading}
        />
        </div>
        <div>
        <label htmlFor="concluida">Concluída:</label>
        <input
        type="checkbox"
        id="concluida"
        name="concluida"
        checked={formData.concluida}
        onChange={handleInputChange}
        disabled={isLoading}
        />
        </div>
        <button type="submit" disabled={isLoading}>
        {isLoading ? 'Salvando...' : isEditing ? 'Atualizar Tarefa' : 'Adicionar Tarefa'}
        </button>
        {isEditing && onCancelEdit && (
            <button type="button" onClick={onCancelEdit} disabled={isLoading}>
            Cancelar
            </button>
        )}
        </form>
    );
};

export default TarefaForm;
