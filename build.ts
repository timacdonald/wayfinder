import { execSync } from 'node:child_process'

export default function setup() {
    try {
        execSync('vendor/bin/testbench wayfinder:generate --base=workbench/resources/js')
    } catch (error) {
        throw new Error(`Unable to generate wayfinder routes. Error: \n----------${error.output}\n----------`)
    }
}
