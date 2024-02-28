webpackJsonp([22],{

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(760);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_manager_auth_manager__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_touch_manager_touch_manager__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_gui_manager_gui_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_storage_manager_storage_manager__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_link_manager_link_manager__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_fire_auth__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_electron_electron__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, modalCtrl, navParams, authManager, formBuilder, touchManager, guiManager, modelCtrl, storageManager, linkManager, electron, platform, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.authManager = authManager;
        this.touchManager = touchManager;
        this.guiManager = guiManager;
        this.modelCtrl = modelCtrl;
        this.storageManager = storageManager;
        this.linkManager = linkManager;
        this.electron = electron;
        this.platform = platform;
        this.afAuth = afAuth;
        this.registrationcode = "";
        this.username = "";
        this.usernameTwo = "";
        this.authkey = "";
        this.passwordOne = "";
        this.passwordTwo = "";
        this.registerLogin = "login";
        this.birthday = "";
        this.fallnummer = "";
        this.showHelpText = true;
        this.privacyChecked = false;
        this.agbChecked = false;
        this.personalDataChecked = false;
        this.loginPassword = "";
        this.regexString = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
        this.passwordType = "password";
        this.passwordIcon = "eye-off";
        this.errormessage = "";
        this.loginForm = formBuilder.group({
            loginEmail: [
                this.username,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                ]),
            ],
            loginPass: [
                this.loginPassword,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]),
            ],
        });
        this.registerForm = formBuilder.group({
            /*code: [this.authkey, Validators.compose([Validators.maxLength(15), Validators.minLength(12), Validators.required])],*/
            birthday: [
                this.birthday,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern("^[0-3][0-9][.][0-1][0-9][.][0-9]{4}$"),
                ]),
            ],
            registrationcode: [
                this.registrationcode,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]),
            ],
            email: [
                this.username,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(this.regexString),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                ]),
            ],
            email2: [this.usernameTwo, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            pass: [
                this.passwordOne,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^(?=.*[a-zA-Z])(?=.*\\d).+$'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]),
            ],
            pass2: [
                this.passwordTwo,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^(?=.*[a-zA-Z])(?=.*\\d).+$'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]),
            ],
        });
        this.registerForm.controls["email2"].valueChanges.subscribe(function (checked) {
            if (checked !== _this.username) {
                _this.registerForm.controls["email2"].setErrors({ incorrect: true });
            }
        });
        this.registerForm.controls["email"].valueChanges.subscribe(function (checked) {
            console.log(checked !== _this.usernameTwo);
            if (checked !== _this.usernameTwo) {
                _this.registerForm.controls["email2"].setErrors({ incorrect: true });
            }
            _this.registerForm.get("email2").updateValueAndValidity();
            console.log(_this.registerForm.controls["email2"]);
        });
    }
    /**
     * Hides or un-hides the password in the UI.
     */
    LoginPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === "text" ? "password" : "text";
        this.passwordIcon = this.passwordIcon === "eye-off" ? "eye" : "eye-off";
    };
    Object.defineProperty(LoginPage.prototype, "loginFormValid", {
        /**
         * Returns if the login form is valid
         */
        get: function () {
            return this.loginForm.valid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "registerFormValid", {
        /**
         * Returns if the registration form is valid
         */
        get: function () {
            return (this.registerForm.valid &&
                this.passwordTwo == this.passwordOne &&
                this.username === this.usernameTwo);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Assists user to write properly the date by removing regularly used characters to dots.
     * @param enteredDate
     */
    LoginPage.prototype.helpCorrectDate = function (enteredDate) {
        this.birthday = enteredDate
            .replace(",", ".")
            .replace("/", ".")
            .replace("-", ".");
    };
    /**
     * Transitions view and opens the home page.
     */
    LoginPage.prototype.openHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    /**
     * Opens the modal for help/instructions on the login process.
     */
    LoginPage.prototype.openInstructionsForRegistration = function () {
        this.modelCtrl
            .create("TextPage", {
            html: true,
            closeable: true,
            target: this.linkManager.getRegistrierungsanweisungenAsJSON(),
        })
            .present();
    };
    /**
     * Registers the user
     */
    LoginPage.prototype.tryRegister = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.registerForm.controls["email"].value !==
                    this.registerForm.controls["email2"].value) {
                    this.registerForm.controls["email2"].setErrors({ incorrect: true });
                }
                // this.modalCtrl.create('TextPage', {html: true, closeable: true,}).present();
                if (this.agbChecked == true && this.privacyChecked == true) {
                    if (this.registrationcode.length >= 12) {
                        this.sendEmailVerification().then(function () {
                            _this.authManager.registerWithInvitationNumber(_this.username, _this.passwordOne, _this.passwordTwo, _this.registrationcode, function (success) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    if (success == true) {
                                        console.log("success");
                                    }
                                    return [2 /*return*/];
                                });
                            }); });
                        });
                        if (Object(__WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__["a" /* isCordovaAvailable */])())
                            this.handleTouchId(this.username, this.passwordOne);
                    }
                    else {
                        this.sendEmailVerification().then(function () {
                            _this.authManager.registerWithFallnummer(_this.username, _this.passwordOne, _this.passwordTwo, _this.registrationcode, _this.birthday, function (success) {
                                if (success == true) {
                                    console.log("success");
                                }
                            });
                        });
                        if (Object(__WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__["a" /* isCordovaAvailable */])())
                            this.handleTouchId(this.username, this.passwordOne);
                    }
                }
                else {
                    this.guiManager.showToast("Um fortzufahren, müssen Sie mit Datenschutzbestimmungen und Nutzungsbedingungen einverstanden sein.", 5000);
                }
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.sendEmailVerification = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.platform.ready().then(function () {
                    _this.afAuth.auth
                        .createUserWithEmailAndPassword(_this.username, _this.passwordOne)
                        .then(function (credential) {
                        var user = credential.user;
                        user.sendEmailVerification();
                    })
                        .then(function () {
                        _this.modalCtrl
                            .create("EmailConfirmation", {
                            html: true,
                            closeable: false,
                            animated: true,
                            showBackdrop: true,
                            selectedEmail: _this.username,
                            backdropDismiss: false,
                        })
                            .present();
                        _this.afAuth.authState.subscribe(function (user) {
                            console.log(user.emailVerified);
                            if (user && user.emailVerified) {
                                console.log(user.emailVerified);
                                // The user has clicked the verification link and their email has been verified.
                                // Update the registration status in the storage.
                                _this.storageManager.save("registration", "login", function (result) {
                                    console.log("Registration status has been updated in storage.");
                                });
                                if (Object(__WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__["a" /* isCordovaAvailable */])())
                                    _this.handleTouchId(_this.username, _this.passwordOne);
                            }
                            else {
                                console.error("No user found.");
                            }
                        });
                    });
                });
                if (this.electron.isElectron || !Object(__WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__["a" /* isCordovaAvailable */])())
                    return [2 /*return*/];
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.handleTouchId = function (name, password) {
        if (Object(__WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__["a" /* isCordovaAvailable */])())
            this.touchManager.handle(name, password);
    };
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Opening registration/login view");
        this.storageManager.fetch("registration", function (result) {
            console.log("Fetched value from storage: ", result);
            if (result == "login") {
                _this.registerLogin = "login";
            }
        });
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.guiManager.isLoginPageActive = false;
    };
    /**
     * Logins the user
     */
    LoginPage.prototype.tryLogin = function () {
        var _this = this;
        this.afAuth.auth
            .signInWithEmailAndPassword(this.username, this.loginPassword)
            .then(function (result) {
            console.log(result.user.emailVerified);
            if (result.user.emailVerified) {
                _this.authManager.login(_this.username, _this.loginPassword, function (success) {
                    console.log("Trying to log in, success: ", success);
                    if (success == true) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                        if (Object(__WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__["a" /* isCordovaAvailable */])()) {
                            _this.handleTouchId(_this.username, _this.loginPassword);
                        }
                    }
                });
            }
            else {
                _this.errormessage =
                    "Bitte clicken Sie auf den Verifizierungslink";
                setTimeout(function () {
                    _this.errormessage = "";
                }, 5000);
            }
        })
            .catch(function (error) {
            window.alert(error.message);
        });
    };
    /**
     * Opens the reset password page
     */
    LoginPage.prototype.resetPassword = function () {
        /*
            const item = this.modalCtrl.create('PasswordResetPage', {
                ac: 'request'
            });
    
            item.present();*/
        this.navCtrl.push("PasswordResetPage", {
            ac: "request",
        });
    };
    Object.defineProperty(LoginPage.prototype, "loggedVal", {
        get: function () {
            return "";
        },
        enumerable: false,
        configurable: true
    });
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.guiManager.isLoginPageActive = true;
        if (!Object(__WEBPACK_IMPORTED_MODULE_6__services_is_cordova_available__["a" /* isCordovaAvailable */])())
            return;
        this.touchManager.check(function (result) {
            if (result) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                _this.storageManager.save("registration", "login", function (result) {
                    console.log("Registration status has been updated in storage.");
                });
            }
        });
    };
    LoginPage.prototype.handleKeyPress = function (event, input) {
        if (event.keyCode == 13) {
            if (input == "login") {
                this.tryLogin();
            }
            else if (input == "register") {
                this.tryRegister();
            }
        }
    };
    LoginPage.prototype.showAgb = function (agbs) {
        if (agbs) {
            this.modelCtrl
                .create("TextPage", {
                html: true,
                closeable: true,
                target: this.linkManager.getNutungsbedingungenAsHalJSON(),
            })
                .present();
            return;
        }
        this.modelCtrl
            .create("TextPage", {
            html: true,
            closeable: true,
            target: this.linkManager.getDatenschutzAsJSON(),
        })
            .present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"C:\ger\wzk\front\3\clinic_app_frontend\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title text-center>Login</ion-title>\n        <ion-buttons end>\n            <button ion-button (click)="openHomePage()">\n                <img class="homeLogoNavBar" src="assets/home/icon.svg">\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="home-hello"\n         style="background:url(assets/login/login.jpg) top center;background-size: cover;background-attachment:scroll;background-repeat:no-repeat;">\n        <div class="hello-title " text-wrap>\n            <div class="">\n                <h1>{{loggedVal}}</h1>\n                <h3 color="secondary">Anmelden</h3> Bitte registrieren oder melden Sie sich an, um auf Ihre persönlichen\n                Dokumente zugreifen\n                zu können.\n            </div>\n        </div>\n    </div>\n    <ion-card>\n        <!--    <ion-segment class="bottomSegment" [(ngModel)]="registerLogin">-->\n        <!--      <ion-segment-button class="bottomSegment" value="login">-->\n        <!--        Login-->\n        <!--      </ion-segment-button>-->\n        <!--      <ion-segment-button class="bottomSegment" value="register">-->\n        <!--        Registrieren-->\n        <!--      </ion-segment-button>-->\n\n        <!--    </ion-segment>-->\n\n\n        <div [ngSwitch]="registerLogin">\n            <ion-list style="padding-bottom: 50px">\n                <!--<ion-item *ngSwitchCase="\'register\'" [formGroup]="registerForm">\n                  <h1>Jetzt starten</h1>\n                  <ion-label floating>Zugangscode eingeben</ion-label>\n                  <ion-input formControlName="code" type="text" name="code" [(ngModel)]="authkey" (keypress)="handleKeyPress($event,\'register\')"></ion-input>\n                  <ion-note>Diesen finden Sie auf Ihrem Schreiben vom Krankenhaus</ion-note>\n                </ion-item>-->\n\n                <ion-item *ngSwitchCase="\'register\'" [formGroup]="registerForm">\n                    <ion-label floating>Fallnummer</ion-label>\n                    <ion-input formControlName="registrationcode" name="registrationcode" [(ngModel)]="registrationcode"\n                               (keypress)="handleKeyPress($event,\'register\')"></ion-input>\n                </ion-item>\n\n                <ion-item *ngSwitchCase="\'register\'" [formGroup]="registerForm">\n                    <ion-label floating>Geburtsdatum (TT.MM.JJJJ)</ion-label>\n                    <ion-input formControlName="birthday" name="birthday" [(ngModel)]="birthday" type="text" value=""\n                               (ionChange)="helpCorrectDate(birthday)"></ion-input>\n                </ion-item>\n\n                <ion-item [formGroup]="registerForm" *ngSwitchCase="\'register\'">\n                    <ion-label floating>E-Mail Adresse</ion-label>\n                    <ion-input formControlName="email" type="email" [(ngModel)]="username"\n                               (keypress)="handleKeyPress($event,\'register\')"></ion-input>\n                </ion-item>\n\n                <ion-item\n                        [class.ng-valid]="registerForm.controls[\'email\'].value === registerForm.controls[\'email2\'].value"\n                        [class.ng-invalid]="registerForm.controls[\'email\'].value !== registerForm.controls[\'email2\'].value"\n                        [ngClass]="{\'ng-invalid ng-dirty ng-touched\': registerForm.controls[\'email\'].value !== registerForm.controls[\'email2\'].value,\n                        \'ng-valid\':registerForm.controls[\'email\'].value === registerForm.controls[\'email2\'].value}"\n                        [formGroup]="registerForm" *ngSwitchCase="\'register\'">\n                    <ion-label floating>E-Mail Adresse wiederholen\n                    </ion-label>\n                    <ion-input\n                            [class.ng-valid]="registerForm.controls[\'email\'].value === registerForm.controls[\'email2\'].value"\n                            [class.ng-invalid]="registerForm.controls[\'email\'].value !== registerForm.controls[\'email2\'].value"\n                            [ngClass]="{\'ng-invalid ng-dirty ng-touched\': registerForm.controls[\'email\'].value !== registerForm.controls[\'email2\'].value,\n                        \'ng-valid\':registerForm.controls[\'email\'].value === registerForm.controls[\'email2\'].value}"\n                            formControlName="email2" type="email" [(ngModel)]="usernameTwo"\n                            (keypress)="handleKeyPress($event,\'register\')"></ion-input>\n                </ion-item>\n\n                <ion-item [formGroup]="loginForm" *ngSwitchCase="\'login\'">\n                    <ion-label floating>E-Mail Adresse</ion-label>\n                    <ion-input formControlName="loginEmail" type="email" name="username" [(ngModel)]="username"\n                               (keypress)="handleKeyPress($event,\'login\')"></ion-input>\n                </ion-item>\n\n                <ion-item [formGroup]="loginForm" *ngSwitchCase="\'login\'">\n                    <ion-label floating>Passwort</ion-label>\n                    <ion-input formControlName="loginPass" [type]="passwordType" name="loginPassword"\n                               [(ngModel)]="loginPassword" (keypress)="handleKeyPress($event,\'login\')"\n                               clearOnEdit="false"></ion-input>\n                    <ion-icon item-end [name]="passwordIcon" class="passwordIcon"\n                              (click)=\'hideShowPassword()\'></ion-icon>\n                </ion-item>\n                <div *ngIf="errormessage.length>1" class="error-message">\n                    <p >{{errormessage}}</p>\n                </div>\n                <ion-item [formGroup]="registerForm" *ngSwitchCase="\'register\'">\n                    <ion-label floating>Passwort (mind. 6 Zeichen mit wenigstens: 1 Buchstabe, 1 Nummer. )</ion-label>\n                    <ion-input formControlName="pass" [type]="passwordType" name="passwordOne" [(ngModel)]="passwordOne"\n                               (keypress)="handleKeyPress($event,\'register\')" clearOnEdit="false"></ion-input>\n                    <ion-icon item-end [name]="passwordIcon" class="passwordIcon"\n                              (click)=\'hideShowPassword()\'></ion-icon>\n                </ion-item>\n\n\n                <ion-item [formGroup]="registerForm" *ngSwitchCase="\'register\'">\n                    <ion-label floating>Passwort wiederholen</ion-label>\n                    <ion-input formControlName="pass2" [type]="passwordType" name="passwordTwo"\n                               [(ngModel)]="passwordTwo" (keypress)="handleKeyPress($event,\'register\')"\n                               clearOnEdit="false"></ion-input>\n                    <ion-icon item-end [name]="passwordIcon" class="passwordIcon"\n                              (click)=\'hideShowPassword()\'></ion-icon>\n                </ion-item>\n\n                <ion-item class="customCheckboxesRegistration" [formGroup]="registerForm" *ngSwitchCase="\'register\'"\n                          style="padding-top: 10px">\n                    <ion-label>Ich habe die Datenschutzerklärung gelesen und stimme dieser zu.\n                    </ion-label>\n                    <ion-checkbox [(ngModel)]="privacyChecked" [ngModelOptions]="{standalone: true}"\n                                  (click)="showAgb(false)"></ion-checkbox>\n                </ion-item>\n\n                <ion-item class="customCheckboxesRegistration" [formGroup]="registerForm" *ngSwitchCase="\'register\'">\n                    <ion-label>Ich stimme den Nutzungsbedingungen zu.\n                    </ion-label>\n                    <ion-checkbox [(ngModel)]="agbChecked" [ngModelOptions]="{standalone: true}"\n                                  (click)="showAgb(true)"></ion-checkbox>\n                </ion-item>\n\n                <ion-item class="customCheckboxesRegistration" [formGroup]="registerForm" *ngSwitchCase="\'register\'">\n                    <ion-label>Ich stimme der Speicherung meiner personenbezogenen Daten zu.</ion-label>\n                    <ion-checkbox [(ngModel)]="personalDataChecked"\n                                  [ngModelOptions]="{standalone: true}"></ion-checkbox>\n                </ion-item>\n\n                <ion-item no-lines>\n                    <!--<p>-->\n                    <button ion-button block default color="primary" *ngSwitchCase="\'register\'"\n                            [disabled]="!registerFormValid"\n                            (click)="tryRegister()">Registrieren\n                    </button>\n                    <button ion-button clear color="text-color" block style="margin-top: 10px" (click)="resetPassword()"\n                            *ngSwitchCase="\'login\'">Passwort vergessen?\n                    </button>\n\n                    <button ion-button block default color="primary" *ngSwitchCase="\'login\'"\n                            [disabled]="!loginFormValid"\n                            (click)="tryLogin()">Login\n                    </button>\n                    <!--</p>-->\n                </ion-item>\n                <ion-segment class="topSegment" style="border-bottom-color: transparent ;">\n                    <ion-segment-button class="topSegment" style="border-bottom-color: transparent ;"\n                                        (click)="openInstructionsForRegistration()">\n                        <div>Hilfe\n                            <div class="info-ball">i</div>\n                        </div>\n                    </ion-segment-button>\n                </ion-segment>\n            </ion-list>\n            <div class="login-box" *ngSwitchCase="\'login\'">\n                <div class="internal-content" *ngIf="showHelpText">\n                    <h1>Sind Sie schon registriert?</h1>\n                    <br>\n                    <p>Bevor Sie die Anwendung in</p>\n                    <p> vollem Umfang nutzen können,</p>\n                    <p> ist eine Registrierung notwendig.</p>\n                    <div class="button-wrapper">\n                        <button ion-button default style="background-color: #5B5B5B; color: white"\n                                (click)="registerLogin =\'register\'">Jetzt registrieren\n                        </button>\n                        <button ion-button default\n                                style="background-color: transparent ; color: #010101; border: 1px solid #5B5B5B;"\n                                (click)="showHelpText=false">Später registrieren\n                        </button>\n\n                    </div>\n\n                    <!-- <button ion-button outline color="secondary" [hidden]="login" (click)="login = true">Login</button> -->\n                    <!-- <button ion-button outline color="secondary" *ngIf="login" (click)="login = false">Registrieren</button> -->\n\n                </div>\n            </div>\n        </div>\n\n    </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\ger\wzk\front\3\clinic_app_frontend\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_manager_auth_manager__["a" /* AuthManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_touch_manager_touch_manager__["a" /* TouchManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_gui_manager_gui_manager__["a" /* GuiManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_storage_manager_storage_manager__["a" /* StorageManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_link_manager_link_manager__["a" /* LinkManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_electron_electron__["a" /* ElectronProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_10__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], LoginPage);
    return LoginPage;
}());

100;
//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=22.js.map