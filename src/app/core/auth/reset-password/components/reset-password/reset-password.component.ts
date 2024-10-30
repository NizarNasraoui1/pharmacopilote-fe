import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/_services/auth.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import zxcvbn from 'zxcvbn';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ResetPasswordComponent {
    form: any = {};
    isLoggedIn = false;
    isResetPasswordFailed = false;
    errorMessage: string;
    token: string;

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService,
        private router: Router,
        private fb: FormBuilder,
        private activatedRoute: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.initForm();
        this.getToken();
    }

    getToken() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.token = params.get('token');
        });
    }

    initForm() {
        this.form = this.fb.group({
            password: new FormControl(''),
            confirmedPassword: new FormControl(''),
        });
    }

    verifyPasswordComplexity(password: string) {
        const result = zxcvbn(password);
        if (result.score < 2) {
            this.errorMessage = 'The password must be stronger';
            return false;
        }
        return true;
    }

    arePasswordsAreEquals(password: string, confirmation: string): boolean {
        if (password != confirmation) {
            this.errorMessage = "The passwords do not match";
            return false;
        }
        return true;
    }

    verifyPassword() {
        const password = this.form.value.password;
        const confirmedPassword = this.form.value.confirmedPassword;
        return (
            this.arePasswordsAreEquals(password, confirmedPassword) &&
            this.verifyPasswordComplexity(password)
        );
    }

    onSubmit(): void {
        if (this.verifyPassword()) {
            this.authService
                .resetPassword(this.form.value.password, this.token)
                .subscribe(() => {
                    this.router.navigate([
                        'auth/reset-password/password-changed',
                    ]);
                },
                (error) => {
                    const errorMessage = error.error.message;
                    if(errorMessage === 'token already used'){
                        this.errorMessage = 'The link has already been used';
                    }
                    if(errorMessage==='token expired'){
                        this.errorMessage = 'The link has expired';
                    }
                    this.isResetPasswordFailed = true;
                });
        } else {
            this.isResetPasswordFailed = true;
        }
    }

    navigateToConfirmMail(): void {
        this.router.navigate(['auth/register/confirm-mail']);
    }
}
