/**
 * @see \App\Http\Controllers\PostController::index
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/PostController.php:7
 */
export const index: {
    href: () => string,
    get: () => { action: string, method: "get", _method: "get" },
    head: () => { action: string, method: "get", _method: "head" },
    definition: {
        methods: ("get" | "head")[],
        uri: "\/posts",
     },
} = {
    href: () => index.definition.uri,
    get: () => ({
        action: index.definition.uri,
        method: "get",
        _method: "get",
    }),
    head: () => ({
        action: index.definition.uri,
        method: "get",
        _method: "head",
    }),
    definition: {
        methods: ["get", "head"],
        uri: "\/posts",
    },
}

/**
 * @see \App\Http\Controllers\PostController::show
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/PostController.php:12
 */
export const show: {
    href: (args: { post: string|number }) => string,
    get: (args: { post: string|number }) => { action: string, method: "get", _method: "get" },
    head: (args: { post: string|number }) => { action: string, method: "get", _method: "head" },
    definition: {
        methods: ("get" | "head")[],
        uri: "\/posts\/{post}",
     },
} = {
    href: (args: { post: string|number }) => [
            "post"
        ].reduce((url, parameter) => url.replace('{'+parameter+'}', args[parameter]), show.definition.uri),
    get: (args: { post: string|number }) => ({
        action: [
            "post"
        ].reduce((url, parameter) => url.replace('{'+parameter+'}', args[parameter]), show.definition.uri),
        method: "get",
        _method: "get",
    }),
    head: (args: { post: string|number }) => ({
        action: [
            "post"
        ].reduce((url, parameter) => url.replace('{'+parameter+'}', args[parameter]), show.definition.uri),
        method: "get",
        _method: "head",
    }),
    definition: {
        methods: ["get", "head"],
        uri: "\/posts\/{post}",
    },
}

