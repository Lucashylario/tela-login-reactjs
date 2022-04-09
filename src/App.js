import { useState } from 'react';
import loginImg from './assets/img-login.png';

import './styles.css';

function App() {
  const [email, setEmail] = useState("") /* capturar valor do input Email*/
  const [password, setPassword] = useState("") /* capturar valor do input Senha*/

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem Vindo!</span>
            <span className="login-form-title"><img src={loginImg} alt="logo"></img></span>

            <div className='wrap-input'>
              <input 
                className={email !== "" ? 'input has-value' : 'input'} /* Condição: se o email for diferente (!==) de vazio, ele ativa as classes "has-value input", se não tiver vazio (:) recebe "input" */
                type="email" 
                value={email} 
                onChange={event => setEmail(event.target.value)} 
              />
                <span className='focus-input' data-placeholder='Email'></span> {/*  efeito degrade na linha do login*/}
            </div>

            <div className='wrap-input'>
              <input 
                className={email !== "" ? 'input has-value' : 'input'} /* Condição: se o email for diferente (!==) de vazio, ele ativa as classes "has-value input", se não tiver vazio (:) recebe "input" */
                type="password" value={password} 
                onChange={event => setPassword(event.target.value)} 
              />
                <span className='focus-input' data-placeholder='Password'></span> {/*  efeito degrade na linha do login*/}
            </div>

            <div className='container-login-form-btn'>
              <button className='login-from-btn'>Login</button>
            </div>

            <div className='text-center'>
              <span className='txt-1'>Não possui conta?</span>

              <a className='txt-2' href='#'>Criar conta.</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
