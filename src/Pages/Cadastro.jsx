import React from 'react';

function Cadastro() {
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
              <label htmlFor="email">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="E-mail"
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
