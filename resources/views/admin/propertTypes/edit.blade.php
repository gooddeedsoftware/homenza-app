@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.edit') }} {{ trans('cruds.propertType.title_singular') }}
    </div>

    <div class="card-body">
        <form method="POST" action="{{ route("admin.propert-types.update", [$propertType->id]) }}" enctype="multipart/form-data">
            @method('PUT')
            @csrf
            <div class="form-group">
                <label class="required" for="type">{{ trans('cruds.propertType.fields.type') }}</label>
                <input class="form-control {{ $errors->has('type') ? 'is-invalid' : '' }}" type="text" name="type" id="type" value="{{ old('type', $propertType->type) }}" required>
                @if($errors->has('type'))
                    <span class="text-danger">{{ $errors->first('type') }}</span>
                @endif
                <span class="help-block">{{ trans('cruds.propertType.fields.type_helper') }}</span>
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