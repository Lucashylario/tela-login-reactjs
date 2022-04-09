import loginImg from './assets/img-login.png';

import './styles.css';

function App() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem Vindo!</span>
            <span><img src={loginImg} alt="logo"></img></span>

            <div className='wrap-input'>
              <input type="email" />
                <span className='focus-input' data-placeholder='Email'></span> {/*  efeito degrade na linha do login*/}
            </div>

            <div className='wrap-input'>
              <input type="password" />
                <span className='focus-input' data-placeholder='Password'></span> {/*  efeito degrade na linha do login*/}
            </div>

            <div className='container-login-form-btn'>
              <button className='login-from-btn'>Login</button>
            </div>

            <div className='text-center'>
              <span className='text-1'>Não possui conta?</span>

              <a className='txt-2' href='#'>Criar conta.</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
