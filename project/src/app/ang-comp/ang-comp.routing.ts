import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AuthGuard} from '../guards/auth.guard';

import { AngCompComponent } from './ang-comp.component';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './Select/Select.component';
import { SliderComponent } from './slider/slider.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SlidetoggleComponent } from './slidetoggle/slidetoggle.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { MenuComponent } from './menu/menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { TabsComponent } from './tabs/tabs.component';
import { GridlistComponent } from './gridlist/gridlist.component';
import { ChipsComponent } from './chips/chips.component';
import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ButtontoggleComponent } from './buttontoggle/buttontoggle.component';
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ProgressspinnerComponent } from './progressspinner/progressspinner.component';

const compRoutes: Routes = [
    {
        path: 'ang-comp',
        component: AngCompComponent,canActivate:[AuthGuard],
        children: [        
        { path: '', component: HomeComponent },
        { path: 'home', component: HomeComponent },
        {path:'input', component: InputComponent},
        {path:'select', component: SelectComponent},
        {path:'slider', component: SliderComponent},
        {path:'checkbox', component: CheckboxComponent},
        {path:'date', component: DatepickerComponent},
        {path:'slide', component: SlidetoggleComponent},
        {path:'radio', component: RadiobuttonComponent},
        {path:'autocomplete', component: AutocompleteComponent},
        {path:'menu', component: MenuComponent},
        {path:'sidenav', component: SidenavComponent},
        {path:'toolbar', component: ToolbarComponent},
        {path:'list', component: ListComponent},
        {path:'card', component: CardComponent},
        {path:'tabs', component: TabsComponent},
        {path:'grid', component: GridlistComponent},
        {path:'chips', component: ChipsComponent},
        {path:'icon', component: IconComponent},
        {path:'button', component: ButtonComponent},
        {path:'bar', component: ProgressbarComponent},
        {path:'toggle', component: ButtontoggleComponent},
        {path:'spinner', component: ProgressspinnerComponent},
        {path:'dialog', component: DialogComponent},
        {path:'tooltip', component: TooltipComponent},
        {path:'snackbar', component: SnackbarComponent}
    ]
    }
];

export const compRouting: ModuleWithProviders = RouterModule.forChild(compRoutes);