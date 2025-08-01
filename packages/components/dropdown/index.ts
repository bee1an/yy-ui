import { withInstall } from '@yy-craft/utils/src/with-install'
import Dropdown from './src/dropdown'

const dropdownWithInstall = withInstall(Dropdown)
export * from './src/dropdown'
export { dropdownWithInstall, Dropdown }
export default Dropdown

declare module 'vue' {
	export interface GlobalComponents {
		YyDropdown: typeof Dropdown
	}
}
