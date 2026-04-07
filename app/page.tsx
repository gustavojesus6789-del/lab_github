import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-16">
        <section className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-zinc-200 px-4 py-1 text-sm font-medium dark:bg-zinc-800">
              Plataforma para desenvolvedores
            </span>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              O que é o <span className="text-zinc-600 dark:text-zinc-300">GitHub</span>?
            </h1>

            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              O GitHub é uma plataforma usada para <strong>armazenar, organizar e compartilhar códigos</strong>.
              Ele funciona junto com o Git, uma ferramenta de versionamento que salva o histórico do seu projeto.
            </p>

            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Com ele, você pode trabalhar em equipe, acompanhar alterações no código,
              criar portfólios de projetos e até contribuir com softwares de código aberto.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-black px-6 py-3 font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black"
              >
                Acessar GitHub
              </a>
              <a
                href="https://docs.github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-zinc-300 px-6 py-3 font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                Documentação
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/github-mark.svg"
                alt="Logo do GitHub"
                width={220}
                height={220}
                priority
                className="dark:invert"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
