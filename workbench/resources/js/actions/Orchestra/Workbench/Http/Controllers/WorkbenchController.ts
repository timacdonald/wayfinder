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
    href: () => start.definition.uri,
    get: () => ({
        action: start.definition.uri,
        method: "get",
        _method: "get",
    }),
    head: () => ({
        action: start.definition.uri,
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
    href: (args: { userId: string|number, guard: string|number }) => string,
    get: (args: { userId: string|number, guard: string|number }) => { action: string, method: "get", _method: "get" },
    head: (args: { userId: string|number, guard: string|number }) => { action: string, method: "get", _method: "head" },
    definition: { methods: ("get" | "head")[], uri: "\/_workbench\/login\/{userId}\/{guard?}" },
} = {
    href: (args: { userId: string|number, guard: string|number }) => [
            "userId",
"guard"
        ].reduce((url, parameter) => url.replace("{" + parameter + "}", args[parameter]), login.definition.uri),
    get: (args: { userId: string|number, guard: string|number }) => ({
        action: [
            "userId",
"guard"
        ].reduce((url, parameter) => url.replace("{" + parameter + "}", args[parameter]), login.definition.uri),
        method: "get",
        _method: "get",
    }),
    head: (args: { userId: string|number, guard: string|number }) => ({
        action: [
            "userId",
"guard"
        ].reduce((url, parameter) => url.replace("{" + parameter + "}", args[parameter]), login.definition.uri),
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
    href: (args: { guard: string|number }) => string,
    get: (args: { guard: string|number }) => { action: string, method: "get", _method: "get" },
    head: (args: { guard: string|number }) => { action: string, method: "get", _method: "head" },
    definition: { methods: ("get" | "head")[], uri: "\/_workbench\/logout\/{guard?}" },
} = {
    href: (args: { guard: string|number }) => [
            "guard"
        ].reduce((url, parameter) => url.replace("{" + parameter + "}", args[parameter]), logout.definition.uri),
    get: (args: { guard: string|number }) => ({
        action: [
            "guard"
        ].reduce((url, parameter) => url.replace("{" + parameter + "}", args[parameter]), logout.definition.uri),
        method: "get",
        _method: "get",
    }),
    head: (args: { guard: string|number }) => ({
        action: [
            "guard"
        ].reduce((url, parameter) => url.replace("{" + parameter + "}", args[parameter]), logout.definition.uri),
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
    href: (args: { guard: string|number }) => string,
    get: (args: { guard: string|number }) => { action: string, method: "get", _method: "get" },
    head: (args: { guard: string|number }) => { action: string, method: "get", _method: "head" },
    definition: { methods: ("get" | "head")[], uri: "\/_workbench\/user\/{guard?}" },
} = {
    href: (args: { guard: string|number }) => [
            "guard"
        ].reduce((url, parameter) => url.replace("{" + parameter + "}", args[parameter]), user.definition.uri),
    get: (args: { guard: string|number }) => ({
        action: [
            "guard"
        ].reduce((url, parameter) => url.replace("{" + parameter + "}", args[parameter]), user.definition.uri),
        method: "get",
        _method: "get",
    }),
    head: (args: { guard: string|number }) => ({
        action: [
            "guard"
        ].reduce((url, parameter) => url.replace("{" + parameter + "}", args[parameter]), user.definition.uri),
        method: "get",
        _method: "head",
    }),
    definition: {
        methods: ["get", "head"],
        uri: "\/_workbench\/user\/{guard?}",
    },
}

