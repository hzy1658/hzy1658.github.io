var posts=["2024/11/29/AAAwatching/","2024/11/29/hello-world/","2024/11/30/11-29-IZNA-KBS直拍数据/","2024/11/29/11-29 WayV KBS直拍数据/","2024/11/30/11-29-TWS-KBS直拍数据/","2024/12/01/11-29-TXT-KBS直拍数据/","2024/11/30/11-29 ENHYPEN KBS直拍数据/","2024/12/01/MMA舞台视频数据/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };