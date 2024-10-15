/**
 * @see "\\Orchestra\\Workbench\\Http\\Controllers\\WorkbenchController::start"
 * @see "\/Users\/tim\/Code\/solder\/vendor\/orchestra\/workbench\/src\/Http\/Controllers\/WorkbenchController.php":19
 */
export const start: {
    name: "workbench.start",
    href: () => string,
    get: () => { action: string, method: "get", _method: "get" },
    head: () => { action: string, method: "get", _method: "head" },
    definition: {
        methods: ("get" | "head")[],
        uri: "\/_workbench",
        action: ["Orchestra\\Workbench\\Http\\Controllers\\WorkbenchController", "start"],
     },
} = {
    name: "workbench.start",
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
        action: ["Orchestra\\Workbench\\Http\\Controllers\\WorkbenchController", "start"],
    },
}

/**
 * @see "\\Orchestra\\Workbench\\Http\\Controllers\\WorkbenchController::login"
 * @see "\/Users\/tim\/Code\/solder\/vendor\/orchestra\/workbench\/src\/Http\/Controllers\/WorkbenchController.php":61
 */
export const login: {
    name: "workbench.login",
    href: (args: { userId: string, guard: string }) => string,
    get: (args: { userId: string, guard: string }) => { action: string, method: "get", _method: "get" },
    head: (args: { userId: string, guard: string }) => { action: string, method: "get", _method: "head" },
    definition: {
        methods: ("get" | "head")[],
        uri: "\/_workbench\/login\/{userId}\/{guard?}",
        action: ["Orchestra\\Workbench\\Http\\Controllers\\WorkbenchController", "login"],
     },
} = {
    name: "workbench.login",
    href: (args: { userId: string, guard: string }) => login.definition.uri.replace(
        // TODO do not escape this with json_encode.
        /("userId"}) | ("guard"})/,
         (_: string, "userId": ""userId"", "guard": ""guard"") => args["userId" ?? "guard"]
    ),
    get: (args: { userId: string, guard: string }) => ({
        action: login.definition.uri.replace(
        // TODO do not escape this with json_encode.
        /("userId"}) | ("guard"})/,
         (_: string, "userId": ""userId"", "guard": ""guard"") => args["userId" ?? "guard"]
    ),
        method: "get",
        _method: "get",
    }),
    head: (args: { userId: string, guard: string }) => ({
        action: login.definition.uri.replace(
        // TODO do not escape this with json_encode.
        /("userId"}) | ("guard"})/,
         (_: string, "userId": ""userId"", "guard": ""guard"") => args["userId" ?? "guard"]
    ),
        method: "get",
        _method: "head",
    }),
    definition: {
        methods: ["get", "head"],
        uri: "\/_workbench\/login\/{userId}\/{guard?}",
        action: ["Orchestra\\Workbench\\Http\\Controllers\\WorkbenchController", "login"],
    },
}

/**
 * @see "\\Orchestra\\Workbench\\Http\\Controllers\\WorkbenchController::logout"
 * @see "\/Users\/tim\/Code\/solder\/vendor\/orchestra\/workbench\/src\/Http\/Controllers\/WorkbenchController.php":85
 */
export const logout: {
    name: "workbench.logout",
    href: (args: { guard: string }) => string,
    get: (args: { guard: string }) => { action: string, method: "get", _method: "get" },
    head: (args: { guard: string }) => { action: string, method: "get", _method: "head" },
    definition: {
        methods: ("get" | "head")[],
        uri: "\/_workbench\/logout\/{guard?}",
        action: ["Orchestra\\Workbench\\Http\\Controllers\\WorkbenchController", "logout"],
     },
} = {
    name: "workbench.logout",
    href: (args: { guard: string }) => logout.definition.uri.replace(
        // TODO do not escape this with json_encode.
        /("guard"})/,
         (_: string, "guard": ""guard"") => args["guard"]
    ),
    get: (args: { guard: string }) => ({
        action: logout.definition.uri.replace(
        // TODO do not escape this with json_encode.
        /("guard"})/,
         (_: string, "guard": ""guard"") => args["guard"]
    ),
        method: "get",
        _method: "get",
    }),
    head: (args: { guard: string }) => ({
        action: logout.definition.uri.replace(
        // TODO do not escape this with json_encode.
        /("guard"})/,
         (_: string, "guard": ""guard"") => args["guard"]
    ),
        method: "get",
        _method: "head",
    }),
    definition: {
        methods: ["get", "head"],
        uri: "\/_workbench\/logout\/{guard?}",
        action: ["Orchestra\\Workbench\\Http\\Controllers\\WorkbenchController", "logout"],
    },
}

/**
 * @see "\\Orchestra\\Workbench\\Http\\Controllers\\WorkbenchController::user"
 * @see "\/Users\/tim\/Code\/solder\/vendor\/orchestra\/workbench\/src\/Http\/Controllers\/WorkbenchController.php":40
 */
export const user: {
    name: "workbench.user",
    href: (args: { guard: string }) => string,
    get: (args: { guard: string }) => { action: string, method: "get", _method: "get" },
    head: (args: { guard: string }) => { action: string, method: "get", _method: "head" },
    definition: {
        methods: ("get" | "head")[],
        uri: "\/_workbench\/user\/{guard?}",
        action: ["Orchestra\\Workbench\\Http\\Controllers\\WorkbenchController", "user"],
     },
} = {
    name: "workbench.user",
    href: (args: { guard: string }) => user.definition.uri.replace(
        // TODO do not escape this with json_encode.
        /("guard"})/,
         (_: string, "guard": ""guard"") => args["guard"]
    ),
    get: (args: { guard: string }) => ({
        action: user.definition.uri.replace(
        // TODO do not escape this with json_encode.
        /("guard"})/,
         (_: string, "guard": ""guard"") => args["guard"]
    ),
        method: "get",
        _method: "get",
    }),
    head: (args: { guard: string }) => ({
        action: user.definition.uri.replace(
        // TODO do not escape this with json_encode.
        /("guard"})/,
         (_: string, "guard": ""guard"") => args["guard"]
    ),
        method: "get",
        _method: "head",
    }),
    definition: {
        methods: ["get", "head"],
        uri: "\/_workbench\/user\/{guard?}",
        action: ["Orchestra\\Workbench\\Http\\Controllers\\WorkbenchController", "user"],
    },
}

