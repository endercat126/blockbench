if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let d={};const f=e=>i(e,c),b={module:{uri:c},exports:d,require:f};s[c]=Promise.all(a.map((e=>b[e]||f(e)))).then((e=>(r(...e),d)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"blockbench"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"8e7abf3295d467ec4294a943195ad3bf"},{url:"favicon.png",revision:"bb17c5c284076fc17e3399860df472d7"},{url:"js/animations/animation_controllers.js",revision:"7aec1391d3832e598c80d54f2b50d4da"},{url:"js/animations/animation.js",revision:"db912c25cd7024bdc83cc5f7d3ba2560"},{url:"js/animations/keyframe.js",revision:"311cf36875392753cdca816ee485d975"},{url:"js/animations/molang.js",revision:"924ee1c845bad743929a80c191d053ca"},{url:"js/animations/timeline_animators.js",revision:"63287f671c016829ad734da8b81385bd"},{url:"js/animations/timeline.js",revision:"32fd1234910aede679e580a6178f5740"},{url:"js/api.js",revision:"eea9c795f4f3336d8917ff19b20580c7"},{url:"js/boot_loader.js",revision:"d2f224efeee56a4cb48e1465bcd828e5"},{url:"js/copy_paste.js",revision:"90a14b944624876ec31ab16bd51a2685"},{url:"js/desktop.js",revision:"5638b4025bdf608b4bef198cf344ec54"},{url:"js/display_mode.js",revision:"1da19178ef69e411f2e5f8383f914fa8"},{url:"js/edit_sessions.js",revision:"0037c5ee32e8e621dc4abee4d5235190"},{url:"js/file_system.js",revision:"d18895d332135d84616e7e3fae4d5825"},{url:"js/globals.js",revision:"ed66620078a6db8daca7cf8bba2f0e82"},{url:"js/interface/about.js",revision:"dca61ccb7e47975de3b762e983f2d69e"},{url:"js/interface/action_control.js",revision:"bd5ab2b34e267324d5d045b22c29bf6d"},{url:"js/interface/actions.js",revision:"6abb74aff52b4df16735cd2a1175376c"},{url:"js/interface/dialog.js",revision:"9a4dfddaae092d6addea3903d6f74d26"},{url:"js/interface/interface.js",revision:"8844302968992f932b9c5e378ee1f51b"},{url:"js/interface/keyboard.js",revision:"27d11950107c7b9dbe13b2f1b08f64ea"},{url:"js/interface/menu_bar.js",revision:"7e66bdbac9e8820aa4791eb9e24c79ee"},{url:"js/interface/menu.js",revision:"8ea74fd1e7fad91dc8de98ebffc7f8b2"},{url:"js/interface/panels.js",revision:"48e2527255dd65647cf3c26ed54d778b"},{url:"js/interface/settings.js",revision:"3ce449a73c6246cafaf9d09fa191b4e3"},{url:"js/interface/start_screen.js",revision:"52e8025691b8f18439164c773f8751ed"},{url:"js/interface/themes.js",revision:"fd2e25a4b701914b23c55b1fe594ae49"},{url:"js/interface/vue_components.js",revision:"62131508a779364eac5fc288c13a305e"},{url:"js/io/codec.js",revision:"487ed8f786cfac40fd4f2c18ffb040a5"},{url:"js/io/format.js",revision:"4ece9093787941ab33be9c73819060b8"},{url:"js/io/formats/bbmodel.js",revision:"9025e89da6ff0be29daebd96b2354898"},{url:"js/io/formats/bedrock_old.js",revision:"738016d7ea83fe910c5cabcffc411dbb"},{url:"js/io/formats/bedrock.js",revision:"06279d7f48a23c09d11f70c352823600"},{url:"js/io/formats/collada.js",revision:"b5dc6c4cb41bd58a60683c94d631391f"},{url:"js/io/formats/fbx.js",revision:"07326a9c196be5e8a0e1f1bcc8eb9e17"},{url:"js/io/formats/generic.js",revision:"1cd7ee5f2d66a2df8a70075a2d7e1ee6"},{url:"js/io/formats/gltf.js",revision:"4b28d0696ec105256a2c37b7d48e6cd0"},{url:"js/io/formats/image.js",revision:"f3648f64179b701f267747c4146c5405"},{url:"js/io/formats/java_block.js",revision:"ccf3214e195543166e1f55016a750c6b"},{url:"js/io/formats/modded_entity.js",revision:"365552e842b45d5140bba81798af695d"},{url:"js/io/formats/obj.js",revision:"b299c1551f3f2e6962e17c36f060827c"},{url:"js/io/formats/optifine_jem.js",revision:"6244c7ef44ae54d275496e6f9b26464c"},{url:"js/io/formats/optifine_jpm.js",revision:"df5cf0ac966692ae7e1d25557feb6514"},{url:"js/io/formats/skin.js",revision:"d60eb428c62686f2f33e95dc47e10a29"},{url:"js/io/io.js",revision:"a9d887372fb7f5e9b83d3360588e8fbc"},{url:"js/io/project.js",revision:"70e37373b2883392c0edddefd33fe6f9"},{url:"js/io/share.js",revision:"7b5fe0522d3a8f9b6115e481a8610e1f"},{url:"js/misc.js",revision:"f328655c7f95c7edf0d5ae6f06f3f2ee"},{url:"js/modeling/mesh_editing.js",revision:"6c0b3c5576e8e25d3cc35582953b6d0e"},{url:"js/modeling/mirror_modeling.js",revision:"628c02732bf4c57b741fca91e62d8977"},{url:"js/modeling/scale.js",revision:"3769552011aa966c5a8818029523315b"},{url:"js/modeling/transform_gizmo.js",revision:"370b3421393036e767a5d3cdf7856c9c"},{url:"js/modeling/transform.js",revision:"af9414bf203398c7182c78cb3feb1206"},{url:"js/modes.js",revision:"bc18213ad839fbc1e15c54e90ba1d77f"},{url:"js/outliner/cube.js",revision:"c2396b151c5ccdd70713f5b751651968"},{url:"js/outliner/group.js",revision:"810e5cc206f51d754463947a570febc6"},{url:"js/outliner/locator.js",revision:"e3b46751a2d356d6ff9e1298c89548eb"},{url:"js/outliner/mesh.js",revision:"e620600df4cfe52e3068e5f5de42c402"},{url:"js/outliner/null_object.js",revision:"f2171e5e3d373db3df09acc20c384ce5"},{url:"js/outliner/outliner.js",revision:"6220ba87b4614ac1003af33553700894"},{url:"js/outliner/texture_mesh.js",revision:"d5d5a58bd0daafa9ce3cd6b8f749ff8f"},{url:"js/plugin_loader.js",revision:"3becc1b667d8e893fcb402a843ffab76"},{url:"js/predicate_editor.js",revision:"e01de4a686b409fc5e68e3774b7ba812"},{url:"js/preview/canvas.js",revision:"373426ee0c717b9a8fbb8bdea502437f"},{url:"js/preview/OrbitControls.js",revision:"cd21e2ebd957e7e5966683d7197acf62"},{url:"js/preview/preview_scenes.js",revision:"88dc9132fd453a323d45d82415e21410"},{url:"js/preview/preview.js",revision:"e2c9c35d9ada3a55e4465ac850bb02e1"},{url:"js/preview/reference_images.js",revision:"18a5d70a28aa4d03c9c231be6e228af5"},{url:"js/preview/screenshot.js",revision:"2620f91418dcb1d7aca24c123b626c3c"},{url:"js/texturing/color.js",revision:"f0ef8a35cfb1ae2d2af7369c2c514a3c"},{url:"js/texturing/edit_texture.js",revision:"1b1c75dd149c6aef47091b5178002b25"},{url:"js/texturing/painter.js",revision:"dacb8e5121ac0d277e4a74b0867ef3e6"},{url:"js/texturing/texture_generator.js",revision:"59a67df5fd4ddba6d88d95ade2b7978c"},{url:"js/texturing/textures.js",revision:"de821f333aba6f83ca09391fe1fcb521"},{url:"js/texturing/uv.js",revision:"b4928933e117be5c427d2d80d5e0c279"},{url:"js/undo.js",revision:"6b9a81016b498c4553cc92ae4ac621eb"},{url:"js/util/array_util.js",revision:"bdf4abc7ab5325e62765c380aaed8a00"},{url:"js/util/event_system.js",revision:"4a018886dc4dc65a1eb8660d93f0c716"},{url:"js/util/math_util.js",revision:"285acc455e24ca226ac524bbf1c9d165"},{url:"js/util/property.js",revision:"6ac73623979023c5c8a1869273b509aa"},{url:"js/util/util.js",revision:"85d8752a4c92af3daacf7dbae0ea92c1"},{url:"js/validator.js",revision:"c9317a7f0fd2e12ad777d02393cadabd"},{url:"js/web.js",revision:"997d3f01a7d8f59ddb975d8536f66c62"},{url:"js/webpack/bundle.js",revision:"482b50e046cb140f6cd8cd73718ead31"},{url:"lib/canvas2apng.js",revision:"07f88baee4233d60dc221ca578a89782"},{url:"lib/CanvasFrame.js",revision:"cf61db0294be3a142c48f6d4b804f9ec"},{url:"lib/color-picker.min.js",revision:"bffb296db303f8e24af837b0da9e86cb"},{url:"lib/fik.min.js",revision:"44bdb7734b8aaa3aab95c31527f1a99d"},{url:"lib/FileSaver.js",revision:"3daea98fde9083b3dd2dad5b9e5a1fdc"},{url:"lib/gif.js",revision:"bad70e3decddb558276a10b812d73318"},{url:"lib/gif.worker.js",revision:"5bbe2423b4329a2ea8e2cbe4cf3e996c"},{url:"lib/GLTFExporter.js",revision:"5895ca36fa45dd2e483da374032b86c3"},{url:"lib/jquery-ui.min.js",revision:"11520c7cf9ca2fa8f5ca7bd3b54f4806"},{url:"lib/jquery.js",revision:"7c14a783dfeb3d238ccd3edd840d82ee"},{url:"lib/jszip.min.js",revision:"9927b911fee8d35162919d3790c7d492"},{url:"lib/lzutf8.js",revision:"7cf68434ef642c116c313fc6d8f9cdf5"},{url:"lib/marked.min.js",revision:"589a61c766b709a5767f76b05176459a"},{url:"lib/molang-prism-syntax.js",revision:"9b1bb3796277e8b3f43c69bbbbb9303a"},{url:"lib/molang.umd.js",revision:"8a1184c62540cc8950da4f237c03878a"},{url:"lib/peer.min.js",revision:"1583c5e728d7103239fc78af7cec26da"},{url:"lib/prism.js",revision:"907b307491e7f771e7ac9b0656fdac8d"},{url:"lib/purify.min.js",revision:"28aa10809e675ca3319a56c642a640b5"},{url:"lib/spectrum.js",revision:"548c2a92f4fb0bfd66b662858a09c2eb"},{url:"lib/targa.js",revision:"17c5ce65af686baa97294748f929541e"},{url:"lib/three_custom.js",revision:"546b2bfa3c20ab60cfdb8873ba20666b"},{url:"lib/three.min.js",revision:"a57b7b044dafea72f319d2e5f15bcca8"},{url:"lib/vue_sortable.js",revision:"87cfedd91d600fb8d44668a0e83d4101"},{url:"lib/vue.min.js",revision:"7f8906c1a2320dd9108f0d40b74d8989"},{url:"lib/VuePrismEditor.min.js",revision:"0a2ca877758a6c108222b7be46ca6888"},{url:"lib/wintersky.umd.js",revision:"9725fe92872fe88a1dae35284ee35359"},{url:"css/dialogs.css",revision:"9320de34069e9124984181552e7507b4"},{url:"css/fontawesome.css",revision:"7731aad09a83fba53de018c0c71d5e8a"},{url:"css/general.css",revision:"322da8ced4a4ea15fc281c317ddb822a"},{url:"css/jquery-ui.min.css",revision:"2fedc6428e0606214da247b667d19edb"},{url:"css/panels.css",revision:"a16ef1cc65fc615959bd75b5f20370a2"},{url:"css/prism.css",revision:"2979e73333ad7691cea7be8cb6a8446f"},{url:"css/setup.css",revision:"623fa96bef396f2bf3f7ab8b4cd20bb1"},{url:"css/spectrum.css",revision:"958fd4a2ebc59374f46e561381f22a44"},{url:"css/start_screen.css",revision:"57cdc92ab73a1f8f92c6932dc3a046b7"},{url:"css/w3.css",revision:"04db708c100ea3937a3a5bf138cfcbf3"},{url:"css/window.css",revision:"0d0155e465d93b85939393d8f28edd31"},{url:"assets/armor_stand.png",revision:"d936b2d5fe33f45fc3b67ebace503bf6"},{url:"assets/brush_outline_circle.png",revision:"3a5945dc2a6e095515232e0f2fe7797c"},{url:"assets/brush_outline.png",revision:"751713355b9a3bc8d75b613dff571253"},{url:"assets/brush.png",revision:"b6a28bb79f9dea063d7a2ac620a3236a"},{url:"assets/hud.png",revision:"049320fa871e4fbe54978dd6043acd8c"},{url:"assets/inventory_full.png",revision:"430fc3c0627f04302d457eead5e1fa16"},{url:"assets/inventory_nine.png",revision:"28cc307e3f2ee4570532fe6ee01a6131"},{url:"assets/item_frame.png",revision:"08eaa797bfb1ceb3784b6fa04ce77387"},{url:"assets/locator.png",revision:"8448be12d087adfc0aea285af26ecbe8"},{url:"assets/logo_cutout.svg",revision:"1a2b2e5db76846d910af304e87605aee"},{url:"assets/logo_text_white.svg",revision:"4f6a327584c59f915bc0b302de6eab76"},{url:"assets/missing_blend.png",revision:"5d055c1476e74bcdfd987ab62045b8a6"},{url:"assets/missing.png",revision:"7769bccdd08fde7afc1962cdb836d99a"},{url:"assets/north.png",revision:"d6c44f75fe7a6dd16927b9b8d8d0e9c2"},{url:"assets/null_object.png",revision:"298d80b3ba99198a3688e8c558dda065"},{url:"assets/player_skin.png",revision:"bd60891dc6eacb8f038556dfdb1dadcc"},{url:"assets/plugins.png",revision:"5838610c04e3b5f912344f8c46b73fec"},{url:"assets/poses/aiming.svg",revision:"88e040ebed82427401daa4c1ec0b29a9"},{url:"assets/poses/crouching.svg",revision:"4c9304b087532d8dbe853a9baf642946"},{url:"assets/poses/jumping.svg",revision:"b912ecda44f4f6d90dad6b89b23c9238"},{url:"assets/poses/natural.svg",revision:"c5d4ae0d520d2d32c832d43cf0881a83"},{url:"assets/poses/none.svg",revision:"a3d531b9f73e1676b39b162a8a635a53"},{url:"assets/poses/sitting.svg",revision:"a0a43aa643a7f969426ce3d23dcba420"},{url:"assets/poses/walking.svg",revision:"b005089f98c836d3f022d4a778e38cea"},{url:"assets/preview_scenes/studio.png",revision:"116be6e8296015a2653fe5a8c6e23ffe"},{url:"assets/rotate_cursor.png",revision:"092b9000c5901c27d4bee37236f6407c"},{url:"assets/splash_art.png",revision:"c7217e28768f89c102003545e4331b5d"},{url:"assets/splash_art/1.png",revision:"49c1500f5a36c96501ac7b114c45c4c2"},{url:"assets/splash_art/2.png",revision:"942aef095e8d39a91e478a429c91d1c4"},{url:"assets/splash_art/3.png",revision:"b59fb43a33aca6cc485b6d99457c99fe"},{url:"assets/splash_art/4.png",revision:"f40fd0fd9410e1602771add4cecba2b0"},{url:"assets/splash_art/5.png",revision:"b9eb3949c12eafdb7dd85434739626d6"},{url:"assets/uv_preview.png",revision:"9171cd9bbc6a55858b4504a11c069f63"},{url:"assets/vertex.png",revision:"6b314afc9e5a153db6798cf8c0a93918"},{url:"assets/zombie.png",revision:"a5fd9124b9eab1bc7880fea5f1b26e4c"},{url:"font/Assistant-Bold.ttf",revision:"d582391da9a68daf10a2ed2514c33826"},{url:"font/Assistant-ExtraBold.ttf",revision:"f2bbc6bae2ee3ce641adc1bb1a655371"},{url:"font/Assistant-ExtraLight.ttf",revision:"5e4d348ae3eca48143c0274a3124a9c0"},{url:"font/Assistant-Light.ttf",revision:"5415f395c1567a5c19efc1dc2892927a"},{url:"font/Assistant-Regular.ttf",revision:"e2b46dd69f54e57767ceef1d5fc8e688"},{url:"font/Assistant-SemiBold.ttf",revision:"d6759edb35ac7f29a029caa1192c010d"},{url:"font/fa-brands-400.woff2",revision:"a9afdb72826cde196ddf29eb8f9d0f8f"},{url:"font/fa-regular-400.woff2",revision:"f817938f131b0cabee81e59a96f9c2a6"},{url:"font/fa-solid-900.woff2",revision:"297973a488f688271dd223d542ba2697"},{url:"font/icomoon.ttf",revision:"e41af0d7e74154a711fc444d30b79e80"},{url:"font/icomoon.woff",revision:"86f5286db61fca481661deb53c4cfd3a"},{url:"font/MaterialIcons-Regular.ttf",revision:"4e85bc9ebe07e0340c9c4fc2f6c38908"}],{})}));
