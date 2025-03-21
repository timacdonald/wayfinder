/**
 * @see \App\Http\Controllers\InvokableController::__invoke
 * @see /Users/tim/Code/wayfinder/workbench/app/Http/Controllers/InvokableController.php:7
 */
const __invoke: {
    definition: {
        methods: ('get'|'head')[],
        uri: string,
    },
    url: () => string,
    get: () => {
        action: string,
        method: 'get',
        _method: 'get',
    },
    head: () => {
        action: string,
        method: 'get',
        _method: 'head',
    },
} = {
    definition: {
        methods: ['get','head'],
        get uri() {
            if (this._uri) {
            console.log('calculated')
                return this._uri
            }

            return this._uri = globalThis.location.protocol+'//'+globalThis.location.host+''
        },
    },
    url: () => {
        return __invoke.definition.uri
    },
    get: () => ({
        action: __invoke.url(),
        method: 'get',
        _method: 'get',
    }),
    head: () => ({
        action: __invoke.url(),
        method: 'get',
        _method: 'head',
    }),
}

export default __invoke

