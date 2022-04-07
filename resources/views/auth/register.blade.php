@extends('layouts.app')

@section('header')
    <link href="{{ asset('css/auth.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
@endsection

@section('content')
    <div id="auth">
        <div class="row h-100">
            <div class="col-lg-5 col-12">
                <div id="auth-left">
                    {{-- <div class="auth-logo">
                    <a href="/"><img src="assets/images/logo/logo.png" alt="Logo"></a>
                </div> --}}
                    <h1 class="auth-title">{{ __('Register') }}</h1>
                    <p class="auth-subtitle mb-5">Ingrese sus datos para registrarse.</p>

                    <form method="POST" action="{{ route('register') }}">
                        @csrf
                        <div class="form-group position-relative has-icon-left mb-4">

                            <input id="email" type="email"
                                class="form-control form-control-xl @error('email') is-invalid @enderror" name="email"
                                value="{{ old('email') }}" required autocomplete="email" autofocus
                                placeholder="{{ __('E-Mail Address') }}">

                            @error('email')
                                <span class="invalid-feedback position-absolute" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror

                            <div class="form-control-icon">
                                <i class="bi bi-person"></i>
                            </div>
                        </div>

                        <div class="form-group position-relative has-icon-left mb-4">

                            <input id="name" type="text"
                                class="form-control form-control-xl @error('name') is-invalid @enderror" name="name"
                                value="{{ old('name') }}" required autocomplete="name" autofocus
                                placeholder="{{ __('Name') }}">

                            @error('name')
                                <span class="invalid-feedback position-absolute" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror

                            <div class="form-control-icon">
                                <i class="bi bi-person"></i>
                            </div>
                        </div>

                        <div class="form-group position-relative has-icon-left mb-4">

                            <input id="password" type="password"
                                class="form-control form-control-xl @error('password') is-invalid @enderror" name="password"
                                required autocomplete="off" placeholder="{{ __('Password') }}">

                            @error('password')
                                <span class="invalid-feedback position-absolute" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror

                            <div class="form-control-icon">
                                <i class="bi bi-shield-lock"></i>
                            </div>
                        </div>

                        <div class="form-group position-relative has-icon-left mb-4">

                            <input id="password-confirm" type="password"
                                class="form-control form-control-xl @error('password') is-invalid @enderror"
                                name="password_confirmation" required autocomplete="off"
                                placeholder="{{ __('Confirm Password') }}">

                            @error('password')
                                <span class="invalid-feedback position-absolute" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror

                            <div class="form-control-icon">
                                <i class="bi bi-shield-lock"></i>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary btn-block btn-lg shadow-lg mt-5">
                            {{ __('Register') }}</button>
                    </form>
                    <div class="text-center mt-5 text-lg fs-4">
                        @if (Route::has('password.request'))
                            <p>
                                <a class="font-bold"
                                    href="{{ route('password.request') }}">{{ __('Forgot Your Password?') }}</a>
                            </p>
                        @endif
                    </div>
                </div>
            </div>
            <div class="col-lg-7 d-none d-lg-block">
                <div id="auth-right"></div>
            </div>
        </div>
    </div>
@endsection
