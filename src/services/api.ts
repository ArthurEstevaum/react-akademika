
import { Tarefa, NovaTarefa } from '../types';

const API_URL = 'http://localhost:3001/tarefas'; 

const handleResponse = async <T>(response: Response): Promise<T> => {
    if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData}`);
    }
    return response.json() as Promise<T>;
};

export const getTarefas = async (): Promise<Tarefa[]> => {
    const response = await fetch(API_URL);
    return handleResponse<Tarefa[]>(response);
};

export const getTarefaById = async (id: number): Promise<Tarefa> => {
    const response = await fetch(`${API_URL}/${id}`);
    return handleResponse<Tarefa>(response);
};

export const createTarefa = async (tarefaData: NovaTarefa): Promise<Tarefa> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tarefaData),
    });
    return handleResponse<Tarefa>(response);
};

export const updateTarefa = async (id: number, tarefaData: Tarefa): Promise<Tarefa> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tarefaData),
    });
    return handleResponse<Tarefa>(response);
};

export const patchTarefa = async (id: number, partialData: Partial<Tarefa>): Promise<Tarefa> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(partialData),
    });
    return handleResponse<Tarefa>(response);
}

export const deleteTarefa = async (id: number): Promise<{}> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData}`);
    }
    return {}; 
};
