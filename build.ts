import { execSync } from 'node:child_process'

export default function setup() {
    execSync('vendor/bin/testbench solder:generate --base=workbench/resources/js')
}
