/**
 * @see \App\Http\Controllers\PostController::index
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/PostController.php:7
 */
export const index: {
    definition: {
        methods: ('get'|'head')[],
        uri: '\/posts',
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
        uri: '\/posts',
    },
    url: () => {
        return index.definition.uri
    },
    get: () => ({
        action: index.url(),
        method: 'get',
        _method: 'get',
    }),
    head: () => ({
        action: index.url(),
        method: 'get',
        _method: 'head',
    }),
}

/**
 * @see \App\Http\Controllers\PostController::create
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/PostController.php:12
 */
export const create: {
    definition: {
        methods: ('get'|'head')[],
        uri: '\/posts\/create',
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
        uri: '\/posts\/create',
    },
    url: () => {
        return create.definition.uri
    },
    get: () => ({
        action: create.url(),
        method: 'get',
        _method: 'get',
    }),
    head: () => ({
        action: create.url(),
        method: 'get',
        _method: 'head',
    }),
}

/**
 * @see \App\Http\Controllers\PostController::store
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/PostController.php:17
 */
export const store: {
    definition: {
        methods: ('post')[],
        uri: '\/posts',
    },
    url: () => string,
    post: () => {
        action: string,
        method: 'post',
        _method: 'post',
    },
} = {
    definition: {
        methods: ['post'],
        uri: '\/posts',
    },
    url: () => {
        return store.definition.uri
    },
    post: () => ({
        action: store.url(),
        method: 'post',
        _method: 'post',
    }),
}

/**
 * @see \App\Http\Controllers\PostController::show
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/PostController.php:22
 */
export const show: {
    definition: {
        methods: ('get'|'head')[],
        uri: '\/posts\/{post}',
    },
    url: (args: {
        post: string|number|{ id: string|number },
    }) => string,
    get: (args: {
        post: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'get',
    },
    head: (args: {
        post: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'head',
    },
} = {
    definition: {
        methods: ['get','head'],
        uri: '\/posts\/{post}',
    },
    url: (args) => {
        const parsedArgs = {
            post: typeof args.post === 'object'
                ? args.post.id
                : args.post,
        }

        return show.definition.uri
            .replace('{post}', parsedArgs.post.toString())
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
 * @see \App\Http\Controllers\PostController::edit
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/PostController.php:27
 */
export const edit: {
    definition: {
        methods: ('get'|'head')[],
        uri: '\/posts\/{post}\/edit',
    },
    url: (args: {
        post: string|number|{ id: string|number },
    }) => string,
    get: (args: {
        post: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'get',
    },
    head: (args: {
        post: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'head',
    },
} = {
    definition: {
        methods: ['get','head'],
        uri: '\/posts\/{post}\/edit',
    },
    url: (args) => {
        const parsedArgs = {
            post: typeof args.post === 'object'
                ? args.post.id
                : args.post,
        }

        return edit.definition.uri
            .replace('{post}', parsedArgs.post.toString())
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

/**
 * @see \App\Http\Controllers\PostController::update
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/PostController.php:32
 */
export const update: {
    definition: {
        methods: ('patch')[],
        uri: '\/posts\/{post}',
    },
    url: (args: {
        post: string|number|{ id: string|number },
    }) => string,
    patch: (args: {
        post: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'post',
        _method: 'patch',
    },
} = {
    definition: {
        methods: ['patch'],
        uri: '\/posts\/{post}',
    },
    url: (args) => {
        const parsedArgs = {
            post: typeof args.post === 'object'
                ? args.post.id
                : args.post,
        }

        return update.definition.uri
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '')
    },
    patch: (args) => ({
        action: update.url(args),
        method: 'post',
        _method: 'patch',
    }),
}

/**
 * @see \App\Http\Controllers\PostController::destroy
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/PostController.php:37
 */
export const destroy: {
    definition: {
        methods: ('delete')[],
        uri: '\/posts\/{post}',
    },
    url: (args: {
        post: string|number|{ id: string|number },
    }) => string,
    delete: (args: {
        post: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'post',
        _method: 'delete',
    },
} = {
    definition: {
        methods: ['delete'],
        uri: '\/posts\/{post}',
    },
    url: (args) => {
        const parsedArgs = {
            post: typeof args.post === 'object'
                ? args.post.id
                : args.post,
        }

        return destroy.definition.uri
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '')
    },
    delete: (args) => ({
        action: destroy.url(args),
        method: 'post',
        _method: 'delete',
    }),
}

