import { serverHttp } from "./app";

serverHttp.listen(process.env.PORT || 3333, () => console.log("🚀 Rocket Launched!!"));
