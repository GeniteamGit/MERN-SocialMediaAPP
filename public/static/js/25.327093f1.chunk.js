(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[25],{674:function(e,t,a){},689:function(e,t,a){"use strict";a.r(t);var c=a(129),n=a.n(c),s=a(77),i=a(669),r=a(187),l=a(186),o=a(182),d=a(183),h=a(185),j=a(184),u=a(1),m=a(677),b=a.n(m),x=(a(674),a(62)),p=(a(666),a(405),a(179)),g=a(58),f=a(128),O=a(732),v=a(27),w=x.a.storage(),R=x.a.firestore().collection("stories_dev"),N="",I=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(o.a)(this,a),(c=t.call(this,e)).getFiles=function(e){return new Promise((function(t,a){w.ref(e).listAll().then((function(e){var a=[];e.items.forEach((function(e){a.push(e.fullPath)})),t(a)})).catch((function(e){Object(f.d)(f.a.ERROR,e.toString()),t([])}))}))},c.onNameChange=function(e){var t=e.currentTarget;c.setState({name:t.value})},c.onImageChange=function(e){if(e.target.files[0]){var t=e.target.files[0];t.name.endsWith(".png")?c.getImagePreview(t).then((function(a){c.setState(Object(l.a)({},e.target.name,{file:t,preview:a}))})):Object(f.d)(f.a.WARNING,"Only .png files allowed",1e3)}},c.onAvatarsChange=function(){var e=Object(r.a)(n.a.mark((function e(t){var a,r,l,o,d;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],r=Object(i.a)(t.target.files),e.prev=2,r.s();case 4:if((l=r.n()).done){e.next=16;break}if(!(o=l.value).name.endsWith(".png")){e.next=13;break}return e.next=9,c.getImagePreview(o);case 9:d=e.sent,a.push({file:o,preview:d,path:null,delete:!1}),e.next=14;break;case 13:Object(f.d)(f.a.WARNING,"Only .png files allowed",1e3);case 14:e.next=4;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(2),r.e(e.t0);case 21:return e.prev=21,r.f(),e.finish(21);case 24:a.length>0&&c.setState({avatars:[].concat(Object(s.a)(c.state.avatars),a)});case 25:case"end":return e.stop()}}),e,null,[[2,18,21,24]])})));return function(t){return e.apply(this,arguments)}}(),c.onFileChange=function(e){var t=e.target.files[0];t.name.endsWith(".txt")?c.setState(Object(l.a)({},e.target.name,{file:t})):Object(f.d)(f.a.WARNING,"Only .txt files allowed",1e3)},c.onCategoryChange=function(e){var t=e.target,a=t.checked,n=t.id,i=c.state.categories,r=i.findIndex((function(e){return e.id===n})),l=Object(s.a)(i);l[r].checked=a,c.setState({categories:Object(s.a)(l)})},c.removeAvatar=function(e){var t=Object(s.a)(c.state.avatars);t.forEach((function(t){t.preview===e&&(t.delete=!0)})),c.setState({avatars:Object(s.a)(t)})},c.handleSubmit=function(e){e.preventDefault();var t=c.state,a=t.name,n=t.categories,s=t.cover,i=t.defaultIcon,r=t.explorePageIcon,l=t.recommendedTitleIcon,o=t.avatars,d=t.avatarStyles;if(""!==a.trim()){var h=[],j=[];n.forEach((function(e){e.checked&&j.push(e.id)})),0!==j.length?(c.setState({isLoading:!0}),R.doc(N).update({name:a,categories:j}).then((function(){var e="".concat("_dev","/stories/").concat(N);s.file&&h.push(c.uploadFile(e,s.file,"cover.png")),i.file&&h.push(c.uploadFile(e,i.file,"icon.png")),r.file&&h.push(c.uploadFile(e,r.file,"rect2x_icon.png")),l.file&&h.push(c.uploadFile(e,l.file,"rect_icon.png")),d.file&&h.push(c.uploadFile("".concat(e,"/Avatars"),d.file,"style.txt")),o.forEach((function(t){t.file&&!t.delete?h.push(c.uploadFile("".concat(e,"/Avatars"),t.file)):!t.file&&t.delete&&h.push(c.deleteFile(t.path))})),Promise.all(h).then((function(e){Object(f.f)(N,a),Object(f.d)(f.a.SUCCESS,"Book updated successfully!"),c.backToList()})).catch((function(e){Object(f.d)(f.a.ERROR,"Failed to upload files. Try again!"),c.setState({isLoading:!1})}))})).catch((function(e){Object(f.d)(f.a.ERROR,"Something went wrong. Try again!"),c.setState({isLoading:!1})}))):Object(f.d)(f.a.ERROR,"At least 1 category is required")}else Object(f.d)(f.a.WARNING,"Name is required",1500)},c.deleteFile=function(e){return new Promise((function(t,a){w.ref(e).delete().then((function(){t()})).catch((function(e){a(e)}))}))},c.getImagePreview=function(e){return new Promise((function(t,a){var c=new FileReader;c.readAsDataURL(e);c.onloadend=function(e){t(c.result)}.bind(this)}))},c.backToList=function(){
//# sourceMappingURL=25.327093f1.chunk.js.map