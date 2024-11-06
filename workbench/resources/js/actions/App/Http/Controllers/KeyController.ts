/**
 * @see \App\Http\Controllers\KeyController::show
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/KeyController.php:7
 */
export const show: {
    definition: {
        methods: ('get'|'head')[],
        uri: '\/keys\/{key}',
    },
    url: (args: {
        key: string|number|{ id: string|number },
    }) => string,
    get: (args: {
        key: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'get',
    },
    head: (args: {
        key: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'head',
    },
} = {
    definition: {
        methods: ['get','head'],
        uri: '\/keys\/{key}',
    },
    url: (args) => {
        const parsedArgs = {
            key: typeof args.key === 'object'
                ? args.key.id
                : args.key,
        }

        return show.definition.uri
            .replace('{key}', parsedArgs.key.toString())
            .replace(/\/+$/, '')
    },
    get: (args) => ({
        action: show.url(args),
        method: 'get',
        _method: 'get',
    }),
    head: (args) => ({
        action: show.url(args),
        method: 'get',
        _method: 'head',
    }),
}

/**
 * @see \App\Http\Controllers\KeyController::edit
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/KeyController.php:12
 */
export const edit: {
    definition: {
        methods: ('get'|'head')[],
        uri: '\/keys\/{key}\/edit',
    },
    url: (args: {
        key: string|number|{ uuid: string|number },
    }) => string,
    get: (args: {
        key: string|number|{ uuid: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'get',
    },
    head: (args: {
        key: string|number|{ uuid: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'head',
    },
} = {
    definition: {
        methods: ['get','head'],
        uri: '\/keys\/{key}\/edit',
    },
    url: (args) => {
        const parsedArgs = {
            key: typeof args.key === 'object'
                ? args.key.uuid
                : args.key,
        }

        return edit.definition.uri
            .replace('{key}', parsedArgs.key.toString())
            .replace(/\/+$/, '')
    },
    get: (args) => ({
        action: edit.url(args),
        method: 'get',
        _method: 'get',
    }),
    head: (args) => ({
        action: edit.url(args),
        method: 'get',
        _method: 'head',
    }),
}

