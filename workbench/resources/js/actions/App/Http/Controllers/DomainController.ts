/**
 * @see \App\Http\Controllers\DomainController::fixedDomain
 * @see /Users/tim/Code/wayfinder/workbench/app/Http/Controllers/DomainController.php:7
 */
export const fixedDomain: {
    definition: {
        methods: ('get'|'head')[],
        uri: string,
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
        uri: '\/fixed-domain\/{param}',
    },
    url: (args) => {
        const parsedArgs = {
            param: typeof args.param === 'object'
                ? args.param.id
                : args.param,
        }

        return fixedDomain.definition.uri
            .replace('{param}', parsedArgs.param.toString())
            .replace(/\/+$/, '')
    },
    get: (args) => ({
        action: fixedDomain.url(args),
        method: 'get',
        _method: 'get',
    }),
    head: (args) => ({
        action: fixedDomain.url(args),
        method: 'get',
        _method: 'head',
    }),
}

/**
 * @see \App\Http\Controllers\DomainController::dynamicDomain
 * @see /Users/tim/Code/wayfinder/workbench/app/Http/Controllers/DomainController.php:12
 */
export const dynamicDomain: {
    definition: {
        methods: ('get'|'head')[],
        uri: string,
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
        uri: '\/dynamic-domain\/{param}',
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

        return dynamicDomain.definition.uri
            .replace('{domain}', parsedArgs.domain.toString())
            .replace('{param}', parsedArgs.param.toString())
            .replace(/\/+$/, '')
    },
    get: (args) => ({
        action: dynamicDomain.url(args),
        method: 'get',
        _method: 'get',
    }),
    head: (args) => ({
        action: dynamicDomain.url(args),
        method: 'get',
        _method: 'head',
    }),
}

