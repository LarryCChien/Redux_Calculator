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

設計時的思考：  
####1. main.js
從 **View** 的角度切入的話，第一支檔案是 `main.js` ，它只做一件事情：將 React 跟 Redux 串接在一起  
透過 `react-redux` 的 `Provider` 功能，讓資料能夠注入 React 呈現的 View 。  
也因為其需要將二者串接，因此會引用 reducers.js 以及 app.jsx

####2. app.jsx
**處理View**  
主要處理 View 的檔案則是 include 在 main.js 中的 `app.jsx` 。  
以計算機為例，將 View 分成了上半部只呈現數字的 `viewNumber.jsx` ，
跟下半部呈現各個按鍵的 `clickBtn.jsx` 。
因為是處理 View 的工作，兩個檔案應該都放在 /components/ 裡，
但二者皆會跟資料面有串接，所以改為放在 /containers/ 。

####2.1 viewNumber.jsx
**View的呈現、將注入的state資料與View連結**  

####2.2 clickBtn.jsx
**View的呈現、將注入的state資料與View連結**  

####3. reducers.js
**處理Data**  
