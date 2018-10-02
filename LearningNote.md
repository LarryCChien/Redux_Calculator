### 20181002  
在 reducers.js 裡面每個return都用 Object.assign 是便於記憶「不能直接修改state」值得觀念，  
但其實除了按數字的case是只更新backNum外，其他的case都是將三個屬性全部更新。  
如此一來其實可以寫成下列這樣就好：
``` javascript
return {
    frontNum: XXX,
    backNum: XXX,
    countType: XXX,
};
```
