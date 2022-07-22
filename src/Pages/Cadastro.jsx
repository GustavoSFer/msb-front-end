import React, { useState } from 'react';
import Input from '../Components/Input';

function Cadastro() {
  const [name, setName] = useState('');

  return (
    <div>
      <div>
        Bem vindo!
      </div>

      <div>
        <div>
          <h1>Enviar dados</h1>
          <form>
            <div>
              <Input
                type="text"
                name="nome"
                id="nome"
                value={name}
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
