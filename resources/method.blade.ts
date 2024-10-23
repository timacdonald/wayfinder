/**
 * @see {{ $controller }}::{{ $method }}
 * @see {{ $path }}:{{ $line }}
 */
export const {{ $method }}: {
    url: (@if($parameters->isNotEmpty()){{ 'args' }}@if($parameters->every->optional)?@endif: {
@foreach($parameters as $parameter)
        @include('solder::parameter')
@endforeach
    }@endif) => string,
@foreach($verbs as $verb)
    {{ $verb->actual }}: (@if($parameters->isNotEmpty()){{ 'args' }}@if($parameters->every->optional)?@endif: {
@foreach($parameters as $parameter)
        @include('solder::parameter')
@endforeach
    }@endif) => {
        action: string,
        method: @json($verb->formSafe),
        _method: @json($verb->actual),
    },
@endforeach
