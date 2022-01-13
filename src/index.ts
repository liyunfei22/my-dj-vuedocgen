import minimist from 'minimist'
import extractConfig from './extractConfig'
import { SafeDocgenCLIConfig } from './config'
import docgen from './docgen'

function run (conf:SafeDocgenCLIConfig) {
	console.log(conf)
	docgen(conf)
}
const { _: pathArray, configFile, watch, cwd } = minimist(process.argv.slice(2), {
	alias: { c: 'configFile', w: 'watch' }
})
const conf:SafeDocgenCLIConfig = extractConfig(cwd || process.cwd(), watch, configFile, pathArray)
run(conf)