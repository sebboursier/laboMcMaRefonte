export class Module {
  name: string;
  path: string;
  description: string;
}

export const Modules: Module[] = [
  {
    name: 'Acceuil',
    path: '/home',
    description: "Dashboard d'acceuil."
  },{
    name: 'Stat',
    path: '/stat',
    description: "Module de consultation des statistiques."
  },{
    name: 'List',
    path: '/list',
    description: "Liste dans un tableau."
  }
];
