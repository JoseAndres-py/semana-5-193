(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["articulo"],{1681:function(t,e,a){},2592:function(t,e,a){"use strict";a("2f0a")},"2f0a":function(t,e,a){},"6abc":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("data-table-articulos")},o=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",{staticClass:"container-table100",staticStyle:{"background-image":"url('/images/bg-02.jpg')",padding:"0px"}},[a("v-container",[a("div",{attrs:{id:"app"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.articulos,"items-per-page":5,"sort-by":"calories",loading:t.endCharge,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[t._v("CRUD Articulos")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",o,!1),i),[t._v(" Agregar Categoria ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Nombre"},model:{value:t.editedItem.nombre,callback:function(e){t.$set(t.editedItem,"nombre",e)},expression:"editedItem.nombre"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-textarea",{attrs:{label:"Descripcion",rows:"3","no-resize":"",counter:"150"},model:{value:t.editedItem.descripcion,callback:function(e){t.$set(t.editedItem,"descripcion",e)},expression:"editedItem.descripcion"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-select",{attrs:{label:"Categoria",items:t.categorias,"item-value":"id","item-text":"nombre","return-object":""},model:{value:t.categoria,callback:function(e){t.categoria=e},expression:"categoria"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Codigo"},model:{value:t.editedItem.codigo,callback:function(e){t.$set(t.editedItem,"codigo",e)},expression:"editedItem.codigo"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Ruta Imagen"},model:{value:t.editedItem.imgPath,callback:function(e){t.$set(t.editedItem,"imgPath",e)},expression:"editedItem.imgPath"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Cancelar ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Guardar ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("¿Está seguro de que quiere cambiar el estado este articulo?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancelar")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("OK")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.descripcion",fn:function(e){var i=e.item;return[a("div",{staticStyle:{padding:"10px 0px"}},[t._v(" "+t._s(i.descripcion)+" ")])]}},{key:"item.estado",fn:function(e){var i=e.item;return[a("span",{staticClass:"group pa-2"},[i.estado?a("v-icon",{staticClass:"mr-2",attrs:{medium:"",dense:"",color:"#65BB88"}},[t._v(" mdi-database-plus ")]):a("v-icon",{attrs:{medium:"",dense:"",color:"#B86060"}},[t._v(" mdi-database-minus ")])],1)]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-1",attrs:{medium:"",dense:""},on:{click:function(e){return t.editItem(i)}}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{medium:""},on:{click:function(e){return t.deleteItem(i)}}},[i.estado?[t._v(" mdi-toggle-switch ")]:[t._v(" mdi-toggle-switch-off-outline ")]],2)]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:t.list}},[t._v(" Reset ")])]},proxy:!0}],null,!0)})],1)])],1)},s=[],c=a("bc3a"),r=a.n(c),l={data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"ID",value:"id"},{text:"Nombre",align:"start",sortable:!0,value:"nombre"},{text:"Descripcion",value:"descripcion"},{text:"Categoria",value:"categoria.nombre"},{text:"Codigo",value:"codigo"},{text:"Estado",value:"estado"},{text:"Acciones",value:"actions",sortable:!1}],articulos:[],categorias:[],categoria:"",editedIndex:-1,editedItem:{nombre:"",descripcion:"",codigo:"",categoria:{id:0,nombre:""},imgPath:""},defaultItem:{nombre:"",descripcion:"",codigo:"",categoria:{id:0,nombre:""},imgPath:""},endCharge:!0}},computed:{formTitle:function(){return-1===this.editedIndex?"Agregar Categoria":"Editar Categoria"}},watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}},created:function(){this.list(),this.listCategorias()},methods:{list:function(){var t=this;r.a.get("http://localhost:3000/api/articulo/list").then((function(e){t.articulos=e.data,t.endCharge=!1})).catch((function(t){console.log(t)}))},listCategorias:function(){var t=this;r.a.get("http://localhost:3000/api/categoria/list").then((function(e){t.categorias=e.data})).catch((function(t){console.log(t)}))},editItem:function(t){this.editedIndex=t.id,this.categoria=t?t.categoria:"",this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.editedIndex=t.id,this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){var t=this,e="activate";this.editedItem.estado&&(e="deactivate"),r.a.put("http://localhost:3000/api/articulo/"+e,{id:this.editedIndex}).then((function(e){t.list()})).catch((function(t){return t})),this.closeDelete()},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1,t.categoria=""}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1,t.categoria=""}))},save:function(){var t=this;this.editedIndex>-1?(console.log("asda",this.editedItem),r.a.put("http://localhost:3000/api/articulo/update",{id:this.editedIndex,nombre:this.editedItem.nombre,descripcion:this.editedItem.descripcion,codigo:this.editedItem.codigo,imgPath:this.editedItem.imgPath,categoriaId:this.categoria.id}).then((function(e){t.list()})).catch((function(t){return t}))):r.a.post("http://localhost:3000/api/articulo/add",{nombre:this.editedItem.nombre,descripcion:this.editedItem.descripcion,codigo:this.editedItem.codigo,imgPath:this.editedItem.imgPath,categoriaId:this.categoria.id}).then((function(e){t.list()})).catch((function(t){return t})),this.close()}}},d=l,u=(a("2592"),a("2877")),m=a("6544"),h=a.n(m),g=a("8336"),v=a("b0af"),p=a("99d9"),f=a("62ad"),b=a("a523"),x=a("8fea"),I=a("169a"),k=a("ce7e"),w=a("132d"),C=a("f6c4"),_=a("0fd9"),y=a("b974"),D=a("2fa4"),V=a("8654"),T=a("a844"),$=a("71d9"),H=a("2a7f"),P=Object(u["a"])(d,n,s,!1,null,null,null),j=P.exports;h()(P,{VBtn:g["a"],VCard:v["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:f["a"],VContainer:b["a"],VDataTable:x["a"],VDialog:I["a"],VDivider:k["a"],VIcon:w["a"],VMain:C["a"],VRow:_["a"],VSelect:y["a"],VSpacer:D["a"],VTextField:V["a"],VTextarea:T["a"],VToolbar:$["a"],VToolbarTitle:H["a"]});var O={components:{DataTableArticulos:j}},G=O,N=Object(u["a"])(G,i,o,!1,null,null,null);e["default"]=N.exports},a844:function(t,e,a){"use strict";a("a9e3");var i=a("5530"),o=(a("1681"),a("8654")),n=a("58df"),s=Object(n["a"])(o["a"]);e["a"]=s.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(i["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=o["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){o["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=articulo.5a9b71c1.js.map