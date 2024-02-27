/*const Login = () => {


    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await signIn("credentials", {
          redirect: false,
          email: e.target.email.value,
          password: e.target.password.value,
        });
    
        if (!result.error) {
          // Si el inicio de sesión es exitoso, redireccionar a la página deseada
          // Por ejemplo, puedes redireccionar a la página de inicio
          // router.push("/");
        } else {
          // Si hay un error en el inicio de sesión, puedes mostrar un mensaje de error
          console.error("Error de inicio de sesión:", result.error);
        }
      };

    return (
    <div className="container mx-auto px-4">
    <h1 className="text-3xl font-bold text-center my-8">Iniciar Sesión</h1>
    <form className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Correo electrónico</label>
        <input type="email" id="email" className="form-input mt-1 block w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700">Contraseña</label>
        <input type="password" id="password" className="form-input mt-1 block w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={handleLogin}>Iniciar Sesión</button>
    </form>
    </div>);
}
 
export default Login;*/