/**
 * @see \App\Http\Controllers\SchemeController::insecure
 * @see /Users/tim/Code/wayfinder/workbench/app/Http/Controllers/SchemeController.php:12
 */
export const insecure: {
    definition: {
        methods: ('get'|'head')[],
        uri: '\/insecure.test',
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
        uri: '\/insecure.test',
    },
    url: () => {
        return insecure.definition.uri
    },
    get: () => ({
        action: insecure.url(),
        method: 'get',
        _method: 'get',
    }),
    head: () => ({
        action: insecure.url(),
        method: 'get',
        _method: 'head',
    }),
}

/**
 * @see \App\Http\Controllers\SchemeController::secure
 * @see /Users/tim/Code/wayfinder/workbench/app/Http/Controllers/SchemeController.php:7
 */
export const secure: {
    definition: {
        methods: ('get'|'head')[],
        uri: '\/secure.test',
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
        uri: '\/secure.test',
    },
    url: () => {
        return secure.definition.uri
    },
    get: () => ({
        action: secure.url(),
        method: 'get',
        _method: 'get',
    }),
    head: () => ({
        action: secure.url(),
        method: 'get',
        _method: 'head',
    }),
}

