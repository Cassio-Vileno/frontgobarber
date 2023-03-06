import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToatsContainer';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContect = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMenssages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();

      const toast = { id, type, title, description };
      setMenssages(state => [...state, toast]);
    },
    [],
  );
  const removeToast = useCallback((id: string) => {
    setMenssages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContect.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContect.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContect);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
