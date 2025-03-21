const validateParameters = (args: Record<string, unknown>|undefined, optional: string[]) => {
    const missing = optional.filter((key) => ! args?.[key])
    const expectedMissing = optional.slice(missing.length * -1)

    for (let i = 0; i < missing.length; i++) {
        if (missing[i] !== expectedMissing[i]) {
            throw Error('Unexpected optional parameters missing. Unable to generate a URL.')
        }
    }
}

/**
 * @see \Orchestra\Workbench\Http\Controllers\WorkbenchController::start
 * @see /Users/tim/Code/wayfinder/vendor/orchestra/workbench/src/Http/Controllers/WorkbenchController.php:19
 */
export const start: {
    definition: {
        methods: ('get'|'head')[],
        uri: string,
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
        get uri() {
            if (this._uri) {
            console.log('calculated')
                return this._uri
            }

            return this._uri = globalThis.location.protocol+'//'+globalThis.location.host+''
        },
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
 * @see /Users/tim/Code/wayfinder/vendor/orchestra/workbench/src/Http/Controllers/WorkbenchController.php:61
 */
export const login: {
    definition: {
        methods: ('get'|'head')[],
        uri: string,
    },
    url: (args: {
        userId: string|number|{ id: string|number },
        guard?: string|number|{ id: string|number },
    }) => string,
    get: (args: {
        userId: string|number|{ id: string|number },
        guard?: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'get',
    },
    head: (args: {
        userId: string|number|{ id: string|number },
        guard?: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'head',
    },
} = {
    definition: {
        methods: ['get','head'],
        get uri() {
            if (this._uri) {
            console.log('calculated')
                return this._uri
            }

            return this._uri = globalThis.location.protocol+'//'+globalThis.location.host+''
        },
    },
    url: (args) => {
        validateParameters(args, [
            "guard",
        ])

        const parsedArgs = {
            userId: typeof args.userId === 'object'
                ? args.userId.id
                : args.userId,
            guard: typeof args.guard === 'object'
                ? args.guard.id
                : args.guard,
        }

        return login.definition.uri
            .replace('{userId}', parsedArgs.userId.toString())
            .replace('{guard?}', parsedArgs.guard?.toString() ?? '')
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
 * @see /Users/tim/Code/wayfinder/vendor/orchestra/workbench/src/Http/Controllers/WorkbenchController.php:85
 */
export const logout: {
    definition: {
        methods: ('get'|'head')[],
        uri: string,
    },
    url: (args?: {
        guard?: string|number|{ id: string|number },
    }) => string,
    get: (args?: {
        guard?: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'get',
    },
    head: (args?: {
        guard?: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'head',
    },
} = {
    definition: {
        methods: ['get','head'],
        get uri() {
            if (this._uri) {
            console.log('calculated')
                return this._uri
            }

            return this._uri = globalThis.location.protocol+'//'+globalThis.location.host+''
        },
    },
    url: (args) => {
        validateParameters(args, [
            "guard",
        ])

        const parsedArgs = {
            guard: typeof args?.guard === 'object'
                ? args.guard.id
                : args?.guard,
        }

        return logout.definition.uri
            .replace('{guard?}', parsedArgs.guard?.toString() ?? '')
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
 * @see /Users/tim/Code/wayfinder/vendor/orchestra/workbench/src/Http/Controllers/WorkbenchController.php:40
 */
export const user: {
    definition: {
        methods: ('get'|'head')[],
        uri: string,
    },
    url: (args?: {
        guard?: string|number|{ id: string|number },
    }) => string,
    get: (args?: {
        guard?: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'get',
    },
    head: (args?: {
        guard?: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'head',
    },
} = {
    definition: {
        methods: ['get','head'],
        get uri() {
            if (this._uri) {
            console.log('calculated')
                return this._uri
            }

            return this._uri = globalThis.location.protocol+'//'+globalThis.location.host+''
        },
    },
    url: (args) => {
        validateParameters(args, [
            "guard",
        ])

        const parsedArgs = {
            guard: typeof args?.guard === 'object'
                ? args.guard.id
                : args?.guard,
        }

        return user.definition.uri
            .replace('{guard?}', parsedArgs.guard?.toString() ?? '')
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

