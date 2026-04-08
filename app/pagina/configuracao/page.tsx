import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-white">
      <main className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">
          Configuração do GitHub no Visual Studio Code
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-300">
          Siga os passos abaixo para instalar o Git e conectar sua conta do GitHub
          no VS Code usando o terminal.
        </p>

        <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="mb-3 text-2xl font-semibold">1) Instalar o Git pelo terminal</h2>
          <div className="rounded-xl bg-zinc-950 p-4 text-sm text-green-400">
            <code>winget install --id Git.Git -e --source winget</code>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="mb-3 text-2xl font-semibold">1.1) Reiniciar o Visual Studio Code</h2>
          <p className="mb-4 text-amber-600 dark:text-amber-300">
            !! Após a instalação, reinicie o VS Code para que ele reconheça o Git.
          </p>
          <p className="mb-4 text-zinc-600 dark:text-zinc-300">
            No terminal do VS code verifique se a versão do Git foi instalada corretamente com o comando:
          </p>
          <div className="rounded-xl bg-zinc-950 p-4 text-sm text-green-400">
            <code>git --version</code>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="mb-3 text-2xl font-semibold">2) Configurar usuário do GitHub</h2>
          <p className="mb-4 text-zinc-600 dark:text-zinc-300">
            Depois da instalação, configure seu nome e email no terminal do VS Code:
          </p>
          <div className="space-y-3 rounded-xl bg-zinc-950 p-4 text-sm text-green-400">
            <code className="block">git config --global user.email {"gustavojesus6789@gmail.com"}</code>
            <code className="block">git config --global user.name {"gustavojesus6789-del"}</code>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="mb-3 text-2xl font-semibold">3) Autorizar acesso</h2>
          <p className="text-zinc-600 dark:text-zinc-300">
            Quando o Visual Studio Code pedir autorização, faça login na sua conta do
            GitHub e <span className="font-semibold">autorize o acesso</span> para
            concluir a conexão.
          </p>
        </section>
      </main>
    </div>
  )
}
