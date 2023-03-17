import React from 'react';

import { useAuth } from '../hooks/Auth';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';


export function Routes() {
  const { user } = useAuth();
  return user ? <AppRoutes /> : <AuthRoutes />;
}
