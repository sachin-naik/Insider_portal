import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ang-comp',
  templateUrl: './ang-comp.component.html',
  styleUrls: ['./ang-comp.component.css']
})
export class AngCompComponent implements OnInit {

  home_link = "home";
  input_link = "input";
  checkbox_link = "checkbox";
  radio_link = "radio";
  date_link = "date";
  select_link = "select";
  slider_link = "slider";
  autocomplete_link = "autocomplete";
  slide_link = "slide";
  menu_link = "menu";
  sidenav_link = "sidenav";
  toolbar_link = "toolbar";
  list_link = "list";
  grid_link = "grid";
  card_link = "card";
  tabs_link = "tabs";
  button_link = "button";
  toggle_link = "toggle";
  chips_link = "chips";
  icon_link = "icon";
  spinner_link = "spinner";
  bar_link = "bar";
  dialog_link = "dialog";
  tooltip_link = "tooltip";
  snackbar_link = "snackbar";

  constructor() { }

  ngOnInit() {
  }

}