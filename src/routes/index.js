import React from 'react';

import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';
import {useAuth} from '../context/Auth'


const Routes = () => {
  const {signed} = useAuth()
      
  return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;