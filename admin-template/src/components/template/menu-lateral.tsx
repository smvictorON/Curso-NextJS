import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../icons"
import Logo from "./logo"
import MenuItem from "./menu-item"

interface MenuLateralProps {
  titulo: string,
  subtitulo: string,
  children?: any
}

export default function MenuLateral() {
  return (
    <aside className="bg-white flex flex-col dark:bg-gray-900 dark:text-gray-200 bg-gray-20">
      <div className="h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800 flex flex-col items-center justify-center">
        <Logo/>
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" texto="Início" icone={IconeCasa}/>
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes}/>
        <MenuItem url="/notificacoes" texto="Novidades" icone={IconeSino}/>
      </ul>
      <ul>
        <MenuItem
          onClick={() => console.log('logout')}
          texto="Sair" icone={IconeSair}
          className="text-red-600 dark:text-red-400 hover:bg-red-400 hover:text-white dark:hover:bg-white"
        />
      </ul>
    </aside>
  )
}
