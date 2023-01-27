import { Constants } from "./constants"
import { ArrayHelpers } from "./arrayHelpers"
import { FsHelpers } from "./fsHelpers"
import { FuncHelpers } from "./func"
import { LogHelpers } from "./logHelpers"
import { NumHelpers } from "./numHelpers"
import { ObjectHelpers } from "./objHelpers"
import { PathHelpers } from "./pathHelpers"
import { StringHelpers } from "./stringHelpers"

export const SOURCE = Constants.getSource(__filename)
SOURCE.name = `HelpersMain`

export class Helpers {
	static SOURCE = SOURCE
	static Constants = Constants

	static ArrayHelpers = ArrayHelpers
	static FsHelpers = FsHelpers
	static LogHelpers = LogHelpers
	static NumHelpers = NumHelpers
	static ObjectHelpers = ObjectHelpers
	static PathHelpers = PathHelpers
	static StringHelpers = StringHelpers
	static FuncHelpers = FuncHelpers
}
