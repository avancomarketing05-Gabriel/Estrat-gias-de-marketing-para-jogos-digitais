import Image from "next/image";

const resources = [
  {
    title: "Google Forms",
    description: "Crie os formulários para a atividade.",
    href: "https://docs.google.com/forms/u/0/",
    category: "Ferramenta",
    image: "/images/google-forms.png",
    imageAlt: "Imagem do Google Forms",
  },
  {
    title: "Google Trends",
    description:
      "Pesquise tendências e descubra o interesse do público por jogos.",
    href: "https://trends.google.com.br/trends/",
    category: "Pesquisa",
    image: "/images/google-trends.jpeg",
    imageAlt: "Imagem do Google Trends",
  },
  {
    title: "Persona de usuário",
    description: "Consulte o material utilizado para definir o jogador ideal.",
    href: "https://canva.link/x2aqz3xp6cqd52e",
    category: "Atividade",
    image: "/images/personausuario.png",
    imageAlt: "Imagem do material de persona",
  },
  {
    title: "Planilha da atividade",
    description:
      "Organize o orçamento, as estratégias, as metas e os cálculos da campanha.",
    href: "https://docs.google.com/spreadsheets/d/1iUqScEp2A0aMHlyMK_a6ZLo4T1VttMluf_0b2Msbm4E/edit?usp=sharing",
    category: "Atividade",
    image: "/images/planilha.jpg",
    imageAlt: "Imagem da planilha de marketing",
  },
  {
    title: "Google Docs da atividade",
    description:
      "Organize o orçamento, as estratégias, as metas e os cálculos da campanha.",
    href: "https://docs.google.com/document/d/14rGmFeTrKD8G9sidsPMk9pKEIiVTOJ0X4smMx35_Emc/edit?usp=sharing",
    category: "Atividade",
    image: "/images/googledocs.jpeg",
    imageAlt: "Imagem do google docs de marketing",
  },
];

const games = [
  {
    title: "Onikura",
    href: "https://store.steampowered.com/app/3008640/Onikura/?l=portuguese",
    image: "/images/onikura.jpg",
    imageAlt: "Imagem do jogo Onikura",
  },
  {
    title: "9 Kings",
    href: "https://store.steampowered.com/app/2784470/9_Kings/",
    image: "/images/9-kings.jpeg",
    imageAlt: "Imagem do jogo 9 Kings",
  },
  {
    title: "Super Mombo Quest",
    href: "https://store.steampowered.com/app/1262040/Super_Mombo_Quest/?l=portuguese",
    image: "/images/super-mombo-quest.jpeg",
    imageAlt: "Imagem do jogo Super Mombo Quest",
  },
  {
    title: "World of Tanks",
    href: "https://store.steampowered.com/app/1407200/World_of_Tanks/?l=portuguese",
    image: "/images/world-of-tanks.jpeg",
    imageAlt: "Imagem do jogo World of Tanks",
  },
  {
    title: "Hollow Knight: Silksong",
    href: "https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/",
    image: "/images/hollow-knight-silksong.avif",
    imageAlt: "Imagem do jogo Hollow Knight Silksong",
  },
  {
    title: "Hollow Knight",
    href: "https://store.steampowered.com/app/367520/Hollow_Knight/",
    image: "/images/hollow-knight.jpg",
    imageAlt: "Imagem do jogo Hollow Knight",
  },
  {
    title: "Buckshot Roulette",
    href: "https://store.steampowered.com/app/2835570/Buckshot_Roulette/?l=portuguese",
    image: "/images/buckshot.jpg",
    imageAlt: "Imagem do jogo Buckshot Roulette",
  },
  {
    title: "Lethal Company",
    href: "https://store.steampowered.com/app/1966720/Lethal_Company/",
    image: "/images/lethal.jpg",
    imageAlt: "Imagem do jogo Lethal Company",
  },
  {
    title: "R.E.P.O.",
    href: "https://store.steampowered.com/app/3241660/REPO/?l=portuguese",
    image: "/images/repo.jpg",
    imageAlt: "Imagem do jogo R.E.P.O.",
  },
  {
    title: "Cult of the Lamb",
    href: "https://store.steampowered.com/app/1313140/Cult_of_the_Lamb/",
    image: "/images/cultlamb.jpg",
    imageAlt: "Imagem do jogo Cult of the lamb",
  },
  {
    title: "MECCHA CHAMELEON",
    href: "https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/?l=portuguese",
    image: "/images/mecha.jpg",
    imageAlt: "Imagem do jogo MECCHA CHAMELEON",
  },
  {
    title: "PEAK",
    href: "https://store.steampowered.com/app/3527290/PEAK/",
    image: "/images/peak.jpg",
    imageAlt: "Imagem do jogo PEAK",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-7">
      <div className="mb-5 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800"></div>

      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl leading-7 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </div>
  );
}

function ResourceCard({
  title,
  description,
  href,
  category,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  href: string;
  category: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:border-zinc-400 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
    >
      <div className="relative aspect-[16/9] bg-zinc-200 dark:bg-zinc-800">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex h-full flex-col p-5">
        <span className="mb-3 w-fit rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
          {category}
        </span>
        <h3 className="text-lg font-semibold group-hover:underline">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <span className="mt-5 text-sm font-semibold text-blue-600 dark:text-blue-400">
          Acessar recurso ↗
        </span>
      </div>
    </a>
  );
}

function GameCard({
  title,
  description,
  href,
  image,
  imageAlt,
}: {
  title: string;
  description?: string;
  href: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:border-zinc-400 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
    >
      <div className="relative aspect-[16/9] bg-zinc-200 dark:bg-zinc-800">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-5">
        <h3 className="font-semibold group-hover:underline">{title}</h3>
        {description && (
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        )}
        <p className="mt-4 text-sm font-semibold text-blue-600 dark:text-blue-400">
          Acessar página do jogo ↗
        </p>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100">
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
          <a href="#" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
              <Image
                src="/images/avanco.jpg"
                alt="Logo da atividade"
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <p className="font-bold">Marketing de Jogos</p>
              <p className="text-xs text-zinc-500">Material de apoio</p>
            </div>
          </a>

          <a
            href="https://avancomarketing.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-zinc-600 hover:text-blue-600 dark:text-zinc-300"
          >
            Avanço Marketing ↗
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <section className="mb-16">
          <div className="relative mb-8 aspect-[16/2] overflow-hidden rounded-3xl bg-zinc-200 dark:bg-zinc-900">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
                Guia de recursos
              </p>
              <h1 className="mt-3 max-w-3xl text-4xl font-bold text-white sm:text-6xl">
                Ferramentas e recursos
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-200 sm:text-lg sm:leading-8">
                Estratégias de marketing para jogos digitais
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <SectionHeading
            eyebrow="Materiais e ferramentas"
            title="Comece por aqui"
            description="Acesse os recursos necessários para pesquisar, definir a persona e organizar a campanha de marketing."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource) => (
              <ResourceCard key={resource.title} {...resource} />
            ))}
          </div>
        </section>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm text-zinc-500">Etapa 1</p>
            <h3 className="mt-2 font-bold">Pesquise o público</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Descubra tendências e entenda a persona.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm text-zinc-500">Etapa 2</p>
            <h3 className="mt-2 font-bold">Planeje a campanha</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Defina metas, canais, orçamento e cronograma.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm text-zinc-500">Etapa 3</p>
            <h3 className="mt-2 font-bold">Analise os resultados</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Compare os indicadores e justifique as decisões.
            </p>
          </div>
        </div>

        <section className="mb-16">
          <div className="mb-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Aprendizado e inspiração
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Canais e conteúdos recomendados
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-zinc-600 dark:text-zinc-400">
              Conheça criadores e estúdios para buscar referências de marketing,
              copywriting e desenvolvimento de jogos digitais.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="mb-4 text-xl font-bold">Marketing e comunicação</h3>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Tiago Tessmann",
                  category: "Marketing digital",
                  description:
                    "Aprenda sobre tráfego pago, anúncios e estratégias digitais.",
                  href: "https://www.youtube.com/@TiagoTessmann",
                  image: "https://unavatar.io/youtube/@TiagoTessmann",
                },
                {
                  title: "Adriano Gianini",
                  category: "Google Ads",
                  description:
                    "Explore conteúdos sobre anúncios e otimização de campanhas.",
                  href: "https://www.youtube.com/@AdrianoGianiniAds",
                  image: "https://unavatar.io/youtube/@AdrianoGianiniAds",
                },
                {
                  title: "Copywriting na prática",
                  category: "Escrita persuasiva",
                  description:
                    "Confira o vídeo recomendado sobre comunicação e persuasão.",
                  href: "https://www.youtube.com/watch?v=GoAbIBLAEns",
                  image: "https://img.youtube.com/vi/GoAbIBLAEns/hqdefault.jpg",
                },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <img
                      src={item.image}
                      alt={`Imagem de ${item.title}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {item.category}
                    </span>
                    <h4 className="mt-2 text-lg font-bold">{item.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold text-blue-600 group-hover:underline dark:text-blue-400">
                      Acessar conteúdo ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">
              Desenvolvimento e marketing de jogos
            </h3>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "André Young",
                  category: "Referência em vídeo",
                  description:
                    "Assista ao vídeo selecionado e busque novas ideias para seus projetos.",
                  href: "https://www.youtube.com/watch?v=SddCKQ3kKxg",
                  image: "https://img.youtube.com/vi/SddCKQ3kKxg/hqdefault.jpg",
                },
                {
                  title: "Too Dark Studios",
                  category: "Vídeos curtos",
                  description:
                    "Explore vídeos e referências relacionadas ao universo dos jogos.",
                  href: "https://www.youtube.com/@TooDarkStudios/shorts",
                  image: "https://unavatar.io/youtube/@TooDarkStudios",
                },
                {
                  title: "Orube Game Studio",
                  category: "Estúdio de jogos",
                  description:
                    "Conheça o canal de um estúdio brasileiro de desenvolvimento de jogos.",
                  href: "https://www.youtube.com/c/OrubeGameStudio",
                  image:
                    "https://i0.wp.com/dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2024/01/orube-scaled.jpg?resize=950%2C543&ssl=1",
                },
                {
                  title: "RodDev",
                  category: "Desenvolvimento",
                  description:
                    "Explore vídeos curtos e amplie suas referências sobre criação de jogos.",
                  href: "https://www.youtube.com/@RodDev/shorts",
                  image: "https://unavatar.io/youtube/@RodDev",
                },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <img
                      src={item.image}
                      alt={`Imagem de ${item.title}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                      {item.category}
                    </span>
                    <h4 className="mt-2 text-lg font-bold">{item.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold text-blue-600 group-hover:underline dark:text-blue-400">
                      Acessar canal ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/30">
            <h3 className="font-bold">Como aproveitar as referências?</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
              Observe títulos, miniaturas, formatos de conteúdo, chamadas para
              ação e estratégias de comunicação. Identifique ideias que possam
              ser adaptadas ao público-alvo e aos objetivos da campanha do seu
              jogo.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <SectionHeading
            eyebrow="Referências da atividade"
            title="Jogos mencionados no slide"
            description="Explore os jogos citados durante a apresentação para observar gênero, público, apresentação visual, avaliações e posicionamento."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <SectionHeading
            eyebrow="Sobre o projeto"
            title="Avanço Marketing"
            description="Conheça a empresa e acesse o perfil profissional do responsável pelo material."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <a
              href="https://avancomarketing.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="relative aspect-[16/7] bg-zinc-200 dark:bg-zinc-800">
                <Image
                  src="/images/avanco.jpg"
                  alt="Imagem do site da Avanço Marketing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold group-hover:underline">
                  Site da empresa
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Conheça a Avanço Marketing.
                </p>
                <p className="mt-4 font-semibold text-blue-600 dark:text-blue-400">
                  avancamarketing.com.br ↗
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/gabriel-de-oliveira-mello-dev-researcher/"
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="relative aspect-[16/7] bg-zinc-200 dark:bg-zinc-800">
                <Image
                  src="/images/linkedin.webp"
                  alt="Imagem do perfil profissional no LinkedIn"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold group-hover:underline">
                  LinkedIn de Gabriel de Oliveira Mello
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Acesse o perfil profissional.
                </p>
                <p className="mt-4 font-semibold text-blue-600 dark:text-blue-400">
                  Ver perfil no LinkedIn ↗
                </p>
              </div>
            </a>
          </div>
        </section>

        <div className="my-8 overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
                Material complementar
              </span>

              <h3 className="text-xl font-bold text-zinc-900">
                Acesse o material de apoio
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-600">
                Consulte ferramentas, referências e jogos apresentados durante o
                minicurso de Marketing de Jogos Digitais.
              </p>
            </div>

            <a
              href="https://canva.link/vcc0v81e8o5zecy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Acessar material
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <section className="relative overflow-hidden rounded-3xl bg-zinc-900 text-white">
          <div className="relative aspect-[16/5] min-h-64">
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 flex flex-col justify-center p-7 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
                Sua campanha começa aqui
              </p>
              <h2 className="mt-3 max-w-2xl text-2xl font-bold sm:text-4xl">
                Transforme ideias em uma estratégia de marketing.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-zinc-200">
                Escolha um jogo, conheça seu público e planeje como utilizar o
                orçamento de R$ 5.000 para alcançar seus objetivos.
              </p>
              <a
                href="https://docs.google.com/spreadsheets/d/1iUqScEp2A0aMHlyMK_a6ZLo4T1VttMluf_0b2Msbm4E/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit rounded-xl bg-white px-5 py-3 font-semibold text-zinc-900 transition hover:bg-zinc-200"
              >
                Abrir planilha da atividade ↗
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-12 flex flex-col justify-between gap-4 border-t border-zinc-200 pt-6 text-sm text-zinc-500 sm:flex-row dark:border-zinc-800">
          <p>Material de apoio • Marketing de Jogos Digitais</p>
          <a
            href="https://www.linkedin.com/in/gabriel-de-oliveira-mello-dev-researcher/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            Gabriel de Oliveira Mello · LinkedIn ↗
          </a>
        </footer>
      </main>
    </div>
  );
}
