import { useState } from "react";
import inicioSesion from "../../../assets/img/inicioSesion.jpg";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../utilities/hooks/useForm";
import LoginService from "../../server/LoginService";
import { jwtDecode } from "jwt-decode";
import AccessUser from "../../models/AccessUser";
import { MessageToastify } from "../../utilities/funtions/MessageToastify";
import Form from "react-bootstrap/Form";

export const Login = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const myNavigate = useNavigate();
  type formHtml = React.FocusEvent<HTMLFormElement>;
  const [inProcess, setProcess] = useState<boolean>(false);
  let { username, passwordHash, doubleLink, myObject } = useForm<AccessUser>(
    new AccessUser("", "")
  );

  const cleanBoxs = (myForm: HTMLFormElement) => {
    myForm.reset();
    myObject.username = "";
    myObject.passwordHash = "";

    myForm.username.value = "";
    myForm.passwordHash.value = "";
    myForm.classList.remove("was-validated");
  };

  const proccesForm = async (fh: formHtml) => {
    fh.preventDefault();
    setProcess(true);
    const formCurrent = fh.currentTarget;
    formCurrent.classList.add("was-validated");

    if (formCurrent.checkValidity() === false) {
      fh.preventDefault();
      fh.stopPropagation();
    } else {
      const result = await LoginService.ConsumeService(myObject);

      if (result.miToken) {
        const objJWT: any = jwtDecode(result.miToken);
        console.log(objJWT);
        localStorage.setItem("miToken", result.miToken);
        myNavigate("/dashboard");
        setProcess(false);
      } else {
        cleanBoxs(formCurrent);
        console.log("no son las contra");
        MessageToastify("error", "Credenciales incorrectas", 7000);
      }
    }
  };

  return (
    <>
      <div className="d-lg-flex half">
        <div
          className="bg order-1 order-md-2"
          style={{ backgroundImage: `url(${inicioSesion})` }}
        ></div>
        <div className="contents order-2 order-md-1">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
                <h3>
                  Inicia Sesión en <strong>Negociar.com</strong>
                </h3>
                <p className="mb-4"></p>
                <Form noValidate validated={inProcess} onSubmit={proccesForm}>
                  <div className="form-group first">
                    <Form.Group controlId="username">
                      <Form.Label>Usuario o Correo</Form.Label>
                      <Form.Control
                        required
                        type="username"
                        name="username"
                        placeholder="Usuario"
                        value={username}
                        onChange={doubleLink}
                      />

                      <Form.Control.Feedback type="invalid">
                        Por favor ingrese su usuario o correo
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div className="form-group last mb-3">
                    <Form.Group controlId="username">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        name="passwordHash"
                        placeholder="Contraseña"
                        value={passwordHash}
                        onChange={doubleLink}
                      />

                      <Form.Control.Feedback type="invalid">
                        Contraseña incorrecta
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  {/* <div className="d-flex mb-5 align-items-center">
                    <label className="control control--checkbox mb-0">
                      <span className="caption">Recordarme</span>
                      <input type="checkbox" defaultChecked />
                      <div className="control__indicator"></div>
                    </label>
                    <span className="ml-auto">
                      <a href="#" className="forgot-pass">
                        Olvidadaste la Contraseña
                      </a>
                    </span>
                  </div> */}

                  <button type="submit" className="btn btn-block btn-primary">
                    Iniciar Sesión
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
