@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <form>
                        <input style="width: 45%" class="search" type="text" placeholder="Cari..." required>
                        <input class="button" type="button" value="Cari">       
                    </form>

                </div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    Selamat Datang di Modictionary
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
