(self["webpackChunkgym_crud"] = self["webpackChunkgym_crud"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-list/item-list.component */ 8881);
/* harmony import */ var _workout_workout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workout/workout.component */ 889);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





const routes = [
    { path: '', redirectTo: '/workout', pathMatch: 'full' },
    { path: 'workout', component: _workout_workout_component__WEBPACK_IMPORTED_MODULE_1__.WorkoutComponent },
    { path: 'list/:item', component: _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_0__.ItemListComponent },
    { path: '**', redirectTo: '/workout' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class AppComponent {
    constructor() {
        this.title = 'gym-crud';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 0, consts: [["routerLink", "/workout"], ["routerLink", "/list/exercises"], ["routerLink", "list/movement-patterns"], ["routerLink", "list/workouts"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Start of Workout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Exercise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Movement Patterns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Workouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["nav[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #dddddd;\n  display: flex;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n}\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  float: left;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n  padding: 13px;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBRVI7QUFESTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBR1I7QUFGSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFJUjtBQUhRO0VBQ0ksdUJBQUE7QUFLWiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICB1bFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lXHJcbiAgICBsaVxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcclxuICAgICAgICBmbG9hdDogbGVmdFxyXG4gICAgYVxyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG4gICAgICAgIGNvbG9yOiBibGFja1xyXG4gICAgICAgIHBhZGRpbmc6IDEzcHhcclxuICAgICAgICAmOmhvdmVyXHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrXHJcbiAgICAgICAgICAgICJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-list/item-list.component */ 8881);
/* harmony import */ var _item_list_item_add_item_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-list/item-add/item-add.component */ 9014);
/* harmony import */ var _workout_workout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workout/workout.component */ 889);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_2__.ItemListComponent,
        _item_list_item_add_item_add_component__WEBPACK_IMPORTED_MODULE_3__.ItemAddComponent,
        _workout_workout_component__WEBPACK_IMPORTED_MODULE_4__.WorkoutComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 9014:
/*!**********************************************************!*\
  !*** ./src/app/item-list/item-add/item-add.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemAddComponent": () => (/* binding */ ItemAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _misc_refrence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/refrence */ 1166);
/* harmony import */ var services_forms_exercise_form_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! services/forms/exercise.form.json */ 4528);
/* harmony import */ var services_forms_workout_child_form_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! services/forms/workout-child.form.json */ 2445);
/* harmony import */ var services_forms_workout_form_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/forms/workout.form.json */ 8085);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var services_item_retrieval_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! services/item-retrieval.service */ 9762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);











function ItemAddComponent_li_6_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" (", (tmp_0_0 = ctx_r2.myForm.get(control_r1.name)) == null ? null : tmp_0_0.value, ") ");
} }
function ItemAddComponent_li_6_input_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 9);
} if (rf & 2) {
    const control_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", control_r1.name)("type", control_r1.type)("formControlName", control_r1.name)("value", control_r1.value);
} }
function ItemAddComponent_li_6_input_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 10);
} if (rf & 2) {
    const control_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", control_r1.name)("formControlName", control_r1.name)("value", control_r1.value)("min", control_r1.validators.min)("max", control_r1.validators.max);
} }
function ItemAddComponent_li_6_select_6_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r12._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r12.name);
} }
function ItemAddComponent_li_6_select_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ItemAddComponent_li_6_select_6_option_1_Template, 2, 2, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", control_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.child_list);
} }
function ItemAddComponent_li_6_select_7_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r15._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r15.name);
} }
function ItemAddComponent_li_6_select_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ItemAddComponent_li_6_select_7_option_1_Template, 2, 2, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", control_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r6.child_list);
} }
function ItemAddComponent_li_6_div_8_li_3_div_1_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nestedControl_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", nestedControl_r21.label, " |", nestedControl_r21.name, "| ");
} }
function ItemAddComponent_li_6_div_8_li_3_div_1_input_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 26);
} if (rf & 2) {
    const nestedControl_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", nestedControl_r21.name)("formControlName", nestedControl_r21.name)("type", nestedControl_r21.type)("value", nestedControl_r21.value);
} }
function ItemAddComponent_li_6_div_8_li_3_div_1_input_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 27);
} if (rf & 2) {
    const nestedControl_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", nestedControl_r21.name)("formControlName", nestedControl_r21.name)("type", nestedControl_r21.type);
} }
function ItemAddComponent_li_6_div_8_li_3_div_1_select_4_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r30._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r30.name);
} }
function ItemAddComponent_li_6_div_8_li_3_div_1_select_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ItemAddComponent_li_6_div_8_li_3_div_1_select_4_option_1_Template, 2, 2, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nestedControl_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", nestedControl_r21.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r25.child_list);
} }
function ItemAddComponent_li_6_div_8_li_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ItemAddComponent_li_6_div_8_li_3_div_1_label_1_Template, 2, 2, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ItemAddComponent_li_6_div_8_li_3_div_1_input_2_Template, 1, 4, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ItemAddComponent_li_6_div_8_li_3_div_1_input_3_Template, 1, 3, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ItemAddComponent_li_6_div_8_li_3_div_1_select_4_Template, 2, 2, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nestedControl_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r20.isHidden(nestedControl_r21.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r20.isInput(nestedControl_r21.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r20.isHidden(nestedControl_r21.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r20.isSelect(nestedControl_r21.type));
} }
function ItemAddComponent_li_6_div_8_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ItemAddComponent_li_6_div_8_li_3_div_1_Template, 5, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemAddComponent_li_6_div_8_li_3_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33); const i_r19 = restoredCtx.index; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r32.delNested(i_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r19 = ctx.index;
    const control_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", control_r1.nested == null ? null : control_r1.nested.controls);
} }
function ItemAddComponent_li_6_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ItemAddComponent_li_6_div_8_li_3_Template, 4, 2, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemAddComponent_li_6_div_8_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r35.addNested(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formArrayName", control_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Value: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, ctx_r7.myForm.value[control_r1.name]), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r7.nestedForms.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Add ", control_r1.label, "");
} }
function ItemAddComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ItemAddComponent_li_6_label_3_Template, 2, 1, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ItemAddComponent_li_6_input_4_Template, 1, 4, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ItemAddComponent_li_6_input_5_Template, 1, 5, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ItemAddComponent_li_6_select_6_Template, 2, 2, "select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ItemAddComponent_li_6_select_7_Template, 2, 2, "select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ItemAddComponent_li_6_div_8_Template, 7, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", control_r1.label, " |", control_r1.name, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isRange(control_r1.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isInput(control_r1.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isRange(control_r1.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isSelect(control_r1.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isSelectMutiple(control_r1.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isNested(control_r1.type));
} }
class ItemAddComponent {
    constructor(_Activatedroute, _Itemreterieval, _fb) {
        this._Activatedroute = _Activatedroute;
        this._Itemreterieval = _Itemreterieval;
        this._fb = _fb;
        this.itemAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.form_options = {
            'exercises': services_forms_exercise_form_json__WEBPACK_IMPORTED_MODULE_1__,
            'workout-children': services_forms_workout_child_form_json__WEBPACK_IMPORTED_MODULE_2__,
            'workouts': services_forms_workout_form_json__WEBPACK_IMPORTED_MODULE_3__
        };
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({});
        //nestedForms: FormArray = new FormArray([]);
        this.nested_form_name = '';
        //cause only one of each usally can just use the controls dict as ref
        //but these onlyu refer to rules for one entry
        //as we want mutiple entries need an array to keep track
        //To start array just bascially is {name: FormArray[FormGroup]}
        //FormGroups - Class to tie different Form Controls together into One Big Form
        //FormBuilder - Service used to mak ebuilding Forms Easier
        this.list = [];
        this.child_list = [];
        this.ITEM = '';
    }
    /*ON INIT*/
    ngOnInit() {
        //Getting the ITEM from the URL extension
        this._Activatedroute.paramMap.subscribe((params) => {
            var item_to_list = params.get("item");
            var ITEM = _misc_refrence__WEBPACK_IMPORTED_MODULE_0__.ITEM_REFRENCE[item_to_list || ''];
            this.ITEM = ITEM;
            var dict = Object.assign({}, services_forms_exercise_form_json__WEBPACK_IMPORTED_MODULE_1__, services_forms_workout_child_form_json__WEBPACK_IMPORTED_MODULE_2__, services_forms_workout_form_json__WEBPACK_IMPORTED_MODULE_3__);
            this.list = dict[ITEM];
            this.form_data = this.form_options[ITEM];
            console.log("form data: ");
            console.log(this.form_data);
            this.myForm = this.createForm(this.form_options[ITEM]);
            console.log("This isnt even my Final Form:");
            console.log(this.myForm);
            this.myForm.valueChanges.subscribe(console.log);
            this.createLists(ITEM);
            console.log("This is my Final Form:");
            console.log(this.myForm);
            console.log("Nested Form:");
            console.log(this.nestedForms);
            /**
             * Form Group has group of the controls + variation Form Array
             *      Form Array has Array of Form Groups
             *            These Form Groups each have the Form Control for each entry
             *
             * Form Group -> Form Array -> Form Group -> Form Control
             * Movement Pattern -> Variations -> Single Level Variations -> Name, Exercise
             *
             */
        });
        //Valid, Invalid, Dirty, Pristine, Untouched, Pending
    }
    createLists(item) {
        if (item == 'workouts') {
            this._Itemreterieval.getAll('workout-children').subscribe(data => this.child_list = data);
            return;
        }
        if (item == 'workout-children') {
            this._Itemreterieval.getAll('exercises').subscribe(data => this.child_list = data);
            return;
        }
    }
    /* Form Logic */
    createControl(control) {
        //Form Control = Form Element
        //console.log(this.form_data);
        const validatorsToAdd = [];
        console.log(control);
        for (const [key, value] of Object.entries(control.validators)) {
            switch (key) {
                case 'min':
                    validatorsToAdd.push(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(value));
                    break;
                case 'max':
                    validatorsToAdd.push(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(value));
                    break;
                case 'minLength':
                    validatorsToAdd.push(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(value));
                    break;
                case 'maxLength':
                    validatorsToAdd.push(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(value));
                    break;
                case 'required':
                    if (value)
                        validatorsToAdd.push(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                    break;
            }
        }
        var form;
        if (control.type == "nested" && control.nested) {
            this.nestedControls = control.nested;
            form = this._fb.array([this.createForm(control.nested)]);
            this.nested_form_name = control.name;
            //this.addNested(form, control.name)
        }
        else {
            form = this._fb.control(control.value, validatorsToAdd);
        }
        //Form Creation
        return [
            [control.name],
            form
        ];
    }
    createForm(controls) {
        var myForm = this._fb.group({});
        for (const control of controls.controls) {
            var item = this.createControl(control);
            console.log(item);
            myForm.addControl(item[0], item[1]);
        }
        return myForm;
    }
    isInput(type) {
        var options = [
            'text', 'password', 'email', 'number'
        ];
        if (options.includes(type))
            return true;
        return false;
    }
    isHidden(type) {
        if (type == "hidden")
            return true;
        return false;
    }
    isSelect(type) {
        if (type == "select")
            return true;
        return false;
    }
    isSelectMutiple(type) {
        if (type == "select-mutiple")
            return true;
        return false;
    }
    isRange(type) {
        if (type == "range")
            return true;
        return false;
    }
    isNested(type) {
        if (type == "nested")
            return true;
        return false;
    }
    onSubmit() {
        var _a;
        //POST
        var form = this.myForm.value;
        console.log("Form");
        console.log(form);
        console.log(this.ITEM);
        (_a = this._Itemreterieval.add(form, this.ITEM)) === null || _a === void 0 ? void 0 : _a.subscribe(res => {
            console.log(res);
            if ('err' in res)
                console.log('Theres an error');
            if ('msg' in res) {
                console.log('Sucess');
                this.itemAdded.emit(true);
            }
        });
    }
    addNested() {
        this.nestedForms.push(this.createForm(this.nestedControls));
    }
    delNested(index) {
        this.nestedForms.removeAt(index);
    }
    get nestedForms() {
        return this.myForm.get(this.nested_form_name);
    }
    output(output) {
        console.log("Outputting Function:");
        console.log(output);
    }
}
ItemAddComponent.ɵfac = function ItemAddComponent_Factory(t) { return new (t || ItemAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](services_item_retrieval_service__WEBPACK_IMPORTED_MODULE_4__.ItemRetrievalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder)); };
ItemAddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ItemAddComponent, selectors: [["item-add"]], outputs: { itemAdded: "itemAdded" }, decls: 10, vars: 6, consts: [[3, "formGroup"], [4, "ngFor", "ngForOf"], [3, "disabled", "click"], [4, "ngIf"], [3, "name", "type", "formControlName", "value", 4, "ngIf"], ["type", "range", 3, "name", "formControlName", "value", "min", "max", 4, "ngIf"], [3, "formControlName", 4, "ngIf"], ["multiple", "", 3, "formControlName", 4, "ngIf"], ["class", "nested", 3, "formArrayName", 4, "ngIf"], [3, "name", "type", "formControlName", "value"], ["type", "range", 3, "name", "formControlName", "value", "min", "max"], [3, "formControlName"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["multiple", "", 3, "formControlName"], [1, "nested", 3, "formArrayName"], ["class", "nested-entry", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "nested-entry"], [3, "click"], [1, "nested-entry", 3, "formGroupName"], ["class", "nested-element", 4, "ngFor", "ngForOf"], [1, "nested-element", 3, "click"], [1, "nested-element"], ["class", "nested-element", 3, "name", "formControlName", "type", "value", 4, "ngIf"], [3, "name", "formControlName", "type", 4, "ngIf"], ["class", "nested-element", 3, "formControlName", 4, "ngIf"], [1, "nested-element", 3, "name", "formControlName", "type", "value"], [3, "name", "formControlName", "type"], [1, "nested-element", 3, "formControlName"]], template: function ItemAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Add [ITEM]");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ItemAddComponent_li_6_Template, 9, 8, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemAddComponent_Template_button_click_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Value: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, ctx.myForm.value), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.form_data == null ? null : ctx.form_data.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.myForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectMultipleControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.JsonPipe], styles: [".nested[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.nested[_ngcontent-%COMP%]   .nested-entry[_ngcontent-%COMP%] {\n  margin: 4px 0;\n}\n.nested[_ngcontent-%COMP%]   .nested-entry[_ngcontent-%COMP%]   .nested-element[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tYWRkLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0FBRVI7QUFEUTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQUdaIiwiZmlsZSI6Iml0ZW0tYWRkLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm5lc3RlZFxyXG4gICAgbWFyZ2luOiAxMHB4XHJcbiAgICAubmVzdGVkLWVudHJ5XHJcbiAgICAgICAgbWFyZ2luOiA0cHggMFxyXG4gICAgICAgIC5uZXN0ZWQtZWxlbWVudFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDNweFxyXG4iXX0= */"] });


/***/ }),

/***/ 8881:
/*!**************************************************!*\
  !*** ./src/app/item-list/item-list.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemListComponent": () => (/* binding */ ItemListComponent)
/* harmony export */ });
/* harmony import */ var _misc_refrence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misc/refrence */ 1166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var services_item_retrieval_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! services/item-retrieval.service */ 9762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _item_add_item_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-add/item-add.component */ 9014);






function ItemListComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.name);
} }
function ItemListComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ItemListComponent_li_4_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ItemListComponent_item_add_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "item-add", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("itemAdded", function ItemListComponent_item_add_5_Template_item_add_itemAdded_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.itemAdded($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class ItemListComponent {
    constructor(_Activatedroute, _Itemreterieval) {
        this._Activatedroute = _Activatedroute;
        this._Itemreterieval = _Itemreterieval;
        this.add_item = false;
        this.TITLE_REF = _misc_refrence__WEBPACK_IMPORTED_MODULE_0__.TITLE_REFRENCE;
        this.ITEM = '';
        this.list = [];
    }
    onClick() {
        console.log(this.list);
        switch (this.add_item) {
            case false:
                this.add_item = true;
                break;
            case true:
                this.add_item = false;
                break;
        }
    }
    ngOnInit() {
        /*
        Workout
        Movement Pattern (Workout Child)
        Exercise
        */
        var list;
        this._Activatedroute.paramMap.subscribe((params) => {
            this.ITEM = params.get("item") || '';
            this.internalOnInit();
        });
    }
    internalOnInit() {
        this.add_item = false;
        var ITEM = _misc_refrence__WEBPACK_IMPORTED_MODULE_0__.ITEM_REFRENCE[this.ITEM];
        this.list = [{ name: 'Loading...' }];
        if (ITEM) {
            this._Itemreterieval.getAll(ITEM).subscribe(data => this.list = data);
            return;
        }
        this.list = [];
    }
    itemAdded(event) {
        if (event)
            this.internalOnInit();
    }
}
ItemListComponent.ɵfac = function ItemListComponent_Factory(t) { return new (t || ItemListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](services_item_retrieval_service__WEBPACK_IMPORTED_MODULE_1__.ItemRetrievalService)); };
ItemListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ItemListComponent, selectors: [["item-list"]], decls: 6, vars: 4, consts: [[4, "ngFor", "ngForOf"], ["id", "add_item", 3, "click", 4, "ngIf"], [3, "itemAdded", 4, "ngIf"], ["id", "add_item", 3, "click"], [1, "sm-chr"], [3, "itemAdded"]], template: function ItemListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ItemListComponent_li_3_Template, 3, 1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ItemListComponent_li_4_Template, 4, 0, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ItemListComponent_item_add_5_Template, 1, 0, "item-add", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("List ", ctx.TITLE_REF[ctx.ITEM], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.add_item && ctx.TITLE_REF[ctx.ITEM]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.add_item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _item_add_item_add_component__WEBPACK_IMPORTED_MODULE_2__.ItemAddComponent], styles: ["ul[_ngcontent-%COMP%] {\n  margin: 10px 20px;\n  list-style: none;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  padding: 0 10px;\n}\nul[_ngcontent-%COMP%]   li#add_item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nul[_ngcontent-%COMP%]   li#add_item[_ngcontent-%COMP%]:hover {\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tbGlzdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0FBQ1I7QUFBUTtFQUNJLGVBQUE7QUFFWjtBQURZO0VBQ0ksdUJBQUE7QUFHaEIiLCJmaWxlIjoiaXRlbS1saXN0LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsidWxcclxuICAgIG1hcmdpbjogMTBweCAyMHB4XHJcbiAgICBsaXN0LXN0eWxlOiBub25lXHJcblxyXG4gICAgbGlcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZVxyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweFxyXG4gICAgICAgICYjYWRkX2l0ZW1cclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICAgICAgICAgICY6aG92ZXJcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrIl19 */"] });


/***/ }),

/***/ 1166:
/*!********************************************!*\
  !*** ./src/app/item-list/misc/refrence.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TITLE_REFRENCE": () => (/* binding */ TITLE_REFRENCE),
/* harmony export */   "ITEM_REFRENCE": () => (/* binding */ ITEM_REFRENCE)
/* harmony export */ });
var TITLE_REFRENCE = {
    'exercises': 'Exercise',
    'movement-patterns': 'Movement Pattern',
    'workouts': 'Workout'
};
var ITEM_REFRENCE = {
    'exercises': 'exercises',
    'movement-patterns': 'workout-children',
    'workouts': 'workouts'
};



/***/ }),

/***/ 9762:
/*!****************************************************!*\
  !*** ./src/app/services/item-retrieval.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemRetrievalService": () => (/* binding */ ItemRetrievalService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);





class ItemRetrievalService {
    constructor(http) {
        this.http = http;
        this._apiURL = '/api/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
    }
    /*        GET        */
    get(id, item, version = 0) {
        switch (item) {
            case 'exercise':
                return this.getExercise(id);
            case 'workout-section':
                return this.getMovementPattern(id, version);
            case 'workout':
                return this.getWorkout(id, version);
        }
        return null;
        /*
        var url = this._apiURL + item
        return this.http.get(url).pipe(
          tap(_ => console.log("Fetched all " + item)),
          catchError(this.errorHandler(`get ${item} | id=${id}`))
        )
        */
    }
    getWorkout(id, version) {
        var ext = '';
        if (version > 0 && version < 3)
            ext = '/' + version;
        var url = this._apiURL + 'workout/' + id + ext;
        console.log(url);
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log("Fetched single  Workouts")), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler(`get single workout | id=${id}`)));
    }
    getMovementPattern(id, version) {
        var ext = '';
        if (version > 0 && version < 2)
            ext = '/' + version;
        var url = this._apiURL + 'workout-child/' + id + ext;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log("Fetched single Workout Child")), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler(`get single workout child | id=${id}`)));
    }
    getExercise(id) {
        var url = this._apiURL + 'exercise/' + id;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log("Fetched single Exercise")), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler(`get single exercise | id=${id}`)));
    }
    /*        GET all        */
    getAll(item) {
        console.log('getAll()');
        console.log(item);
        switch (item) {
            case 'exercises':
                return this.getAllExercise();
            case 'workout-children':
                return this.getAllMovementPattern();
            case 'workouts':
                return this.getAllWorkout();
        }
        return this.getAllExercise(); //QUICK BAD FIX
        /*
        var url = this._apiURL + item
        return this.http.get(url).pipe(
          tap(_ => console.log("Fetched all " + item)),
          catchError(this.errorHandler(`get all ${item}`))
        )
        */
    }
    getAllWorkout() {
        var url = this._apiURL + 'workouts';
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log("Fetched all Workouts")), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler(`get all workout`)));
    }
    getAllMovementPattern() {
        var url = this._apiURL + 'workout-children';
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log("Fetched all Movement Patterns")), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler(`get all movement patterns`)));
    }
    getAllExercise() {
        var url = this._apiURL + 'exercises';
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log("Fetched all Exercise")), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler(`get all exercise`)));
    }
    add(formData, item, version = 0) {
        switch (item) {
            case 'exercises':
                return this.addExercise(formData);
            case 'workout-children':
                return this.addMovementPattern(formData);
            case 'workouts':
                return this.addWorkout(formData);
        }
        return null;
    }
    addWorkout(formData) {
        var url = this._apiURL + 'workout';
        return this.http.post(url, formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log("Sent of Workout")), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler(`POST a workout`)));
    }
    addMovementPattern(formData) {
        var url = this._apiURL + 'workout-child';
        return this.http.post(url, formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log("Sent of Movement Pattern")), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler(`POST a movement pattern`)));
    }
    addExercise(formData) {
        var url = this._apiURL + 'exercise';
        return this.http.post(url, formData, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log("Sent of Exercise")), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler(`POST a exercise`)));
    }
    addWorkoutEntry(data) {
        var url = this._apiURL + 'workout-diary';
        return this.http.post(url, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log("Sent of Workout Entry")), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler(`POST a workout entry`)));
    }
    /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    errorHandler(operation = 'operation', result) {
        return (error) => {
            console.error(error);
            //this.log(`${operation} failed: ${error.message}`);
            //Message Servic????
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
        };
    }
}
ItemRetrievalService.ɵfac = function ItemRetrievalService_Factory(t) { return new (t || ItemRetrievalService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
ItemRetrievalService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ItemRetrievalService, factory: ItemRetrievalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 889:
/*!**********************************************!*\
  !*** ./src/app/workout/workout.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutComponent": () => (/* binding */ WorkoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var services_item_retrieval_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! services/item-retrieval.service */ 9762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);




function WorkoutComponent_div_0_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkoutComponent_div_0_div_7_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const item_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r8.setWorkout(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.name);
} }
function WorkoutComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WorkoutComponent_div_0_div_7_div_1_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.workout_list);
} }
function WorkoutComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Workout:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, WorkoutComponent_div_0_div_7_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.TITLE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.canChangeWorkout);
} }
function WorkoutComponent_nav_2_div_2_li_1_ul_3_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkoutComponent_nav_2_div_2_li_1_ul_3_li_2_Template_span_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const jtem_r15 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r16.setExercise(jtem_r15.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jtem_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r14.output(jtem_r15), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](jtem_r15.key);
} }
function WorkoutComponent_nav_2_div_2_li_1_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, WorkoutComponent_nav_2_div_2_li_1_ul_3_li_2_Template, 4, 2, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r13.output(item_r11), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r11.variations);
} }
function WorkoutComponent_nav_2_div_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkoutComponent_nav_2_div_2_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r19.setMovementPattern(item_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WorkoutComponent_nav_2_div_2_li_1_ul_3_Template, 3, 2, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.current_movement_pattern == item_r11);
} }
function WorkoutComponent_nav_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WorkoutComponent_nav_2_div_2_li_1_Template, 4, 2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.showMovementPatternDone(item_r11));
} }
function WorkoutComponent_nav_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, WorkoutComponent_nav_2_div_2_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.current_workout.sections);
} }
function WorkoutComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "70");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function WorkoutComponent_div_4_Template_form_submit_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.onSetDone($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkoutComponent_div_4_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.onMovementPatternDone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Movement Pattern Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.current_exercise.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r2.setDone);
} }
function WorkoutComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "textarea", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WorkoutComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "WORKOUT DONEZO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkoutComponent_div_7_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.onDone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Submit Workout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx_r4.workout));
} }
class WorkoutComponent {
    constructor(_Itemreterieval) {
        this._Itemreterieval = _Itemreterieval;
        this.movement_patterns = [];
        this.sets = [];
        this.workout_list = [];
        this.TITLE = 'Options';
        this.canChangeChild = false;
        this.canChangeWorkout = false;
        this.setDone = false;
        this.workoutDone = false;
        this._setCounter = 0;
        this._repCounter = 0;
        this.current_workout = null;
        this.current_movement_pattern = null;
        this.current_exercise = null;
        this._min_prog = 50; //dont want a defualt value
    }
    ngOnInit() {
        this._Itemreterieval.getAllWorkout().subscribe(data => {
            //Recursivley go through Workout Plans
            this.workout_list = data;
            this.canChangeWorkout = true;
        });
    }
    showMovementPatternDone(movement_pattern) {
        /* Check whether a Movement Pattern is done */
        for (var i = 0; i < this.movement_patterns.length; i++) {
            //Not ideal as works of assumputions no movement patterns reapeat
            if (this.movement_patterns[i].workout_section === movement_pattern._id)
                return false;
        }
        if (this.current_workout && this.canChangeChild)
            return true;
        if (this.current_movement_pattern == movement_pattern)
            return true;
        //movementPattern is done
        return false;
    }
    /*          On [SET, MOVEMENT PATTERN, WORKOUT] done        */
    onSetDone(event) {
        //set = (exercise: exercise id, set index: set index, reps: no. of reps in set)
        var reps = event.target.prog.value;
        if (!reps || reps < 1)
            return; //later will add some error thingy
        var set = {
            exercise: this.current_exercise._id,
            set_index: this._setCounter,
            reps: reps
        };
        this.sets.push(set);
        console.log("SET DONE");
        var prog = event.target.prog.value;
        this._repCounter += +prog;
        event.target.prog.value = '';
        if (this._repCounter > this._min_prog - 1)
            this.setDone = true;
    }
    onMovementPatternDone() {
        var _a, _b;
        //movement_pattern = (workout_section: movement pattern id, completed_sets: [set])
        var movement_pattern = {
            workout_section: this.current_movement_pattern._id,
            completed_sets: this.sets
            //is sets[] being global good?
        };
        this.movement_patterns.push(movement_pattern);
        console.log("MOVEMENT PATTERN DONE");
        console.log("this.movement_patterns.length: " + this.movement_patterns.length);
        console.log("this.current_workout?.sections.length: " + ((_a = this.current_workout) === null || _a === void 0 ? void 0 : _a.sections.length));
        if (this.movement_patterns.length == ((_b = this.current_workout) === null || _b === void 0 ? void 0 : _b.sections.length))
            this.onWorkoutDone();
        this.current_exercise = null;
        this.newMovementPattern();
    }
    onWorkoutDone() {
        var _a;
        //workout = (workout_plan: workout plan id, completed_sections: [movement pattern])#
        var workout = {
            workout_plan: ((_a = this.current_workout) === null || _a === void 0 ? void 0 : _a._id) || '',
            completed: this.movement_patterns,
            notes: ''
            //is movement_patterns[] being global good?
        };
        this.workout = workout;
        this.workoutDone = true;
        console.log("WORKOUT DONE");
    }
    onDone() {
        /* POST workout to as Workout entry */
        if (!this.workout)
            return;
        this._Itemreterieval.addWorkoutEntry(this.workout).subscribe(data => console.log("res: " + data));
    }
    /*        Starting a new [WORKOUT, SET]        */
    newWorkout() {
        /* Starting Movement Patterns afresh */
        this.movement_patterns = [];
    }
    newMovementPattern() {
        this.canChangeChild = true;
        /* Starting sets afresh */
        this._setCounter = 0;
        this._repCounter = 0;
        this.setDone = false;
        this.sets = [];
    }
    /*        Choosing a new [EXERCISE, MOVEMENT PATTERN, WORKOUT]        */
    setExercise(exercise) {
        this.current_exercise = exercise; //Sets the current exercise globally
        /*
        *Once an Exercise for a Movement Pattern is choosen,
        *that movement pattern is locked in
        */
        this.canChangeChild = false;
    }
    setMovementPattern(item) {
        if (this.canChangeChild) {
            if (this.current_movement_pattern == item) {
                this.current_movement_pattern = null;
                return;
            }
            this.current_movement_pattern = item;
        }
    }
    setWorkout(item) {
        this.newMovementPattern(); /* new Movement Pattern to be picked */
        this.TITLE = item.name; /* Set title */
        this.canChangeWorkout = false; /* Can no longer change Workout */
        this._Itemreterieval.getWorkout(item._id, 2).subscribe(data => {
            /* Retreieve Workout Plan Data */
            this.current_workout = data;
            console.log(this.current_workout);
        });
    }
    /*        GETTERS & SETTERS        */
    getDict(item) {
        var key = Object.keys(item)[0];
        var value = item[key];
        return [key, value];
    }
    get progress() {
        return this._repCounter;
    }
    output(item) {
        console.log("Output Function: ");
        console.log(item);
    }
}
WorkoutComponent.ɵfac = function WorkoutComponent_Factory(t) { return new (t || WorkoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](services_item_retrieval_service__WEBPACK_IMPORTED_MODULE_0__.ItemRetrievalService)); };
WorkoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WorkoutComponent, selectors: [["app-workout"]], decls: 8, vars: 5, consts: [["class", "navbar", 4, "ngIf"], [4, "ngIf"], [1, "navbar"], [1, "dropdown"], [1, "dropbtn"], ["id", "picked_workout"], ["class", "dropdown-content", 4, "ngIf"], [1, "dropdown-content"], ["class", "links", 3, "click", 4, "ngFor", "ngForOf"], [1, "links", 3, "click"], [1, "children-list"], [4, "ngFor", "ngForOf"], [3, "click", 4, "ngIf"], [3, "click"], ["class", "exercise-list", 4, "ngIf"], [1, "exercise-list"], ["id", "progress-field"], [3, "submit"], ["type", "number", "min", "0", "max", "125", "name", "prog"], ["type", "submit", "value", "Set Done"], ["id", "mv-btn", 3, "disabled", "click"], ["rows", "4", "cols", "50", "placeholder", "Notes"]], template: function WorkoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WorkoutComponent_div_0_Template, 8, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, WorkoutComponent_nav_2_Template, 3, 1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, WorkoutComponent_div_4_Template, 19, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, WorkoutComponent_div_6_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, WorkoutComponent_div_7_Template, 8, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.workoutDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.current_workout == null ? null : ctx.current_workout.sections) && !ctx.workoutDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.current_exercise && !ctx.workoutDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.current_workout);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.workoutDone);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.JsonPipe], styles: [".navbar[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.navbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%] {\n  float: left;\n  overflow: hidden;\n}\n\n.dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  background-color: inherit;\n  font-family: inherit;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  float: none;\n  color: black;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n  cursor: pointer;\n}\n\n.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  width: 200px;\n  margin: 5px;\n}\n\n.children-list[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n.children-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 3px;\n  margin: 2px 0;\n  cursor: pointer;\n}\n\n.children-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 1px 1px 1px;\n  border-top: 2px solid black;\n  margin-bottom: 6px;\n  font-weight: 700;\n}\n\n.children-list[_ngcontent-%COMP%]   .exercise-list[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 4px;\n}\n\n#mv-btn[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 15px;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtvdXQuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUNBOztFQUVJLFdBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQUVSOztBQUFJO0VBQ0ksY0FBQTtBQUVSOztBQUFJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtBQUVSOztBQURRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFHWjs7QUFGWTtFQUNJLHNCQUFBO0FBSWhCOztBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUtKOztBQUpBO0VBQ0ksY0FBQTtBQU9KOztBQU5JO0VBQ0ksYUFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQU9SOztBQU5RO0VBQ0ksMkJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVFaOztBQU5JO0VBQ0ksY0FBQTtBQVFSOztBQU5BO0VBQ0ksV0FBQTtBQVNKOztBQVJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBV0o7O0FBVEE7RUFDSSwwQkFBQTtBQVlKIiwiZmlsZSI6IndvcmtvdXQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIFxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxyXG5cclxuLm5hdmJhciBoMSxcclxuLmRyb3Bkb3duIFxyXG4gICAgZmxvYXQ6IGxlZnRcclxuICAgIG92ZXJmbG93OiBoaWRkZW5cclxuXHJcbi5kcm9wZG93biBcclxuICAgIC5kcm9wYnRuIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweFxyXG4gICAgICAgIGJvcmRlcjogbm9uZVxyXG4gICAgICAgIG91dGxpbmU6IG5vbmVcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXRcclxuXHJcbiAgICAmOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IFxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICBcclxuICAgIC5kcm9wZG93bi1jb250ZW50XHJcbiAgICAgICAgZGlzcGxheTogbm9uZVxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5ZjlcclxuICAgICAgICBtaW4td2lkdGg6IDE2MHB4XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMilcclxuICAgICAgICB6LWluZGV4OiAxXHJcbiAgICAgICAgLmxpbmtzXHJcbiAgICAgICAgICAgIGZsb2F0OiBub25lXHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFja1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2tcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdFxyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICAgICAgICAgJjpob3ZlciBcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRcclxuXHJcbnVsXHJcbiAgICBsaXN0LXN0eWxlOiBub25lXHJcbiAgICB3aWR0aDogMjAwcHhcclxuICAgIG1hcmdpbjogNXB4XHJcbi5jaGlsZHJlbi1saXN0XHJcbiAgICBtYXJnaW46IDAgMTBweFxyXG4gICAgbGlcclxuICAgICAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICAgICAgLy9ib3JkZXI6IDFweCBzb2xpZCBibGFja1xyXG4gICAgICAgIHBhZGRpbmc6IDNweFxyXG4gICAgICAgIG1hcmdpbjogMnB4IDBcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICAgICAmOmhvdmVyXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KVxyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMXB4XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFja1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHhcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMFxyXG5cclxuICAgIC5leGVyY2lzZS1saXN0XHJcbiAgICAgICAgbWFyZ2luOiAwIDE1cHhcclxuXHJcbmZvcm0gaW5wdXRcclxuICAgIG1hcmdpbjogNHB4XHJcbiNtdi1idG5cclxuICAgIHBhZGRpbmc6IDEwcHhcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHhcclxuXHJcbmgxLCBoMiwgaDNcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplXHJcbiAgIl19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 4528:
/*!***************************************************!*\
  !*** ./src/app/services/forms/exercise.form.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"controls":[{"name":"name","label":"Exercise Name","value":"","type":"text","validators":{"required":true}},{"name":"images","label":"Media: Images","value":[],"type":"image","validators":{}}]}');

/***/ }),

/***/ 2445:
/*!********************************************************!*\
  !*** ./src/app/services/forms/workout-child.form.json ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"controls":[{"name":"name","label":"Workout Section","value":"","type":"text","validators":{"required":true}},{"name":"variations","label":"Variations","value":"","type":"nested","validators":{"required":true},"nested":{"controls":[{"name":"key","label":"Exercise Name","value":"","type":"text","validators":{"required":true,"min":3}},{"name":"value","label":"Exercise","value":"","type":"select","validators":{"required":true}}]}},{"name":"overall_reps","label":"Overall Reps","value":70,"type":"range","validators":{"required":true,"min":20,"max":100,"step":1}},{"name":"minimum_reps","label":"Minimum Reps","value":5,"type":"range","validators":{"required":true,"min":1,"max":20,"step":1}}]}');

/***/ }),

/***/ 8085:
/*!**************************************************!*\
  !*** ./src/app/services/forms/workout.form.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"controls":[{"name":"name","label":"Workout","value":"","type":"text","validators":{"required":true}},{"name":"sections","label":"Workout Section","value":"","type":"select-mutiple","validators":{"required":true}}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map