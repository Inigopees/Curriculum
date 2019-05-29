import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'idiomas', loadChildren: './idiomas/idiomas.module#IdiomasPageModule' },
  { path: 'titulos', loadChildren: './titulos/titulos.module#TitulosPageModule' },
  { path: 'experiencia', loadChildren: './experiencia/experiencia.module#ExperienciaPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
