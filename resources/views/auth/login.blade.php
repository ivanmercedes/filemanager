@extends('layouts.auth')


@section('content')
    <h1 class="auth-title">{{ __('Login') }}</h1>
    <p class="auth-subtitle mb-5">Inicie sesión con los datos que ingresó durante el registro.</p>

    <form method="POST" action="{{ route('login') }}">
        @csrf
        <div class="form-group position-relative has-icon-left mb-4">

            <input id="email" type="email" class="form-control form-control-xl @error('email') is-invalid @enderror"
                name="email" value="{{ old('email') }}" required autocomplete="email" autofocus
                placeholder="{{ __('E-Mail Address') }}">

            @error('email')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror

            <div class="form-control-icon">
                <i class="bi bi-envelope"></i>
            </div>
        </div>
        <div class="form-group position-relative has-icon-left mb-4">

            <input id="password" type="password" class="form-control form-control-xl @error('password') is-invalid @enderror"
                name="password" required autocomplete="current-password">

            @error('password')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror

            <div class="form-control-icon">
                <i class="bi bi-shield-lock"></i>
            </div>
        </div>

        <button type="submit" class="btn btn-primary btn-block btn-lg shadow-lg mt-5">{{ __('Login') }}</button>
    </form>
@endsection
