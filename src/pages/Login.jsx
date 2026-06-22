import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />

      <div className="page">
        <h1>Login Page</h1>

        <form className="login-form">
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button type="submit">Login</button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Login;