class ChatEngine{constructor(e,c){this.chatBox=$(`#${e}`),this.userEmail=c,this.socket=io.connect("http://16.170.173.59:5000"),this.userEmail&&this.connectionHandler()}connectionHandler(){let e=this;function c(){var e=$("#chat-messages-list");e.animate({scrollTop:e.prop("scrollHeight")},500)}this.socket.on("connect",(function(){e.socket.emit("join_room",{user_email:e.userEmail,chatroom:"codeial"}),e.socket.on("user_joined",(function(e){}))})),$("#send-message").click((function(){let s=$("#chat-message-input").val();""!=s&&e.socket.emit("send_message",{message:s,user_email:e.userEmail,chatroom:"codeial"}),$("#chat-message-input").val(""),c()})),e.socket.on("receive_message",(function(s){let t=$("<li>"),i="other-message";s.user_email==e.userEmail&&(i="self-message");let a=function(e){const c=e.indexOf("@");return-1!==c?e.slice(0,c):e}(s.user_email);t.append($("<span>",{html:s.message})),t.append($("<sub>",{html:a})),t.addClass(i),$("#chat-messages-list").append(t),c()}))}}$("#chat-circle").click((function(){$("#chat-circle").toggle("scale"),$(".chat-box").toggle("scale"),$("#chat-circle").is(":visible")?$("#chat-circle ").css("display","flex"):$("#chat-circle ").css("display","none")})),$(".chat-box-toggle").click((function(){$("#chat-circle").toggle("scale"),$(".chat-box").toggle("scale"),$("#chat-circle").is(":visible")?$("#chat-circle ").css("display","flex"):$("#chat-circle ").css("display","none")}));