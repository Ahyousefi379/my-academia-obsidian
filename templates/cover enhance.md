
<%* 
var file = app.workspace.getActiveFile()
var t = await app.vault.read(file)
var s = t.replaceAll("http://books.google.com/books/content?id=", "https://books.google.com/books/publisher/content/images/frontcover/").replaceAll("&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","?fife=w600-h900&source=gbs_api").replaceAll("&printsec=frontcover&img=1&zoom=1","?fife=w600-h900&source=gbs_api")

app.vault.modify(file, s)
-%>
