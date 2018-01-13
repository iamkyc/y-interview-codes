## y-interview
---
使用react與redux，接收API資料的訊息後，可以選擇訊息的類別，勾選訊息與刪除訊息

### 元件結構
> index.js
>> AppContainer
>>> Filter
>>> MessageList
>>>> MessageItem
>>> ActionBar

#### index.js
創建store與react dom

#### containers/AppContainer.js
容納messageList、Filter、ActionBar等子元件的父元件

#### components/MessageItem.js
每一個message的原件，放置於MessageList之下


### states
放置於Reducers/indexReducer.js中，共有四個state

#### filter
有`ALL`、`SOCIAL`、`NEWS`三種狀態，依使用者的選擇改變狀態

#### messages
存取從API的原始資料

#### checkedItems
紀錄被勾選的訊息ID，為陣列形式

#### loadingData
紀錄API的載入狀態，有`none`、`loading`、`success`、`failed`四種型態

### Actions
放置於actions目錄下，依據actionBar、filter、message所驅動的actions，分別記錄在所屬的檔案中。

