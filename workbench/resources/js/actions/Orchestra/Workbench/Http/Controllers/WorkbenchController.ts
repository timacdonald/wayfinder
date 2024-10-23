/**
 * @see \Orchestra\Workbench\Http\Controllers\WorkbenchController::start
 * @see /Users/tim/Code/solder/vendor/orchestra/workbench/src/Http/Controllers/WorkbenchController.php:19
 */
export const start: {
    href: () => string,
    get: () => { action: string, method: "get", _method: "get" },
    head: () => { action: string, method: "get", _method: "head" },
    definition: { methods: ("get" | "head")[], uri: "\/_workbench" },
} = {
    href: () => start.definition.uri.replace(/\/+$/, ''),
    get: () => ({
        action: start.definition.uri.replace(/\/+$/, ''),
        method: "get",
        _method: "get",
    }),
    head: () => ({
        action: start.definition.uri.replace(/\/+$/, ''),
        method: "get",
        _method: "head",
    }),
    definition: {
        methods: ["get", "head"],
        uri: "\/_workbench",
    },
}

/**
 * @see \Orchestra\Workbench\Http\Controllers\WorkbenchController::login
 * @see /Users/tim/Code/solder/vendor/orchestra/workbench/src/Http/Controllers/WorkbenchController.php:61
 */
export const login: {
    href: (args: { userId: string|number, guard?: string|number }) => string,
    get: (args: { userId: string|number, guard?: string|number }) => { action: string, method: "get", _method: "get" },
    head: (args: { userId: string|number, guard?: string|number }) => { action: string, method: "get", _method: "head" },
    definition: { methods: ("get" | "head")[], uri: "\/_workbench\/login\/{userId}\/{guard?}" },
} = {
    href: (args: { userId: string|number, guard?: string|number }) => login.definition.uri.replace("{userId}", (args["userId"].toString())).replace("{guard?}", (args?.["guard"]?.toString() ?? '')).replace(/\/+$/, ''),
    get: (args: { userId: string|number, guard?: string|number }) => ({
        action: login.definition.uri.replace("{userId}", (args["userId"].toString())).replace("{guard?}", (args?.["guard"]?.toString() ?? '')).replace(/\/+$/, ''),
        method: "get",
        _method: "get",
    }),
    head: (args: { userId: string|number, guard?: string|number }) => ({
        action: login.definition.uri.replace("{userId}", (args["userId"].toString())).replace("{guard?}", (args?.["guard"]?.toString() ?? '')).replace(/\/+$/, ''),
        method: "get",
        _method: "head",
    }),
    definition: {
        methods: ["get", "head"],
        uri: "\/_workbench\/login\/{userId}\/{guard?}",
    },
}

/**
 * @see \Orchestra\Workbench\Http\Controllers\WorkbenchController::logout
 * @see /Users/tim/Code/solder/vendor/orchestra/workbench/src/Http/Controllers/WorkbenchController.php:85
 */
export const logout: {
    href: (args?: { guard?: string|number }) => string,
    get: (args?: { guard?: string|number }) => { action: string, method: "get", _method: "get" },
    head: (args?: { guard?: string|number }) => { action: string, method: "get", _method: "head" },
    definition: { methods: ("get" | "head")[], uri: "\/_workbench\/logout\/{guard?}" },
} = {
    href: (args?: { guard?: string|number }) => logout.definition.uri.replace("{guard?}", (args?.["guard"]?.toString() ?? '')).replace(/\/+$/, ''),
    get: (args?: { guard?: string|number }) => ({
        action: logout.definition.uri.replace("{guard?}", (args?.["guard"]?.toString() ?? '')).replace(/\/+$/, ''),
        method: "get",
        _method: "get",
    }),
    head: (args?: { guard?: string|number }) => ({
        action: logout.definition.uri.replace("{guard?}", (args?.["guard"]?.toString() ?? '')).replace(/\/+$/, ''),
        method: "get",
        _method: "head",
    }),
    definition: {
        methods: ["get", "head"],
        uri: "\/_workbench\/logout\/{guard?}",
    },
}

/**
 * @see \Orchestra\Workbench\Http\Controllers\WorkbenchController::user
 * @see /Users/tim/Code/solder/vendor/orchestra/workbench/src/Http/Controllers/WorkbenchController.php:40
 */
export const user: {
    href: (args?: { guard?: string|number }) => string,
    get: (args?: { guard?: string|number }) => { action: string, method: "get", _method: "get" },
    head: (args?: { guard?: string|number }) => { action: string, method: "get", _method: "head" },
    definition: { methods: ("get" | "head")[], uri: "\/_workbench\/user\/{guard?}" },
} = {
    href: (args?: { guard?: string|number }) => user.definition.uri.replace("{guard?}", (args?.["guard"]?.toString() ?? '')).replace(/\/+$/, ''),
    get: (args?: { guard?: string|number }) => ({
        action: user.definition.uri.replace("{guard?}", (args?.["guard"]?.toString() ?? '')).replace(/\/+$/, ''),
        method: "get",
        _method: "get",
    }),
    head: (args?: { guard?: string|number }) => ({
        action: user.definition.uri.replace("{guard?}", (args?.["guard"]?.toString() ?? '')).replace(/\/+$/, ''),
        method: "get",
        _method: "head",
    }),
    definition: {
        methods: ["get", "head"],
        uri: "\/_workbench\/user\/{guard?}",
    },
}

