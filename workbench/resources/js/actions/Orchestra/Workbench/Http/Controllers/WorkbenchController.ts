const validateParameters = (args: Record<string, unknown>|undefined, optional: string[]) => {
    const missing = optional.filter((key) => ! args?.[key])
    const expectedMissing = optional.slice(missing.length * -1)

    for (let i = 0; i < missing.length; i++) {
        if (missing[i] !== expectedMissing[i]) {
            throw Error('whoops')
        }
    }
}

/**
 * @see \Orchestra\Workbench\Http\Controllers\WorkbenchController::start
 * @see /Users/tim/Code/solder/vendor/orchestra/workbench/src/Http/Controllers/WorkbenchController.php:12
 */
export const start: {
    definition: {
        methods: ('get'|'head')[],
        uri: '\/_workbench',
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
        uri: '\/_workbench',
    },
    url: () => {
        return start.definition.uri
    },
    get: () => ({
        action: start.url(),
        method: 'get',
        _method: 'get',
    }),
    head: () => ({
        action: start.url(),
        method: 'get',
        _method: 'head',
    }),
}
/**
 * @see \Orchestra\Workbench\Http\Controllers\WorkbenchController::login
 * @see /Users/tim/Code/solder/vendor/orchestra/workbench/src/Http/Controllers/WorkbenchController.php:12
 */
export const login: {
    definition: {
        methods: ('get'|'head')[],
        uri: '\/_workbench\/login\/{userId}\/{guard?}',
    },
    url: (args: {
        userId: string|number,
        guard?: string|number,
    }) => string,
    get: (args: {
        userId: string|number,
        guard?: string|number,
    }) => {
        action: string,
        method: 'get',
        _method: 'get',
    },
    head: (args: {
        userId: string|number,
        guard?: string|number,
    }) => {
        action: string,
        method: 'get',
        _method: 'head',
    },
} = {
    definition: {
        methods: ['get','head'],
        uri: '\/_workbench\/login\/{userId}\/{guard?}',
    },
    url: (args) => {
        validateParameters(args, [
            "guard",
        ])

        return login.definition.uri
            .replace('{userId}', args['userId'].toString())
            .replace('{guard?}', args['guard']?.toString() ?? '')
            .replace(/\/+$/, '')
    },
    get: (args) => ({
        action: login.url(args),
        method: 'get',
        _method: 'get',
    }),
    head: (args) => ({
        action: login.url(args),
        method: 'get',
        _method: 'head',
    }),
}
/**
 * @see \Orchestra\Workbench\Http\Controllers\WorkbenchController::logout
 * @see /Users/tim/Code/solder/vendor/orchestra/workbench/src/Http/Controllers/WorkbenchController.php:12
 */
export const logout: {
    definition: {
        methods: ('get'|'head')[],
        uri: '\/_workbench\/logout\/{guard?}',
    },
    url: (args?: {
        guard?: string|number,
    }) => string,
    get: (args?: {
        guard?: string|number,
    }) => {
        action: string,
        method: 'get',
        _method: 'get',
    },
    head: (args?: {
        guard?: string|number,
    }) => {
        action: string,
        method: 'get',
        _method: 'head',
    },
} = {
    definition: {
        methods: ['get','head'],
        uri: '\/_workbench\/logout\/{guard?}',
    },
    url: (args) => {
        validateParameters(args, [
            "guard",
        ])

        return logout.definition.uri
            .replace('{guard?}', args?.['guard']?.toString() ?? '')
            .replace(/\/+$/, '')
    },
    get: (args) => ({
        action: logout.url(args),
        method: 'get',
        _method: 'get',
    }),
    head: (args) => ({
        action: logout.url(args),
        method: 'get',
        _method: 'head',
    }),
}
/**
 * @see \Orchestra\Workbench\Http\Controllers\WorkbenchController::user
 * @see /Users/tim/Code/solder/vendor/orchestra/workbench/src/Http/Controllers/WorkbenchController.php:12
 */
export const user: {
    definition: {
        methods: ('get'|'head')[],
        uri: '\/_workbench\/user\/{guard?}',
    },
    url: (args?: {
        guard?: string|number,
    }) => string,
    get: (args?: {
        guard?: string|number,
    }) => {
        action: string,
        method: 'get',
        _method: 'get',
    },
    head: (args?: {
        guard?: string|number,
    }) => {
        action: string,
        method: 'get',
        _method: 'head',
    },
} = {
    definition: {
        methods: ['get','head'],
        uri: '\/_workbench\/user\/{guard?}',
    },
    url: (args) => {
        validateParameters(args, [
            "guard",
        ])

        return user.definition.uri
            .replace('{guard?}', args?.['guard']?.toString() ?? '')
            .replace(/\/+$/, '')
    },
    get: (args) => ({
        action: user.url(args),
        method: 'get',
        _method: 'get',
    }),
    head: (args) => ({
        action: user.url(args),
        method: 'get',
        _method: 'head',
    }),
}
