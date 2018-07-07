# react-native-alipay
使用react-native-yunpeng-alipay 支付宝支付demo



> + "react-native": "0.51.0",
> + "react-native-yunpeng-alipay": "^2.0.0"

### 链接
 [react-native 中文网](https://reactnative.cn/docs/0.51/getting-started.html)
 [react-native-yunpeng-alipay](https://www.npmjs.com/package/react-native-yunpeng-alipay)


> 下载
 + `git clone https://github.com/dai1254473705/react-native-alipay.git`
 + `yarn install`
 + 修改`node_modules/react-native-yupeng-alipay/android/src/main/java/com/yunpeng/alipay/AlipayPackage`为如下所示：
 
 ```
/**
 * Created by m2mbob on 16/5/6.
 */
public class AlipayPackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new AlipayModule(reactContext));
        return modules;
    }

//    @Override
//    public List<Class<? extends JavaScriptModule>> createJSModules() {
//        return Collections.emptyList();
//    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}

```

### app.js

在根目录下的app.js中，`Alipay.pay(data)`中的data是服务端生成的订单信息，需要先调用一个接口请求，然后才可以进行
支付调用，APP.js中为了方便，我直接写死了一个可用的数据测试Android，ios都通过了，然后注释掉了data，因此当前项目是可亲测可用的！！！

```
 Alipay.pay(data).then(function(data){
            console.log(data);
        }, function (err) {
            //没有安装支付宝APP
            console.log(err);
        });
```

### 具体安装配置流程

react-native-yunpeng-alipay:https://www.jianshu.com/p/d4388eba45cf

原生android:https://www.jianshu.com/p/e2026db4fa22