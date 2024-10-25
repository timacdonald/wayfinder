/**
 * @see {!! $controller !!}::{!! $method !!}
 * @see {!! $path !!}:{!! $line !!}
 */
export const {!! $method !!}: {
    definition: {
        methods: (@foreach($verbs as $verb)@js($verb->actual){!! $loop->last ? '' : '|' !!}@endforeach)[],
        uri: @js($uri),
    },
    url: (@if($parameters->isNotEmpty())args{!! when($parameters->every->optional, '?') !!}: {
@foreach($parameters as $parameter)
        {!! $parameter->name !!}{!! when($parameter->optional, '?') !!}: string|number,
@endforeach
    }@endif) => string,
@foreach($verbs as $verb)
    {!! $verb->actual !!}: (@if($parameters->isNotEmpty()){!! 'args' !!}{!! when($parameters->every->optional, '?') !!}: {
@foreach($parameters as $parameter)
        @include('solder::parameter-types')
@endforeach
    }@endif) => {
        action: string,
        method: @js($verb->formSafe),
        _method: @js($verb->actual),
    },
@endforeach
} = {
    definition: {
        methods: [@foreach($verbs as $verb)@js($verb->actual){!! when(! $loop->last, ',') !!}@endforeach],
        uri: @js($uri),
    },
    url: ({!! when($parameters->isNotEmpty(), 'args') !!}) => {!! $method !!}.definition.uri{!! when($parameters->isEmpty(), ',') !!}
@foreach($parameters as $parameter)
        .replace(@js($parameter->placeholder), args{!! when($parameters->every->optional, '?.') !!}[@js($parameter->name)]{!! when($parameter->optional, '?') !!}.toString(){!! when($parameter->optional, " ?? ''") !!})
@if($loop->last)
        .replace(/\/+$/, ''),
@endif
@endforeach
@foreach($verbs as $verb)
    {!! $verb->actual !!}: ({!! when($parameters->isNotEmpty(), 'args') !!}) => ({
        action: {!! $method !!}.url({!! when($parameters->isNotEmpty(), 'args') !!}),
        method: @js($verb->formSafe),
        _method: @js($verb->actual),
    }),
@endforeach
}
