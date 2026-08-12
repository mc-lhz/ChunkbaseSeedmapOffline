!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._posthogChunkIds=e._posthogChunkIds||{},e._posthogChunkIds[n]="019fb458-0542-7833-86c4-bacac7103802")}catch(e){}}();import{referenceTypes as En,multiValue as Pn,simd as Rn}from"./BzNVI6oet8GN.js";import{a as re,b as qe,t as ae}from"./Di7WDrbCOMJK.js";import{L as Pe}from"./ViifaoL66WRL.js";import{D as Q,E as S,J as x,B as T,P as A,C as oe,a as An}from"./BtLKJFoOO27o.js";import{C as de,i as to}from"./JtnYOKsFTYmX.js";import{b as xt,j as On,a as Bn,s as Mn,d as oo,c as or,e as Vn,f as rr,g as ro,o as zn,h as nr,l as sr,w as no,i as Nn,k as so,r as Ln,m as io,t as ir,n as ao,p as ar,q as lr,u as Fn,v as Dn,x as jn,y as Un,z as Hn,A as lo,B as Wn,C as cr,D as $n,E as Xn,F as Gn,G as dr,H as ur,I as fr,J as Jn,K as co,L as uo,M as mr,N as fo,O as Zn,P as Qn,Q as Yn,R as Kn,S as qn,T as es,U as ts,V as os,W as rs,X as ns,Y as ss,Z as is,_ as as,$ as hr,a0 as pr,a1 as mo,a2 as gr,a3 as yr,a4 as ls,a5 as cs,a6 as Io,a7 as ds}from"./6Juwf4p7kUix.js";import{g as us,d as fs,s as ms,a as hs,l as ps,j as zt}from"./DwTeyCHNlYhy.js";import{c as Ae}from"./-00YEiB8c-7X.js";import{R as F,r as X}from"./CNSOJBbxx5q0.js";const Co=e=>{let t;const o=new Set,r=(d,c)=>{const y=typeof d=="function"?d(t):d;if(!Object.is(y,t)){const h=t;t=c??(typeof y!="object"||y===null)?y:Object.assign({},t,y),o.forEach(f=>f(t,h))}},n=()=>t,a={setState:r,getState:n,getInitialState:()=>l,subscribe:d=>(o.add(d),()=>o.delete(d))},l=t=e(r,n,a);return a},gs=(e=>e?Co(e):Co),ys=e=>e;function bs(e,t=ys){const o=F.useSyncExternalStore(e.subscribe,F.useCallback(()=>t(e.getState()),[e,t]),F.useCallback(()=>t(e.getInitialState()),[e,t]));return F.useDebugValue(o),o}const Eo=e=>{const t=gs(e),o=r=>bs(t,r);return Object.assign(o,t),o},vs=(e=>e?Eo(e):Eo),Po={ASSETS_PREFIX:void 0,BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SITE:"https://www.chunkbase.com",SSR:!1},Ro=e=>!!e.dispatchFromDevtools&&typeof e.dispatch=="function",Qe=new Map,st=e=>{const t=Qe.get(e);return t?Object.fromEntries(Object.entries(t.stores).map(([o,r])=>[o,r.getState()])):{}},ws=(e,t,o)=>{if(e===void 0)return{type:"untracked",connection:t.connect(o)};const r=Qe.get(o.name);if(r)return{type:"tracked",store:e,...r};const n={connection:t.connect(o),stores:{}};return Qe.set(o.name,n),{type:"tracked",store:e,...n}},_s=(e,t)=>{if(t===void 0)return;const o=Qe.get(e);o&&(delete o.stores[t],Object.keys(o.stores).length===0&&Qe.delete(e))},Ss=e=>{var t,o;if(!e)return;const r=e.split(`
`),n=r.findIndex(i=>i.includes("api.setState"));if(n<0)return;const s=((t=r[n+1])==null?void 0:t.trim())||"";return(o=/.+ (.+) .+/.exec(s))==null?void 0:o[1]},xs=(e,t={})=>(o,r,n)=>{const{enabled:s,anonymousActionType:i,store:a,...l}=t;let d;try{d=(s??(Po?"production":void 0)!=="production")&&window.__REDUX_DEVTOOLS_EXTENSION__}catch{}if(!d)return e(o,r,n);const{connection:c,...y}=ws(a,d,l);let h=!0;n.setState=((m,u,p)=>{const g=o(m,u);if(!h)return g;const v=p===void 0?{type:i||Ss(new Error().stack)||"anonymous"}:typeof p=="string"?{type:p}:p;return a===void 0?(c?.send(v,r()),g):(c?.send({...v,type:`${a}/${v.type}`},{...st(l.name),[a]:n.getState()}),g)}),n.devtools={cleanup:()=>{c&&typeof c.unsubscribe=="function"&&c.unsubscribe(),_s(l.name,a)}};const f=(...m)=>{const u=h;h=!1,o(...m),h=u},b=e(n.setState,r,n);if(y.type==="untracked"?c?.init(b):(y.stores[y.store]=n,c?.init(Object.fromEntries(Object.entries(y.stores).map(([m,u])=>[m,m===y.store?b:u.getState()])))),Ro(n)){let m=!1;const u=n.dispatch;n.dispatch=(...p)=>{(Po?"production":void 0)!=="production"&&p[0].type==="__setState"&&!m&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),m=!0),u(...p)}}return c.subscribe(m=>{var u;switch(m.type){case"ACTION":if(typeof m.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return Rt(m.payload,p=>{if(p.type==="__setState"){if(a===void 0){f(p.state);return}Object.keys(p.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const g=p.state[a];if(g==null)return;JSON.stringify(n.getState())!==JSON.stringify(g)&&f(g);return}Ro(n)&&n.dispatch(p)});case"DISPATCH":switch(m.payload.type){case"RESET":return f(b),a===void 0?c?.init(n.getState()):c?.init(st(l.name));case"COMMIT":if(a===void 0){c?.init(n.getState());return}return c?.init(st(l.name));case"ROLLBACK":return Rt(m.state,p=>{if(a===void 0){f(p),c?.init(n.getState());return}f(p[a]),c?.init(st(l.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return Rt(m.state,p=>{if(a===void 0){f(p);return}JSON.stringify(n.getState())!==JSON.stringify(p[a])&&f(p[a])});case"IMPORT_STATE":{const{nextLiftedState:p}=m.payload,g=(u=p.computedStates.slice(-1)[0])==null?void 0:u.state;if(!g)return;f(a===void 0?g:g[a]),c?.send(null,p);return}case"PAUSE_RECORDING":return h=!h}return}}),b},Ts=xs,Rt=(e,t)=>{let o;try{o=JSON.parse(e)}catch(r){console.error("[zustand devtools middleware] Could not parse the received json",r)}o!==void 0&&t(o)},ks=e=>(t,o,r)=>{const n=r.subscribe;return r.subscribe=((i,a,l)=>{let d=i;if(a){const c=l?.equalityFn||Object.is;let y=i(r.getState());d=h=>{const f=i(h);if(!c(y,f)){const b=y;a(y=f,b)}},l?.fireImmediately&&a(y,y)}return n(d)}),e(t,o,r)},Is=ks;function br(e,t){let o;try{o=e()}catch{return}return{getItem:n=>{var s;const i=l=>l===null?null:JSON.parse(l,void 0),a=(s=o.getItem(n))!=null?s:null;return a instanceof Promise?a.then(i):i(a)},setItem:(n,s)=>o.setItem(n,JSON.stringify(s,void 0)),removeItem:n=>o.removeItem(n)}}const Nt=e=>t=>{try{const o=e(t);return o instanceof Promise?o:{then(r){return Nt(r)(o)},catch(r){return this}}}catch(o){return{then(r){return this},catch(r){return Nt(r)(o)}}}},Cs=(e,t)=>(o,r,n)=>{let s={storage:br(()=>window.localStorage),partialize:u=>u,version:0,merge:(u,p)=>({...p,...u}),...t},i=!1,a=0;const l=new Set,d=new Set;let c=s.storage;if(!c)return e((...u)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),o(...u)},r,n);const y=()=>{const u=s.partialize({...r()});return c.setItem(s.name,{state:u,version:s.version})},h=n.setState;n.setState=(u,p)=>(h(u,p),y());const f=e((...u)=>(o(...u),y()),r,n);n.getInitialState=()=>f;let b;const m=()=>{var u,p;if(!c)return;const g=++a;i=!1,l.forEach(_=>{var E;return _((E=r())!=null?E:f)});const v=((p=s.onRehydrateStorage)==null?void 0:p.call(s,(u=r())!=null?u:f))||void 0;return Nt(c.getItem.bind(c))(s.name).then(_=>{if(_)if(typeof _.version=="number"&&_.version!==s.version){if(s.migrate){const E=s.migrate(_.state,_.version);return E instanceof Promise?E.then(k=>[!0,k]):[!0,E]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,_.state];return[!1,void 0]}).then(_=>{var E;if(g!==a)return;const[k,R]=_;if(b=s.merge(R,(E=r())!=null?E:f),o(b,!0),k)return y()}).then(()=>{g===a&&(v?.(r(),void 0),b=r(),i=!0,d.forEach(_=>_(b)))}).catch(_=>{g===a&&v?.(void 0,_)})};return n.persist={setOptions:u=>{s={...s,...u},u.storage&&(c=u.storage)},clearStorage:()=>{c?.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>m(),hasHydrated:()=>i,onHydrate:u=>(l.add(u),()=>{l.delete(u)}),onFinishHydration:u=>(d.add(u),()=>{d.delete(u)})},s.skipHydration||m(),b||f},Es=Cs,Ao=[{label:"Object.hasOwn()",test:()=>!!Object.hasOwn},{label:"Web Worker",test:()=>typeof window<"u"&&"Worker"in window},{label:"WebGL",test:()=>{if(typeof window>"u")return!1;const t=document.createElement("canvas").getContext("webgl");return t?.getExtension("WEBGL_lose_context")?.loseContext(),t instanceof WebGLRenderingContext}},{label:"WebGL Sanity Check",test:()=>{if(typeof window>"u")return!1;const t=document.createElement("canvas").getContext("webgl");if(!t)return!1;const o=t.getParameter(t.MAX_TEXTURE_SIZE),r=typeof o=="number"&&o>0;return t.getExtension("WEBGL_lose_context")?.loseContext(),r}},{label:"Web Assembly",test:()=>typeof window<"u"&&"WebAssembly"in window},{label:"Web Assembly Reference Types",test:()=>En()},{label:"Web Assembly Multivalue",test:()=>Pn()},{label:"CSS layers",test:()=>typeof window<"u"&&window.CSSLayerBlockRule}],Ps=(async()=>(await Promise.all(Ao.map(async t=>{try{return await t.test()}catch{return!1}}))).map((t,o)=>t?null:Ao[o].label).filter(Boolean))();function Rs(){return Ps}const G={src:"/ChunkbaseSeedmapOffline/_astro/seed-map-pois.sprite.CmXjzmUu.png",width:214,height:209},id=typeof window<"u"&&window.devicePixelRatio||1,fe=1,ad=.125,ld=128,Ne=1.25,Le=2/3,cd=30,dd=70,ud=85;async function As(){if(typeof window>"u")return{default:G.src,selected:G.src};const e=await new Promise((t,o)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>t(r),r.onerror=n=>o(n),r.src=G.src});return{default:G.src,selected:At(e,Ne),muted:At(e,Le),mutedSelected:At(e,Ne*Le)}}function At(e,t){const o=document.createElement("canvas");o.width=Math.ceil(e.width*fe*t),o.height=Math.ceil(e.height*fe*t);const r=o.getContext("2d");if(!r)throw new Error("Can't find the image");return r.imageSmoothingEnabled=fe*t<=1,r.drawImage(e,0,0,o.width,o.height),o.toDataURL("image/png")}const it={default:[Math.ceil(G.width*fe)/G.width,Math.ceil(G.height*fe)/G.height],selected:[Math.ceil(G.width*fe*Ne)/G.width,Math.ceil(G.height*fe*Ne)/G.height],muted:[Math.ceil(G.width*fe*Le)/G.width,Math.ceil(G.height*fe*Le)/G.height],mutedSelected:[Math.ceil(G.width*fe*Ne*Le)/G.width,Math.ceil(G.height*fe*Ne*Le)/G.height]};function fd(e,t,o){return o?t?{src:e?.mutedSelected,scaling:it.mutedSelected}:{src:e?.muted,scaling:it.muted}:t?{src:e?.selected,scaling:it.selected}:{src:e?.default,scaling:it.default}}function vr(){const e=Math.floor(Math.random()*4294967296),t=Math.floor(Math.random()*4294967296);return Pe.fromBits(t,e).toString()}function Lt(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||typeof t!="object"||e===null||t===null)return!1;if(Array.isArray(e)||Array.isArray(t)){if(!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(!Lt(e[n],t[n]))return!1;return!0}const o=Object.keys(e),r=Object.keys(t);if(o.length!==r.length)return!1;for(const n of o)if(!Object.prototype.hasOwnProperty.call(t,n)||!Lt(e[n],t[n]))return!1;return!0}function ho(e,t){return o=>{const r=t(),n=typeof o=="function"?o(r):o;let s=!1;for(const i in n)if(!Lt(r[i],n[i])){s=!0;break}s&&e(i=>Object.assign({},i,n))}}function Os(e){return Array.from(e).reduce((t,o)=>Math.imul(31,t)+o.charCodeAt(0)|0,0)}const Oo=e=>Symbol.iterator in e,Bo=e=>"entries"in e,Mo=(e,t)=>{const o=e instanceof Map?e:new Map(e.entries()),r=t instanceof Map?t:new Map(t.entries());if(o.size!==r.size)return!1;for(const[n,s]of o)if(!r.has(n)||!Object.is(s,r.get(n)))return!1;return!0},Bs=(e,t)=>{const o=e[Symbol.iterator](),r=t[Symbol.iterator]();let n=o.next(),s=r.next();for(;!n.done&&!s.done;){if(!Object.is(n.value,s.value))return!1;n=o.next(),s=r.next()}return!!n.done&&!!s.done};function _e(e,t){return Object.is(e,t)?!0:typeof e!="object"||e===null||typeof t!="object"||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:Oo(e)&&Oo(t)?Bo(e)&&Bo(t)?Mo(e,t):Bs(e,t):Mo({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function $(e,t){let o,r,n;return s=>{if(o!==void 0&&o===s)return n;o=s;const i=e(s);return r!==void 0&&_e(r,i)||(r=i,n=t(n,...i)),n}}function D(e){return{load:t=>e(t)?{isValid:!0,value:t}:{isValid:!1,value:null}}}const Ms=(e,t)=>{const o=ho(e,t);return{seed:"",fallbackSeed:"0",version:_r(Object.keys(de)),versionUiGroup:null,dimension:Q.Overworld,setSeed(r){e({seed:r})},setSeedAndEnsureEdition(r,n){if(de[t().version].cb3World.edition===n){e({seed:r});return}const s=Object.entries(de).find(([,i])=>i.cb3World.edition===n&&!i.cb3World.config.largeBiomes&&!i.isExperimental);s==null?e({seed:r}):e({seed:r,version:s[0],versionUiGroup:null})},applyRandomSeed(){let r=vr();de[t().version].use32BitSeed&&(r=`${Pe.fromString(r).toInt()}`),e({seed:r})},setVersion(r,n){e({version:r,versionUiGroup:n})},setDimension(r){const n=t();if(n.dimension===r)return;const s=gt(n.dimension,r),i={x:n.center.x*s,z:n.center.z*s},a=n.pin?{x:n.pin.x*s,z:n.pin.z*s}:null;o({dimension:r,center:i,pin:a})},goToDimensionAndCenter(r,n,s){const i=gt(t().dimension,r),a=t();o({dimension:r,center:{x:n,z:s},pin:a.pin?{x:a.pin.x*i,z:a.pin.z*i}:null})}}},Vs=()=>({seed:D(e=>typeof e=="string"),dimension:D(e=>typeof e=="string"&&Object.values(Q).includes(e)),version:D(e=>typeof e=="string"&&to(e))}),zs=()=>({seed:{includeInUrl:()=>!0,stateToSearchParams:e=>e.seed?{seed:e.seed}:e.fallbackSeed?{seed:e.fallbackSeed}:{},searchParamsToState:e=>e.seed!=null?{seed:e.seed}:{}},version:{includeInUrl:()=>!0,stateToSearchParams:e=>e.version?{platform:e.version}:{},searchParamsToState:e=>e.platform!=null&&to(e.platform)?{version:e.platform}:{}},dimension:{includeInUrl:e=>e.allowedDimensions==null||e.allowedDimensions.length>=2,stateToSearchParams:e=>e.dimension!=null?{dimension:e.dimension}:{},searchParamsToState:e=>e.dimension?Object.values(Q).includes(e.dimension)?{dimension:e.dimension}:{dimension:Q.Overworld}:{}}}),wr=$(e=>[e.seed,e.fallbackSeed,e.version],(e,t,o,r)=>{const n=f=>de[r].use32BitSeed?Pe.fromInt(f.toInt()):f;let s=!1,i=!1,a=t.trim();if(a!==t&&(s=!0),a===""){const f=n(Pe.fromString(o));return{numerical:f.toString(),long:f,isTrimmed:s,isHashed:i,hasLeadingZeros:!1}}let l=!1,d=!1,c=Pe.ONE;const y=/^\+\d/.test(a)?a.slice(1):a;try{if(c=Pe.fromString(y),c.toString()===y)l=!0;else{const f=y.replace(/^(-?)0+/,"$1"),b=f===""||f==="-";(b?"0":f)===c.toString()&&(l=!0,d=b?y.replace(/^-/,"").length>1:!0)}}catch{}l||(a=`${Os(a)}`,c=Pe.fromString(a),i=!0);const h=n(c);return{numerical:h.toString(),long:h,isTrimmed:s,isHashed:i,hasLeadingZeros:d}}),ue=$(e=>[wr(e).numerical,e.version],(e,t,o)=>({seed:t,...de[o].cb3World}));function Ns(e){return e.edition===S.Java?e.javaVersion>=x.V1_18:e.bedrockVersion>=T.V1_18}function Ls(e,t){return t===Q.Overworld&&Ns(e)}function _r(e){return e.find(t=>{const o=de[t];return o.cb3World.edition===S.Java&&!o.cb3World.config.largeBiomes&&!o.isExperimental})??e[0]}function gt(e,t){const o={[Q.Overworld]:1,[Q.Nether]:8,[Q.End]:1};return o[e]/o[t]}const Fs={[A.AmethystGeode]:{[S.Java]:[x.V1_17,x.V26_3],[S.Bedrock]:[T.V1_17,T.V26_50]},[A.AncientCity]:{[S.Java]:[x.V1_19,x.V26_3],[S.Bedrock]:[T.V1_19,T.V26_50]},[A.BastionRemnant]:{[S.Java]:[x.V1_16,x.V26_3],[S.Bedrock]:[T.V1_16,T.V26_50]},[A.BuriedTreasure]:{[S.Java]:[x.V1_13,x.V26_3],[S.Bedrock]:[T.V1_14,T.V26_50]},[A.Cave]:{[S.Java]:[x.V1_18,x.V26_3],[S.Bedrock]:[T.V1_18,T.V26_50]},[A.DesertWell]:{[S.Java]:[x.V1_18,x.V26_3],[S.Bedrock]:[T.V1_18,T.V26_50]},[A.Dungeon]:{[S.Java]:[x.V1_13,x.V26_3],[S.Bedrock]:[T.V1_16,T.V26_50]},[A.EndCity]:{[S.Java]:[x.V1_13,x.V26_3],[S.Bedrock]:[T.V1_14,T.V26_50]},[A.EndGateway]:{[S.Java]:[x.V1_16,x.V26_3],[S.Bedrock]:[T.V1_16,T.V26_50]},[A.Fossil]:{[S.Java]:[x.V1_16,x.V26_3],[S.Bedrock]:[T.V1_16,T.V26_50]},[A.FossilNether]:{[S.Java]:[x.V1_16,x.V26_3],[S.Bedrock]:[T.V1_16,T.V26_50]},[A.ItemOverworld]:{[S.Java]:[x.V1_18,x.V26_3],[S.Bedrock]:[T.V1_18,T.V26_50]},[A.LavaPool]:{[S.Java]:[x.V1_18,x.V26_3],[S.Bedrock]:[T.V1_18,T.V26_50]},[A.Mineshaft]:{[S.Java]:[x.V1_7,x.V26_3],[S.Bedrock]:[T.V1_14,T.V26_50]},[A.NetherFortress]:{[S.Java]:[x.V1_7,x.V26_3],[S.Bedrock]:[T.V1_14,T.V26_50]},[A.OceanMonument]:{[S.Java]:[x.V1_8,x.V26_3],[S.Bedrock]:[T.V1_14,T.V26_50]},[A.OceanRuin]:{[S.Java]:[x.V1_16,x.V26_3],[S.Bedrock]:[T.V1_16,T.V26_50]},[A.OreVein]:{[S.Java]:[x.V1_18,x.V26_3],[S.Bedrock]:[T.V1_18,T.V26_50]},[A.PillagerOutpost]:{[S.Java]:[x.V1_14,x.V26_3],[S.Bedrock]:[T.V1_14,T.V26_50]},[A.Ravine]:{[S.Java]:[x.V1_16,x.V26_3],[S.Bedrock]:[T.V1_16,T.V26_50]},[A.RuinedPortalOverworld]:{[S.Java]:[x.V1_16,x.V26_3],[S.Bedrock]:[T.V1_16,T.V26_50]},[A.RuinedPortalNether]:{[S.Java]:[x.V1_16,x.V26_3],[S.Bedrock]:[T.V1_16,T.V26_50]},[A.DesertTemple]:{[S.Java]:[x.V1_7,x.V26_3],[S.Bedrock]:[T.V1_14,T.V26_50]},[A.JungleTemple]:{[S.Java]:[x.V1_7,x.V26_3],[S.Bedrock]:[T.V1_14,T.V26_50]},[A.WitchHut]:{[S.Java]:[x.V1_7,x.V26_3],[S.Bedrock]:[T.V1_14,T.V26_50]},[A.Igloo]:{[S.Java]:[x.V1_9,x.V26_3],[S.Bedrock]:[T.V1_14,T.V26_50]},[A.Shipwreck]:{[S.Java]:[x.V1_13,x.V26_3],[S.Bedrock]:[T.V1_14,T.V26_50]},[A.SlimeChunk]:{[S.Java]:[x.V1_7,x.V26_3],[S.Bedrock]:[T.V1_14,T.V26_50]},[A.Spawn]:{[S.Java]:[x.V1_7,x.V26_3],[S.Bedrock]:[T.V1_14,T.V26_50]},[A.Stronghold]:{[S.Java]:[x.V1_7,x.V26_3],[S.Bedrock]:[T.V1_14,T.V26_50]},[A.TrailRuin]:{[S.Java]:[x.V1_20,x.V26_3],[S.Bedrock]:[T.V1_20,T.V26_50]},[A.TrialChamber]:{[S.Java]:[x.V1_21,x.V26_3],[S.Bedrock]:[T.V1_21,T.V26_50]},[A.Village]:{[S.Java]:[x.V1_7,x.V26_3],[S.Bedrock]:[T.V1_14,T.V26_50]},[A.WoodlandMansion]:{[S.Java]:[x.V1_11,x.V26_3],[S.Bedrock]:[T.V1_14,T.V26_50]},[A.AbandonedCamp]:{[S.Java]:[x.V26_3,x.V26_3],[S.Bedrock]:[T.V26_50,T.V26_50]}};function po(e,t){const o=Fs[e][t.edition];if(!o)return!1;const r=t.edition===S.Java?t.javaVersion:t.bedrockVersion;return r>=o[0]&&r<=o[1]}const Ds=(e,t)=>{const o=ho(e,t);return{pois:{[A.Spawn]:!0,[A.Village]:!0,[A.BuriedTreasure]:!0,[A.BastionRemnant]:!0,[A.EndCity]:!0,[A.TrialChamber]:!0,[A.NetherFortress]:!0,[A.RuinedPortalOverworld]:!0,[A.AncientCity]:!0,[A.SlimeChunk]:!0,[A.WoodlandMansion]:!0},poiLayerSprites:null,poiRenderMode:"icon",poiClusterRadius:3,showPoi(r){t().pois[r]||e({pois:{...t().pois,[r]:!0}})},hidePoi(r){const n=t().pois;(!Object.hasOwn(n,r)||n[r])&&e({pois:{...n,[r]:!1}})},showPois(r){return o({pois:{...t().pois,...Object.fromEntries(r.map(n=>[n,!0]))}})},showPoisAndBiomes(r){return o({pois:{...t().pois,...Object.fromEntries(r.map(n=>[n,!0]))},showBiomes:!0,showCustomPins:!0})},hidePoisAndBiomes(r){return o({pois:{...t().pois,...Object.fromEntries(r.map(n=>[n,!1]))},showBiomes:!1,showCustomPins:!1})},setPoiRenderMode(r){e({poiRenderMode:r})},setPoiClusterRadius(r){e({poiClusterRadius:r})}}},js=()=>({pois:{load:e=>{if(e==null||typeof e!="object")return{isValid:!1,value:null};const t=Object.values(A);return{isValid:!0,value:Object.fromEntries(Object.entries(e).filter(([r,n])=>t.includes(r)&&typeof n=="boolean"))}}},poiRenderMode:D(e=>e==="dot"||e==="icon"),poiClusterRadius:D(e=>typeof e=="number"||e==="off")}),Us=()=>({pois:{includeInUrl:(e,t)=>t&&e.forcePois==null,stateToSearchParams:e=>e.pois!=null?{pois:Object.entries(e.pois).filter(([,t])=>t).map(([t])=>oe[t].shortId).filter(Boolean).join("-")}:{},searchParamsToState:e=>e.pois!=null?{pois:Object.fromEntries(e.pois.split("-").map(t=>[An[t],!0]).filter(([t])=>t))}:{}},poiIcons:{includeInUrl:(e,t)=>t&&Sr(e),stateToSearchParams:e=>({poiMode:`${e.poiRenderMode}`}),searchParamsToState:e=>e.poiMode==="icon"||e.poiMode==="dot"?{poiRenderMode:e.poiMode}:{}}}),Ye=$(e=>[e.pois,e.dimension,e.resolution,e.version,ge(e)],(e,t,o,r,n,s)=>{const i=de[n].cb3World,l=Object.values(A).filter(f=>po(f,i)).filter(f=>oe[f].dimension===o),d=l.filter(f=>t[f]),c=s.constraintMaxResolutionToPois?d:Hs(d,r),y={all:l,enabled:d,visible:c};if(!e)return y;const h={all:_e(e.all,y.all)?e.all:y.all,enabled:_e(e.enabled,y.enabled)?e.enabled:y.enabled,visible:_e(e.visible,y.visible)?e.visible:y.visible};return _e(e,h)?e:h});function Sr(e){const t=e.forcePois;return t==null||t.some(o=>!oe[o].preferFill)}function Hs(e,t){return e.filter(o=>oe[o].maxTileSize>=256||t<=oe[o].maxTileSize/4)}function yt(e){return Math.min(...e.filter(t=>oe[t].maxTileSize<256).map(t=>oe[t].maxTileSize/4))}function Ws(e){const t=e.map(o=>oe[o].dimension);return[t.includes(Q.Overworld)?Q.Overworld:null,t.includes(Q.Nether)?Q.Nether:null,t.includes(Q.End)?Q.End:null].filter(Boolean)}const $s=()=>({config:{type:"full"},theme:"light"}),Xs=()=>({theme:{includeInUrl:()=>!1,stateToSearchParams:()=>({}),searchParamsToState:e=>e.theme!=null?{theme:e.theme==="dark"?"dark":"light"}:{}}});function go(e){switch(e.type){case"full":return{forceDimBiomes:!1};case"biomes":return{forceShowBiomes:!0,forceDimBiomes:!1,forceShowCustomPins:!0,forcePois:[],disableSearch:!0};case"pois":return{forceShowCustomPins:!0,forcePois:e.pois,allowedVersions:Gs(e),allowedDimensions:Ws(e.pois),forceRenderTerrain:!1,forceHighlightBiomes:!1,forceHighlightedBiomes:[],forceBiomeHeight:"depth0",constraintMaxResolutionToPois:!0,disableSearch:!0};case"embed":return{forceShowCustomPins:!1,forceDimBiomes:!1,embeddedUiMode:!0,maxPois:1,maxCanvasSize:[1024,768],disablePersistence:!0,constraintMaxResolutionToPois:!0,minimalPopovers:!0,disableSearch:!0}}}const ge=$(e=>[e.config],(e,t)=>go(t));function Ft(e,t){const o={};if(e.pois!=null){if(t.forcePois!=null){const n=Object.fromEntries(t.forcePois.map(s=>[s,!0]));_e(n,e.pois)||(o.pois=n)}const r=t.maxPois;if(r!=null&&Object.values(e.pois).filter(n=>n).length>r){let n=0;o.pois=Object.fromEntries(Object.entries(e.pois).map(([s,i])=>!i||n>=r?[s,!1]:(n+=1,[s,!0])))}}return e.biomeHeight!=null&&t.forceBiomeHeight!=null&&e.biomeHeight!==t.forceBiomeHeight&&(o.biomeHeight=t.forceBiomeHeight),e.highlightBiomes!=null&&t.forceHighlightBiomes!=null&&e.highlightBiomes!==t.forceHighlightBiomes&&(o.highlightBiomes=t.forceHighlightBiomes),e.highlightedBiomes!=null&&t.forceHighlightedBiomes!=null&&!_e(e.highlightedBiomes,t.forceHighlightedBiomes)&&(o.highlightedBiomes=t.forceHighlightedBiomes),t.forceRenderTerrain!=null&&e.renderTerrain!==t.forceRenderTerrain&&(o.renderTerrain=t.forceRenderTerrain),e.showBiomes!=null&&t.forceShowBiomes!=null&&e.showBiomes!==t.forceShowBiomes&&(o.showBiomes=t.forceShowBiomes),e.dimBiomes!=null&&t.forceDimBiomes!=null&&e.dimBiomes!==t.forceDimBiomes&&(o.dimBiomes=t.forceDimBiomes),e.showCustomPins!=null&&t.forceShowCustomPins!=null&&e.showCustomPins!==t.forceShowCustomPins&&(o.showCustomPins=t.forceShowCustomPins),e.version!=null&&t.allowedVersions!=null&&!t.allowedVersions.includes(e.version)&&(o.version=_r(t.allowedVersions)),e.dimension!=null&&t.allowedDimensions!=null&&!t.allowedDimensions.includes(e.dimension)&&(o.dimension=t.allowedDimensions[0]),{...e,...o}}const Vo=Object.keys(de);function Gs(e){return e?.type!=="pois"?Vo:Vo.filter(t=>e.pois.every(o=>po(o,de[t].cb3World)))}function xr(e){return e.anchor.kind==="poi"&&!oe[e.anchor.poi.type].preferFill}function Js(e,t){return xr(e)?{type:"poi",id:t.id}:{type:"searchResult",id:t.id}}function Zs(e,t){return e==null||e.type==="searchOrigin"||e.type==="searchResult"||e.type==="poi"&&xr(t.searchQuery)&&t.results.some(o=>o.id===e.id)?null:e}function Dt(e,t){const o=e.searchScanState;if(!o||t?.type!=="poi"&&t?.type!=="searchResult")return null;const r=o.results.findIndex(n=>n.id===t.id);return r<0||r===o.selectedResult?null:{searchScanState:{...o,selectedResult:r}}}const Qs=3,pe=99,zo=250,Xe={INITIAL:{TRAILING:2e3,MAX:5e3},NEXT:{TRAILING:2e3,MAX:15e3},EXTEND:{MAX:3e4}},md=$(e=>[e.searchScanState?.selectedResult],(e,t)=>t!=null&&t>0),hd=$(e=>[e.searchScanState?.selectedResult,e.searchScanState?.results,e.searchScanState?.state],(e,t,o,r)=>o==null?"unavailable":(t??-1)+1<o.length?"immediate":r==="scanning"?"unavailable":o.length<pe?"scan":"unavailable"),pd=$(e=>[e.searchScanState?.results],(e,t)=>t==null?!1:t.length>=pe),gd=$(e=>[e.searchScanState?.results],(e,t)=>t==null?null:new Set(t.flatMap(o=>o.anchorPois))),yd=$(e=>[e.searchScanState?.selectedResult!=null?e.searchScanState.results[e.searchScanState.selectedResult]:null],(e,t)=>t==null?null:new Set([...t.anchorPois,...t.regionPois])),Ys=$(e=>[e.searchScanState?.searchQuery,e.searchScanState?.results,e.dimension],(e,t,o,r)=>{const n=t?.anchor;if(t==null||o==null||r!==t.dimension||n?.kind!=="poi"||oe[n.poi.type].preferFill)return null;const s=n.poi.type;return o.map(i=>({poi:s,chunk:i.chunk,poiId:i.id,poiData:i.data?.type==="poi"?i.data.poiData:void 0}))}),Ks=new Set,Tr=$(e=>[Ys(e)],(e,t)=>!t||t.length<1?Ks:new Set(t.map(o=>o.poiId))),bd=$(e=>[e.selectedFeature,e.searchScanState?.origin],(e,t,o)=>t?.type==="searchOrigin"?o:void 0),vd=$(e=>[e.selectedFeature,e.searchScanState?.results,e.searchScanState?.searchQuery],(e,t,o,r)=>{if(t?.type!=="searchResult"||o==null||r==null)return;const n=o.findIndex(s=>s.id===t.id);if(!(n<0))return{result:o[n],index:n,query:r}}),qs=$(e=>[Ye(e).visible,Tr(e)],(e,t,o)=>(r,n)=>o.has(n)?"searchAnchor":t.includes(r)?"default":"hidden"),wd=$(e=>[Ye(e).visible,Tr(e)],(e,t,o)=>t.length<1&&o.size<1),ht={centerX:0,centerZ:0,size:59999968},ei=(e,t)=>{const o=ho(e,t);return{center:{x:0,z:0},resolution:4,rotation:0,isTheaterModeEnabled:!1,isHoveringZoomButtons:!1,pin:null,showGrid:!1,worldBorder:ht,selectedFeature:null,momentumPanning:!0,enableRotation:!0,setCenter(r){o({center:r})},setResolution(r){e({resolution:r})},setRotation(r){e({rotation:r%(2*Math.PI)})},goto(r){o({center:r,pin:r,selectedFeature:{type:"pin"}})},setTheaterModeEnabled(r){e({isTheaterModeEnabled:r})},setIsHoveringZoomButtons(r){e({isHoveringZoomButtons:r})},setShowGrid(r){e({showGrid:r})},setMomentumPanning(r){e({momentumPanning:r})},setEnableRotation(r){e({enableRotation:r})},setWorldBorder(r){e({worldBorder:r})},setPin(r){o({pin:r,selectedFeature:r!=null?{type:"pin"}:t().selectedFeature?.type==="pin"?null:t().selectedFeature})},setPinSelected(r){!r&&t().selectedFeature?.type==="pin"?e({selectedFeature:null}):r&&t().selectedFeature?.type!=="pin"&&e({selectedFeature:{type:"pin"}})},setSelectedPoi(r){if(r==null&&t().selectedFeature?.type==="poi")e({selectedFeature:null});else if(r!=null){const n={type:"poi",id:r};e({selectedFeature:n,...Dt(t(),n)})}},setSelectedCustomPin(r){r==null&&t().selectedFeature?.type==="customPin"?e({selectedFeature:null}):r!=null&&e({selectedFeature:{type:"customPin",id:r}})},setSearchOriginSelected(r){!r&&t().selectedFeature?.type==="searchOrigin"?e({selectedFeature:null}):r&&t().selectedFeature?.type!=="searchOrigin"&&e({selectedFeature:{type:"searchOrigin"}})},setSelectedSearchResult(r){if(r==null&&t().selectedFeature?.type==="searchResult")e({selectedFeature:null});else if(r!=null){const n={type:"searchResult",id:r};e({selectedFeature:n,...Dt(t(),n)})}}}},ti=()=>({showGrid:D(e=>typeof e=="boolean"),momentumPanning:D(e=>typeof e=="boolean"),enableRotation:D(e=>typeof e=="boolean"),worldBorder:D(e=>e!=null&&typeof e=="object"&&"centerX"in e&&"centerZ"in e&&"size"in e&&typeof e.centerX=="number"&&typeof e.centerZ=="number"&&typeof e.size=="number"),pin:D(No),resolution:D(e=>typeof e=="number"),rotation:D(e=>typeof e=="number"),center:D(No),selectedFeature:{load:e=>ri(e)?{isValid:!0,value:e}:{isValid:!1,value:null},save:si}}),Ce="null",oi=()=>({center:{includeInUrl:()=>!0,stateToSearchParams:e=>e.center!=null?{x:`${Math.floor(e.center.x)}`,z:`${Math.floor(e.center.z)}`}:{},searchParamsToState:e=>e.x!=null&&e.z!=null?{center:{x:at(e.x,0),z:at(e.z,0)}}:{}},resolution:{includeInUrl:()=>!0,stateToSearchParams:e=>({zoom:e.resolution!=null?`${Math.round((1-Math.log(e.resolution)/Math.log(16))*1e3)/1e3}`:null}),searchParamsToState:e=>e.zoom!=null?{resolution:16**(1-Lo(e.zoom,0))}:{}},rotation:{includeInUrl:(e,t)=>t,stateToSearchParams:e=>({rotation:e.rotation!=null?`${Math.round(e.rotation*1e3)/1e3}`:null}),searchParamsToState:e=>e.rotation!=null?{rotation:Lo(e.rotation,0)}:{}},gridLines:{includeInUrl:(e,t)=>t,stateToSearchParams:e=>({gridLines:`${e.showGrid}`}),searchParamsToState:e=>e.gridLines!=null?{showGrid:e.gridLines!=="false"}:{}},pin:{includeInUrl:(e,t)=>t,stateToSearchParams:e=>({pinX:e.pin?.x!=null?`${Math.round(e.pin.x)}`:Ce,pinZ:e.pin?.z!=null?`${Math.round(e.pin.z)}`:Ce}),searchParamsToState:e=>e.pinX==null||e.pinZ==null?{}:e.pinX===Ce||e.pinZ===Ce?{pin:null}:{pin:{x:at(e.pinX,0),z:at(e.pinZ,0)}}},selectedFeature:{includeInUrl:(e,t)=>t,stateToSearchParams:e=>{let t;if(e.selectedFeature==null)t=Ce;else if(e.selectedFeature.type==="pin")t="pin";else if(e.selectedFeature.type==="poi")t=e.selectedFeature.id;else if(e.selectedFeature.type==="customPin")t="pin-"+e.selectedFeature.id;else if(e.selectedFeature.type==="searchOrigin"||e.selectedFeature.type==="searchResult")t=Ce;else throw new Error("unexpected selected feature type");return{selectedPoi:t}},searchParamsToState:e=>e.selectedPoi==null?{}:e.selectedPoi===Ce?{selectedFeature:null}:e.selectedPoi==="pin"?{selectedFeature:{type:"pin"}}:e.selectedPoi.startsWith("pin-")?{selectedFeature:{type:"customPin",id:e.selectedPoi.slice(4)}}:{selectedFeature:{type:"poi",id:e.selectedPoi}}}}),_d=$(e=>[ge(e),Ye(e).enabled],(e,t,o)=>!t.constraintMaxResolutionToPois||o.length<1?null:yt(o)),Sd=$(e=>[e.selectedFeature,qs(e)],(e,t,o)=>{if(t==null||t.type!=="poi")return null;const r=t.id.split("/")[0];return o(r,t.id)!=="hidden"?t.id:null});function No(e){return e==null||typeof e=="object"&&"x"in e&&"z"in e&&typeof e.x=="number"&&typeof e.z=="number"}function ri(e){if(e==null)return!0;if(typeof e!="object")return!1;const t=e;return t.type==="pin"?!0:t.type==="poi"||t.type==="customPin"?typeof t.id=="string":!1}function ni(e){return e?.type==="searchOrigin"||e?.type==="searchResult"}function si(e){return ni(e)?null:e}function at(e,t){if(!e)return t;try{const o=parseInt(e,10);if(!isNaN(o))return o}catch{}return t}function Lo(e,t){if(!e)return t;try{const o=parseFloat(e);if(!isNaN(o))return o}catch{}return t}const ii=xt.filter(e=>e.dimension===Q.Overworld).map(e=>e.id),kr=[On.id,Bn.id,Mn.id],ai=[oo.id,or.id,Vn.id,rr.id],li=[...ai,ro.id,zn.id,nr.id,sr.id,no.id];Nn.id,so.id;const ci=[Ln.id,io.id];ir.id,ao.id,ar.id,lr.id;Fn.id,Dn.id,jn.id,Un.id,Hn.id,lo.id,Wn.id,cr.id;const Ir=[$n.id,Xn.id,Gn.id];dr.id,ur.id,fr.id;Jn.id,co.id,uo.id,mr.id,fo.id;const Cr=[Zn.id,Qn.id,Yn.id],yo=[Kn.id,qn.id,es.id,ts.id,os.id],bo=[rs.id,ns.id,ss.id,is.id,as.id],di=[hr.id,pr.id,co.id,uo.id,fo.id,ro.id,oo.id,lo.id,mo.id,io.id,ao.id,so.id,...bo],ui=[gr.id,no.id,...kr,...Cr,...yo,...Ir,yr.id],fi=[hr.id,pr.id,co.id,uo.id,fo.id,ro.id,oo.id,lo.id,mo.id,io.id,ao.id,so.id,...bo,nr.id,or.id,ar.id,lr.id,ir.id,ur.id,fr.id,dr.id,mr.id,cr.id],mi=[gr.id,no.id,...kr,...Cr,...yo,...Ir,yr.id,rr.id,sr.id],hi=xt.filter(e=>e.displayCategory==="legacy").map(e=>e.id),lt={IS_LEGACY:hi,IS_OVERWORLD:ii,IS_OCEAN:li,IS_RIVER:ci,IS_NETHER:yo,IS_END:bo,SPAWNS_COLD_VARIANT_FROGS:di,SPAWNS_WARM_VARIANT_FROGS:ui,SPAWNS_COLD_VARIANT_FARM_ANIMALS:fi,SPAWNS_WARM_VARIANT_FARM_ANIMALS:mi},pi=(e,t)=>({selectedPoi:null,showBiomes:!0,dimBiomes:!0,biomeHeight:"depth0",highlightedBiomes:[],highlightBiomes:!1,renderTerrain:!1,fadeInBiomeTiles:!0,setShowBiomes(o){e({showBiomes:o})},setBiomesState(o){o==="visible"?e({showBiomes:!0,dimBiomes:!1}):o==="hidden"?e({showBiomes:!1,dimBiomes:!1}):o==="dim"&&e({showBiomes:!0,dimBiomes:!0})},setRenderTerrain(o){e({renderTerrain:o})},setFadeInBiomeTiles(o){e({fadeInBiomeTiles:o})},setBiomeHeight(o){e({biomeHeight:o})},updateHighlightedBiomes:o=>{e({highlightBiomes:o.length>0,highlightedBiomes:o})},updateHighlightedBiomesForCurrentDimension:o=>{const r=t().dimension,n=t().highlightedBiomes,s=Er(n,r),i=n.filter(a=>!s.includes(a));e({highlightBiomes:o.length>0,highlightedBiomes:[...i,...o]})},setHighlightBiomes(o){e({highlightBiomes:o})}}),gi=()=>({showBiomes:D(e=>typeof e=="boolean"),dimBiomes:D(e=>typeof e=="boolean"),highlightBiomes:D(e=>typeof e=="boolean"),fadeInBiomeTiles:D(e=>typeof e=="boolean"),renderTerrain:D(e=>typeof e=="boolean"),biomeHeight:D(e=>typeof e=="string"&&Pr(e)),highlightedBiomes:D(e=>Array.isArray(e)&&e.every(t=>!!xt[t]))}),yi=()=>({showBiomes:{includeInUrl:(e,t)=>t&&e.forceShowBiomes==null,stateToSearchParams:e=>e.showBiomes!=null?{showBiomes:`${e.showBiomes}`}:{},searchParamsToState:e=>e.showBiomes!=null?{showBiomes:e.showBiomes!=="false"}:{}},dimBiomes:{includeInUrl:(e,t)=>t&&e.forceDimBiomes==null,stateToSearchParams:e=>e.dimBiomes!=null?{dimBiomes:`${e.dimBiomes}`}:{},searchParamsToState:e=>e.dimBiomes!=null?{dimBiomes:e.dimBiomes!=="false"}:{}},biomeHeight:{includeInUrl:(e,t)=>t&&e.forceBiomeHeight==null,stateToSearchParams:e=>e.biomeHeight!=null?{biomeHeight:e.biomeHeight}:{},searchParamsToState:e=>e.biomeHeight!=null&&Pr(e.biomeHeight)?{biomeHeight:e.biomeHeight}:{}},renderTerrain:{includeInUrl:(e,t)=>t&&e.forceRenderTerrain==null,stateToSearchParams:e=>e.renderTerrain!=null?{terrain:`${e.renderTerrain}`}:{},searchParamsToState:e=>e.terrain!=null?{renderTerrain:e.terrain!=="false"}:{}},highlightedBiomes:{includeInUrl:(e,t)=>t&&e.forceHighlightedBiomes==null&&e.forceHighlightBiomes==null,stateToSearchParams:e=>e.highlightBiomes&&e.highlightedBiomes&&e.highlightedBiomes.length>0?{biomeFilter:e.highlightedBiomes.join("-")}:{biomeFilter:"false"},searchParamsToState:e=>{if(!e.biomeFilter)return{};if(e.biomeFilter==="false")return{highlightBiomes:!1};const t=[];try{for(const o of e.biomeFilter.split("-")){const r=parseInt(o,10);if(isNaN(r)||!xt[r])return{};t.push(r)}}catch{return{}}return{highlightBiomes:!0,highlightedBiomes:t}}}}),bi=$(e=>[e.dimension,e.highlightedBiomes],(e,t,o)=>Er(o,t)),vi=$(e=>[e.showBiomes,e.dimBiomes],(e,t,o)=>t?o?"dim":"visible":"hidden");function wi(e){return e.forceShowBiomes==null&&e.forceDimBiomes==null&&e.forcePois!=null}function Er(e,t){if(t===Q.Overworld)return e.filter(o=>!lt.IS_NETHER.includes(o)&&!lt.IS_END.includes(o));if(t===Q.Nether)return e.filter(o=>lt.IS_NETHER.includes(o));if(t===Q.End)return e.filter(o=>lt.IS_END.includes(o));throw new Error("Invalid dimension")}function Pr(e){return["depth0","caveDepth","bottom"].includes(e)}function _i(e,t){const o=t==="caveDepth"||t==="bottom",r=t==="bottom";for(const n of e){if([ls.id,cs.id,Io.id].includes(n)&&!o)return n===Io.id?"sulfurCavesAtWrongHeight":"caveBiomeAtWrongHeight";if(n===mo.id&&!r)return"bottomBiomeAtWrongHeight"}return null}function Rr(e){if(e<=0)throw new Error("Input must be positive");const t=Math.ceil(Math.log2(e));return Math.pow(2,t)}const te=[];for(let e=0;e<256;++e)te.push((e+256).toString(16).slice(1));function Si(e,t=0){return(te[e[t+0]]+te[e[t+1]]+te[e[t+2]]+te[e[t+3]]+"-"+te[e[t+4]]+te[e[t+5]]+"-"+te[e[t+6]]+te[e[t+7]]+"-"+te[e[t+8]]+te[e[t+9]]+"-"+te[e[t+10]]+te[e[t+11]]+te[e[t+12]]+te[e[t+13]]+te[e[t+14]]+te[e[t+15]]).toLowerCase()}const xi=new Uint8Array(16);function Ti(){return crypto.getRandomValues(xi)}function vo(e,t,o){return crypto.randomUUID?crypto.randomUUID():ki(e)}function ki(e,t,o){e=e||{};const r=e.random??e.rng?.()??Ti();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,Si(r)}const Fo=50,Ii=(e,t)=>({customPins:{},showCustomPins:!1,setShowCustomPins(o){e({showCustomPins:o})},saveAsCustomPin(o,r){const n=Je(ue(t())),s=t().customPins,i=t().dimension,a=t().pin;if(!a)throw new Error("No pin to save as custom pin");const l={uuid:vo(),color:r,label:o.trim().slice(0,Fo).trim(),dimension:i,position:[a.x,a.z]};e({pin:null,showCustomPins:!0,selectedFeature:{type:"customPin",id:l.uuid},customPins:{...s,[n]:{...s[n],[l.uuid]:l}}})},updateCustomPin(o,r,n){const s=Je(ue(t())),i=t().customPins,a=i[s][o];if(!a)throw new Error(`Custom pin with uuid ${o} does not exist`);e({showCustomPins:!0,customPins:{...i,[s]:{...i[s],[o]:{...a,label:r.trim().slice(0,Fo).trim(),color:n}}}})},removeCustomPin(o){const r=Je(ue(t())),n=t().customPins,s=t().selectedFeature;e({selectedFeature:s?.type==="customPin"&&s.id===o?null:s,customPins:{...n,[r]:Object.fromEntries(Object.entries(n[r]).filter(([i])=>i!==o))}})},validateAndImportCustomPins(o){return Ar(o)?(e({customPins:o}),!0):!1}}),Ci=()=>({showCustomPins:D(e=>typeof e=="boolean"),customPins:D(Ar)});function Ei(e){return typeof e=="object"&&e!=null&&typeof e.uuid=="string"&&Array.isArray(e.position)&&e.position.length===2&&typeof e.position[0]=="number"&&typeof e.position[1]=="number"&&typeof e.color=="string"&&typeof e.label=="string"}function Je(e){return e.edition+"/"+e.seed}function Ar(e){return typeof e=="object"&&e!=null&&Object.values(e).every(t=>typeof t=="object"&&t!=null&&Object.values(t).every(Ei))}const Or=$(e=>[ue(e),e.customPins],(e,t,o)=>o[Je(t)]??{}),xd=$(e=>[Or(e),e.dimension],(e,t,o)=>!!Object.values(t).find(r=>r.dimension===o)),Td=$(e=>[e.showCustomPins,e.selectedFeature,e.dimension,Or(e)],(e,t,o,r,n)=>{if(!t||o?.type!=="customPin")return null;const s=o.id;return n[s]==null||n[s].dimension!==r?null:n[s]});function Br(e){return Object.values(e).length}function Pi(e){return Object.values(e.customPins).reduce((t,o)=>t+Br(o),0)}function Ri(e){const t=Je(ue(e));return Br(e.customPins[t]??{})}const Ai=(e,t)=>({markedPois:{},markPoi(o,r){const n=t().markedPois,s=ue(t());if(jt(s,n,o,r))return;const i=bt(s),a=oe[o].getHash(r);e({markedPois:{...n,[i]:{...n[i],[o]:{...n[i]?.[o],[a]:!0}}}})},unmarkPoi(o,r){const n=t().markedPois,s=ue(t());if(!jt(s,n,o,r))return;const i=bt(s),a=oe[o].getHash(r);e({markedPois:{...n,[i]:{...n[i],[o]:Object.fromEntries(Object.entries(n[i][o]??{}).filter(([l])=>l!==a))}}})},validateAndImportMarkedPois(o){return wo(o)?(e({markedPois:o}),!0):!1}}),Oi=()=>({markedPois:D(wo)});function bt(e){return e.edition+"/"+e.seed}function jt(e,t,o,r){const n=bt(e),s=oe[o].getHash(r);return t[n]?.[o]?.[s]??!1}function kd(e,t,o){return jt(ue(e),e.markedPois,t,o)}function wo(e){return typeof e=="object"&&e!=null&&Object.values(e).every(t=>typeof t=="object"&&t!=null&&Object.values(t).every(o=>typeof o=="object"&&o!=null&&Object.values(o).every(r=>typeof r=="boolean")))}function Mr(e){return Object.values(e).reduce((t,o)=>t+Object.values(o).filter(r=>r).length,0)}function Bi(e){return Object.values(e.markedPois).reduce((t,o)=>t+Mr(o),0)}function Mi(e){const t=bt(ue(e)),o=e.markedPois[t]??{};return Mr(o)}function Vi(e){return Math.abs(Math.atan2(Math.sin(e),Math.cos(e)))<1e-6}function Id(e){return e.getViewport().classList.contains("ol-touch")}const Vr=Symbol("Comlink.proxy"),zi=Symbol("Comlink.endpoint"),Ni=Symbol("Comlink.releaseProxy"),Ot=Symbol("Comlink.finalizer"),pt=Symbol("Comlink.thrown"),zr=e=>typeof e=="object"&&e!==null||typeof e=="function",Li={canHandle:e=>zr(e)&&e[Vr],serialize(e){const{port1:t,port2:o}=new MessageChannel;return Lr(e,t),[o,[o]]},deserialize(e){return e.start(),Dr(e)}},Fi={canHandle:e=>zr(e)&&pt in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},Nr=new Map([["proxy",Li],["throw",Fi]]);function Di(e,t){for(const o of e)if(t===o||o==="*"||o instanceof RegExp&&o.test(t))return!0;return!1}function Lr(e,t=globalThis,o=["*"]){t.addEventListener("message",function r(n){if(!n||!n.data)return;if(!Di(o,n.origin)){console.warn(`Invalid origin '${n.origin}' for comlink proxy`);return}const{id:s,type:i,path:a}=Object.assign({path:[]},n.data),l=(n.data.argumentList||[]).map(Re);let d;try{const c=a.slice(0,-1).reduce((h,f)=>h[f],e),y=a.reduce((h,f)=>h[f],e);switch(i){case"GET":d=y;break;case"SET":c[a.slice(-1)[0]]=Re(n.data.value),d=!0;break;case"APPLY":d=y.apply(c,l);break;case"CONSTRUCT":{const h=new y(...l);d=Ht(h)}break;case"ENDPOINT":{const{port1:h,port2:f}=new MessageChannel;Lr(e,f),d=$i(h,[h])}break;case"RELEASE":d=void 0;break;default:return}}catch(c){d={value:c,[pt]:0}}Promise.resolve(d).catch(c=>({value:c,[pt]:0})).then(c=>{const[y,h]=_t(c);t.postMessage(Object.assign(Object.assign({},y),{id:s}),h),i==="RELEASE"&&(t.removeEventListener("message",r),Fr(t),Ot in e&&typeof e[Ot]=="function"&&e[Ot]())}).catch(c=>{const[y,h]=_t({value:new TypeError("Unserializable return value"),[pt]:0});t.postMessage(Object.assign(Object.assign({},y),{id:s}),h)})}),t.start&&t.start()}function ji(e){return e.constructor.name==="MessagePort"}function Fr(e){ji(e)&&e.close()}function Dr(e,t){const o=new Map;return e.addEventListener("message",function(n){const{data:s}=n;if(!s||!s.id)return;const i=o.get(s.id);if(i)try{i(s)}finally{o.delete(s.id)}}),Ut(e,o,[],t)}function ct(e){if(e)throw new Error("Proxy has been released and is not useable")}function jr(e){return ze(e,new Map,{type:"RELEASE"}).then(()=>{Fr(e)})}const vt=new WeakMap,wt="FinalizationRegistry"in globalThis&&new FinalizationRegistry(e=>{const t=(vt.get(e)||0)-1;vt.set(e,t),t===0&&jr(e)});function Ui(e,t){const o=(vt.get(t)||0)+1;vt.set(t,o),wt&&wt.register(e,t,e)}function Hi(e){wt&&wt.unregister(e)}function Ut(e,t,o=[],r=function(){}){let n=!1;const s=new Proxy(r,{get(i,a){if(ct(n),a===Ni)return()=>{Hi(s),jr(e),t.clear(),n=!0};if(a==="then"){if(o.length===0)return{then:()=>s};const l=ze(e,t,{type:"GET",path:o.map(d=>d.toString())}).then(Re);return l.then.bind(l)}return Ut(e,t,[...o,a])},set(i,a,l){ct(n);const[d,c]=_t(l);return ze(e,t,{type:"SET",path:[...o,a].map(y=>y.toString()),value:d},c).then(Re)},apply(i,a,l){ct(n);const d=o[o.length-1];if(d===zi)return ze(e,t,{type:"ENDPOINT"}).then(Re);if(d==="bind")return Ut(e,t,o.slice(0,-1));const[c,y]=Do(l);return ze(e,t,{type:"APPLY",path:o.map(h=>h.toString()),argumentList:c},y).then(Re)},construct(i,a){ct(n);const[l,d]=Do(a);return ze(e,t,{type:"CONSTRUCT",path:o.map(c=>c.toString()),argumentList:l},d).then(Re)}});return Ui(s,e),s}function Wi(e){return Array.prototype.concat.apply([],e)}function Do(e){const t=e.map(_t);return[t.map(o=>o[0]),Wi(t.map(o=>o[1]))]}const Ur=new WeakMap;function $i(e,t){return Ur.set(e,t),e}function Ht(e){return Object.assign(e,{[Vr]:!0})}function _t(e){for(const[t,o]of Nr)if(o.canHandle(e)){const[r,n]=o.serialize(e);return[{type:"HANDLER",name:t,value:r},n]}return[{type:"RAW",value:e},Ur.get(e)||[]]}function Re(e){switch(e.type){case"HANDLER":return Nr.get(e.name).deserialize(e.value);case"RAW":return e.value}}function ze(e,t,o,r){return new Promise(n=>{const s=Xi();t.set(s,n),e.start&&e.start(),e.postMessage(Object.assign({id:s},o),r)})}function Xi(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}var Wt=Symbol("getEndpoint"),jo=e=>{const t=Dr(e);return new Proxy(t,{get(o,r,n){return r===Wt?e:Reflect.get(o,r,n)}})};class Gi extends Map{#o=0;#e=new Map;#t=new Map;#n;#i;#s;constructor(t={}){if(super(),!(t.maxSize&&t.maxSize>0))throw new TypeError("`maxSize` must be a number greater than 0");if(typeof t.maxAge=="number"&&t.maxAge===0)throw new TypeError("`maxAge` must be a number greater than 0");this.#n=t.maxSize,this.#i=t.maxAge||Number.POSITIVE_INFINITY,this.#s=t.onEviction}get __oldCache(){return this.#t}#a(t){if(typeof this.#s=="function")for(const[o,r]of t)this.#s(o,r.value)}#r(t,o){return typeof o.expiry=="number"&&o.expiry<=Date.now()?(typeof this.#s=="function"&&this.#s(t,o.value),this.delete(t)):!1}#f(t,o){if(this.#r(t,o)===!1)return o.value}#c(t,o){return o.expiry?this.#f(t,o):o.value}#d(t,o){const r=o.get(t);return this.#c(t,r)}#u(t,o){this.#e.set(t,o),this.#o++,this.#o>=this.#n&&(this.#o=0,this.#a(this.#t),this.#t=this.#e,this.#e=new Map)}#m(t,o){this.#t.delete(t),this.#u(t,o)}*#l(){for(const t of this.#t){const[o,r]=t;this.#e.has(o)||this.#r(o,r)===!1&&(yield t)}for(const t of this.#e){const[o,r]=t;this.#r(o,r)===!1&&(yield t)}}get(t){if(this.#e.has(t)){const o=this.#e.get(t);return this.#c(t,o)}if(this.#t.has(t)){const o=this.#t.get(t);if(this.#r(t,o)===!1)return this.#m(t,o),o.value}}set(t,o,{maxAge:r=this.#i}={}){const n=typeof r=="number"&&r!==Number.POSITIVE_INFINITY?Date.now()+r:void 0;return this.#e.has(t)?this.#e.set(t,{value:o,expiry:n}):this.#u(t,{value:o,expiry:n}),this}has(t){return this.#e.has(t)?!this.#r(t,this.#e.get(t)):this.#t.has(t)?!this.#r(t,this.#t.get(t)):!1}peek(t){if(this.#e.has(t))return this.#d(t,this.#e);if(this.#t.has(t))return this.#d(t,this.#t)}expiresIn(t){const o=this.#e.get(t)??this.#t.get(t);if(o)return o.expiry?o.expiry-Date.now():Number.POSITIVE_INFINITY}delete(t){const o=this.#e.delete(t);return o&&this.#o--,this.#t.delete(t)||o}clear(){this.#e.clear(),this.#t.clear(),this.#o=0}resize(t){if(!(t&&t>0))throw new TypeError("`maxSize` must be a number greater than 0");const o=[...this.#l()],r=o.length-t;r<0?(this.#e=new Map(o),this.#t=new Map,this.#o=o.length):(r>0&&this.#a(o.slice(0,r)),this.#t=new Map(o.slice(r)),this.#e=new Map,this.#o=0),this.#n=t}evict(t=1){const o=Number(t);if(!o||o<=0)return;const r=[...this.#l()],n=Math.trunc(Math.min(o,Math.max(r.length-1,0)));n<=0||(this.#a(r.slice(0,n)),this.#t=new Map(r.slice(n)),this.#e=new Map,this.#o=0)}*keys(){for(const[t]of this)yield t}*values(){for(const[,t]of this)yield t}*[Symbol.iterator](){for(const t of this.#e){const[o,r]=t;this.#r(o,r)===!1&&(yield[o,r.value])}for(const t of this.#t){const[o,r]=t;this.#e.has(o)||this.#r(o,r)===!1&&(yield[o,r.value])}}*entriesDescending(){let t=[...this.#e];for(let o=t.length-1;o>=0;--o){const r=t[o],[n,s]=r;this.#r(n,s)===!1&&(yield[n,s.value])}t=[...this.#t];for(let o=t.length-1;o>=0;--o){const r=t[o],[n,s]=r;this.#e.has(n)||this.#r(n,s)===!1&&(yield[n,s.value])}}*entriesAscending(){for(const[t,o]of this.#l())yield[t,o.value]}get size(){if(!this.#o)return this.#t.size;let t=0;for(const o of this.#t.keys())this.#e.has(o)||t++;return Math.min(this.#o+t,this.#n)}get maxSize(){return this.#n}get maxAge(){return this.#i}entries(){return this.entriesAscending()}forEach(t,o=this){for(const[r,n]of this.entriesAscending())t.call(o,n,r,this)}get[Symbol.toStringTag](){return"QuickLRU"}toString(){return`QuickLRU(${this.size}/${this.maxSize})`}[Symbol.for("nodejs.util.inspect.custom")](){return this.toString()}}const Ji=1e4,Zi={server:1,ios:2,mobile:4,default:8}[us()],Qi=32,Hr={poi:0,biome:0,search:1},Yi=Math.max(...Object.values(Hr))+1;class Ki{buckets=Array.from({length:Yi},()=>[]);_length=0;get length(){return this._length}push(t){this.buckets[Hr[t.category]].push(t),this._length++}shift(){for(const t of this.buckets)if(t.length>0)return this._length--,t.shift()}}const Ze=qi();typeof window<"u"&&Ze.preInit();function Wr(e){const t=e!=="auto"?e:Ae((navigator.hardwareConcurrency??1)-1,1,Zi);return Ae(t,1,Qi)}function qi(){const e=[];let t=null;const o=[],r=new Ki,n={};let s;const i=new Promise(m=>{s=m});let a=null;function l(m,u){if(m==="ui"){if(t==null)throw new Error("Worker queue not initialized");u(t).catch(p=>re(new Error("Priority worker processing error",{cause:p})));return}if(r.length>=Ji)throw new Error("Worker queue is full");r.push({category:m,task:u}),new Promise(p=>setTimeout(p,0)).then(()=>c()).catch(p=>re(new Error("Worker queue processing error",{cause:p})))}const d=ea();async function c(){if(e.length<1)throw new Error("Worker queue not initialized");const m=o.findIndex(p=>!p);if(m===-1)return;const u=r.shift();if(u){o[m]=!0;try{n[u.category]=(n[u.category]??0)+1,await u.task(e[m])}finally{n[u.category]=(n[u.category]??0)-1,o[m]=!1,await c()}}}function y(m){return async(u,...p)=>(await i,new Promise((g,v)=>{l(u.category,async _=>{if(u.isObsolete()){g({isObsolete:!0});return}let E;try{E=await _[m](...p)}catch(k){v(k);return}g({isObsolete:!1,value:E})})}))}function h(m){e[m]=jo(new Worker(new URL("/ChunkbaseSeedmapOffline/_astro/CWznLLplU_-m.js",import.meta.url),{type:"module"})),e[m][Wt].addEventListener("error",p=>{re(new Error(`Worker ${m} error: ${p.message??"(no message)"}`))});const u=e[m].initWorker();return e[m].setSharedContextCallback(Ht(d)),o[m]=!1,u}function f(){t=jo(new Worker(new URL("/ChunkbaseSeedmapOffline/_astro/CWznLLplU_-m.js",import.meta.url),{type:"module"})),t[Wt].addEventListener("error",p=>{re(new Error(`Priority worker error: ${p.message??"(no message)"}`))});const m=t.initWorker();t.setSharedContextCallback(Ht(d));const u=h(0);a=Promise.all([m,u])}function b(m){if(a==null)throw new Error("worker queue: must call preInit() first");const u=Wr(m),p=[a];for(let g=1;g<u;g++)p.push(h(g));return Promise.all(p).then(()=>{s(),qe("workers initialized",{count:e.length})})}return{preInit:f,init:b,getBiomeTileData:y("getBiomeTileData"),getNoiseBiomeYColumnOverworld:y("getNoiseBiomeYColumnOverworld"),getPois:y("getPois"),scanTile:y("scanTile"),getAnchorDomain:y("getAnchorDomain"),cancelTask:m=>{for(const u of e)u.cancelTask(m).catch(p=>re(new Error("cancelTask error",{cause:p})))},clear:()=>{throw new Error},getLoadingByCategory:()=>n}}function ea(){const e=new Gi({maxSize:32}),t={};return async(o,r)=>{if(e.has(o))return e.get(o);if(t[o])return t[o];t[o]=r();try{const n=await t[o];return e.set(o,n),n}catch(n){throw re(new Error("Shared task error",{cause:n})),n}finally{delete t[o]}}}function ta(e){return e instanceof Error?e.message:null}function $r(e,t,o){qe(`storage localStorage ${e} error`,{key:t,message:ta(o)})}function Ge(e){if(typeof window>"u")return null;try{return window.localStorage.getItem(e)}catch(t){return $r("getItem",e,t),null}}function oa(e){if(!(typeof window>"u"))try{window.localStorage.removeItem(e)}catch(t){$r("removeItem",e,t)}}const ra=9e4,na=typeof window<"u"?Promise.all([Rs(),As().then(e=>({ok:!0,sprites:e,err:void 0}),e=>({ok:!1,err:e,sprites:void 0}))]):null,sa=(e,t)=>{const o={hasHydrated:!1,hasUsedBiomeGroups:!1,browserTestFailures:[],_dismissibleUiAlerts:[],initializationFailures:[],copyCoordinatesWithTp:!0,concurrentWorkers:"auto",_userConfiguredSettings:[],async onHydrate(){const[r,n]=await na;return r.length>0||!n.ok?(e({browserTestFailures:r,initializationFailures:n.ok?[]:[{code:"spriteLoadError"}]}),r.length>0&&ae("CB_ChunkApp_BrowserTestFailure",{missing:r.join(",")}),n.ok||re(n.err),!1):(Ge("cb_finder_safemode")==="1"&&(oa("cb_finder_safemode"),e({concurrentWorkers:1})),Ze.init(t().concurrentWorkers).catch(s=>{e({initializationFailures:[...t().initializationFailures,{code:"workerInitError",cause:s?.message??String(s)}]}),re(new Error("Worker initialization failed",{cause:s}))}),e({hasHydrated:!0,poiLayerSprites:n.sprites,fallbackSeed:vr()}),qe("app hydrated"),o.scheduleTelemetryEvents(),!0)},scheduleTelemetryEvents(){setTimeout(async()=>{const r=t(),n=await Rn(),s={platform:r.version,finder:window.location.pathname,dimension:r.dimension,zoom:Rr(r.resolution),isRotated:!Vi(r.rotation),biomeFilter:`${r.highlightBiomes?"on":"off"}-${r.highlightedBiomes.length}`,poisCount:Ye(r).enabled.length,pois:Ye(r).enabled.map(i=>oe[i].shortId).concat(r.showBiomes?["Bi"]:[]).join(""),theaterMode:r.isTheaterModeEnabled,nrMarkedPoisTotal:Bi(r),nrMarkedPoisWorld:Mi(r),nrCustomPinsTotal:Pi(r),nrCustomPinsWorld:Ri(r),nrRecentSearches:r.recentSearches.length,poiRenderMode:Sr(ge(r))?r.poiRenderMode:"N/A",hasUsedBiomeGroups:ge(r).forceHighlightedBiomes==null?r.hasUsedBiomeGroups:"N/A",biomeVisibilityState:wi(ge(r))?vi(r):"N/A",momentumPanning:r.momentumPanning,fadeInBiomeTiles:r.fadeInBiomeTiles,copyCoordinatesWithTp:r.copyCoordinatesWithTp,enableRotation:r.enableRotation,poiClusterRadius:r.poiClusterRadius,concurrentWorkers:r.concurrentWorkers,showGrid:r.showGrid,worldBorderChanged:r.worldBorder.centerX!==ht.centerX||r.worldBorder.centerZ!==ht.centerZ||r.worldBorder.size!==ht.size,version:"2026_2",wasmSimd:n};ae("CB_ChunkApp_Usage",s,!0)},ra)},setHasUsedBiomeGroups(r){e({hasUsedBiomeGroups:r})},setCopyCoordinatesWithTp(r){e({copyCoordinatesWithTp:r})},setConcurrentWorkers(r){e({concurrentWorkers:r})},markUserConfigured(r){const n=t()._userConfiguredSettings;n.includes(r)||e({_userConfiguredSettings:[...n,r]})},unmarkUserConfigured(r){const n=t()._userConfiguredSettings,s=n.filter(i=>!r.includes(i));s.length!==n.length&&e({_userConfiguredSettings:s})},showUiAlert(r){t()._dismissibleUiAlerts.includes(r)||e({_dismissibleUiAlerts:[...t()._dismissibleUiAlerts,r]})},hideUiAlert(r){t()._dismissibleUiAlerts.includes(r)&&e({_dismissibleUiAlerts:t()._dismissibleUiAlerts.filter(n=>n!==r)})},hideUiAlerts(r){const n=t()._dismissibleUiAlerts.filter(s=>!r.includes(s));n.length>=t()._dismissibleUiAlerts.length||e({_dismissibleUiAlerts:n})}};return o},ia=()=>({copyCoordinatesWithTp:D(e=>typeof e=="boolean"),concurrentWorkers:D(e=>e==="auto"||typeof e=="number"&&e>=1),_userConfiguredSettings:D(e=>Array.isArray(e)&&e.every(t=>typeof t=="string"))}),aa=[],Cd=$(e=>[e._dismissibleUiAlerts,e.seed,wr(e),e.version,e.biomeHeight,e.highlightBiomes?bi(e):aa],(e,t,o,r,n,s,i)=>{const a=[...t.map(c=>({alert:c,isDismissible:!0,payload:null}))],l=o.trim();r.hasLeadingZeros?a.push({alert:"seedLeadingZeros",isDismissible:!1,payload:null}):l!==r.numerical&&l.match(/^[-+]?\d+$/)&&a.push({alert:"seedTooLongNumber",isDismissible:!1,payload:r.numerical}),de[n].warning&&a.push({alert:"versionWarning",isDismissible:!1,payload:de[n].warning});const d=_i(i,s);return d!=null&&a.push({alert:d,isDismissible:!1,payload:null}),a});function la(e){return e.hasHydrated}function $t(e,t=new WeakSet){if(e===null)return"null";switch(typeof e){case"string":case"boolean":return JSON.stringify(e);case"number":if(!Number.isFinite(e))throw new TypeError("Cannot hash non-finite number");return JSON.stringify(e);case"object":{if(t.has(e))throw new TypeError("Cannot hash cyclic object");if(t.add(e),Array.isArray(e)){const s=`[${e.map(i=>$t(i,t)).join(",")}]`;return t.delete(e),s}const o=e,n=`{${Object.keys(o).sort().map(s=>{const i=o[s];if(i!==void 0)return`${JSON.stringify(s)}:${$t(i,t)}`}).filter(s=>s!==void 0).join(",")}}`;return t.delete(e),n}default:throw new TypeError(`Unsupported JSON value type: ${typeof e}`)}}function ca(e){let t=2166136261;for(let o=0;o<e.length;o++)t^=e.charCodeAt(o),t=Math.imul(t,16777619);return t>>>0}function da(e){return ca($t(e)).toString(16).padStart(8,"0")}const ua=([e,t])=>[e,-t],Xr=([e,t])=>[e,-t],fa=([e,t,o,r])=>[e,-r,o,-t],ma=([e,t,o,r])=>[e,-r,o,-t],Ed=([e,t,o,r])=>[e>>4,t>>4,o>>4,r>>4];function ha(e){throw new Error(`Unexpected value: ${JSON.stringify(e)}`)}function Gr(e){const t=new Set;switch(e.anchor.kind){case"poi":t.add(e.anchor.poi.type);break;case"cluster":e.anchor.members.forEach(o=>t.add(o.poi.type));break;case"biome-patch":break;default:ha(e.anchor)}for(const o of e.regions)for(const r of o.conditions)r.kind==="poi-presence"?t.add(r.poi.type):r.kind==="poi-cluster"&&r.members.forEach(n=>t.add(n.poi.type));return Array.from(t)}function pa(e){return e.anchor.kind==="poi"&&e.anchor.biomesAtPos==null&&e.regions.length===0}function Jr(e){return typeof e=="object"&&e!==null}function J(e){const t=Object.entries(e);return o=>Jr(o)&&t.every(([r,n])=>n(o[r]))}function Tt(e){const t=e;return o=>{if(!Jr(o)||typeof o.kind!="string")return!1;const r=t[o.kind];return r!==void 0&&r(o)}}function Xt(e){return t=>typeof t=="string"&&Object.hasOwn(e,t)}function ie(e){return t=>t===e}function Fe(e){return t=>t===void 0||e(t)}function He(e){return t=>Array.isArray(t)&&t.every(e)}function Zr(e){const t=He(e);return o=>t(o)&&o.length>=1}const q=e=>typeof e=="number"&&Number.isFinite(e),ga=e=>typeof e=="string",ya=e=>typeof e=="boolean",ba=new Set(Object.values(A)),va=e=>typeof e=="string"&&ba.has(e),wa=new Set(Object.values(Q)),_a=e=>typeof e=="string"&&wa.has(e),_o=J({type:va,variantId:Fe(ga)}),Qr=J({poi:_o,minAmount:q}),Yr=J({meters:q,threeD:ya}),Sa=Tt({surface:J({kind:ie("surface"),surfaceKind:Xt({any:!0,land:!0})}),underground:J({kind:ie("underground")}),fixed:J({kind:ie("fixed"),y:q})}),xa=Tt({"poi-presence":J({kind:ie("poi-presence"),poi:_o,minAmount:q,biomeAtPos:Fe(q)}),"poi-cluster":J({kind:ie("poi-cluster"),members:Zr(Qr),radius:Yr}),"biome-filter":J({kind:ie("biome-filter"),mode:Xt({"includes-all":!0,"includes-any":!0,"excludes-all":!0,"limited-to":!0}),biomes:He(q)}),"biome-variance":J({kind:ie("biome-variance"),comparator:Xt({"at-least":!0,"at-most":!0,exactly:!0}),count:q}),"terrain-height":J({kind:ie("terrain-height"),minY:Fe(q),maxY:Fe(q)}),flatness:J({kind:ie("flatness"),range:J({lowerPercentile:q,upperPercentile:q,maxBlocksAt128:q}),maxAverageSlope:q})}),Ta=J({shape:Tt({square:J({kind:ie("square"),inradius:q}),circle:J({kind:ie("circle"),radius:q})}),conditions:He(xa)}),ka=Tt({poi:J({kind:ie("poi"),poi:_o,biomesAtPos:Fe(He(q))}),cluster:J({kind:ie("cluster"),members:Zr(Qr),radius:Yr}),"biome-patch":J({kind:ie("biome-patch"),biomes:He(q),scanHeight:Sa,minPatchSize:Fe(q)})}),Ia=J({anchor:ka,regions:He(Ta),dimension:_a});function dt(e){return e<=0?0:Rr(Math.ceil(e))}function kt(e){const{anchor:t}=e;return{searchType:t.kind,advanced:e.regions.length>0,nrConditions:e.regions.reduce((o,r)=>o+r.conditions.length,0),pois:Ca(t),nrBiomes:Ea(t),dimension:e.dimension}}function Ca(e){switch(e.kind){case"poi":return oe[e.poi.type].shortId;case"cluster":return e.members.map(t=>oe[t.poi.type].shortId).join("");case"biome-patch":return""}}function Ea(e){switch(e.kind){case"biome-patch":return e.biomes.length;case"poi":return e.biomesAtPos?.length??0;case"cluster":return 0}}function Pa(e){ae("CB_ChunkApp_SearchOpen",{source:e},!0)}function Ra(e,t){const o=kt(e);qe("search scan",{searchType:o.searchType,advanced:o.advanced,source:t}),ae("CB_ChunkApp_SearchScan",{...o,source:t},!0)}function Aa(e,t,o){ae("CB_ChunkApp_SearchScanEnd",{...kt(e),source:t,outcome:o.outcome,nrResults:dt(o.nrResults),timeToFirstResultMs:o.timeToFirstResultMs==null?-1:dt(o.timeToFirstResultMs),durationMs:dt(o.durationMs),radiusCovered:Number.isFinite(o.radiusCovered)?dt(o.radiusCovered):-1},!0)}function Oa(e){ae("CB_ChunkApp_SearchExtend",kt(e),!0)}function Ba(e){ae("CB_ChunkApp_SearchRestart",kt(e),!0)}function Ma(e){ae("CB_ChunkApp_SearchStop",{source:e},!0)}function Uo(e,t,o){ae("CB_ChunkApp_SearchResultNav",{direction:e,source:t,triggeredScan:o},!0)}function Va(e){ae("CB_ChunkApp_AdvancedSearchOpen",{source:e},!0)}const Kr=-51;function Pd(e){const t=Na(e);return t==="caveDepth"?{kind:"underground"}:t==="bottom"?{kind:"fixed",y:Kr}:{kind:"surface",surfaceKind:"any"}}function za(e){switch(e.kind){case"surface":return"depth0";case"fixed":return e.y===Kr?"bottom":null;case"underground":return"caveDepth"}}function Na(e){const t={};for(const n of e){const s=ds(n);t[s]=(t[s]??0)+1}let o="depth0",r=0;for(const n of Object.keys(t)){const s=t[n]??0;s>r&&(o=n,r=s)}return o}const De=16,xe=De*16;function La(e){return{scanId:e,ringIndex:0,tileIndex:0,cursor:null,domain:null}}const Ho={firstCursor:qr,advanceCursor:Ha,coveredRadius:e=>Math.max(0,e-Math.SQRT2)*xe,isExhausted:()=>!1};function Fa(e,t){const o=en(t),r=Math.min(Math.max(e[0],o.minX),o.maxX),n=Math.min(Math.max(e[1],o.minZ),o.maxZ),s=Math.hypot(r-e[0],n-e[1]),i=Math.hypot(Math.max(e[0]-o.minX,o.maxX-e[0]),Math.max(e[1]-o.minZ,o.maxZ-e[1])),a=l=>Ho.coveredRadius(l-1)>i;return{...Ho,firstCursor:l=>a(l)||(l+2)*xe<s?null:qr(l),isExhausted:a}}function Da(e,t){const{originTileX:o,originTileZ:r}=tn(t),n=new Set,s=[];for(const[a,l]of e){const d=Math.floor(a/De)-o,c=Math.floor(l/De)-r,y=`${d},${c}`;n.has(y)||(n.add(y),s.push({dx:d,dz:c}))}const i=({dx:a,dz:l})=>{const d=(o+a+.5)*xe-t[0],c=(r+l+.5)*xe-t[1];return d*d+c*c};return s.sort((a,l)=>i(a)-i(l)||a.dx-l.dx||a.dz-l.dz),{firstCursor:a=>a===0&&s.length>0?{...s[0],idx:0}:null,advanceCursor:(a,l)=>{const d=(l.idx??0)+1;return d<s.length?{...s[d],idx:d}:null},coveredRadius:a=>a>=0?1/0:0,isExhausted:a=>a>=1}}function Wo(e,t,o){return e.kind==="finite"?Da(e.chunks,t):Fa(t,o)}let ja=0;async function Ua(e){const{signal:t,world:o,query:r,origin:n,worldBorder:s,maxInFlight:i,progress:a,adapter:l,shouldContinue:d}=e,c=en(s),y=new AbortController,h=()=>y.abort();t.aborted?y.abort():t.addEventListener("abort",h);const f=y.signal,b=new Promise(z=>{f.aborted?z():f.addEventListener("abort",()=>z(),{once:!0})}),m=`scan-run-${++ja}`;let u=0,p=0,g=!1;const v=new Set,_=new Map;let E=0,k=!1,R,w=a.tileIndex,O=a.cursor,U=O===null,V=null;const Y=()=>V.coveredRadius(a.ringIndex-1),W=()=>R!==void 0||f.aborted?!0:l.isSuperseded()?(k=!0,!0):!1,se=()=>f.aborted||l.isSuperseded(),ee=z=>{if(z.length===0||l.isSuperseded())return;const le=l.ingestTileMatches(z);le!==0&&(E+=le,d({newResults:E,totalResults:l.getResultCount(),totalRadius:Y()})||y.abort())},L=()=>{a.ringIndex++,a.tileIndex=0,w=0,a.cursor=V.firstCursor(a.ringIndex),O=a.cursor,U=O===null,_.clear(),l.setCoverage(Y())},B=()=>{for(;_.has(a.tileIndex);){const z=_.get(a.tileIndex);if(_.delete(a.tileIndex),ee(z),a.cursor=a.cursor===null?null:V.advanceCursor(a.ringIndex,a.cursor),a.tileIndex++,W())return}};try{if(a.domain===null){if(r.anchor.kind!=="poi")a.domain={kind:"unbounded"};else try{const z=await Ze.getAnchorDomain({category:"search",isObsolete:se},o,r);z.isObsolete||(a.domain=z.value)}catch(z){R=z}a.domain!==null&&(V=Wo(a.domain,n,s),a.cursor=V.firstCursor(0),O=a.cursor,U=O===null)}else V=Wo(a.domain,n,s);for(;!W()&&V!==null&&(B(),!W());){if(U){if(v.size>0){await Promise.race([...v,b]);continue}if(B(),W()||(L(),!d({newResults:E,totalResults:l.getResultCount(),totalRadius:Y()}))||V.isExhausted(a.ringIndex))break}for(;v.size>=i&&(await Promise.race([...v,b]),B(),!W()););if(W())break;if(O===null){U=!0;continue}const z=w;w++;const le=O;O=V.advanceCursor(a.ringIndex,O),U=O===null;const{originTileX:P,originTileZ:ke}=tn(n),me=(P+le.dx)*De,Ve=(ke+le.dz)*De,be=me*16,N=Ve*16;if(be+xe<c.minX||be>c.maxX||N+xe<c.minZ||N>c.maxZ){_.set(z,[]);continue}const ce=Ze.scanTile({category:"search",isObsolete:se},o,r,me,Ve,De,m).then(Ie=>{Ie.isObsolete||f.aborted||(_.set(z,Ie.value),B())},Ie=>{R===void 0&&(R=Ie),y.abort()}).finally(()=>{v.delete(ce)});v.add(ce)}}finally{y.abort(),t.removeEventListener("abort",h),Ze.cancelTask(m),V!==null&&!V.isExhausted(a.ringIndex)&&R===void 0&&!k&&a.cursor===null&&a.tileIndex===w&&L()}return{superseded:k,error:R,exhausted:V!==null&&V.isExhausted(a.ringIndex),settled:Promise.allSettled(v).then(()=>{})}}function qr(e){return e===0?{dx:0,dz:0}:{dx:e,dz:0}}function Ha(e,t){const o=e;if(o===0)return null;const{dx:r,dz:n}=t;let s,i,a;r>=1&&n>=0?(s=0,i=r,a=n):n>=1&&r<=0?(s=1,i=n,a=-r):r<=-1&&n<=0?(s=2,i=-r,a=-n):(s=3,i=-n,a=r);const l=(o-1)*(o-1),d=o*o;if(i>1&&(i-1)*(i-1)+a*a>l)i--;else if(a<o-1)a++,i*i+a*a>d&&i--;else{if(s++,s===4)return null;i=o,a=0}switch(s){case 0:return{dx:i,dz:a};case 1:return{dx:-a,dz:i};case 2:return{dx:-i,dz:-a};default:return{dx:a,dz:-i}}}function en(e){const t=e.size/2;return{minX:e.centerX-t,maxX:e.centerX+t,minZ:e.centerZ-t,maxZ:e.centerZ+t}}function tn(e){return{originTileX:Math.floor(e[0]/xe),originTileZ:Math.floor(e[1]/xe)}}function Wa(e,t){const o=Gr(e).filter(r=>!po(r,t));if(o.length>0){const r=o.map(n=>{const s=oe[n];return s.fullLabel??s.label});return r.length===1?`${r[0]} is not available in the selected version.`:`${r.slice(0,-1).join(", ")} and ${r[r.length-1]} are not available in the selected version.`}if(!Ls(t,e.dimension)){if(e.regions.some(n=>n.conditions.some(s=>s.kind==="terrain-height"||s.kind==="flatness")))return"Terrain height and flatness require Overworld 1.18 or newer.";if(e.anchor.kind==="biome-patch"&&e.anchor.scanHeight.kind==="surface"&&e.anchor.scanHeight.surfaceKind==="land")return"Surface (on land) requires Overworld 1.18 or newer."}return null}function $a(e,t){let o=null,r=new Set,n=new Set,s=null,i=Promise.resolve(),a=0;const l=()=>{s?.()},d=()=>{o=null,r=new Set,n=new Set};async function c(m,u,p,g,v){const _=++a;if(s?.(),await i,_!==a)return"superseded";try{const E=t().searchScanState;if(!E||!E.searchQuery)return"stopped";if(E.id!==m)return"superseded";const k=E.id,R=E.searchQuery,w=E.origin,O=ue(Oe.getState()),U=Wa(R,O);if(U!=null)return h(k,B=>({...B,state:"error",errorKind:"incompatible-query",errorMessage:U,scanStartTime:void 0,scanEndTime:void 0})),"error";(!o||o.scanId!==k)&&(o=La(k),r=new Set,n=new Set);const V=new AbortController,Y=()=>V.abort();s=Y;const W=()=>V.abort();u.aborted?V.abort():u.addEventListener("abort",W),h(k,B=>({...B,state:"scanning",errorKind:void 0,errorMessage:void 0}));const se={isSuperseded:()=>(t().searchScanState?.id??-1)!==k,getResultCount:()=>t().searchScanState?.results.length??0,ingestTileMatches:B=>b(k,w,B,g),setCoverage:B=>{h(k,z=>B>z.scanRadiusFullyCovered?{...z,scanRadiusFullyCovered:B}:z),v?.(B)}},ee=Ua({signal:V.signal,world:O,query:R,origin:w,worldBorder:t().worldBorder,maxInFlight:Math.max(1,Wr(t().concurrentWorkers)-1),progress:o,adapter:se,shouldContinue:p});i=ee.then(B=>B.settled,()=>{});let L;try{L=await ee}catch(B){L={superseded:!1,error:B,exhausted:!1}}finally{u.removeEventListener("abort",W),s===Y&&(s=null)}if(L.error!==void 0){const B=L.error instanceof Error?L.error:new Error(String(L.error));return re(new Error("Scan failed",{cause:B})),_===a&&h(k,z=>({...z,state:"error",errorKind:"unexpected",errorMessage:B.message,scanStartTime:void 0,scanEndTime:void 0})),"error"}return!L.superseded&&_===a&&h(k,B=>B.state==="scanning"?{...B,state:u.aborted?"timeout":"idle",scanStartTime:void 0,scanEndTime:void 0}:B),L.superseded?"superseded":L.exhausted?"completed":"stopped"}finally{_===a&&h(m,E=>E.foregroundScan?{...E,foregroundScan:!1}:E)}}async function y(m,u){const p=Xe.EXTEND,g=Date.now(),v=g+p.MAX;u(g,v);const _=Gt(p.MAX);try{await c(m,_.signal,({totalResults:E})=>E<pe,()=>{})}finally{_.dispose()}}function h(m,u){const p=t().searchScanState;if(!p||p.id!==m)return;const g=u(p);g!==p&&e({searchScanState:g})}function f(m,u){if(m.anchor.kind!=="poi")return vo();const p=u.anchorPois[0];let g=p,v=1;for(;n.has(g);)g=`${p}/${v}`,v++;return n.add(g),g}function b(m,u,p,g){const v=t().searchScanState;if(!v||v.id!==m)return 0;const _=[];for(const k of p){if(k.dedupeKey!==void 0){if(r.has(k.dedupeKey))continue;r.add(k.dedupeKey)}const R=k.worldX-u[0],w=k.worldZ-u[1];_.push({id:f(v.searchQuery,k),worldX:k.worldX,worldZ:k.worldZ,worldY:k.worldY,distance:Math.round(Math.sqrt(R*R+w*w)),chunk:k.chunk,data:k.data,dedupeKey:k.dedupeKey,anchorPois:k.anchorPois,regionPois:k.regionPois})}if(_.length===0)return 0;_.sort((k,R)=>k.distance-R.distance);const E=v.results.length;e({searchScanState:{...v,results:[...v.results,..._].slice(0,pe)}});for(let k=0;k<_.length;k++)g(_[k],E+k);return _.length}return{advanceScan:c,runTimedBackgroundScan:y,updateScanState:h,stopCurrentScan:l,resetScanBuffers:d}}function Gt(e){const t=new AbortController,o=new Set,r=n=>{if(t.signal.aborted)return;const s=setTimeout(()=>{o.delete(s),t.abort()},n);o.add(s)};return r(e),{signal:t.signal,abortAfter:r,dispose(){for(const n of o)clearTimeout(n);o.clear()}}}function Xa(e){const t=e?.filledArea;return typeof e=="object"&&e!==null&&e.type==="biome-patch"&&typeof e.bounds=="object"&&typeof t=="object"&&t!==null&&typeof t.blocks=="number"&&typeof t.exact=="boolean"}const ut=[64,64,64,64];function Ga(e,t,o){const r=e.getView().getResolution()??1,n=t.anchor,s=Xr([o.worldX,o.worldZ]),i=Ja(e,s,t,o);switch(n.kind){case"cluster":{const a=n.radius.meters,l=Math.max(i,Jt(e,s,[o.worldX-a,o.worldZ-a,o.worldX+a,o.worldZ+a])),d=yt(n.members.map(c=>c.poi.type));return Ae(r,l,d)}case"biome-patch":{if(!Xa(o.data))return Ae(r,i,1/0);const{minX:a,minZ:l,maxX:d,maxZ:c}=o.data.bounds,y=Math.max(i,Jt(e,s,[a,l,d,c]));return Ae(r,y,1/0)}case"poi":{const a=yt([n.poi.type]);return Ae(r,i,a)}}}function Ja(e,t,o,r){let n=0;for(const s of o.regions)n=Math.max(n,s.shape.kind==="circle"?s.shape.radius:s.shape.inradius);return n===0?-1/0:Jt(e,t,[r.worldX-n,r.worldZ-n,r.worldX+n,r.worldZ+n])}function Jt(e,t,o){const r=e.getView(),n=e.getSize();if(!n)return-1/0;const s=(n[0]-ut[1]-ut[3])/2,i=(n[1]-ut[0]-ut[2])/2;if(s<=0||i<=0)return-1/0;const[a,l,d,c]=ma(o),y=r.getRotation(),h=Math.cos(y),f=Math.sin(y);let b=0;for(const[m,u]of[[a,l],[a,c],[d,l],[d,c]]){const p=m-t[0],g=u-t[1],v=h*p+f*g,_=-f*p+h*g;b=Math.max(b,Math.abs(v)/s,Math.abs(_)/i)}return Number.isFinite(b)?b:-1/0}function Za(e,t,o){const[r,n,s,i]=e;return Math.hypot((s-r)/2*t*o,(i-n)/2*t*o)}function Qa(e){const t=e.getSize();return t?fa(e.getView().calculateExtent(t)):null}function Ya(e,t){return!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0?1:t/e}function Ka(e,t){const o=e.getView().getResolution()??1,r=Ae(o,t.min??-1/0,t.max??1/0);return{changed:r!==o,currentResolution:o,resolution:r}}const qa=(e,t)=>{let o=null,r=1;const{advanceScan:n,runTimedBackgroundScan:s,updateScanState:i,stopCurrentScan:a,resetScanBuffers:l}=$a(e,t);function d(h,f){if(t().showPois(Gr(f)),t().setDimension(f.dimension),f.anchor.kind==="biome-patch"){t().setShowBiomes(!0);const b=za(f.anchor.scanHeight);b!=null&&t().setBiomeHeight(b)}}function c(h,f){const b=h.getView().getCenter(),m=b!=null?ua(b):[t().center.x,t().center.z],u=gt(t().dimension,f.dimension);return[Math.round(m[0]*u),Math.round(m[1]*u)]}function y(h,f,b){d(h,f),h.getView().animate({center:Xr([b.worldX,b.worldZ]),resolution:Ga(h,f,b),duration:zo}),e({selectedFeature:Js(f,b)})}return{searchUiState:"off",recentSearches:[],advancedSearchBetaDismissed:!1,openSearch(h){ge(t()).disableSearch||(t().searchUiState==="off"?(Pa(h),e({searchUiState:"select"}),o?.(),o=tl(()=>t().closeSearch())):t().openSearchSelect())},closeSearch(){a(),l(),o?.(),e(h=>({searchUiState:"off",searchScanState:void 0,selectedFeature:h.selectedFeature?.type==="searchOrigin"||h.selectedFeature?.type==="searchResult"?null:h.selectedFeature}))},openSearchSelect(){e({searchUiState:"select"})},closeSearchSelect(){t().searchScanState==null?t().closeSearch():e({searchUiState:"idle"})},openScanResults(){e({searchUiState:"results"})},closeScanResults(){e({searchUiState:"idle"})},openAdvancedSearch(h){Va(h),e({searchUiState:"advanced"})},closeAdvancedSearch(){t().searchScanState==null?t().closeSearch():e({searchUiState:"idle"})},async startScan(h,f,b){const m=Qa(h);if(m==null)return;Ra(f,b);const u=performance.now();let p=null;a();const[g,v,_,E]=m,k=gt(t().dimension,f.dimension),R=[Math.round((g+_)/2*k),Math.round((v+E)/2*k)];let w=1;const O=++r;let U="";try{U=da(f)}catch(N){re(N),U=vo()}if(e({searchUiState:"idle",searchScanState:{id:O,searchQuery:f,results:[],selectedResult:void 0,origin:R,scanRadiusFullyCovered:0,state:"scanning",foregroundScan:!0},recentSearches:[{id:U,query:f},...t().recentSearches.filter(N=>N.id!==U)].slice(0,Qs)}),d(h,f),pa(f)){const{currentResolution:N,resolution:H,changed:ce}=Ka(h,{max:yt([f.anchor.poi.type])});ce&&(w=Ya(N,H),h.getView().animate({resolution:H},{duration:zo}))}const V=Gt(Xe.INITIAL.MAX),Y=Za(m,k,w);let W=!1,se=!1,ee=!1,L=!1,B=0,z=0;const le=()=>{L||!se||!ee||(L=!0,V.abortAfter(Xe.INITIAL.TRAILING))};let P;try{P=await n(O,V.signal,({totalResults:N})=>N<pe,(N,H)=>{if(se=!0,B=Math.max(B,H+1),p===null&&(p=performance.now()-u),le(),W)return;W=!0;const ce=t().searchScanState;O===ce?.id&&(e({searchScanState:{...ce,selectedResult:H,foregroundScan:!1}}),y(h,f,N))},N=>{z=Math.max(z,N),N>=Y&&(ee=!0,le())})}finally{V.dispose()}const ke=V.signal.aborted||P==="completed",me=t().searchScanState;if(!(P==="superseded"||me!=null&&me.id!==O)){const N=Math.min(B,pe),H=P==="error"?"error":N>0?"results":ke?"no-results":"stopped";Aa(f,b,{outcome:H,nrResults:N,timeToFirstResultMs:p,durationMs:performance.now()-u,radiusCovered:z})}const be=me?.id===O&&me.errorKind==="incompatible-query";(!se&&ke||be)&&t().searchUiState==="idle"&&t().openScanResults()},stopScan(h){h!=null&&t().searchScanState?.state==="scanning"&&Ma(h),a();const f=t().searchScanState;f&&f.state!=="idle"&&e({searchScanState:{...f,state:"idle",scanStartTime:void 0,scanEndTime:void 0}})},prevScanResult(h,f){const b=t().searchScanState;if(b?.selectedResult==null)return;Uo("prev",f,!1);const m=Math.max(0,b.selectedResult-1);m!==b.selectedResult&&e({searchScanState:{...b,selectedResult:m}}),y(h,b.searchQuery,b.results[m])},async nextScanResult(h,f){const b=t().searchScanState;if(b==null)return;const m=(b.selectedResult??-1)+1;Uo("next",f,m>=b.results.length);const u=()=>{let p;i(b.id,g=>(p=g.results[m],p?{...g,selectedResult:m,foregroundScan:!1}:g)),p&&y(h,b.searchQuery,p)};if(m<b.results.length)u();else if(b.results.length<pe){t().stopScan();let p=!1;i(b.id,v=>({...v,foregroundScan:!0}));const g=Gt(Xe.NEXT.MAX);try{await n(b.id,g.signal,({totalResults:v})=>v<pe,()=>{p||t().searchScanState?.id!==b.id||(p=!0,g.abortAfter(Xe.NEXT.TRAILING),u())})}finally{g.dispose()}}},async extendScan(){const h=t().searchScanState;h==null||h.results.length>=pe||(Oa(h.searchQuery),t().stopScan(),await s(h.id,(f,b)=>{e(()=>({searchScanState:{...h,state:"scanning",errorKind:void 0,errorMessage:void 0,foregroundScan:!1,scanStartTime:f,scanEndTime:b}}))}))},async restartScanFromViewportCenter(h){const f=t().searchScanState;if(f==null)return;Ba(f.searchQuery);const b=c(h,f.searchQuery);t().stopScan(),d(h,f.searchQuery);const m=++r;await s(m,(u,p)=>{e(g=>({searchUiState:"results",selectedFeature:Zs(g.selectedFeature,f),searchScanState:{...f,id:m,results:[],selectedResult:void 0,origin:b,scanRadiusFullyCovered:0,state:"scanning",errorKind:void 0,errorMessage:void 0,foregroundScan:!1,scanStartTime:u,scanEndTime:p}}))})},selectScanResult(h,f){const b=t().searchScanState;b==null||f<0||f>=b.results.length||(e({searchScanState:{...b,selectedResult:f}}),y(h,b.searchQuery,b.results[f]))},dismissAdvancedSearchBeta(){e({advancedSearchBetaDismissed:!0})}}},el=()=>({recentSearches:D(e=>Array.isArray(e)&&e.every(t=>typeof t=="object"&&t!==null&&typeof t.id=="string"&&Ia(t.query))),advancedSearchBetaDismissed:D(e=>typeof e=="boolean")});function tl(e){const t=ue(Oe.getState()),o=Oe.subscribe(()=>{ue(Oe.getState())!==t&&(o(),e())});return o}const ol=e=>(...t)=>{const o=go(e),r={...sa(...t),...Ds(...t),...Ai(...t),...Ii(...t),...$s(...t),...ei(...t),...Ms(...t),...pi(...t),...qa(...t),config:e};return Ft(r,o)};function Bt(e,t,o){const r={...e,...t};return e.pois&&t.pois&&(o.poiMode==="disable-previous"?r.pois={...Object.fromEntries(Object.entries(e.pois).map(([n])=>[n,!1])),...t.pois}:o.poiMode==="merge"&&(r.pois={...e.pois,...t.pois})),t.selectedFeature!==void 0&&Object.assign(r,Dt(r,t.selectedFeature)),r}const je=1,$o={1:e=>{const o=Object.entries({momentumPanning:!0,enableRotation:!0,fadeInBiomeTiles:!0,copyCoordinatesWithTp:!0,poiClusterRadius:3,concurrentWorkers:"auto",worldBorder:{centerX:0,centerZ:0,size:59999968}}).filter(([r,n])=>r in e&&!_e(e[r],n)).map(([r])=>r);return{...e,_userConfiguredSettings:o}}};function rl(e){let t=e;for(let o=(e.version??0)+1;o<=je;o++)$o[o]!=null&&(t={version:o,state:$o[o](t.state)});return t}function on(e,t,o){const{noTrailing:r=!1,noLeading:n=!1,debounceMode:s=void 0}=o||{};let i,a=!1,l=0;function d(){i&&window.clearTimeout(i)}function c(h){const{upcomingOnly:f=!1}=h||{};d(),a=!f}function y(...h){const f=this,b=Date.now()-l;if(a)return;function m(){l=Date.now(),t.apply(f,h)}function u(){i=void 0}!n&&s&&!i&&m(),d(),s===void 0&&b>e?n?(l=Date.now(),r||(i=window.setTimeout(s?u:m,e))):m():r!==!0&&(i=window.setTimeout(s?u:m,s===void 0?e-b:e))}return y.cancel=c,y}const nl=1e3,sl="Connection to Indexed Database server lost";let Zt=null;function il(e){Zt=e}const We={...ia(),...gi(),...ti(),...js(),...Oi(),...Ci(),...Vs(),...el()};async function al(e){const t=await So?.getItem(e);return t??{version:je,state:fl()}}const ll=on(nl,cl,{noLeading:!1,noTrailing:!1});async function cl(e,t){await So.setItem(e,t)}async function dl(e){await So.removeItem(e)}let Xo=null;function ul(e){return e instanceof Error&&e.message.includes(sl)}let Go=!1;function Ue(e,t){if(ul(t)){Zt?.("safari-idb"),ae("CB_ChunkApp_SafariIdbStoragePersistenceError");return}qe(`storage ${e} error `,{message:t instanceof Error?t.message:null}),Go||(Go=!0,re(new Error(`storage ${e} error`,{cause:t}))),Zt?.("generic")}const Mt=br(()=>({async getItem(e){try{return await hs(e)||null}catch(t){return Ue("getItem",t),null}},async setItem(e,t){if(Xo!==t){try{await ms(e,t)}catch(o){Ue("setItem",o);return}Xo=t}},async removeItem(e){try{await fs(e)}catch(t){Ue("removeItem",t);return}}})),So={async getItem(e){let t;try{t=await Mt?.getItem(e)}catch(s){return Ue("getItem",s),null}if(!t||t.version==null)return null;const o=rl(t),r=new Set(Object.keys(We)),n=Object.keys(o.state??{}).filter(s=>!r.has(s));return n.length>0&&ae("CB_ChunkApp_StoreUnrecognizedPropsDropped",{keys:n}),{version:Math.min(o.version??0,je),state:Object.fromEntries(Object.keys(We).map(s=>{const i=o.state[s];if(i==null)return!1;const a=We[s]?.load(i);return a?.isValid?[s,a.value]:(re(new Error(`store validation error: ${s}`)),!1)}).filter(Boolean))}},async setItem(e,{version:t,state:o}){const r=Object.fromEntries(Object.keys(We).map(n=>{const s=n,i=We[s],a=o[s];return[n,a===void 0||i?.save==null?a:i.save(a)]}));try{await Mt?.setItem(e,{version:t,state:r})}catch(n){Ue("setItem",n)}},async removeItem(e){try{await Mt?.removeItem(e)}catch(t){Ue("removeItem",t)}}};function fl(){const e={};try{const t=Ge("cb_finder_lastseed");t!=null&&(e.seed=t);const o=Ge("cb_finder_lastplatform");o!=null&&to(o)&&(e.version=o);const r=Ge("cb_finder_lastpois");if(r!=null){const s=JSON.parse(r);if(s?.pois&&Array.isArray(s.pois?.on)&&Array.isArray(s.pois?.off)){const i=Object.values(A);e.pois=Object.fromEntries([...s.pois.on.map(a=>[`${a}`,!0]),...s.pois.off.map(a=>[`${a}`,!1])].filter(([a])=>i.includes(a))),s.pois.on.includes("biomes")?e.showBiomes=!0:s.pois.off.includes("biomes")&&(e.showBiomes=!1)}}const n=Ge("CB3_MAP_DATA");if(n!=null){const s=JSON.parse(n);wo(s)?e.markedPois=s:re(new Error("Invalid marked pois in localstorage"))}}catch(t){re(new Error("localStorage error",{cause:t}))}return e}const ml=1e3,rn={...zs(),...yi(),...Xs(),...oi(),...Us()},hl=on(ml,pl,{noLeading:!0,noTrailing:!1});function pl(e){const t=yl(e);t!==window.location.href&&window.history.replaceState(null,"",t)}function nn(){const e=window.location.hash.slice(1);return vl(e)}function gl(e){return ps(window,"hashchange",()=>{const t=nn();e(t)})}function yl(e,t=!1){const o=bl(e,t),r=new URL(window.location.href);return r.hash=o,r.toString()}function bl(e,t){if(!e.config)return"";const o=ge(e),r={};Object.entries(rn).forEach(([,s])=>{s.includeInUrl(o,t)&&Object.assign(r,s.stateToSearchParams(e))});const n=Object.fromEntries(Object.entries(r).filter(([s,i])=>i!=null));return new URLSearchParams(n).toString()}function vl(e){if(e.length>0&&!e.includes("seed="))return wl(e);const o=Object.fromEntries(new URLSearchParams(e).entries()),r={};return Object.entries(rn).forEach(([,n])=>{Object.assign(r,n.searchParamsToState(o))}),r}function wl(e){return{seed:e}}const _l=typeof window<"u"?Es:(e=>e);let Oe;function Sl(e){if(Oe!=null&&typeof window<"u")throw new Error("store can only be replaced on server");Oe=xl(e)}if(typeof window<"u"){const e=document.getElementById("finder-app-config");if(!e)throw new Error("config element not found");const t=JSON.parse(e.dataset.config);Sl(t),window.__cbGetAppStateForDiagnostics=()=>{const o=Oe.getState();return{hasHydrated:o.hasHydrated,initializationFailures:o.initializationFailures,showBiomes:o.showBiomes,dimBiomes:o.dimBiomes,renderTerrain:o.renderTerrain,dimension:o.dimension,resolution:o.resolution,version:o.version}}}function xl(e){const t=go(e),o=vs(Ts(Is(_l(ol(e),{name:"cb3finder-storage",version:je,migrate:(r,n)=>(re(new Error("store version mismatch. expected "+je+", got "+n)),r),onRehydrateStorage:r=>async(n,s)=>{s&&re(s),await r.onHydrate()&&gl(a=>{const l=Ft(a,ge(o.getState()));o.setState(Bt(o.getState(),l,{poiMode:"disable-previous"}))})},merge:(r,n)=>{const s=r.fromStorage!=null?Bt(n,r.fromStorage,{poiMode:"merge"}):n,i=Bt(s,r.fromUrl,{poiMode:"disable-previous"});return Ft(i,ge(n))},storage:{async getItem(r){const n=nn();Object.keys(n).length>0&&ae("CB_ChunkApp_LaunchedWithRoute",{parameterCount:Object.keys(n).length});const s=t.disablePersistence?{version:je,state:null}:await al(r);return{version:s.version,state:{fromStorage:s.state,fromUrl:n}}},async setItem(r,n){la(n.state)&&(t.disablePersistence||await ll(r,n),hl(n.state))},async removeItem(r){await dl(r)}}})),{enabled:!1}));return il(()=>{o.getState().showUiAlert("storagePersistenceError")}),o}function sn(e){var t,o,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(o=sn(e[t]))&&(r&&(r+=" "),r+=o)}else for(o in e)e[o]&&(r&&(r+=" "),r+=o);return r}function Se(){for(var e,t,o=0,r="",n=arguments.length;o<n;o++)(e=arguments[o])&&(t=sn(e))&&(r&&(r+=" "),r+=t);return r}const Tl=(e,t)=>{const o=new Array(e.length+t.length);for(let r=0;r<e.length;r++)o[r]=e[r];for(let r=0;r<t.length;r++)o[e.length+r]=t[r];return o},kl=(e,t)=>({classGroupId:e,validator:t}),an=(e=new Map,t=null,o)=>({nextPart:e,validators:t,classGroupId:o}),St="-",Jo=[],Il="arbitrary..",Cl=e=>{const t=Pl(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:i=>{if(i.startsWith("[")&&i.endsWith("]"))return El(i);const a=i.split(St),l=a[0]===""&&a.length>1?1:0;return ln(a,l,t)},getConflictingClassGroupIds:(i,a)=>{if(a){const l=r[i],d=o[i];return l?d?Tl(d,l):l:d||Jo}return o[i]||Jo}}},ln=(e,t,o)=>{if(e.length-t===0)return o.classGroupId;const n=e[t],s=o.nextPart.get(n);if(s){const d=ln(e,t+1,s);if(d)return d}const i=o.validators;if(i===null)return;const a=t===0?e.join(St):e.slice(t).join(St),l=i.length;for(let d=0;d<l;d++){const c=i[d];if(c.validator(a))return c.classGroupId}},El=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),o=t.indexOf(":"),r=t.slice(0,o);return r?Il+r:void 0})(),Pl=e=>{const{theme:t,classGroups:o}=e;return Rl(o,t)},Rl=(e,t)=>{const o=an();for(const r in e){const n=e[r];xo(n,o,r,t)}return o},xo=(e,t,o,r)=>{const n=e.length;for(let s=0;s<n;s++){const i=e[s];Al(i,t,o,r)}},Al=(e,t,o,r)=>{if(typeof e=="string"){Ol(e,t,o);return}if(typeof e=="function"){Bl(e,t,o,r);return}Ml(e,t,o,r)},Ol=(e,t,o)=>{const r=e===""?t:cn(t,e);r.classGroupId=o},Bl=(e,t,o,r)=>{if(Vl(e)){xo(e(r),t,o,r);return}t.validators===null&&(t.validators=[]),t.validators.push(kl(o,e))},Ml=(e,t,o,r)=>{const n=Object.entries(e),s=n.length;for(let i=0;i<s;i++){const[a,l]=n[i];xo(l,cn(t,a),o,r)}},cn=(e,t)=>{let o=e;const r=t.split(St),n=r.length;for(let s=0;s<n;s++){const i=r[s];let a=o.nextPart.get(i);a||(a=an(),o.nextPart.set(i,a)),o=a}return o},Vl=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,zl=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,o=Object.create(null),r=Object.create(null);const n=(s,i)=>{o[s]=i,t++,t>e&&(t=0,r=o,o=Object.create(null))};return{get(s){let i=o[s];if(i!==void 0)return i;if((i=r[s])!==void 0)return n(s,i),i},set(s,i){s in o?o[s]=i:n(s,i)}}},Qt="!",Zo=":",Nl=[],Qo=(e,t,o,r,n)=>({modifiers:e,hasImportantModifier:t,baseClassName:o,maybePostfixModifierPosition:r,isExternal:n}),Ll=e=>{const{prefix:t,experimentalParseClassName:o}=e;let r=n=>{const s=[];let i=0,a=0,l=0,d;const c=n.length;for(let m=0;m<c;m++){const u=n[m];if(i===0&&a===0){if(u===Zo){s.push(n.slice(l,m)),l=m+1;continue}if(u==="/"){d=m;continue}}u==="["?i++:u==="]"?i--:u==="("?a++:u===")"&&a--}const y=s.length===0?n:n.slice(l);let h=y,f=!1;y.endsWith(Qt)?(h=y.slice(0,-1),f=!0):y.startsWith(Qt)&&(h=y.slice(1),f=!0);const b=d&&d>l?d-l:void 0;return Qo(s,f,h,b)};if(t){const n=t+Zo,s=r;r=i=>i.startsWith(n)?s(i.slice(n.length)):Qo(Nl,!1,i,void 0,!0)}if(o){const n=r;r=s=>o({className:s,parseClassName:n})}return r},Fl=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((o,r)=>{t.set(o,1e6+r)}),o=>{const r=[];let n=[];for(let s=0;s<o.length;s++){const i=o[s],a=i[0]==="[",l=t.has(i);a||l?(n.length>0&&(n.sort(),r.push(...n),n=[]),r.push(i)):n.push(i)}return n.length>0&&(n.sort(),r.push(...n)),r}},Dl=e=>({cache:zl(e.cacheSize),parseClassName:Ll(e),sortModifiers:Fl(e),...Cl(e)}),jl=/\s+/,Ul=(e,t)=>{const{parseClassName:o,getClassGroupId:r,getConflictingClassGroupIds:n,sortModifiers:s}=t,i=[],a=e.trim().split(jl);let l="";for(let d=a.length-1;d>=0;d-=1){const c=a[d],{isExternal:y,modifiers:h,hasImportantModifier:f,baseClassName:b,maybePostfixModifierPosition:m}=o(c);if(y){l=c+(l.length>0?" "+l:l);continue}let u=!!m,p=r(u?b.substring(0,m):b);if(!p){if(!u){l=c+(l.length>0?" "+l:l);continue}if(p=r(b),!p){l=c+(l.length>0?" "+l:l);continue}u=!1}const g=h.length===0?"":h.length===1?h[0]:s(h).join(":"),v=f?g+Qt:g,_=v+p;if(i.indexOf(_)>-1)continue;i.push(_);const E=n(p,u);for(let k=0;k<E.length;++k){const R=E[k];i.push(v+R)}l=c+(l.length>0?" "+l:l)}return l},Hl=(...e)=>{let t=0,o,r,n="";for(;t<e.length;)(o=e[t++])&&(r=dn(o))&&(n&&(n+=" "),n+=r);return n},dn=e=>{if(typeof e=="string")return e;let t,o="";for(let r=0;r<e.length;r++)e[r]&&(t=dn(e[r]))&&(o&&(o+=" "),o+=t);return o},Wl=(e,...t)=>{let o,r,n,s;const i=l=>{const d=t.reduce((c,y)=>y(c),e());return o=Dl(d),r=o.cache.get,n=o.cache.set,s=a,a(l)},a=l=>{const d=r(l);if(d)return d;const c=Ul(l,o);return n(l,c),c};return s=i,(...l)=>s(Hl(...l))},$l=[],Z=e=>{const t=o=>o[e]||$l;return t.isThemeGetter=!0,t},un=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,fn=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Xl=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,Gl=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Jl=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Zl=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Ql=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Yl=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ve=e=>Xl.test(e),M=e=>!!e&&!Number.isNaN(Number(e)),we=e=>!!e&&Number.isInteger(Number(e)),Vt=e=>e.endsWith("%")&&M(e.slice(0,-1)),he=e=>Gl.test(e),mn=()=>!0,Kl=e=>Jl.test(e)&&!Zl.test(e),To=()=>!1,ql=e=>Ql.test(e),ec=e=>Yl.test(e),tc=e=>!I(e)&&!C(e),oc=e=>Te(e,gn,To),I=e=>un.test(e),Ee=e=>Te(e,yn,Kl),Yo=e=>Te(e,dc,M),rc=e=>Te(e,vn,mn),nc=e=>Te(e,bn,To),Ko=e=>Te(e,hn,To),sc=e=>Te(e,pn,ec),ft=e=>Te(e,wn,ql),C=e=>fn.test(e),$e=e=>Me(e,yn),ic=e=>Me(e,bn),qo=e=>Me(e,hn),ac=e=>Me(e,gn),lc=e=>Me(e,pn),mt=e=>Me(e,wn,!0),cc=e=>Me(e,vn,!0),Te=(e,t,o)=>{const r=un.exec(e);return r?r[1]?t(r[1]):o(r[2]):!1},Me=(e,t,o=!1)=>{const r=fn.exec(e);return r?r[1]?t(r[1]):o:!1},hn=e=>e==="position"||e==="percentage",pn=e=>e==="image"||e==="url",gn=e=>e==="length"||e==="size"||e==="bg-size",yn=e=>e==="length",dc=e=>e==="number",bn=e=>e==="family-name",vn=e=>e==="number"||e==="weight",wn=e=>e==="shadow",uc=()=>{const e=Z("color"),t=Z("font"),o=Z("text"),r=Z("font-weight"),n=Z("tracking"),s=Z("leading"),i=Z("breakpoint"),a=Z("container"),l=Z("spacing"),d=Z("radius"),c=Z("shadow"),y=Z("inset-shadow"),h=Z("text-shadow"),f=Z("drop-shadow"),b=Z("blur"),m=Z("perspective"),u=Z("aspect"),p=Z("ease"),g=Z("animate"),v=()=>["auto","avoid","all","avoid-page","page","left","right","column"],_=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],E=()=>[..._(),C,I],k=()=>["auto","hidden","clip","visible","scroll"],R=()=>["auto","contain","none"],w=()=>[C,I,l],O=()=>[ve,"full","auto",...w()],U=()=>[we,"none","subgrid",C,I],V=()=>["auto",{span:["full",we,C,I]},we,C,I],Y=()=>[we,"auto",C,I],W=()=>["auto","min","max","fr",C,I],se=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ee=()=>["start","end","center","stretch","center-safe","end-safe"],L=()=>["auto",...w()],B=()=>[ve,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...w()],z=()=>[ve,"screen","full","dvw","lvw","svw","min","max","fit",...w()],le=()=>[ve,"screen","full","lh","dvh","lvh","svh","min","max","fit",...w()],P=()=>[e,C,I],ke=()=>[..._(),qo,Ko,{position:[C,I]}],me=()=>["no-repeat",{repeat:["","x","y","space","round"]}],Ve=()=>["auto","cover","contain",ac,oc,{size:[C,I]}],be=()=>[Vt,$e,Ee],N=()=>["","none","full",d,C,I],H=()=>["",M,$e,Ee],ce=()=>["solid","dashed","dotted","double"],Ie=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],K=()=>[M,Vt,qo,Ko],ko=()=>["","none",b,C,I],ot=()=>["none",M,C,I],rt=()=>["none",M,C,I],Pt=()=>[M,C,I],nt=()=>[ve,"full",...w()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[he],breakpoint:[he],color:[mn],container:[he],"drop-shadow":[he],ease:["in","out","in-out"],font:[tc],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[he],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[he],shadow:[he],spacing:["px",M],text:[he],"text-shadow":[he],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",ve,I,C,u]}],container:["container"],columns:[{columns:[M,I,C,a]}],"break-after":[{"break-after":v()}],"break-before":[{"break-before":v()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:E()}],overflow:[{overflow:k()}],"overflow-x":[{"overflow-x":k()}],"overflow-y":[{"overflow-y":k()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:O()}],"inset-x":[{"inset-x":O()}],"inset-y":[{"inset-y":O()}],start:[{"inset-s":O(),start:O()}],end:[{"inset-e":O(),end:O()}],"inset-bs":[{"inset-bs":O()}],"inset-be":[{"inset-be":O()}],top:[{top:O()}],right:[{right:O()}],bottom:[{bottom:O()}],left:[{left:O()}],visibility:["visible","invisible","collapse"],z:[{z:[we,"auto",C,I]}],basis:[{basis:[ve,"full","auto",a,...w()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[M,ve,"auto","initial","none",I]}],grow:[{grow:["",M,C,I]}],shrink:[{shrink:["",M,C,I]}],order:[{order:[we,"first","last","none",C,I]}],"grid-cols":[{"grid-cols":U()}],"col-start-end":[{col:V()}],"col-start":[{"col-start":Y()}],"col-end":[{"col-end":Y()}],"grid-rows":[{"grid-rows":U()}],"row-start-end":[{row:V()}],"row-start":[{"row-start":Y()}],"row-end":[{"row-end":Y()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":W()}],"auto-rows":[{"auto-rows":W()}],gap:[{gap:w()}],"gap-x":[{"gap-x":w()}],"gap-y":[{"gap-y":w()}],"justify-content":[{justify:[...se(),"normal"]}],"justify-items":[{"justify-items":[...ee(),"normal"]}],"justify-self":[{"justify-self":["auto",...ee()]}],"align-content":[{content:["normal",...se()]}],"align-items":[{items:[...ee(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ee(),{baseline:["","last"]}]}],"place-content":[{"place-content":se()}],"place-items":[{"place-items":[...ee(),"baseline"]}],"place-self":[{"place-self":["auto",...ee()]}],p:[{p:w()}],px:[{px:w()}],py:[{py:w()}],ps:[{ps:w()}],pe:[{pe:w()}],pbs:[{pbs:w()}],pbe:[{pbe:w()}],pt:[{pt:w()}],pr:[{pr:w()}],pb:[{pb:w()}],pl:[{pl:w()}],m:[{m:L()}],mx:[{mx:L()}],my:[{my:L()}],ms:[{ms:L()}],me:[{me:L()}],mbs:[{mbs:L()}],mbe:[{mbe:L()}],mt:[{mt:L()}],mr:[{mr:L()}],mb:[{mb:L()}],ml:[{ml:L()}],"space-x":[{"space-x":w()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":w()}],"space-y-reverse":["space-y-reverse"],size:[{size:B()}],"inline-size":[{inline:["auto",...z()]}],"min-inline-size":[{"min-inline":["auto",...z()]}],"max-inline-size":[{"max-inline":["none",...z()]}],"block-size":[{block:["auto",...le()]}],"min-block-size":[{"min-block":["auto",...le()]}],"max-block-size":[{"max-block":["none",...le()]}],w:[{w:[a,"screen",...B()]}],"min-w":[{"min-w":[a,"screen","none",...B()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[i]},...B()]}],h:[{h:["screen","lh",...B()]}],"min-h":[{"min-h":["screen","lh","none",...B()]}],"max-h":[{"max-h":["screen","lh",...B()]}],"font-size":[{text:["base",o,$e,Ee]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,cc,rc]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Vt,I]}],"font-family":[{font:[ic,nc,t]}],"font-features":[{"font-features":[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[n,C,I]}],"line-clamp":[{"line-clamp":[M,"none",C,Yo]}],leading:[{leading:[s,...w()]}],"list-image":[{"list-image":["none",C,I]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",C,I]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:P()}],"text-color":[{text:P()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ce(),"wavy"]}],"text-decoration-thickness":[{decoration:[M,"from-font","auto",C,Ee]}],"text-decoration-color":[{decoration:P()}],"underline-offset":[{"underline-offset":[M,"auto",C,I]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:w()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",C,I]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",C,I]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ke()}],"bg-repeat":[{bg:me()}],"bg-size":[{bg:Ve()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},we,C,I],radial:["",C,I],conic:[we,C,I]},lc,sc]}],"bg-color":[{bg:P()}],"gradient-from-pos":[{from:be()}],"gradient-via-pos":[{via:be()}],"gradient-to-pos":[{to:be()}],"gradient-from":[{from:P()}],"gradient-via":[{via:P()}],"gradient-to":[{to:P()}],rounded:[{rounded:N()}],"rounded-s":[{"rounded-s":N()}],"rounded-e":[{"rounded-e":N()}],"rounded-t":[{"rounded-t":N()}],"rounded-r":[{"rounded-r":N()}],"rounded-b":[{"rounded-b":N()}],"rounded-l":[{"rounded-l":N()}],"rounded-ss":[{"rounded-ss":N()}],"rounded-se":[{"rounded-se":N()}],"rounded-ee":[{"rounded-ee":N()}],"rounded-es":[{"rounded-es":N()}],"rounded-tl":[{"rounded-tl":N()}],"rounded-tr":[{"rounded-tr":N()}],"rounded-br":[{"rounded-br":N()}],"rounded-bl":[{"rounded-bl":N()}],"border-w":[{border:H()}],"border-w-x":[{"border-x":H()}],"border-w-y":[{"border-y":H()}],"border-w-s":[{"border-s":H()}],"border-w-e":[{"border-e":H()}],"border-w-bs":[{"border-bs":H()}],"border-w-be":[{"border-be":H()}],"border-w-t":[{"border-t":H()}],"border-w-r":[{"border-r":H()}],"border-w-b":[{"border-b":H()}],"border-w-l":[{"border-l":H()}],"divide-x":[{"divide-x":H()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":H()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ce(),"hidden","none"]}],"divide-style":[{divide:[...ce(),"hidden","none"]}],"border-color":[{border:P()}],"border-color-x":[{"border-x":P()}],"border-color-y":[{"border-y":P()}],"border-color-s":[{"border-s":P()}],"border-color-e":[{"border-e":P()}],"border-color-bs":[{"border-bs":P()}],"border-color-be":[{"border-be":P()}],"border-color-t":[{"border-t":P()}],"border-color-r":[{"border-r":P()}],"border-color-b":[{"border-b":P()}],"border-color-l":[{"border-l":P()}],"divide-color":[{divide:P()}],"outline-style":[{outline:[...ce(),"none","hidden"]}],"outline-offset":[{"outline-offset":[M,C,I]}],"outline-w":[{outline:["",M,$e,Ee]}],"outline-color":[{outline:P()}],shadow:[{shadow:["","none",c,mt,ft]}],"shadow-color":[{shadow:P()}],"inset-shadow":[{"inset-shadow":["none",y,mt,ft]}],"inset-shadow-color":[{"inset-shadow":P()}],"ring-w":[{ring:H()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:P()}],"ring-offset-w":[{"ring-offset":[M,Ee]}],"ring-offset-color":[{"ring-offset":P()}],"inset-ring-w":[{"inset-ring":H()}],"inset-ring-color":[{"inset-ring":P()}],"text-shadow":[{"text-shadow":["none",h,mt,ft]}],"text-shadow-color":[{"text-shadow":P()}],opacity:[{opacity:[M,C,I]}],"mix-blend":[{"mix-blend":[...Ie(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Ie()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[M]}],"mask-image-linear-from-pos":[{"mask-linear-from":K()}],"mask-image-linear-to-pos":[{"mask-linear-to":K()}],"mask-image-linear-from-color":[{"mask-linear-from":P()}],"mask-image-linear-to-color":[{"mask-linear-to":P()}],"mask-image-t-from-pos":[{"mask-t-from":K()}],"mask-image-t-to-pos":[{"mask-t-to":K()}],"mask-image-t-from-color":[{"mask-t-from":P()}],"mask-image-t-to-color":[{"mask-t-to":P()}],"mask-image-r-from-pos":[{"mask-r-from":K()}],"mask-image-r-to-pos":[{"mask-r-to":K()}],"mask-image-r-from-color":[{"mask-r-from":P()}],"mask-image-r-to-color":[{"mask-r-to":P()}],"mask-image-b-from-pos":[{"mask-b-from":K()}],"mask-image-b-to-pos":[{"mask-b-to":K()}],"mask-image-b-from-color":[{"mask-b-from":P()}],"mask-image-b-to-color":[{"mask-b-to":P()}],"mask-image-l-from-pos":[{"mask-l-from":K()}],"mask-image-l-to-pos":[{"mask-l-to":K()}],"mask-image-l-from-color":[{"mask-l-from":P()}],"mask-image-l-to-color":[{"mask-l-to":P()}],"mask-image-x-from-pos":[{"mask-x-from":K()}],"mask-image-x-to-pos":[{"mask-x-to":K()}],"mask-image-x-from-color":[{"mask-x-from":P()}],"mask-image-x-to-color":[{"mask-x-to":P()}],"mask-image-y-from-pos":[{"mask-y-from":K()}],"mask-image-y-to-pos":[{"mask-y-to":K()}],"mask-image-y-from-color":[{"mask-y-from":P()}],"mask-image-y-to-color":[{"mask-y-to":P()}],"mask-image-radial":[{"mask-radial":[C,I]}],"mask-image-radial-from-pos":[{"mask-radial-from":K()}],"mask-image-radial-to-pos":[{"mask-radial-to":K()}],"mask-image-radial-from-color":[{"mask-radial-from":P()}],"mask-image-radial-to-color":[{"mask-radial-to":P()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":_()}],"mask-image-conic-pos":[{"mask-conic":[M]}],"mask-image-conic-from-pos":[{"mask-conic-from":K()}],"mask-image-conic-to-pos":[{"mask-conic-to":K()}],"mask-image-conic-from-color":[{"mask-conic-from":P()}],"mask-image-conic-to-color":[{"mask-conic-to":P()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ke()}],"mask-repeat":[{mask:me()}],"mask-size":[{mask:Ve()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",C,I]}],filter:[{filter:["","none",C,I]}],blur:[{blur:ko()}],brightness:[{brightness:[M,C,I]}],contrast:[{contrast:[M,C,I]}],"drop-shadow":[{"drop-shadow":["","none",f,mt,ft]}],"drop-shadow-color":[{"drop-shadow":P()}],grayscale:[{grayscale:["",M,C,I]}],"hue-rotate":[{"hue-rotate":[M,C,I]}],invert:[{invert:["",M,C,I]}],saturate:[{saturate:[M,C,I]}],sepia:[{sepia:["",M,C,I]}],"backdrop-filter":[{"backdrop-filter":["","none",C,I]}],"backdrop-blur":[{"backdrop-blur":ko()}],"backdrop-brightness":[{"backdrop-brightness":[M,C,I]}],"backdrop-contrast":[{"backdrop-contrast":[M,C,I]}],"backdrop-grayscale":[{"backdrop-grayscale":["",M,C,I]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[M,C,I]}],"backdrop-invert":[{"backdrop-invert":["",M,C,I]}],"backdrop-opacity":[{"backdrop-opacity":[M,C,I]}],"backdrop-saturate":[{"backdrop-saturate":[M,C,I]}],"backdrop-sepia":[{"backdrop-sepia":["",M,C,I]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":w()}],"border-spacing-x":[{"border-spacing-x":w()}],"border-spacing-y":[{"border-spacing-y":w()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",C,I]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[M,"initial",C,I]}],ease:[{ease:["linear","initial",p,C,I]}],delay:[{delay:[M,C,I]}],animate:[{animate:["none",g,C,I]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[m,C,I]}],"perspective-origin":[{"perspective-origin":E()}],rotate:[{rotate:ot()}],"rotate-x":[{"rotate-x":ot()}],"rotate-y":[{"rotate-y":ot()}],"rotate-z":[{"rotate-z":ot()}],scale:[{scale:rt()}],"scale-x":[{"scale-x":rt()}],"scale-y":[{"scale-y":rt()}],"scale-z":[{"scale-z":rt()}],"scale-3d":["scale-3d"],skew:[{skew:Pt()}],"skew-x":[{"skew-x":Pt()}],"skew-y":[{"skew-y":Pt()}],transform:[{transform:[C,I,"","none","gpu","cpu"]}],"transform-origin":[{origin:E()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:nt()}],"translate-x":[{"translate-x":nt()}],"translate-y":[{"translate-y":nt()}],"translate-z":[{"translate-z":nt()}],"translate-none":["translate-none"],accent:[{accent:P()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:P()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",C,I]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mbs":[{"scroll-mbs":w()}],"scroll-mbe":[{"scroll-mbe":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pbs":[{"scroll-pbs":w()}],"scroll-pbe":[{"scroll-pbe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",C,I]}],fill:[{fill:["none",...P()]}],"stroke-w":[{stroke:[M,$e,Ee,Yo]}],stroke:[{stroke:["none",...P()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},fc=Wl(uc);function mc(...e){return fc(Se(e))}var et=e=>typeof e=="number"&&!isNaN(e),Be=e=>typeof e=="string",ye=e=>typeof e=="function",hc=e=>Be(e)||et(e),Yt=e=>Be(e)||ye(e)?e:null,pc=(e,t)=>e===!1||et(e)&&e>0?e:t,Kt=e=>X.isValidElement(e)||Be(e)||ye(e)||et(e);function gc(e,t,o=300){let{scrollHeight:r,style:n}=e;requestAnimationFrame(()=>{n.minHeight="initial",n.height=r+"px",n.transition=`all ${o}ms`,requestAnimationFrame(()=>{n.height="0",n.padding="0",n.margin="0",setTimeout(t,o)})})}function yc({enter:e,exit:t,appendPosition:o=!1,collapse:r=!0,collapseDuration:n=300}){return function({children:s,position:i,preventExitTransition:a,done:l,nodeRef:d,isIn:c,playToast:y}){let h=o?`${e}--${i}`:e,f=o?`${t}--${i}`:t,b=X.useRef(0);return X.useLayoutEffect(()=>{let m=d.current,u=h.split(" "),p=g=>{g.target===d.current&&(y(),m.removeEventListener("animationend",p),m.removeEventListener("animationcancel",p),b.current===0&&g.type!=="animationcancel"&&m.classList.remove(...u))};m.classList.add(...u),m.addEventListener("animationend",p),m.addEventListener("animationcancel",p)},[]),X.useEffect(()=>{let m=d.current,u=()=>{m.removeEventListener("animationend",u),r?gc(m,l,n):l()};c||(a?u():(b.current=1,m.className+=` ${f}`,m.addEventListener("animationend",u)))},[c]),F.createElement(F.Fragment,null,s)}}function er(e,t){return{content:_n(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function _n(e,t,o=!1){return X.isValidElement(e)&&!Be(e.type)?X.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:o}):ye(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:o}):e}function bc({closeToast:e,theme:t,ariaLabel:o="close"}){return F.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":o},F.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},F.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function vc({delay:e,isRunning:t,closeToast:o,type:r="default",hide:n,className:s,controlledProgress:i,progress:a,rtl:l,isIn:d,theme:c}){let y=n||i&&a===0,h={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};i&&(h.transform=`scaleX(${a})`);let f=Se("Toastify__progress-bar",i?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${c}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":l}),b=ye(s)?s({rtl:l,type:r,defaultClassName:f}):Se(f,s),m={[i&&a>=1?"onTransitionEnd":"onAnimationEnd"]:i&&a<1?null:()=>{d&&o()}};return F.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":y},F.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${c} Toastify__progress-bar--${r}`}),F.createElement("div",{role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer","aria-valuenow":i?Math.round(a*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:b,style:h,...m}))}var wc=1,Sn=()=>`${wc++}`;function _c(e,t,o){let r=1,n=0,s=[],i=[],a=t,l=new Map,d=new Set,c=g=>(d.add(g),()=>d.delete(g)),y=()=>{i=Array.from(l.values()),d.forEach(g=>g())},h=({containerId:g,toastId:v,updateId:_})=>{let E=g?g!==e:e!==1,k=l.has(v)&&_==null;return E||k},f=(g,v)=>{l.forEach(_=>{var E;(v==null||v===_.props.toastId)&&((E=_.toggle)==null||E.call(_,g))})},b=g=>{var v,_;g.isActive&&((_=(v=g.props)==null?void 0:v.onClose)==null||_.call(v,g.removalReason),g.isActive=!1,o(er(g,"removed")))},m=g=>{if(g==null)l.forEach(b);else{let v=l.get(g);v&&b(v)}y()},u=()=>{n-=s.length,s=[]},p=g=>{var v,_;let{toastId:E,updateId:k}=g.props,R=k==null;g.staleId&&l.delete(g.staleId),g.isActive=!0,l.set(E,g),y(),o(er(g,R?"added":"updated")),R&&((_=(v=g.props).onOpen)==null||_.call(v))};return{id:e,props:a,observe:c,toggle:f,removeToast:m,toasts:l,clearQueue:u,buildToast:(g,v)=>{if(h(v))return;let{toastId:_,updateId:E,data:k,staleId:R,delay:w}=v,O=E==null;O&&n++;let U={...a,style:a.toastStyle,key:r++,...Object.fromEntries(Object.entries(v).filter(([Y,W])=>W!=null)),toastId:_,updateId:E,data:k,isIn:!1,className:Yt(v.className||a.toastClassName),progressClassName:Yt(v.progressClassName||a.progressClassName),autoClose:v.isLoading?!1:pc(v.autoClose,a.autoClose),closeToast(Y){let W=l.get(_);W&&(W.removalReason=Y,m(_))},deleteToast(){if(l.get(_)!=null){if(l.delete(_),n--,n<0&&(n=0),s.length>0){p(s.shift());return}y()}}};U.closeButton=a.closeButton,v.closeButton===!1||Kt(v.closeButton)?U.closeButton=v.closeButton:v.closeButton===!0&&(U.closeButton=Kt(a.closeButton)?a.closeButton:!0);let V={content:g,props:U,staleId:R};a.limit&&a.limit>0&&n>a.limit&&O?s.push(V):et(w)?setTimeout(()=>{p(V)},w):p(V)},setProps(g){a=g},setToggle:(g,v)=>{let _=l.get(g);_&&(_.toggle=v)},isToastActive:g=>{var v;return(v=l.get(g))==null?void 0:v.isActive},getSnapshot:()=>i}}var ne=new Map,Ke=[],qt=new Set,Sc=e=>qt.forEach(t=>t(e)),xn=()=>ne.size>0;function xc(){Ke.forEach(e=>kn(e.content,e.options)),Ke=[]}var Tc=(e,{containerId:t})=>{var o;return(o=ne.get(t||1))==null?void 0:o.toasts.get(e)};function Tn(e,t){var o;if(t)return!!((o=ne.get(t))!=null&&o.isToastActive(e));let r=!1;return ne.forEach(n=>{n.isToastActive(e)&&(r=!0)}),r}function kc(e){if(!xn()){Ke=Ke.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||hc(e))ne.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=ne.get(e.containerId);t?t.removeToast(e.id):ne.forEach(o=>{o.removeToast(e.id)})}}var Ic=(e={})=>{ne.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function kn(e,t){Kt(e)&&(xn()||Ke.push({content:e,options:t}),ne.forEach(o=>{o.buildToast(e,t)}))}function Cc(e){var t;(t=ne.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function In(e,t){ne.forEach(o=>{(t==null||!(t!=null&&t.containerId)||t?.containerId===o.id)&&o.toggle(e,t?.id)})}function Ec(e){let t=e.containerId||1;return{subscribe(o){let r=_c(t,e,Sc);ne.set(t,r);let n=r.observe(o);return xc(),()=>{n(),ne.delete(t)}},setProps(o){var r;(r=ne.get(t))==null||r.setProps(o)},getSnapshot(){var o;return(o=ne.get(t))==null?void 0:o.getSnapshot()}}}function Pc(e){return qt.add(e),()=>{qt.delete(e)}}function Rc(e){return e&&(Be(e.toastId)||et(e.toastId))?e.toastId:Sn()}function tt(e,t){return kn(e,t),t.toastId}function It(e,t){return{...t,type:t&&t.type||e,toastId:Rc(t)}}function Ct(e){return(t,o)=>tt(t,It(e,o))}function j(e,t){return tt(e,It("default",t))}j.loading=(e,t)=>tt(e,It("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function Ac(e,{pending:t,error:o,success:r},n){let s;t&&(s=Be(t)?j.loading(t,n):j.loading(t.render,{...n,...t}));let i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},a=(d,c,y)=>{if(c==null){j.dismiss(s);return}let h={type:d,...i,...n,data:y},f=Be(c)?{render:c}:c;return s?j.update(s,{...h,...f}):j(f.render,{...h,...f}),y},l=ye(e)?e():e;return l.then(d=>a("success",r,d)).catch(d=>a("error",o,d)),l}j.promise=Ac;j.success=Ct("success");j.info=Ct("info");j.error=Ct("error");j.warning=Ct("warning");j.warn=j.warning;j.dark=(e,t)=>tt(e,It("default",{theme:"dark",...t}));function Oc(e){kc(e)}j.dismiss=Oc;j.clearWaitingQueue=Ic;j.isActive=Tn;j.update=(e,t={})=>{let o=Tc(e,t);if(o){let{props:r,content:n}=o,s={delay:100,...r,...t,toastId:t.toastId||e,updateId:Sn()};s.toastId!==e&&(s.staleId=e);let i=s.render||n;delete s.render,tt(i,s)}};j.done=e=>{j.update(e,{progress:1})};j.onChange=Pc;j.play=e=>In(!0,e);j.pause=e=>In(!1,e);function Bc(e){var t;let{subscribe:o,getSnapshot:r,setProps:n}=X.useRef(Ec(e)).current;n(e);let s=(t=X.useSyncExternalStore(o,r,r))==null?void 0:t.slice();function i(a){if(!s)return[];let l=new Map;return e.newestOnTop&&s.reverse(),s.forEach(d=>{let{position:c}=d.props;l.has(c)||l.set(c,[]),l.get(c).push(d)}),Array.from(l,d=>a(d[0],d[1]))}return{getToastToRender:i,isToastActive:Tn,count:s?.length}}function Mc(e){let[t,o]=X.useState(!1),[r,n]=X.useState(!1),s=X.useRef(null),i=X.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:l,closeToast:d,onClick:c,closeOnClick:y}=e;Cc({id:e.toastId,containerId:e.containerId,fn:o}),X.useEffect(()=>{if(e.pauseOnFocusLoss)return h(),()=>{f()}},[e.pauseOnFocusLoss]);function h(){document.hasFocus()||p(),window.addEventListener("focus",u),window.addEventListener("blur",p)}function f(){window.removeEventListener("focus",u),window.removeEventListener("blur",p)}function b(R){if(e.draggable===!0||e.draggable===R.pointerType){g();let w=s.current;i.canCloseOnClick=!0,i.canDrag=!0,w.style.transition="none",e.draggableDirection==="x"?(i.start=R.clientX,i.removalDistance=w.offsetWidth*(e.draggablePercent/100)):(i.start=R.clientY,i.removalDistance=w.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function m(R){let{top:w,bottom:O,left:U,right:V}=s.current.getBoundingClientRect();R.pointerType==="mouse"&&e.pauseOnHover&&R.clientX>=U&&R.clientX<=V&&R.clientY>=w&&R.clientY<=O?p():u()}function u(){o(!0)}function p(){o(!1)}function g(){i.didMove=!1,document.addEventListener("pointermove",_),document.addEventListener("pointerup",E)}function v(){document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",E)}function _(R){let w=s.current;if(i.canDrag&&w){i.didMove=!0,t&&p(),e.draggableDirection==="x"?i.delta=R.clientX-i.start:i.delta=R.clientY-i.start,i.start!==R.clientX&&(i.canCloseOnClick=!1);let O=e.draggableDirection==="x"?`${i.delta}px, var(--y)`:`0, calc(${i.delta}px + var(--y))`;w.style.transform=`translate3d(${O},0)`,w.style.opacity=`${1-Math.abs(i.delta/i.removalDistance)}`}}function E(){v();let R=s.current;if(i.canDrag&&i.didMove&&R){if(i.canDrag=!1,Math.abs(i.delta)>i.removalDistance){n(!0),e.closeToast(!0),e.collapseAll();return}R.style.transition="transform 0.2s, opacity 0.2s",R.style.removeProperty("transform"),R.style.removeProperty("opacity")}}let k={onPointerDown:b,onPointerUp:m};return a&&l&&(k.onMouseEnter=p,e.stacked||(k.onMouseLeave=u)),y&&(k.onClick=R=>{c&&c(R),i.canCloseOnClick&&d(!0)}),{playToast:u,pauseToast:p,isRunning:t,preventExitTransition:r,toastRef:s,eventHandlers:k}}var Cn=typeof window<"u"?X.useLayoutEffect:X.useEffect,Et=({theme:e,type:t,isLoading:o,...r})=>F.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function Vc(e){return F.createElement(Et,{...e},F.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function zc(e){return F.createElement(Et,{...e},F.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function Nc(e){return F.createElement(Et,{...e},F.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function Lc(e){return F.createElement(Et,{...e},F.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function Fc(){return F.createElement("div",{className:"Toastify__spinner"})}var eo={info:zc,warning:Vc,success:Nc,error:Lc,spinner:Fc},Dc=e=>e in eo;function jc({theme:e,type:t,isLoading:o,icon:r}){let n=null,s={theme:e,type:t};return r===!1||(ye(r)?n=r({...s,isLoading:o}):X.isValidElement(r)?n=X.cloneElement(r,s):o?n=eo.spinner():Dc(t)&&(n=eo[t](s))),n}var Uc=e=>{let{isRunning:t,preventExitTransition:o,toastRef:r,eventHandlers:n,playToast:s}=Mc(e),{closeButton:i,children:a,autoClose:l,onClick:d,type:c,hideProgressBar:y,closeToast:h,transition:f,position:b,className:m,style:u,progressClassName:p,updateId:g,role:v,progress:_,rtl:E,toastId:k,deleteToast:R,isIn:w,isLoading:O,closeOnClick:U,theme:V,ariaLabel:Y}=e,W=Se("Toastify__toast",`Toastify__toast-theme--${V}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":U}),se=ye(m)?m({rtl:E,position:b,type:c,defaultClassName:W}):Se(W,m),ee=jc(e),L=!!_||!l,B={closeToast:h,type:c,theme:V},z=null;return i===!1||(ye(i)?z=i(B):X.isValidElement(i)?z=X.cloneElement(i,B):z=bc(B)),F.createElement(f,{isIn:w,done:R,position:b,preventExitTransition:o,nodeRef:r,playToast:s},F.createElement("div",{id:k,tabIndex:0,onClick:d,"data-in":w,className:se,...n,style:u,ref:r,...w&&{role:v,"aria-label":Y}},ee!=null&&F.createElement("div",{className:Se("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},ee),_n(a,e,!t),z,!e.customProgressBar&&F.createElement(vc,{...g&&!L?{key:`p-${g}`}:{},rtl:E,theme:V,delay:l,isRunning:t,isIn:w,closeToast:h,hide:y,type:c,className:p,controlledProgress:L,progress:_||0})))},Hc=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),Wc=yc(Hc("bounce",!0)),$c={position:"top-right",transition:Wc,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Xc(e){let t={...$c,...e},o=e.stacked,[r,n]=X.useState(!0),s=X.useRef(null),{getToastToRender:i,isToastActive:a,count:l}=Bc(t),{className:d,style:c,rtl:y,containerId:h,hotKeys:f}=t;function b(u){let p=Se("Toastify__toast-container",`Toastify__toast-container--${u}`,{"Toastify__toast-container--rtl":y});return ye(d)?d({position:u,rtl:y,defaultClassName:p}):Se(p,Yt(d))}function m(){o&&(n(!0),j.play())}return Cn(()=>{var u;if(o){let p=s.current.querySelectorAll('[data-in="true"]'),g=12,v=(u=t.position)==null?void 0:u.includes("top"),_=0,E=0;Array.from(p).reverse().forEach((k,R)=>{let w=k;w.classList.add("Toastify__toast--stacked"),R>0&&(w.dataset.collapsed=`${r}`),w.dataset.pos||(w.dataset.pos=v?"top":"bot");let O=_*(r?.2:1)+(r?0:g*R),U=Math.max(.5,1-(r?E:0));w.style.setProperty("--y",`${v?O:O*-1}px`),w.style.setProperty("--g",`${g}`),w.style.setProperty("--s",`${U}`),_+=w.offsetHeight,E+=.025})}},[r,l,o]),X.useEffect(()=>{function u(p){var g;let v=s.current;f(p)&&((g=v?.querySelector('[tabIndex="0"]'))==null||g.focus(),n(!1),j.pause()),p.key==="Escape"&&(document.activeElement===v||v!=null&&v.contains(document.activeElement))&&(n(!0),j.play())}return document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}},[f]),F.createElement("section",{ref:s,className:"Toastify",id:h,onMouseEnter:()=>{o&&(n(!1),j.pause())},onMouseLeave:m,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},i((u,p)=>{let g=p.length?{...c}:{...c,pointerEvents:"none"};return F.createElement("div",{tabIndex:-1,className:b(u),"data-stacked":o,style:g,key:`c-${u}`},p.map(({content:v,props:_})=>F.createElement(Uc,{..._,stacked:o,collapseAll:m,isIn:a(_.toastId,_.containerId),key:`t-${_.key}`},v)))}))}var Gc=`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,tr=new Map,Jc=(e,t)=>{Cn(()=>{if(typeof document>"u")return;let o=document,r=tr.get(o);if(r){t&&r.setAttribute("nonce",t);return}let n=o.createElement("style");n.textContent=e,t&&n.setAttribute("nonce",t),o.head.appendChild(n),tr.set(o,n)},[t])};function Zc(e){return Jc(Gc,e.nonce),F.createElement(Xc,{...e})}function Rd(){return zt.jsx(Zc,{autoClose:4e3,position:"top-right",hideProgressBar:!0})}function Qc(e){return zt.jsxs("span",{className:"text-base",children:[zt.jsx("i",{className:mc("toast-icon",e.data.type==="warning"||e.data.type==="error"?"icon-exclamation-sign":"icon-info-sign")})," ",e.data.text]})}function Ad(e){j(Qc,{autoClose:e.duration,className:`toastify toast-${e.type??"info"}`,data:e})}export{cd as $,Ye as A,yt as B,Se as C,lt as D,Ne as E,Qi as F,vi as G,Ls as H,wi as I,Sr as J,id as K,fd as L,ad as M,qs as N,Xa as O,fe as P,Gi as Q,Sd as R,jt as S,gd as T,Id as U,Ys as V,yd as W,wd as X,ud as Y,dd as Z,Hs as _,Xr as a,pa as a0,kd as a1,Ed as a2,Or as a3,Pd as a4,po as a5,G as a6,Kr as a7,pd as a8,hd as a9,md as aa,ha as ab,vo as ac,Wa as ad,bd as ae,vd as af,xr as ag,Rd as ah,on as b,Vi as c,ge as d,ma as e,ld as f,_d as g,Wr as h,la as i,mc as j,ue as k,_e as l,fa as m,Rr as n,bi as o,yl as p,gt as q,$ as r,Ad as s,ua as t,Oe as u,wr as v,Ze as w,Td as x,Cd as y,xd as z};

/*! Chunk Base (c) Alexander Gundermann - https://www.chunkbase.com - unauthorized copying prohibited */

//# chunkId=019fb458-0542-7833-86c4-bacac7103802