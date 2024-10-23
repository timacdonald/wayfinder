/**
 * @see \App\Http\Controllers\Controller::optional
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/Controller.php:7
 */
export const optional: {
    href: (args?: { parameter?: string|number }
) => string,
    post: (args?: { parameter?: string|number }
) => { action: string, method: "post", _method: "post" },
    definition: { methods: ("post")[], uri: "\/optional\/{parameter?}" },
} = {
    href: (args?: { parameter?: string|number }
) => [
            "parameter"
        ].reduce((url, parameter) => url.replace("{" + parameter + "}", args[parameter]), optional.definition.uri),
    post: (args?: { parameter?: string|number }
) => ({
        action: [
            "parameter"
        ].reduce((url, parameter) => url.replace("{" + parameter + "}", args[parameter]), optional.definition.uri),
        method: "post",
        _method: "post",
    }),
    definition: {
        methods: ["post"],
        uri: "\/optional\/{parameter?}",
    },
}

