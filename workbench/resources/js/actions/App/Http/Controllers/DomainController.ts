/**
 * @see \App\Http\Controllers\DomainController::bar
 * @see /Users/tim/Code/wayfinder/workbench/app/Http/Controllers/DomainController.php:7
 */
export const bar: {
    definition: {
        methods: ('get'|'head')[],
        uri: '\/\/example.test\/bar\/{param}',
    },
    url: (args: {
        param: string|number|{ id: string|number },
    }) => string,
    get: (args: {
        param: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'get',
    },
    head: (args: {
        param: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'head',
    },
} = {
    definition: {
        methods: ['get','head'],
        uri: '\/\/example.test\/bar\/{param}',
    },
    url: (args) => {
        const parsedArgs = {
            param: typeof args.param === 'object'
                ? args.param.id
                : args.param,
        }

        return bar.definition.uri
            .replace('{param}', parsedArgs.param.toString())
            .replace(/\/+$/, '')
    },
    get: (args) => ({
        action: bar.url(args),
        method: 'get',
        _method: 'get',
    }),
    head: (args) => ({
        action: bar.url(args),
        method: 'get',
        _method: 'head',
    }),
}

/**
 * @see \App\Http\Controllers\DomainController::baz
 * @see /Users/tim/Code/wayfinder/workbench/app/Http/Controllers/DomainController.php:12
 */
export const baz: {
    definition: {
        methods: ('get'|'head')[],
        uri: '\/\/{domain}.test\/baz\/{param}',
    },
    url: (args: {
        domain: string|number|{ id: string|number },
        param: string|number|{ id: string|number },
    }) => string,
    get: (args: {
        domain: string|number|{ id: string|number },
        param: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'get',
    },
    head: (args: {
        domain: string|number|{ id: string|number },
        param: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'head',
    },
} = {
    definition: {
        methods: ['get','head'],
        uri: '\/\/{domain}.test\/baz\/{param}',
    },
    url: (args) => {
        const parsedArgs = {
            domain: typeof args.domain === 'object'
                ? args.domain.id
                : args.domain,
            param: typeof args.param === 'object'
                ? args.param.id
                : args.param,
        }

        return baz.definition.uri
            .replace('{domain}', parsedArgs.domain.toString())
            .replace('{param}', parsedArgs.param.toString())
            .replace(/\/+$/, '')
    },
    get: (args) => ({
        action: baz.url(args),
        method: 'get',
        _method: 'get',
    }),
    head: (args) => ({
        action: baz.url(args),
        method: 'get',
        _method: 'head',
    }),
}

