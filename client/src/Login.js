import { useRef, useState, useEffect } from "react";
/*useRef คือ การเข้าถึงโดยการ Reference ไปที่ DOM element*/

/*component Login*/
const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user,password);
    setUser('');
    setPassword('');
    setSuccess(true);

  }


  /*aria คือ ค่า attribute ที่ระบุจุดปรังสงค์ของ element บนหน้าเว็บไซด์*/
  return (
    <>
    {success ? (
        <section>
            <h1>You are logged in!</h1>
            <br />
            <p>
                <a href="#">Go to Home</a>
            </p>
        </section>
    ) : (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <n1>Log In</n1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(event) => setUser(event.target.value)}
          value={user}
          required
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          autoComplete="off"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          required
        />
        <button>Log In</button>
      </form>
      <p>
        Need an Account?
        <br />
        <span className="line">
          {/*put router link here*/}
          <a href="#">Register</a>
        </span>
        </p>
        </section>
    )}
</>
)
    }
export default Login;
