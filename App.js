import * as React from 'react';
import {Home} from './src/components/Home';
import {AuthProvider} from './src/components/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}
