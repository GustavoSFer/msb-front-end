import React, { useState } from 'react';
import Input from '../Components/Input';
import '../Style/Input.css';

function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [file, setFile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
  };

  return (
    <div className="row image-fundo align-items-center p-4">
      <div className="col-sm-5 text-center">
        Bem vindo!
      </div>

      <div className="col-sm-6 shadow p-5 rounded m-2">
        <div className="row mb-4">
          <h1 className="text-muted text-center">Enviar dados</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
              <div className="col-ms-12 mb-3">
                <Input
                  type="text"
                  name="nome"
                  id="nome"
                  value={name}
                  placeholder="Nome"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-ms-12 mb-3">
                <Input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-ms-12 mb-3">
                <Input
                  type="text"
                  name="telefone"
                  value={celular}
                  placeholder="Celular"
                  onChange={(e) => setCelular(e.target.value)}
                />
              </div>
              <div className="text-start">
                <label htmlFor="mensagem">
                  Mensagem
                  <textarea
                    type="area"
                    name="mensagem"
                    value={mensagem}
                    placeholder="Mensagem"
                    className="max-input form-control"
                    onChange={(e) => setMensagem(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <input
                  type="file"
                  className="form-control form-control-sm mt-3"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
