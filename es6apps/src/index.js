import { firstName, lastName, skills, address } from "./util.js";
import App from "./App.js";
import AIBot, { version, name } from "./lib.js";

function main() {
    console.log(firstName, lastName, skills, address)
    console.log(App())
    new AIBot()
    console.log(version, name)
}
main()