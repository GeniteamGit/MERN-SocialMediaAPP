(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[23],{666:function(e,t,a){"use strict";a(670)},669:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(181);function c(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=Object(n.a)(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var c=0,r=function(){};return{s:r,n:function(){return c>=e.length?{done:!0}:{done:!1,value:e[c++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){l=!0,s=e},f:function(){try{i||null==a.return||a.return()}finally{if(l)throw s}}}}},685:function(e,t,a){"use strict";a.r(t);var n=a(77),c=a(129),r=a.n(c),s=a(669),i=a(187),l=a(186),o=a(182),d=a(183),h=a(185),m=a(184),j=a(1),u=a(62),b=(a(666),a(405),a(179)),x=a(58),g=a(128),f=a(732),p=a(27),O=u.a.firestore().collection("stories_dev"),v=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(o.a)(this,a),(c=t.call(this,e)).onNameChange=function(e){var t=e.currentTarget;c.setState({name:t.value})},c.onImageChange=function(e){var t=e.target.files[0];t&&(t.name.endsWith(".png")?c.getImagePreview(t).then((function(a){c.setState(Object(l.a)({},e.target.name,{file:t,preview:a}))})):Object(g.d)(g.a.WARNING,"Only .png files allowed",1e3))},c.onAvatarsChange=function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n,i,l,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],n=Object(s.a)(t.target.files),e.prev=2,n.s();case 4:if((i=n.n()).done){e.next=16;break}if(!(l=i.value).name.endsWith(".png")){e.next=13;break}return e.next=9,c.getImagePreview(l);case 9:o=e.sent,a.push({file:l,preview:o}),e.next=14;break;case 13:Object(g.d)(g.a.WARNING,"Only .png files allowed",1e3);case 14:e.next=4;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(2),n.e(e.t0);case 21:return e.prev=21,n.f(),e.finish(21);case 24:a.length>0&&c.setState({avatars:a});case 25:case"end":return e.stop()}}),e,null,[[2,18,21,24]])})));return function(t){return e.apply(this,arguments)}}(),c.onFileChange=function(e){var t=e.target.files[0];t.name.endsWith(".txt")?c.setState(Object(l.a)({},e.target.name,{file:t})):Object(g.d)(g.a.WARNING,"Only .txt files allowed",1e3)},c.onCategoryChange=function(e){var t=e.target,a=t.checked,r=t.id,s=c.state.categories,i=s.findIndex((function(e){return e.id===r})),l=Object(n.a)(s);l[i].checked=a,c.setState({categories:Object(n.a)(l)})},c.handleSubmit=function(e){e.preventDefault();var t=c.state,a=t.name,n=t.categories,r=t.cover,s=t.defaultIcon,i=t.explorePageIcon,l=t.recommendedTitleIcon,o=t.avatars,d=t.avatarStyles;if(""!==a.trim()){var h=[],m=[];n.forEach((function(e){e.checked&&m.push(e.id)})),0!==m.length?(c.setState({isLoading:!0}),O.add({name:a,views:0,reviews:0,likes:0,description:"",categories:m,createdAt:Date.now()}).then((function(e){Object(g.d)(g.a.SUCCESS,"Data added successfully!"),Object(g.d)(g.a.INFO,"Uploading files..");var t="".concat("_dev","/stories/").concat(e.id);r.file&&h.push(c.uploadFile(t,r.file,"cover.png")),s.file&&h.push(c.uploadFile(t,s.file,"icon.png")),i.file&&h.push(c.uploadFile(t,i.file,"rect2x_icon.png")),l.file&&h.push(c.uploadFile(t,l.file,"rect_icon.png")),d.file&&h.push(c.uploadFile("".concat(t,"/Avatars"),d.file,"style.txt")),o.forEach((function(e){h.push(c.uploadFile("".concat(t,"/Avatars"),e.file))})),Promise.all(h).then((function(e){Object(g.d)(g.a.SUCCESS,"Book added successfully!"),c.backToList()})).catch((function(t){O.doc(e.id).delete().then((function(){Object(g.d)(g.a.ERROR,t.toString()),c.setState({isLoading:!1})})).catch((function(e){Object(g.d)(g.a.ERROR,e.toString()),c.setState({isLoading:!1})}))}))})).catch((function(e){Object(g.d)(g.a.ERROR,"Something went wrong. Try again!"),c.setState({isLoading:!1})}))):Object(g.d)(g.a.ERROR,"At least 1 category is required")}else Object(g.d)(g.a.WARNING,"Name is required",1500)},c.getImagePreview=function(e){return new Promise((function(t,a){var n=new FileReader;n.readAsDataURL(e);n.onloadend=function(e){t(n.result)}.bind(this)}))},c.backToList=function(){
//# sourceMappingURL=23.885a0e66.chunk.js.map