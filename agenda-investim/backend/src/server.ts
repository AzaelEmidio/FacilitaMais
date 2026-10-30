import {app} from './app.js';import {env} from './config.js';app.listen(env.PORT,()=>console.log(`API na porta ${env.PORT}`));
