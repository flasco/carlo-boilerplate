## electron boilerplate
一个 carlo + react 的模板，现已经支持热加载。

* carlo: `0.9.43`  
* react: `16.8.3`  

#### how to use
```bash
yarn install # 安装依赖
yarn dev:render [--re-dll] # 开启热加载, re-dll: rebuild dll
yarn build:render [--re-dll] [--dev] # build code. re-dll: rebuild dll, dev: dev config
yarn start # 启动electron
```

#### tips
如果修改了dll内容的话记得在执行时带上`--re-dll`  
打包 `npx pkg -t macos .`  

#### TODO
* [x] 添加ui库
* [x] 添加state库
* [x] 添加router库
* [x] 添加dll
* [x] 使用react.lazy特性，动态加载
* [x] 用node脚本代替shell