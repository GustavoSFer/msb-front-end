import React from 'react';
import { render, screen } from '@testing-library/react';
import Cadastro from '../Pages/Cadastro';

test('Verifica se existe o input do Nome', () => {
  render(<Cadastro />);
  const inputName = screen.getByTestId("nome");

  expect(inputName).toBeInTheDocument();
});