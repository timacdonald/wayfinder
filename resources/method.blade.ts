@use('Illuminate\Support\HtmlString')
/**
 * @see {!! $controller !!}::{!! $method !!}
 * @see {!! $path !!}:{!! $line !!}
 */
{!! when($method !== '__invoke', 'export ') !!}const {!! $method !!}: {
    definition: {
        methods: (@foreach($verbs as $verb)@js($verb->actual){!! $loop->last ? '' : '|' !!}@endforeach)[],
        uri: string,
    },
    url: (@if($parameters->isNotEmpty())args{!! when($parameters->every->optional, '?') !!}: {
@foreach($parameters as $parameter)
        {!! $parameter->name !!}{!! when($parameter->optional, '?') !!}: string|number|{ {!! $parameter->key ?? 'id' !!}: string|number },
@endforeach
    }@endif) => string,
@foreach($verbs as $verb)
    {!! $verb->actual !!}: (@if($parameters->isNotEmpty()){!! 'args' !!}{!! when($parameters->every->optional, '?') !!}: {
@foreach($parameters as $parameter)
        {{ $parameter->name }}@if($parameter->optional)?@endif: string|number|{ {!! $parameter->key ?? 'id' !!}: string|number },
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
        get uri() {
            if (this._uri) {
            console.log('calculated')
                return this._uri
            }

            return this._uri = {!! 
                $scheme ? "'{$scheme}" : "globalThis.location.protocol+'//"
            !!}{!!
                $domain ? $domain : "'+globalThis.location.host+'"
            !!}{!!
                ''
                // not sure we should consider the port?
            !!}'
        },
    },
    url: ({!! when($parameters->isNotEmpty(), 'args') !!}) => {
@if($parameters->where('optional')->isNotEmpty())
        validateParameters(args, [
@foreach($parameters->where('optional') as $parameter)
            "{!! $parameter->name !!}",
@endforeach
        ])

@endif
@if($parameters->isNotEmpty())
        const parsedArgs = {
@foreach($parameters as $parameter)
            {!! $parameter->name !!}: typeof args{!! when($parameters->every->optional, '?') !!}.{!! $parameter->name !!} === 'object'
                ? args.{!! $parameter->name !!}.{!! $parameter->key ?? 'id' !!}
                : args{!! when($parameters->every->optional, '?') !!}.{!! $parameter->name !!},
@endforeach
        }

@endif
        return {!! $method !!}.definition.uri
@foreach($parameters as $parameter)
            .replace(@js($parameter->placeholder), parsedArgs.{!! $parameter->name !!}{!! when($parameter->optional, '?') !!}.toString(){!! when($parameter->optional, " ?? ''") !!})
@if($loop->last)
            .replace(/\/+$/, '')
@endif
@endforeach
    },
@foreach($verbs as $verb)
    {!! $verb->actual !!}: ({!! when($parameters->isNotEmpty(), 'args') !!}) => ({
        action: {!! $method !!}.url({!! when($parameters->isNotEmpty(), 'args') !!}),
        method: @js($verb->formSafe),
        _method: @js($verb->actual),
    }),
@endforeach
}
@if($method === '__invoke')

export default __invoke
@endif

