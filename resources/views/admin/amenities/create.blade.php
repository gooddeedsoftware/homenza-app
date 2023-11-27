@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.create') }} {{ trans('cruds.amenity.title_singular') }}
    </div>

    <div class="card-body">
        <form method="POST" action="{{ route("admin.amenities.store") }}" enctype="multipart/form-data">
            @csrf
            <div class="form-group">
                <label class="required" for="name">{{ trans('cruds.amenity.fields.name') }}</label>
                <input class="form-control {{ $errors->has('name') ? 'is-invalid' : '' }}" type="text" name="name" id="name" value="{{ old('name', '') }}" required>
                @if($errors->has('name'))
                    <span class="text-danger">{{ $errors->first('name') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.amenity.fields.name_helper') }}</span>
            </div>
            <div class="form-group">
                <label class="required" for="icon">{{ trans('cruds.amenity.fields.icon') }}</label>
                <input class="form-control {{ $errors->has('icon') ? 'is-invalid' : '' }}" type="text" name="icon" id="icon" value="{{ old('icon', '') }}" required>
                @if($errors->has('icon'))
                    <span class="text-danger">{{ $errors->first('icon') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.amenity.fields.icon_helper') }}</span>
            </div>
            <div class="form-group">
                <button class="btn btn-danger" type="submit">
                    {{ trans('global.save') }}
                </button>
            </div>
        </form>
    </div>
</div>



@endsection