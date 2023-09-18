class PostComments{constructor(e){this.postId=e,this.postContainer=$(`#post-${e}`),this.newCommentForm=$(`#post-${e}-comments-form`),this.createComment(e);let t=this;$(" .delete-comment-button",this.postContainer).each((function(e){t.deleteComment($(this))}))}createComment(e){let t=this;this.newCommentForm.submit((function(n){n.preventDefault();$.ajax({type:"post",url:"/comments/create",data:$(this).serialize(),success:function(n){let o=t.newCommentDom(n.data.comment);$(`#post-comments-${e}`).prepend(o),t.deleteComment($(" .delete-comment-button",o)),new ToggleLike($(" .toggle-like-button",o)),new Noty({theme:"relax",text:"Comment published!",type:"success",layout:"topRight",timeout:1500}).show(),document.getElementById("comment-input").value=""},error:function(e){console.log(e.responseText)}})}))}newCommentDom(e){return $(`\n    <div class="postCommentsItem" id="comment-${e._id}">\n    <div class="deletePostComment">\n    <a class="delete-comment-button" href="/comments/destroy/${e._id}"\n      ><svg\n        xmlns="http://www.w3.org/2000/svg"\n        width="16"\n        height="16"\n        viewBox="0 0 24 24"\n        fill="none"\n        stroke="currentColor"\n        stroke-width="2"\n        stroke-linecap="round"\n        stroke-linejoin="round"\n        class="feather feather-x"\n      >\n        <line x1="18" y1="6" x2="6" y2="18"></line>\n        <line x1="6" y1="6" x2="18" y2="18"></line>\n      </svg>\n    </a>\n  </div>\n  <div class="postCommentHeader">\n    <span class="postCommentAuther">${e.user.name}</span>\n    <span class="postCommentTime"> ${this.printPostDate(e.updatedAt)}</span>\n    \x3c!-- {/* <span class="postCommentLikes}>22</span> */} --\x3e\n  </div>\n  <div class="postCommentContent">${e.content}</div>\n  <div class="postLike">\n  <button>\n    <a\n      class="toggle-like-button"\n      data-likes="${e.likes.length}"\n      href="/likes/toggle/?id=${e._id}&type=Comment"\n    >\n    <svg\n          stroke="currentColor"\n          strokeWidth="2"\n          fill="none"\n          strokeLinecap="round"\n          strokeLinejoin="round"\n          viewBox="0 0 24 24"\n        >\n          <path\n            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"\n          ></path>\n        </svg>\n        <span>${e.likes.length}</span>\n      </a>\n\n\n\n</div>`)}printPostDate(e){let t=e;t=new Date(t);const n=t.getDate(),o=t.getFullYear();return n+" "+t.toLocaleString("default",{month:"short"})+", "+o+" | "+t.toLocaleTimeString("default",{hour:"2-digit",minute:"2-digit"})}deleteComment(e){$(e).click((function(t){t.preventDefault(),$.ajax({type:"get",url:$(e).prop("href"),success:function(e){$(`#comment-${e.data.comment_id}`).remove(),new Noty({theme:"relax",text:"Comment Deleted",type:"success",layout:"topRight",timeout:1500}).show()},error:function(e){console.log(e.responseText)}})}))}}