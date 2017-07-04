import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { MdDatepickerModule, NativeDateModule } from '@angular/material';
import { compRouting } from './ang-comp.routing';
import {MdSnackBarModule} from '@angular/material';
import {MdDialogModule} from '@angular/material';

import { AngCompComponent } from './ang-comp.component';
import { HomeComponent } from './home/home.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component'
import { InputComponent } from './input/input.component';
import { SelectComponent } from './Select/Select.component';
import { SliderComponent } from './slider/slider.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SlidetoggleComponent } from './slidetoggle/slidetoggle.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
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

@NgModule({

  imports: [
    CommonModule,
    MaterialModule,
    MdNativeDateModule,
    MdDatepickerModule,
    NativeDateModule,
    compRouting,
    MdSnackBarModule,
    MdDialogModule
  ],
  declarations: [
    AngCompComponent,
    HomeComponent,
    InputComponent,
    SelectComponent,
    SliderComponent,
    CheckboxComponent,
    DatepickerComponent,
    SlidetoggleComponent,
    RadiobuttonComponent,
    AutocompleteComponent,
    MenuComponent,
    SidenavComponent,
    ToolbarComponent,
    ListComponent,
    CardComponent,
    TabsComponent,
    GridlistComponent,
    ChipsComponent,
    IconComponent,
    ButtonComponent,
    ProgressbarComponent,
    ButtontoggleComponent,
    DialogComponent,
    TooltipComponent,
    SnackbarComponent,
    ProgressspinnerComponent
]
})
export class AngCompModule { }