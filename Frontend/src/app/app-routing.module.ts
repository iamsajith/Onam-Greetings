import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviewComponent } from './preview/preview.component';
import { PreviewallComponent } from './previewall/previewall.component';
import { StartComponent } from './start/start.component';
import { WishComponent } from './wish/wish.component';

const routes: Routes = [{path:'',component:StartComponent},{path:'success/:id',component:WishComponent},{path:'wish/:id',component:PreviewComponent},{path:'wishes/:id',component:PreviewallComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
