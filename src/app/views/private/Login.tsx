import inicioSesion from '../../../assets/img/inicioSesion.jpg'

export const Login = () =>{
    return(
        <>
        <div className="d-lg-flex half">
    <div className="bg order-1 order-md-2" style={{ backgroundImage: `url(${inicioSesion})` }}></div>
    <div className="contents order-2 order-md-1">

      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-7">
            <h3>Inicia Sesión en <strong>Negociar.com</strong></h3>
            <p className="mb-4"></p>
            <form action="#" method="post">
              <div className="form-group first">
                <label htmlFor="username">Usuario o Correo</label>
                <input type="text" className="form-control" placeholder="Tu Correo" id="username"/>
              </div>
              <div className="form-group last mb-3">
                <label htmlFor="password">Contraseña</label>
                <input type="password" className="form-control" placeholder="Tu Contraseña" id="password"/>
              </div>
              
              <div className="d-flex mb-5 align-items-center">
                <label className="control control--checkbox mb-0"><span className="caption">Recordarme</span>
                  <input type="checkbox" defaultChecked/>
                  <div className="control__indicator"></div>
                </label>
                <span className="ml-auto"><a href="#" className="forgot-pass">Olvidadaste la Contraseña</a></span> 
              </div>

              <input type="submit" value="Iniciar Sesión" className="btn btn-block btn-primary"/>

            </form>
          </div>
        </div>
      </div>
    </div>

    
  </div>
        </>
    )
}