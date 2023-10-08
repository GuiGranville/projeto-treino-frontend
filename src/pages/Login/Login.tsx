import "./styleLogin.scss";


export default function Login(){

    return(
        <div className="login-container">
            <div className="login-container-header">
                <div className="login-container-header-title">
                    <h3>
                        EFETUAR LOGIN NA PLATAFORMA 
                    </h3>
                    </div>
            </div>
            <div className="login-container-body">
                <div className="login-container-body-inputs">
                    <input type="text" placeholder="@email.com"/>
                    <input type="text" placeholder="Senha"/>
                </div>
                <div className="login-container-body-esqueciSenha">
                    <input type="checkbox" />
                    <p style={{paddingLeft: '5px', paddingRight: "20px"}}>Lembrar Acesso</p>
                    <p>Esqueceu a senha ?</p>
                </div>
                <div className="login-container-body-botao">
                    <button>ENTRAR</button>
                </div>
            </div>
        </div>
    )
}