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
#### 1. main.js  
從 **View** 的角度切入的話，第一支檔案是 `main.js` ，它只做一件事情：將 React 跟 Redux 串接在一起  
透過 `react-redux` 的 `Provider` 功能，讓資料能夠注入 React 呈現的 View 。  
也因為其需要將二者串接，因此會引用 reducers.js 以及 app.jsx

#### 2. app.jsx  
**處理View**  
主要處理 View 的檔案則是 include 在 main.js 中的 `app.jsx` 。  
以計算機為例，將 View 分成了上半部只呈現數字的 `viewNumber.jsx` ，
跟下半部呈現各個按鍵的 `clickBtn.jsx` 。
因為是處理 View 的工作，兩個檔案應該都放在 /components/ 裡，
但二者皆會跟資料面有串接，所以改為放在 /containers/ 。

#### 2.1 viewNumber.jsx  
**View的呈現、將注入的state資料與View連結**  
透過 `connect()` 將 Redux 的 store 傳入 NumberBlock 中。  
其資料就是從 reducers.js 而來的 calculator 。而在此檔案中僅需要 backNum 作為在畫面上呈現的資料。  
此檔案僅有資料傳入，並無對應的 actions ，因此在 connect() 中僅有第一個參數 `mapStateToProps` ，  
而沒有對應到 actions 的 mapDispatchToProps 參數。

#### 2.2 clickBtn.jsx  
**View的呈現、將注入的state資料與View連結**  
透過 `connect()` 將 Redux 的 actions 傳入 function 中。  
由於計算機的算盤部分不會因為資料的改變而有變化，因此 connect() 的第一個參數 mapStateToProps 以 null 傳入。  
在算盤上需要針對按下數字、等於、C、加減乘除等按鍵，與對應在 actions 中的 function 連結。  
並將設定的 `mapDispatchToProps` 參數傳入 connect()。  
在每一個 onClick 函式中都將 parent 的 event 取消，故加上 e.preventDefault();
**其實檔案可以不用寫這麼長**，將 mapDispatchToProps 裡的各個 dispatch() 直接寫在按鍵上也可以。
可以參考 `clickBtn_old.jsx` 這支檔案。
但最後還是拆開來寫，方便之後回來看時有個記憶。

#### 2.2.1 button.jsx  
**View的呈現**  
算盤的按鈕，將傳入的 `text` 呈現在按鈕上，以及傳入 `onClick` 函式與 `onClick event` 連結。

#### 3. reducers.js  
**處理Data**  
由於不像 todo list 這麼單純，可以將 initState 的 frontNum 、 backNum 、 countType 拆分的這麼乾淨，  
因此在此案中沒有使用 combineReducers 的方式將 reducers 合併，而是將各個 actions 皆包在 calculator 中。  
在 return 時也用 Object.assign() 來回傳 state 。  

#### 4. actions.js  
**執行的動作**  
定義各個 actions 需要傳入的 type 以及其他參數。  
在 reducers.js 中， calculator() 的 action 參數就是從這裡傳入的，  
因此可以看到 action.type === actionTypes.NUM 時，  
return 的資料有 *action.num* ，跟 actions.js 的 inputNumber() 一樣有 num 參數。

#### 4.1 actionTypes.js  
**執行動作的定義**  
就是定義會有哪些 action 。
