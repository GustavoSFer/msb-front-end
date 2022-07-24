import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cadastro from '../Pages/Cadastro';

test('Verifica se existe o input do Nome', () => {
  render(<Cadastro />);
  const inputName = screen.getByTestId("nome");

  expect(inputName).toBeInTheDocument();
});

test('Verifica se existe o input do Email', () => {
  render(<Cadastro />);
  const inputEmail = screen.getByTestId("email");

  expect(inputEmail).toBeInTheDocument();
});

test('Verifica se existe o input do Phone', () => {
  render(<Cadastro />);
  const inputPhone = screen.getByTestId("phone");

  expect(inputPhone).toBeInTheDocument();
});

test('Verifica se existe o input do Mensagem', () => {
  render(<Cadastro />);
  const inputMensagem = screen.getByTestId("mensagem");

  expect(inputMensagem).toBeInTheDocument();
});

test('Verifica se existe o input do File', () => {
  render(<Cadastro />);
  const inputFile = screen.getByTestId("file");

  expect(inputFile).toBeInTheDocument();
});

test('Verifica se existe o input do Button', () => {
  render(<Cadastro />);
  const inputButton = screen.getByTestId("button");

  expect(inputButton).toBeInTheDocument();
  // expect(inputButton).toHaveValue("Enviar");
});

test('Verifica se existe o texto bem vindo!', () => {
  render(<Cadastro />);
  const textTela = screen.getByText(/Bem vindo!/i);

  expect(textTela).toBeInTheDocument();
});

test('Digitando nos input', () => {
  render(<Cadastro />);
  const inputName = screen.getByTestId("nome");
  const inputEmail = screen.getByTestId("email");
  const inputPhone = screen.getByTestId("phone");
  const inputMensagem = screen.getByTestId("mensagem");
  const inputButton = screen.getByTestId("button");

  userEvent.type(inputName, "Realizando teste");
  userEvent.type(inputEmail, "teste@gmail.com");
  userEvent.type(inputPhone, "11958951414");
  userEvent.type(inputMensagem, "Realizando teste");

  userEvent.click(inputButton);

  // expect(inputName).toHaveValue("");
  // expect(inputEmail).toHaveValue("");
  // expect(inputPhone).toHaveValue("");
  // expect(inputMensagem).toHaveValue("");
});
