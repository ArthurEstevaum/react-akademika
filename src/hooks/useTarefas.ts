import { useState, useEffect, useCallback } from 'react';
import { Tarefa, NovaTarefa } from '../types';
import * as api from '../services/api';

export function useTarefas() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const loadTarefas = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await api.getTarefas();
            setTarefas(data);
        } catch (err) {
            console.error("Erro ao carregar tarefas:", err);
            setError(err instanceof Error ? err.message : "Erro desconhecido ao carregar tarefas.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadTarefas();
    }, [loadTarefas]);

    const addTarefa = useCallback(async (novaTarefa: NovaTarefa) => {
        setLoading(true); 
        try {
            const createdTarefa = await api.createTarefa(novaTarefa);
            setTarefas(prev => [...prev, createdTarefa]);
        } catch (err) {
            console.error("Erro ao adicionar tarefa:", err);
            setError(err instanceof Error ? err.message : "Erro desconhecido ao adicionar tarefa.");
       
        } finally {
            setLoading(false);
        }
    }, []); 

    const removeTarefa = useCallback(async (id: number) => {
        setLoading(true);
        const originalTarefas = [...tarefas]; 
        setTarefas(prev => prev.filter(t => t.id !== id)); 
        try {
            await api.deleteTarefa(id);
        
        } catch (err) {
            console.error("Erro ao deletar tarefa:", err);
            setError(err instanceof Error ? err.message : "Erro desconhecido ao deletar tarefa.");
            setTarefas(originalTarefas);
        } finally {
            setLoading(false);
        }
    }, [tarefas]); 

    const modifyTarefa = useCallback(async (id: number, updatedData: Partial<Tarefa>) => {
        setLoading(true);
        const originalTarefas = [...tarefas];
        setTarefas(prev => prev.map(t => t.id === id ? { ...t, ...updatedData } : t)); 
        try {
            await api.patchTarefa(id, updatedData);
        } catch (err) {
            console.error("Erro ao modificar tarefa:", err);
            setError(err instanceof Error ? err.message : "Erro desconhecido ao modificar tarefa.");
            setTarefas(originalTarefas); 
        } finally {
            setLoading(false);
        }
    }, [tarefas]);


    return {
        tarefas,
        loading,
        error,
        addTarefa,
        removeTarefa,
        modifyTarefa, 
        reloadTarefas: loadTarefas 
    };
}
