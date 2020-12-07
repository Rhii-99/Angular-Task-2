import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';
import { RecordlistComponent } from './recordlist/recordlist.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'recordlist', pathMatch: 'full' },
    { path: 'recordlist' , component: RecordlistComponent },
    { path: 'add_edit/:id' , component: AddEditComponent }

];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}