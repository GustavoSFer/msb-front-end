import React, { useState } from 'react';
import Button from '../Components/Button';
import createData from '../Services';
import Input from '../Components/Input';
import logo from '../images/msb.png';
import '../Style/Input.css';

function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [file, setFile] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const validCampos = () => {
    if (!name || !email || !file || !phone) {
      return false;
    }
    return true;
  };

  const validPhone = () => {
    if (phone.length > 9 && phone.length < 12) {
      return true;
    }
    return false;
  };

  const isValidEmail = () => {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return regex.test(email);
  };

  const validFile = () => {
    const typeFile = ['pdf', 'doc', 'docx', 'odt', 'txt'];
    if (!file) return false;
    const extensao = file.name.split('.');
    if (typeFile.includes(extensao[1])) {
      setMensagemErro('');
    } else {
      return setMensagemErro('Formato do arquivo invalido!');
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const campos = validCampos();
    const fileToVelid = validFile();
    const isValidPhone = validPhone();
    const isvalidEmail = isValidEmail();
    if (!campos) {
      return setMensagemErro('Por favor preencher todos os campos');
    }

    if (!isValidPhone || !isvalidEmail) {
      return setMensagemErro('E-mail ou senha incorreto!');
    }

    if (campos && fileToVelid) {
      const nomeFile = file.name;
      createData('/', {
        name, email, phone, mensagem, nomeFile,
      });
    }
    return false;
  };

  return (
    <div className="row image-fundo align-items-center p-4">
      <div className="col-sm-5 text-center">
        Bem vindo!
        <div className="row text-center">
          <img src={logo} alt="Imagem logo empresa" className="col-md-9 logo" />
        </div>
      </div>

      <div className="col-sm-6 shadow p-5 rounded m-2 width-form">
        <div className="row mb-4">
          <h1 className="text-muted text-center">Enviar dados</h1>
          <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="mb-3 row">
              <div className="col-ms-12 mb-3">
                <Input
                  type="text"
                  name="Nome"
                  id="nome"
                  value={name}
                  placeholder="Nome"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-ms-12 mb-3">
                <Input
                  type="email"
                  name="E-mail"
                  value={email}
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-ms-12 mb-3">
                <Input
                  type="text"
                  name="Telefone"
                  value={phone}
                  placeholder="DDD + Celular / Telefone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="text-start">
                <label htmlFor="mensagem">
                  Mensagem
                  <textarea
                    type="area"
                    name="mensagem"
                    value={mensagem}
                    placeholder="Mensagem (Opcional)"
                    className="max-input form-control"
                    onChange={(e) => setMensagem(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="file">
                  <input
                    type="file"
                    id="file"
                    className="form-control form-control-sm mt-3"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </label>
              </div>
              <Button
                onClick={handleSubmit}
              >
                Enviar
              </Button>
              {mensagemErro && <p>{mensagemErro}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
