export function Register() {
  return (
    <div className="flex flex-col items-center mt-28">
      <h1 className="font-openSans font-black text-primary text-5xl mb-16">
        Real Time Chat
      </h1>
      <h2 className="font-bold text-2xl mb-7">Inscreva-se</h2>
      <form action="" method="post" className="w-1/4">
        <input
          type="text"
          name="username"
          className="border w-full rounded-full border-black py-3 px-5 mb-5"
          placeholder="Nome de usuário"
        />
        <input
          type="email"
          name="email"
          className="border w-full rounded-full border-black py-3 px-5 mb-5"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          className="border w-full rounded-full border-black py-3 px-5 mb-12"
          placeholder="Senha"
        />
        <button
          type="submit"
          className="bg-primary w-full rounded-full py-3 text-white font-semibold"
        >
          Inscreva-se
        </button>
      </form>
      <h6 className="mt-8 text-sm text-gray-400">
        Você tem uma conta? <span className="text-primary">Conecte-se</span>
      </h6>
    </div>
  );
}
