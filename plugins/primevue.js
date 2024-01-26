import { defineNuxtPlugin } from "#app";

import PrimeVue from "primevue/config";

import Card from "primevue/card";
import Panel from "primevue/panel";
import Fieldset from "primevue/fieldset";
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Row from "primevue/row";
import ColumnGroup from "primevue/columngroup";
import DataView from "primevue/dataview";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Dialog from "primevue/dialog";
import OverlayPanel from "primevue/overlaypanel";
import Menubar from "primevue/menubar";
import Dropdown from "primevue/dropdown";
import MultiSelect from 'primevue/multiselect';
import Toolbar from "primevue/toolbar";
import Menu from "primevue/menu";
import TabMenu from 'primevue/tabmenu';
import Breadcrumb from "primevue/breadcrumb";
import Timeline from "primevue/timeline";
import Steps from "primevue/steps";
import InputText from "primevue/inputtext";
import InputNumber from 'primevue/inputnumber';
import Button from "primevue/button";
import Rating from "primevue/rating";
import CascadeSelect from "primevue/cascadeselect";
import Calendar from "primevue/calendar";
import Badge from "primevue/badge";
import Tag from "primevue/tag";
import Avatar from "primevue/avatar";
import Chip from "primevue/chip";
import ProgressBar from 'primevue/progressbar';
import Sidebar from 'primevue/sidebar';
import Textarea from 'primevue/textarea';
import BadgeDirective from 'primevue/badgedirective';
import Inplace from 'primevue/inplace';
import DynamicDialog from 'primevue/dynamicdialog';
import DialogService from 'primevue/dialogservice';
import TreeTable from 'primevue/treetable';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Message from 'primevue/message';
import Tree from 'primevue/tree';
import PanelMenu from 'primevue/panelmenu';
import SplitButton from 'primevue/splitbutton';
import Checkbox from 'primevue/checkbox';
import ConfirmPopup from 'primevue/confirmpopup';
import AutoComplete from 'primevue/autocomplete';
import FileUpload from 'primevue/fileupload';
import Skeleton  from 'primevue/skeleton';
import InputSwitch from 'primevue/inputswitch';
import ToggleButton from 'primevue/togglebutton';
import ProgressSpinner from 'primevue/progressspinner';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmationService from 'primevue/confirmationservice';
import Image from 'primevue/image';
import Password from 'primevue/password';
import Divider from 'primevue/divider';
import Listbox from 'primevue/listbox';
import SelectButton from 'primevue/selectbutton';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(DialogService);
    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.use(ConfirmationService);

    nuxtApp.vueApp.use(PrimeVue, {ripple: true});
    nuxtApp.vueApp.use('badge', BadgeDirective);
    nuxtApp.vueApp.component('Divider', Divider);
    nuxtApp.vueApp.component('Listbox', Listbox);
    nuxtApp.vueApp.component('Button', Button);
    nuxtApp.vueApp.component('SelectButton', SelectButton);
    nuxtApp.vueApp.component('Card',Card)
    nuxtApp.vueApp.component('Panel',Panel)
    nuxtApp.vueApp.component('Fieldset',Fieldset)
    nuxtApp.vueApp.component('Accordion',Accordion)
    nuxtApp.vueApp.component('AccordionTab', AccordionTab)
    nuxtApp.vueApp.component('DataTable',DataTable)
    nuxtApp.vueApp.component('Column',Column)
    nuxtApp.vueApp.component('Row', Row)
    nuxtApp.vueApp.component('ColumnGroup', ColumnGroup)
    nuxtApp.vueApp.component('DataView',DataView)
    nuxtApp.vueApp.component('DataViewLayoutOptions',DataViewLayoutOptions)
    nuxtApp.vueApp.component('TabView',TabView)
    nuxtApp.vueApp.component('TabPanel',TabPanel)
    nuxtApp.vueApp.component('Dialog',Dialog)
    nuxtApp.vueApp.component('OverlayPanel', OverlayPanel)
    nuxtApp.vueApp.component('Menubar',Menubar)
    nuxtApp.vueApp.component('TabMenu ', TabMenu)
    nuxtApp.vueApp.component('Dropdown',Dropdown)
    nuxtApp.vueApp.component('MultiSelect',MultiSelect)
    nuxtApp.vueApp.component('Toolbar',Toolbar)
    nuxtApp.vueApp.component('Menu',Menu)
    nuxtApp.vueApp.component('Breadcrumb',Breadcrumb)
    nuxtApp.vueApp.component('Timeline',Timeline)
    nuxtApp.vueApp.component('Steps',Steps)
    nuxtApp.vueApp.component('InputText',InputText)
    nuxtApp.vueApp.component('InputNumber',InputNumber)    
    nuxtApp.vueApp.component('Rating',Rating)
    nuxtApp.vueApp.component('CascadeSelect',CascadeSelect)    
    nuxtApp.vueApp.component('Calendar',Calendar)
    nuxtApp.vueApp.component('Badge',Badge)
    nuxtApp.vueApp.component('Tag',Tag)
    nuxtApp.vueApp.component('Avatar',Avatar)
    nuxtApp.vueApp.component('Chip', Chip)
    nuxtApp.vueApp.component('ProgressBar', ProgressBar)
    nuxtApp.vueApp.component('Sidebar', Sidebar)
    nuxtApp.vueApp.component('Textarea', Textarea)
    nuxtApp.vueApp.component('Inplace',Inplace)
    nuxtApp.vueApp.component('DynamicDialog',DynamicDialog)
    nuxtApp.vueApp.component('TreeTable',TreeTable)
    nuxtApp.vueApp.component('Toast',Toast)
    nuxtApp.vueApp.component('Message',Message)
    nuxtApp.vueApp.component('Tree',Tree )
    nuxtApp.vueApp.component('PanelMenu',PanelMenu)
    nuxtApp.vueApp.component('SplitButton',SplitButton)
    nuxtApp.vueApp.component('Checkbox',Checkbox)
    nuxtApp.vueApp.component('ConfirmPopup',ConfirmPopup)
    nuxtApp.vueApp.component('ConfirmDialog',ConfirmDialog)
    nuxtApp.vueApp.component('AutoComplete', AutoComplete)
    nuxtApp.vueApp.component('FileUpload', FileUpload)
    nuxtApp.vueApp.component('Skeleton', Skeleton)    
    nuxtApp.vueApp.component('ToggleButton', ToggleButton)
    nuxtApp.vueApp.component('InputSwitch', InputSwitch)
    nuxtApp.vueApp.component('ProgressSpinner', ProgressSpinner) 
    nuxtApp.vueApp.component('Image', Image)
    nuxtApp.vueApp.component('Password', Password)
});
