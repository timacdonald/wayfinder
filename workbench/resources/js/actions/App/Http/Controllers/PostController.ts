/**
 * @see \App\Http\Controllers\PostController::index
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/PostController.php:7
 */
export const index: {
    href: () => string,
    get: () => { action: string, method: "get", _method: "get" },
    head: () => { action: string, method: "get", _method: "head" },
    definition: { methods: ("get" | "head")[], uri: "\/posts" },
} = {
    href: () => index.definition.uri.replace(/\/+$/, ''),
    get: () => ({
        action: index.definition.uri.replace(/\/+$/, ''),
        method: "get",
        _method: "get",
    }),
    head: () => ({
        action: index.definition.uri.replace(/\/+$/, ''),
        method: "get",
        _method: "head",
    }),
    definition: {
        methods: ["get", "head"],
        uri: "\/posts",
    },
}

/**
 * @see \App\Http\Controllers\PostController::create
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/PostController.php:12
 */
export const create: {
    href: () => string,
    get: () => { action: string, method: "get", _method: "get" },
    head: () => { action: string, method: "get", _method: "head" },
    definition: { methods: ("get" | "head")[], uri: "\/posts\/create" },
} = {
    href: () => create.definition.uri.replace(/\/+$/, ''),
    get: () => ({
        action: create.definition.uri.replace(/\/+$/, ''),
        method: "get",
        _method: "get",
    }),
    head: () => ({
        action: create.definition.uri.replace(/\/+$/, ''),
        method: "get",
        _method: "head",
    }),
    definition: {
        methods: ["get", "head"],
        uri: "\/posts\/create",
    },
}

/**
 * @see \App\Http\Controllers\PostController::store
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/PostController.php:17
 */
export const store: {
    href: () => string,
    post: () => { action: string, method: "post", _method: "post" },
    definition: { methods: ("post")[], uri: "\/posts" },
} = {
    href: () => store.definition.uri.replace(/\/+$/, ''),
    post: () => ({
        action: store.definition.uri.replace(/\/+$/, ''),
        method: "post",
        _method: "post",
    }),
    definition: {
        methods: ["post"],
        uri: "\/posts",
    },
}

/**
 * @see \App\Http\Controllers\PostController::show
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/PostController.php:22
 */
export const show: {
    href: (args: { post: string|number }) => string,
    get: (args: { post: string|number }) => { action: string, method: "get", _method: "get" },
    head: (args: { post: string|number }) => { action: string, method: "get", _method: "head" },
    definition: { methods: ("get" | "head")[], uri: "\/posts\/{post}" },
} = {
    href: (args: { post: string|number }) => show.definition.uri.replace("{post}", (args["post"].toString())).replace(/\/+$/, ''),
    get: (args: { post: string|number }) => ({
        action: show.definition.uri.replace("{post}", (args["post"].toString())).replace(/\/+$/, ''),
        method: "get",
        _method: "get",
    }),
    head: (args: { post: string|number }) => ({
        action: show.definition.uri.replace("{post}", (args["post"].toString())).replace(/\/+$/, ''),
        method: "get",
        _method: "head",
    }),
    definition: {
        methods: ["get", "head"],
        uri: "\/posts\/{post}",
    },
}

/**
 * @see \App\Http\Controllers\PostController::edit
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/PostController.php:27
 */
export const edit: {
    href: (args: { post: string|number }) => string,
    get: (args: { post: string|number }) => { action: string, method: "get", _method: "get" },
    head: (args: { post: string|number }) => { action: string, method: "get", _method: "head" },
    definition: { methods: ("get" | "head")[], uri: "\/posts\/{post}\/edit" },
} = {
    href: (args: { post: string|number }) => edit.definition.uri.replace("{post}", (args["post"].toString())).replace(/\/+$/, ''),
    get: (args: { post: string|number }) => ({
        action: edit.definition.uri.replace("{post}", (args["post"].toString())).replace(/\/+$/, ''),
        method: "get",
        _method: "get",
    }),
    head: (args: { post: string|number }) => ({
        action: edit.definition.uri.replace("{post}", (args["post"].toString())).replace(/\/+$/, ''),
        method: "get",
        _method: "head",
    }),
    definition: {
        methods: ["get", "head"],
        uri: "\/posts\/{post}\/edit",
    },
}

/**
 * @see \App\Http\Controllers\PostController::update
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/PostController.php:32
 */
export const update: {
    href: (args: { post: string|number }) => string,
    patch: (args: { post: string|number }) => { action: string, method: "post", _method: "patch" },
    definition: { methods: ("patch")[], uri: "\/posts\/{post}" },
} = {
    href: (args: { post: string|number }) => update.definition.uri.replace("{post}", (args["post"].toString())).replace(/\/+$/, ''),
    patch: (args: { post: string|number }) => ({
        action: update.definition.uri.replace("{post}", (args["post"].toString())).replace(/\/+$/, ''),
        method: "post",
        _method: "patch",
    }),
    definition: {
        methods: ["patch"],
        uri: "\/posts\/{post}",
    },
}

/**
 * @see \App\Http\Controllers\PostController::destroy
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/PostController.php:37
 */
export const destroy: {
    href: (args: { post: string|number }) => string,
    delete: (args: { post: string|number }) => { action: string, method: "post", _method: "delete" },
    definition: { methods: ("delete")[], uri: "\/posts\/{post}" },
} = {
    href: (args: { post: string|number }) => destroy.definition.uri.replace("{post}", (args["post"].toString())).replace(/\/+$/, ''),
    delete: (args: { post: string|number }) => ({
        action: destroy.definition.uri.replace("{post}", (args["post"].toString())).replace(/\/+$/, ''),
        method: "post",
        _method: "delete",
    }),
    definition: {
        methods: ["delete"],
        uri: "\/posts\/{post}",
    },
}

