(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[24],{674:function(e,t,s){},693:function(e,t,s){"use strict";s.r(t);var n=s(129),c=s.n(n),a=s(77),i=s(669),o=s(187),r=s(186),l=s(182),u=s(183),h=s(185),d=s(184),j=s(1),b=s(677),p=s.n(b),f=(s(674),s(179)),m=s(58),x=s(62),O=(s(666),s(405),s(128)),g=s(732),v=s(27),w="_dev",R=null,k=x.a.storage(),S=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).getFiles=function(e){return new Promise((function(t,s){k.ref(e).listAll().then((function(e){var s=[];e.items.forEach((function(e){s.push(e.fullPath)})),t(s)})).catch((function(e){Object(O.d)(O.a.ERROR,e.toString()),t([])}))}))},n.onTextChange=function(e){var t=e.currentTarget;n.setState(Object(r.a)({},t.name,t.value))},n.onSwitchChange=function(e){var t=e.currentTarget;n.setState(Object(r.a)({},t.name,t.checked))},n.onImageChange=function(e){e.target.files[0]&&n.getImagePreview(e.target.files[0]).then((function(t){n.setState(Object(r.a)({},e.target.name,{file:e.target.files[0],preview:t}))}))},n.onAssetsChange=function(){var e=Object(o.a)(c.a.mark((function e(t){var s,o,r,l,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=[],o=Object(i.a)(t.target.files),e.prev=2,o.s();case 4:if((r=o.n()).done){e.next=17;break}if(l=r.value,u=null,"video/mp4"!==l.type){e.next=11;break}u="",e.next=14;break;case 11:return e.next=13,n.getImagePreview(l);case 13:u=e.sent;case 14:s.push({file:l,preview:u,path:null,delete:!1});case 15:e.next=4;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(2),o.e(e.t0);case 22:return e.prev=22,o.f(),e.finish(22);case 25:s.length>0&&n.setState({assets:[].concat(Object(a.a)(n.state.assets),s)});case 26:case"end":return e.stop()}}),e,null,[[2,19,22,25]])})));return function(t){return e.apply(this,arguments)}}(),n.removeAsset=function(e){var t=Object(a.a)(n.state.assets);t.forEach((function(t){t.preview===e&&(t.delete=!0)})),n.setState({assets:Object(a.a)(t)})},n.handleSubmit=function(e){e.preventDefault(),n.setState({isLoading:!0});var t=n.state,s=t.name,c=t.isPublished,a=t.icon,i=t.assets,o=t.script,r=n.props.location.state,l=r.storyID,u=r.seasonID,h=r.episodeID,d=[];R.doc(h).update({name:s,isPublished:c}).then((function(){var e="".concat(w,"/stories/").concat(l,"/seasons/").concat(u,"/episodes/").concat(h);a.file&&d.push(n.uploadFileAsPromise(e,a.file,"icon.png")),d.push(n.uploadFileAsPromise(e,new Blob([o],{type:"text/plain"}),"script.txt")),i.forEach((function(t){t.file&&!t.delete?d.push(n.uploadFileAsPromise("".concat(e,"/Assets"),t.file)):!t.file&&t.delete&&d.push(n.deleteFile(t.path))})),Promise.all(d).then((function(e){Object(O.e)(h,s),Object(O.d)(O.a.SUCCESS,"Episode updated successfully!"),n.backToList()})).catch((function(e){
//# sourceMappingURL=24.8eba6f6e.chunk.js.map