@extends('layouts.app')

@section('content')
    <header class="mb-3">
        <a href="#" class="burger-btn d-block d-xl-none">
            <i class="bi bi-justify fs-3"></i>
        </a>
    </header>
    <div class="page-heading">
        <h3>Estadísticas</h3>
    </div>

    @include('home.datacard')


    <div class="row">
        <div class="col-md-9">
            <div id="download-chart"></div>
        </div>
    </div>
@endsection
