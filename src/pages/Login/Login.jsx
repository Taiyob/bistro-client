import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const { login } = useContext(AuthContext);
  //const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginInfo = { email, password };
    console.log(loginInfo);
    login(email, password)
      .then((res) => {
        res.user;
        Swal.fire({
          title: "User login successfull",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
          },
        });
        navigate(from, { replace: true });
      })
      .then((err) => {
        err;
      });
  };

  const handleValidateCaptcha = (e) => {
    //const value = captchaRef.current.value;
    const value = e.target.value;
    if (validateCaptcha(value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss || login</title>
      </Helmet>
      ;
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate></LoadCanvasTemplate>
                </label>
                <input
                  type="text"
                  name="captcha"
                  onBlur={handleValidateCaptcha}
                  //ref={captchaRef}
                  placeholder="write above words"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button
                  disabled={disabled}
                  type="submit"
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="px-6">
              <small>
                New here?{" "}
                <Link to="/register" className="text-blue text-xl">
                  Please register
                </Link>
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
