/**
 * @see \App\Http\Controllers\PostController::index
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/PostController.php:7
 */
export const index: {
    name: null,
    href: () => string,
    get: () => { action: string, method: 'get', _method: 'get' },
    head: () => { action: string, method: 'get', _method: 'head' },
    definition: {
        methods: ('get' | 'head')[],
        uri: '/posts'
        action: ['App\Http\Controllers\PostController', 'index'],
     },
} = {
    name: null,
    href: () => index.definition.uri,
    get: () => ({
        action: index.definition.uri,
        method: 'get',
        _method: 'get',
    }),
    head: () => ({
        action: index.definition.uri,
        method: 'get',
        _method: 'head',
    }),
    definition: {
        methods: ['get', 'head'],
        uri: '/posts',
        action: ['App\Http\Controllers\PostController', 'index'],
    },
}

