export default function MainMenu() {
  return (
    <nav className="absolute w-full d-flex justify-center">
      <div className="page-wrapper">
        <div className="text-zinc-500 border-b py-5 flex w-ful justify-between">
          <h1>Jcsbissoli</h1>
          <ul className="flex gap-3">
            <li>Trabalhos</li>
            <li>Sobre mim</li>
            <li>Contato</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
