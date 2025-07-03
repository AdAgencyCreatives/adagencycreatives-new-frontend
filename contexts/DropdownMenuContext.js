const { createContext } = require("react");

const DropdownMenuContext = createContext({ hideDropdown: (delay = 0) => { } });
export default DropdownMenuContext;