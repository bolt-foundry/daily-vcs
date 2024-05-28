/// <reference path="./ffmpeg_wasm.out.d.ts" />
var createWasmModule = (() => {
  var _scriptDir = import.meta.url;
  
  return (
async function(moduleArg = {}) {

var e = moduleArg, aa, ba;
e.ready = new Promise((a, b) => {
  aa = a;
  ba = b;
});
var ca = Object.assign({}, e), da = "./this.program", ea = "object" == typeof window, h = "function" == typeof importScripts, fa = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, n = "", ha, ia, ja;
if (fa) {
  const {createRequire:a} = await import("module");
  var require = a(import.meta.url), fs = require("fs"), ka = require("path");
  h ? n = ka.dirname(n) + "/" : n = require("url").fileURLToPath(new URL("./", import.meta.url));
  ha = (b, c) => {
    b = la(b) ? new URL(b) : ka.normalize(b);
    return fs.readFileSync(b, c ? void 0 : "utf8");
  };
  ja = b => {
    b = ha(b, !0);
    b.buffer || (b = new Uint8Array(b));
    return b;
  };
  ia = (b, c, d, f = !0) => {
    b = la(b) ? new URL(b) : ka.normalize(b);
    fs.readFile(b, f ? void 0 : "utf8", (g, l) => {
      g ? d(g) : c(f ? l.buffer : l);
    });
  };
  !e.thisProgram && 1 < process.argv.length && (da = process.argv[1].replace(/\\/g, "/"));
  process.argv.slice(2);
  e.inspect = () => "[Emscripten Module object]";
} else if (ea || h) {
  h ? n = self.location.href : "undefined" != typeof document && document.currentScript && (n = document.currentScript.src), _scriptDir && (n = _scriptDir), 0 !== n.indexOf("blob:") ? n = n.substr(0, n.replace(/[?#].*/, "").lastIndexOf("/") + 1) : n = "", ha = a => {
    var b = new XMLHttpRequest();
    b.open("GET", a, !1);
    b.send(null);
    return b.responseText;
  }, h && (ja = a => {
    var b = new XMLHttpRequest();
    b.open("GET", a, !1);
    b.responseType = "arraybuffer";
    b.send(null);
    return new Uint8Array(b.response);
  }), ia = (a, b, c) => {
    var d = new XMLHttpRequest();
    d.open("GET", a, !0);
    d.responseType = "arraybuffer";
    d.onload = () => {
      200 == d.status || 0 == d.status && d.response ? b(d.response) : c();
    };
    d.onerror = c;
    d.send(null);
  };
}
var ma = e.print || console.log.bind(console), r = e.printErr || console.error.bind(console);
Object.assign(e, ca);
ca = null;
e.thisProgram && (da = e.thisProgram);
var na;
e.wasmBinary && (na = e.wasmBinary);
"object" != typeof WebAssembly && x("no native wasm support detected");
var oa, pa = !1, y, z, B, C, D, qa, E, ra, sa = [], ta = [], ua = [];
function va() {
  var a = e.preRun.shift();
  sa.unshift(a);
}
var G = 0, wa = null, xa = null;
function ya() {
  G++;
  e.monitorRunDependencies && e.monitorRunDependencies(G);
}
function za() {
  G--;
  e.monitorRunDependencies && e.monitorRunDependencies(G);
  if (0 == G && (null !== wa && (clearInterval(wa), wa = null), xa)) {
    var a = xa;
    xa = null;
    a();
  }
}
function x(a) {
  if (e.onAbort) {
    e.onAbort(a);
  }
  a = "Aborted(" + a + ")";
  r(a);
  pa = !0;
  a = new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
  ba(a);
  throw a;
}
var Aa = a => a.startsWith("data:application/octet-stream;base64,"), la = a => a.startsWith("file://"), I;
if (e.locateFile) {
  if (I = "ffmpeg_wasm.out.wasm", !Aa(I)) {
    var Ba = I;
    I = e.locateFile ? e.locateFile(Ba, n) : n + Ba;
  }
} else {
  I = (new URL("ffmpeg_wasm.out.wasm", import.meta.url)).href;
}
function Ca(a) {
  if (a == I && na) {
    return new Uint8Array(na);
  }
  if (ja) {
    return ja(a);
  }
  throw "both async and sync fetching of the wasm failed";
}
function Da(a) {
  if (!na && (ea || h)) {
    if ("function" == typeof fetch && !la(a)) {
      return fetch(a, {credentials:"same-origin"}).then(b => {
        if (!b.ok) {
          throw "failed to load wasm binary file at '" + a + "'";
        }
        return b.arrayBuffer();
      }).catch(() => Ca(a));
    }
    if (ia) {
      return new Promise((b, c) => {
        ia(a, d => b(new Uint8Array(d)), c);
      });
    }
  }
  return Promise.resolve().then(() => Ca(a));
}
function Ea(a, b, c) {
  return Da(a).then(d => WebAssembly.instantiate(d, b)).then(d => d).then(c, d => {
    r(`failed to asynchronously prepare wasm: ${d}`);
    x(d);
  });
}
function Fa(a, b) {
  var c = I;
  return na || "function" != typeof WebAssembly.instantiateStreaming || Aa(c) || la(c) || fa || "function" != typeof fetch ? Ea(c, a, b) : fetch(c, {credentials:"same-origin"}).then(d => WebAssembly.instantiateStreaming(d, a).then(b, function(f) {
    r(`wasm streaming compile failed: ${f}`);
    r("falling back to ArrayBuffer instantiation");
    return Ea(c, a, b);
  }));
}
var Ga = a => {
  for (; 0 < a.length;) {
    a.shift()(e);
  }
}, Ha = (a, b) => {
  for (var c = 0, d = a.length - 1; 0 <= d; d--) {
    var f = a[d];
    "." === f ? a.splice(d, 1) : ".." === f ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
  }
  if (b) {
    for (; c; c--) {
      a.unshift("..");
    }
  }
  return a;
}, J = a => {
  var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
  (a = Ha(a.split("/").filter(d => !!d), !b).join("/")) || b || (a = ".");
  a && c && (a += "/");
  return (b ? "/" : "") + a;
}, Ia = a => {
  var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
  a = b[0];
  b = b[1];
  if (!a && !b) {
    return ".";
  }
  b && (b = b.substr(0, b.length - 1));
  return a + b;
}, L = a => {
  if ("/" === a) {
    return "/";
  }
  a = J(a);
  a = a.replace(/\/$/, "");
  var b = a.lastIndexOf("/");
  return -1 === b ? a : a.substr(b + 1);
}, Ja = (a, b) => J(a + "/" + b), Ka = () => {
  if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
    return c => crypto.getRandomValues(c);
  }
  if (fa) {
    try {
      var a = require("crypto");
      if (a.randomFillSync) {
        return c => a.randomFillSync(c);
      }
      var b = a.randomBytes;
      return c => (c.set(b(c.byteLength)), c);
    } catch (c) {
    }
  }
  x("initRandomDevice");
}, La = a => (La = Ka())(a);
function M() {
  for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
    b = 0 <= c ? arguments[c] : O.cwd();
    if ("string" != typeof b) {
      throw new TypeError("Arguments to path.resolve must be strings");
    }
    if (!b) {
      return "";
    }
    a = b + "/" + a;
    b = "/" === b.charAt(0);
  }
  a = Ha(a.split("/").filter(d => !!d), !b).join("/");
  return (b ? "/" : "") + a || ".";
}
var Ma = (a, b) => {
  function c(l) {
    for (var q = 0; q < l.length && "" === l[q]; q++) {
    }
    for (var t = l.length - 1; 0 <= t && "" === l[t]; t--) {
    }
    return q > t ? [] : l.slice(q, t - q + 1);
  }
  a = M(a).substr(1);
  b = M(b).substr(1);
  a = c(a.split("/"));
  b = c(b.split("/"));
  for (var d = Math.min(a.length, b.length), f = d, g = 0; g < d; g++) {
    if (a[g] !== b[g]) {
      f = g;
      break;
    }
  }
  d = [];
  for (g = f; g < a.length; g++) {
    d.push("..");
  }
  d = d.concat(b.slice(f));
  return d.join("/");
}, Oa = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, P = (a, b) => {
  for (var c = b + NaN, d = b; a[d] && !(d >= c);) {
    ++d;
  }
  if (16 < d - b && a.buffer && Oa) {
    return Oa.decode(a.subarray(b, d));
  }
  for (c = ""; b < d;) {
    var f = a[b++];
    if (f & 128) {
      var g = a[b++] & 63;
      if (192 == (f & 224)) {
        c += String.fromCharCode((f & 31) << 6 | g);
      } else {
        var l = a[b++] & 63;
        f = 224 == (f & 240) ? (f & 15) << 12 | g << 6 | l : (f & 7) << 18 | g << 12 | l << 6 | a[b++] & 63;
        65536 > f ? c += String.fromCharCode(f) : (f -= 65536, c += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023));
      }
    } else {
      c += String.fromCharCode(f);
    }
  }
  return c;
}, Pa = [], Qa = a => {
  for (var b = 0, c = 0; c < a.length; ++c) {
    var d = a.charCodeAt(c);
    127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4, ++c) : b += 3;
  }
  return b;
}, Ra = (a, b, c, d) => {
  if (!(0 < d)) {
    return 0;
  }
  var f = c;
  d = c + d - 1;
  for (var g = 0; g < a.length; ++g) {
    var l = a.charCodeAt(g);
    if (55296 <= l && 57343 >= l) {
      var q = a.charCodeAt(++g);
      l = 65536 + ((l & 1023) << 10) | q & 1023;
    }
    if (127 >= l) {
      if (c >= d) {
        break;
      }
      b[c++] = l;
    } else {
      if (2047 >= l) {
        if (c + 1 >= d) {
          break;
        }
        b[c++] = 192 | l >> 6;
      } else {
        if (65535 >= l) {
          if (c + 2 >= d) {
            break;
          }
          b[c++] = 224 | l >> 12;
        } else {
          if (c + 3 >= d) {
            break;
          }
          b[c++] = 240 | l >> 18;
          b[c++] = 128 | l >> 12 & 63;
        }
        b[c++] = 128 | l >> 6 & 63;
      }
      b[c++] = 128 | l & 63;
    }
  }
  b[c] = 0;
  return c - f;
};
function Sa(a, b, c) {
  c = Array(0 < c ? c : Qa(a) + 1);
  a = Ra(a, c, 0, c.length);
  b && (c.length = a);
  return c;
}
var Ta = [];
function Ua(a, b) {
  Ta[a] = {input:[], output:[], K:b};
  Va(a, Wa);
}
var Wa = {open(a) {
  var b = Ta[a.node.rdev];
  if (!b) {
    throw new O.g(43);
  }
  a.tty = b;
  a.seekable = !1;
}, close(a) {
  a.tty.K.fsync(a.tty);
}, fsync(a) {
  a.tty.K.fsync(a.tty);
}, read(a, b, c, d) {
  if (!a.tty || !a.tty.K.pa) {
    throw new O.g(60);
  }
  for (var f = 0, g = 0; g < d; g++) {
    try {
      var l = a.tty.K.pa(a.tty);
    } catch (q) {
      throw new O.g(29);
    }
    if (void 0 === l && 0 === f) {
      throw new O.g(6);
    }
    if (null === l || void 0 === l) {
      break;
    }
    f++;
    b[c + g] = l;
  }
  f && (a.node.timestamp = Date.now());
  return f;
}, write(a, b, c, d) {
  if (!a.tty || !a.tty.K.ha) {
    throw new O.g(60);
  }
  try {
    for (var f = 0; f < d; f++) {
      a.tty.K.ha(a.tty, b[c + f]);
    }
  } catch (g) {
    throw new O.g(29);
  }
  d && (a.node.timestamp = Date.now());
  return f;
}}, Xa = {pa() {
  a: {
    if (!Pa.length) {
      var a = null;
      if (fa) {
        var b = Buffer.alloc(256), c = 0, d = process.stdin.fd;
        try {
          c = fs.readSync(d, b);
        } catch (f) {
          if (f.toString().includes("EOF")) {
            c = 0;
          } else {
            throw f;
          }
        }
        0 < c ? a = b.slice(0, c).toString("utf-8") : a = null;
      } else {
        "undefined" != typeof window && "function" == typeof window.prompt ? (a = window.prompt("Input: "), null !== a && (a += "\n")) : "function" == typeof readline && (a = readline(), null !== a && (a += "\n"));
      }
      if (!a) {
        a = null;
        break a;
      }
      Pa = Sa(a, !0);
    }
    a = Pa.shift();
  }
  return a;
}, ha(a, b) {
  null === b || 10 === b ? (ma(P(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
}, fsync(a) {
  a.output && 0 < a.output.length && (ma(P(a.output, 0)), a.output = []);
}, Ha() {
  return {Wa:25856, Ya:5, Va:191, Xa:35387, Ua:[3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]};
}, Ia() {
  return 0;
}, Ja() {
  return [24, 80];
}}, Ya = {ha(a, b) {
  null === b || 10 === b ? (r(P(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
}, fsync(a) {
  a.output && 0 < a.output.length && (r(P(a.output, 0)), a.output = []);
}};
function Za(a, b) {
  var c = a.m ? a.m.length : 0;
  c >= b || (b = Math.max(b, c * (1048576 > c ? 2.0 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.m, a.m = new Uint8Array(b), 0 < a.o && a.m.set(c.subarray(0, a.o), 0));
}
var Q = {G:null, u() {
  return Q.createNode(null, "/", 16895, 0);
}, createNode(a, b, c, d) {
  if (24576 === (c & 61440) || O.isFIFO(c)) {
    throw new O.g(63);
  }
  Q.G || (Q.G = {dir:{node:{D:Q.h.D, v:Q.h.v, lookup:Q.h.lookup, J:Q.h.J, rename:Q.h.rename, unlink:Q.h.unlink, rmdir:Q.h.rmdir, readdir:Q.h.readdir, symlink:Q.h.symlink}, stream:{A:Q.l.A}}, file:{node:{D:Q.h.D, v:Q.h.v}, stream:{A:Q.l.A, read:Q.l.read, write:Q.l.write, T:Q.l.T, S:Q.l.S, W:Q.l.W}}, link:{node:{D:Q.h.D, v:Q.h.v, readlink:Q.h.readlink}, stream:{}}, ma:{node:{D:Q.h.D, v:Q.h.v}, stream:O.Ba}});
  c = O.createNode(a, b, c, d);
  R(c.mode) ? (c.h = Q.G.dir.node, c.l = Q.G.dir.stream, c.m = {}) : O.isFile(c.mode) ? (c.h = Q.G.file.node, c.l = Q.G.file.stream, c.o = 0, c.m = null) : 40960 === (c.mode & 61440) ? (c.h = Q.G.link.node, c.l = Q.G.link.stream) : 8192 === (c.mode & 61440) && (c.h = Q.G.ma.node, c.l = Q.G.ma.stream);
  c.timestamp = Date.now();
  a && (a.m[b] = c, a.timestamp = c.timestamp);
  return c;
}, eb(a) {
  return a.m ? a.m.subarray ? a.m.subarray(0, a.o) : new Uint8Array(a.m) : new Uint8Array(0);
}, h:{D(a) {
  var b = {};
  b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
  b.ino = a.id;
  b.mode = a.mode;
  b.nlink = 1;
  b.uid = 0;
  b.gid = 0;
  b.rdev = a.rdev;
  R(a.mode) ? b.size = 4096 : O.isFile(a.mode) ? b.size = a.o : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
  b.atime = new Date(a.timestamp);
  b.mtime = new Date(a.timestamp);
  b.ctime = new Date(a.timestamp);
  b.za = 4096;
  b.blocks = Math.ceil(b.size / b.za);
  return b;
}, v(a, b) {
  void 0 !== b.mode && (a.mode = b.mode);
  void 0 !== b.timestamp && (a.timestamp = b.timestamp);
  if (void 0 !== b.size && (b = b.size, a.o != b)) {
    if (0 == b) {
      a.m = null, a.o = 0;
    } else {
      var c = a.m;
      a.m = new Uint8Array(b);
      c && a.m.set(c.subarray(0, Math.min(b, a.o)));
      a.o = b;
    }
  }
}, lookup() {
  throw O.ba[44];
}, J(a, b, c, d) {
  return Q.createNode(a, b, c, d);
}, rename(a, b, c) {
  if (R(a.mode)) {
    try {
      var d = S(b, c);
    } catch (g) {
    }
    if (d) {
      for (var f in d.m) {
        throw new O.g(55);
      }
    }
  }
  delete a.parent.m[a.name];
  a.parent.timestamp = Date.now();
  a.name = c;
  b.m[c] = a;
  b.timestamp = a.parent.timestamp;
  a.parent = b;
}, unlink(a, b) {
  delete a.m[b];
  a.timestamp = Date.now();
}, rmdir(a, b) {
  var c = S(a, b), d;
  for (d in c.m) {
    throw new O.g(55);
  }
  delete a.m[b];
  a.timestamp = Date.now();
}, readdir(a) {
  var b = [".", ".."], c;
  for (c in a.m) {
    a.m.hasOwnProperty(c) && b.push(c);
  }
  return b;
}, symlink(a, b, c) {
  a = Q.createNode(a, b, 41471, 0);
  a.link = c;
  return a;
}, readlink(a) {
  if (40960 !== (a.mode & 61440)) {
    throw new O.g(28);
  }
  return a.link;
}}, l:{read(a, b, c, d, f) {
  var g = a.node.m;
  if (f >= a.node.o) {
    return 0;
  }
  a = Math.min(a.node.o - f, d);
  if (8 < a && g.subarray) {
    b.set(g.subarray(f, f + a), c);
  } else {
    for (d = 0; d < a; d++) {
      b[c + d] = g[f + d];
    }
  }
  return a;
}, write(a, b, c, d, f, g) {
  if (!d) {
    return 0;
  }
  a = a.node;
  a.timestamp = Date.now();
  if (b.subarray && (!a.m || a.m.subarray)) {
    if (g) {
      return a.m = b.subarray(c, c + d), a.o = d;
    }
    if (0 === a.o && 0 === f) {
      return a.m = b.slice(c, c + d), a.o = d;
    }
    if (f + d <= a.o) {
      return a.m.set(b.subarray(c, c + d), f), d;
    }
  }
  Za(a, f + d);
  if (a.m.subarray && b.subarray) {
    a.m.set(b.subarray(c, c + d), f);
  } else {
    for (g = 0; g < d; g++) {
      a.m[f + g] = b[c + g];
    }
  }
  a.o = Math.max(a.o, f + d);
  return d;
}, A(a, b, c) {
  1 === c ? b += a.position : 2 === c && O.isFile(a.node.mode) && (b += a.node.o);
  if (0 > b) {
    throw new O.g(28);
  }
  return b;
}, T(a, b, c) {
  Za(a.node, b + c);
  a.node.o = Math.max(a.node.o, b + c);
}, S(a, b, c, d, f) {
  if (!O.isFile(a.node.mode)) {
    throw new O.g(43);
  }
  a = a.node.m;
  if (f & 2 || a.buffer !== y.buffer) {
    if (0 < c || c + b < a.length) {
      a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
    }
    c = !0;
    x();
    b = void 0;
    if (!b) {
      throw new O.g(48);
    }
    y.set(a, b);
  } else {
    c = !1, b = a.byteOffset;
  }
  return {jb:b, Ta:c};
}, W(a, b, c, d) {
  Q.l.write(a, b, 0, d, c, !1);
  return 0;
}}}, $a = (a, b, c) => {
  var d = `al ${a}`;
  ia(a, f => {
    f || x(`Loading data file "${a}" failed (no arrayBuffer).`);
    b(new Uint8Array(f));
    d && za();
  }, () => {
    if (c) {
      c();
    } else {
      throw `Loading data file "${a}" failed.`;
    }
  });
  d && ya();
}, ab = e.preloadPlugins || [], bb = (a, b, c, d) => {
  "undefined" != typeof Browser && Browser.U();
  var f = !1;
  ab.forEach(g => {
    !f && g.canHandle(b) && (g.handle(a, b, c, d), f = !0);
  });
  return f;
}, cb = (a, b) => {
  var c = 0;
  a && (c |= 365);
  b && (c |= 146);
  return c;
};
function Va(a, b) {
  O.oa[a] = {l:b};
}
function R(a) {
  return 16384 === (a & 61440);
}
function S(a, b) {
  var c;
  if (c = (c = T(a, "x")) ? c : a.h.lookup ? 0 : 2) {
    throw new O.g(c, a);
  }
  for (c = O.F[db(a.id, b)]; c; c = c.O) {
    var d = c.name;
    if (c.parent.id === a.id && d === b) {
      return c;
    }
  }
  return O.lookup(a, b);
}
function U(a, b = {}) {
  a = M(a);
  if (!a) {
    return {path:"", node:null};
  }
  b = Object.assign({aa:!0, ja:0}, b);
  if (8 < b.ja) {
    throw new O.g(32);
  }
  a = a.split("/").filter(l => !!l);
  for (var c = O.root, d = "/", f = 0; f < a.length; f++) {
    var g = f === a.length - 1;
    if (g && b.parent) {
      break;
    }
    c = S(c, a[f]);
    d = J(d + "/" + a[f]);
    c.C && (!g || g && b.aa) && (c = c.C.root);
    if (!g || b.B) {
      for (g = 0; 40960 === (c.mode & 61440);) {
        if (c = O.readlink(d), d = M(Ia(d), c), c = U(d, {ja:b.ja + 1}).node, 40 < g++) {
          throw new O.g(32);
        }
      }
    }
  }
  return {path:d, node:c};
}
function V(a) {
  for (var b;;) {
    if (O.sa(a)) {
      return a = a.u.ta, b ? "/" !== a[a.length - 1] ? `${a}/${b}` : a + b : a;
    }
    b = b ? `${a.name}/${b}` : a.name;
    a = a.parent;
  }
}
function db(a, b) {
  for (var c = 0, d = 0; d < b.length; d++) {
    c = (c << 5) - c + b.charCodeAt(d) | 0;
  }
  return (a + c >>> 0) % O.F.length;
}
function eb(a) {
  var b = db(a.parent.id, a.name);
  a.O = O.F[b];
  O.F[b] = a;
}
function fb(a) {
  var b = db(a.parent.id, a.name);
  if (O.F[b] === a) {
    O.F[b] = a.O;
  } else {
    for (b = O.F[b]; b;) {
      if (b.O === a) {
        b.O = a.O;
        break;
      }
      b = b.O;
    }
  }
}
function gb(a) {
  var b = ["r", "w", "rw"][a & 3];
  a & 512 && (b += "w");
  return b;
}
function T(a, b) {
  if (O.ra) {
    return 0;
  }
  if (!b.includes("r") || a.mode & 292) {
    if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) {
      return 2;
    }
  } else {
    return 2;
  }
  return 0;
}
function hb(a, b) {
  try {
    return S(a, b), 20;
  } catch (c) {
  }
  return T(a, "wx");
}
function ib(a, b, c) {
  try {
    var d = S(a, b);
  } catch (f) {
    return f.s;
  }
  if (a = T(a, "wx")) {
    return a;
  }
  if (c) {
    if (!R(d.mode)) {
      return 54;
    }
    if (O.sa(d) || V(d) === O.cwd()) {
      return 10;
    }
  } else {
    if (R(d.mode)) {
      return 31;
    }
  }
  return 0;
}
function jb() {
  for (var a = 0; a <= O.wa; a++) {
    if (!O.streams[a]) {
      return a;
    }
  }
  throw new O.g(33);
}
function W(a) {
  a = O.Fa(a);
  if (!a) {
    throw new O.g(8);
  }
  return a;
}
function kb(a, b = -1) {
  O.X || (O.X = function() {
    this.I = {};
  }, O.X.prototype = {}, Object.defineProperties(O.X.prototype, {object:{get() {
    return this.node;
  }, set(c) {
    this.node = c;
  }}, flags:{get() {
    return this.I.flags;
  }, set(c) {
    this.I.flags = c;
  }}, position:{get() {
    return this.I.position;
  }, set(c) {
    this.I.position = c;
  }}}));
  a = Object.assign(new O.X(), a);
  -1 == b && (b = jb());
  a.fd = b;
  return O.streams[b] = a;
}
function lb(a) {
  var b = [];
  for (a = [a]; a.length;) {
    var c = a.pop();
    b.push(c);
    a.push.apply(a, c.V);
  }
  return b;
}
function mb(a, b, c) {
  "undefined" == typeof c && (c = b, b = 438);
  return O.J(a, b | 8192, c);
}
function nb() {
  O.g || (O.g = function(a, b) {
    this.name = "ErrnoError";
    this.node = b;
    this.Na = function(c) {
      this.s = c;
    };
    this.Na(a);
    this.message = "FS error";
  }, O.g.prototype = Error(), O.g.prototype.constructor = O.g, [44].forEach(a => {
    O.ba[a] = new O.g(a);
    O.ba[a].stack = "<generic error, no stack>";
  }));
}
function ob(a, b, c, d) {
  a = "string" == typeof a ? a : V(a);
  b = J(a + "/" + b);
  return O.create(b, cb(c, d));
}
function pb(a) {
  if (!(a.Ka || a.La || a.link || a.m)) {
    if ("undefined" != typeof XMLHttpRequest) {
      throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    }
    if (ha) {
      try {
        a.m = Sa(ha(a.url), !0), a.o = a.m.length;
      } catch (b) {
        throw new O.g(29);
      }
    } else {
      throw Error("Cannot load without read() or XMLHttpRequest.");
    }
  }
}
var O = {root:null, V:[], oa:{}, streams:[], Ma:1, F:null, na:"/", da:!1, ra:!0, g:null, ba:{}, Da:null, Y:0, createNode(a, b, c, d) {
  a = new O.va(a, b, c, d);
  eb(a);
  return a;
}, sa(a) {
  return a === a.parent;
}, isFile(a) {
  return 32768 === (a & 61440);
}, isFIFO(a) {
  return 4096 === (a & 61440);
}, isSocket(a) {
  return 49152 === (a & 49152);
}, wa:4096, Fa:a => O.streams[a], Ba:{open(a) {
  a.l = O.Ea(a.node.rdev).l;
  a.l.open && a.l.open(a);
}, A() {
  throw new O.g(70);
}}, ga:a => a >> 8, fb:a => a & 255, N:(a, b) => a << 8 | b, Ea:a => O.oa[a], ua(a, b) {
  function c(l) {
    O.Y--;
    return b(l);
  }
  function d(l) {
    if (l) {
      if (!d.Ca) {
        return d.Ca = !0, c(l);
      }
    } else {
      ++g >= f.length && c(null);
    }
  }
  "function" == typeof a && (b = a, a = !1);
  O.Y++;
  1 < O.Y && r(`warning: ${O.Y} FS.syncfs operations in flight at once, probably just doing extra work`);
  var f = lb(O.root.u), g = 0;
  f.forEach(l => {
    if (!l.type.ua) {
      return d(null);
    }
    l.type.ua(l, a, d);
  });
}, u(a, b, c) {
  var d = "/" === c, f = !c;
  if (d && O.root) {
    throw new O.g(10);
  }
  if (!d && !f) {
    var g = U(c, {aa:!1});
    c = g.path;
    g = g.node;
    if (g.C) {
      throw new O.g(10);
    }
    if (!R(g.mode)) {
      throw new O.g(54);
    }
  }
  b = {type:a, ib:b, ta:c, V:[]};
  a = a.u(b);
  a.u = b;
  b.root = a;
  d ? O.root = a : g && (g.C = b, g.u && g.u.V.push(b));
  return a;
}, mb(a) {
  a = U(a, {aa:!1});
  if (!a.node.C) {
    throw new O.g(28);
  }
  a = a.node;
  var b = a.C, c = lb(b);
  Object.keys(O.F).forEach(d => {
    for (d = O.F[d]; d;) {
      var f = d.O;
      c.includes(d.u) && fb(d);
      d = f;
    }
  });
  a.C = null;
  a.u.V.splice(a.u.V.indexOf(b), 1);
}, lookup(a, b) {
  return a.h.lookup(a, b);
}, J(a, b, c) {
  var d = U(a, {parent:!0}).node;
  a = L(a);
  if (!a || "." === a || ".." === a) {
    throw new O.g(28);
  }
  var f = hb(d, a);
  if (f) {
    throw new O.g(f);
  }
  if (!d.h.J) {
    throw new O.g(63);
  }
  return d.h.J(d, a, b, c);
}, create(a, b) {
  return O.J(a, (void 0 !== b ? b : 438) & 4095 | 32768, 0);
}, mkdir(a, b) {
  return O.J(a, (void 0 !== b ? b : 511) & 1023 | 16384, 0);
}, gb(a, b) {
  a = a.split("/");
  for (var c = "", d = 0; d < a.length; ++d) {
    if (a[d]) {
      c += "/" + a[d];
      try {
        O.mkdir(c, b);
      } catch (f) {
        if (20 != f.s) {
          throw f;
        }
      }
    }
  }
}, symlink(a, b) {
  if (!M(a)) {
    throw new O.g(44);
  }
  var c = U(b, {parent:!0}).node;
  if (!c) {
    throw new O.g(44);
  }
  b = L(b);
  var d = hb(c, b);
  if (d) {
    throw new O.g(d);
  }
  if (!c.h.symlink) {
    throw new O.g(63);
  }
  return c.h.symlink(c, b, a);
}, rename(a, b) {
  var c = Ia(a), d = Ia(b), f = L(a), g = L(b);
  var l = U(a, {parent:!0});
  var q = l.node;
  l = U(b, {parent:!0});
  l = l.node;
  if (!q || !l) {
    throw new O.g(44);
  }
  if (q.u !== l.u) {
    throw new O.g(75);
  }
  var t = S(q, f);
  a = Ma(a, d);
  if ("." !== a.charAt(0)) {
    throw new O.g(28);
  }
  a = Ma(b, c);
  if ("." !== a.charAt(0)) {
    throw new O.g(55);
  }
  try {
    var p = S(l, g);
  } catch (m) {
  }
  if (t !== p) {
    b = R(t.mode);
    if (f = ib(q, f, b)) {
      throw new O.g(f);
    }
    if (f = p ? ib(l, g, b) : hb(l, g)) {
      throw new O.g(f);
    }
    if (!q.h.rename) {
      throw new O.g(63);
    }
    if (t.C || p && p.C) {
      throw new O.g(10);
    }
    if (l !== q && (f = T(q, "w"))) {
      throw new O.g(f);
    }
    fb(t);
    try {
      q.h.rename(t, l, g);
    } catch (m) {
      throw m;
    } finally {
      eb(t);
    }
  }
}, rmdir(a) {
  var b = U(a, {parent:!0}).node;
  a = L(a);
  var c = S(b, a), d = ib(b, a, !0);
  if (d) {
    throw new O.g(d);
  }
  if (!b.h.rmdir) {
    throw new O.g(63);
  }
  if (c.C) {
    throw new O.g(10);
  }
  b.h.rmdir(b, a);
  fb(c);
}, readdir(a) {
  a = U(a, {B:!0}).node;
  if (!a.h.readdir) {
    throw new O.g(54);
  }
  return a.h.readdir(a);
}, unlink(a) {
  var b = U(a, {parent:!0}).node;
  if (!b) {
    throw new O.g(44);
  }
  a = L(a);
  var c = S(b, a), d = ib(b, a, !1);
  if (d) {
    throw new O.g(d);
  }
  if (!b.h.unlink) {
    throw new O.g(63);
  }
  if (c.C) {
    throw new O.g(10);
  }
  b.h.unlink(b, a);
  fb(c);
}, readlink(a) {
  a = U(a).node;
  if (!a) {
    throw new O.g(44);
  }
  if (!a.h.readlink) {
    throw new O.g(28);
  }
  return M(V(a.parent), a.h.readlink(a));
}, stat(a, b) {
  a = U(a, {B:!b}).node;
  if (!a) {
    throw new O.g(44);
  }
  if (!a.h.D) {
    throw new O.g(63);
  }
  return a.h.D(a);
}, lstat(a) {
  return O.stat(a, !0);
}, chmod(a, b, c) {
  a = "string" == typeof a ? U(a, {B:!c}).node : a;
  if (!a.h.v) {
    throw new O.g(63);
  }
  a.h.v(a, {mode:b & 4095 | a.mode & -4096, timestamp:Date.now()});
}, lchmod(a, b) {
  O.chmod(a, b, !0);
}, fchmod(a, b) {
  a = W(a);
  O.chmod(a.node, b);
}, chown(a, b, c, d) {
  a = "string" == typeof a ? U(a, {B:!d}).node : a;
  if (!a.h.v) {
    throw new O.g(63);
  }
  a.h.v(a, {timestamp:Date.now()});
}, lchown(a, b, c) {
  O.chown(a, b, c, !0);
}, fchown(a, b, c) {
  a = W(a);
  O.chown(a.node, b, c);
}, truncate(a, b) {
  if (0 > b) {
    throw new O.g(28);
  }
  a = "string" == typeof a ? U(a, {B:!0}).node : a;
  if (!a.h.v) {
    throw new O.g(63);
  }
  if (R(a.mode)) {
    throw new O.g(31);
  }
  if (!O.isFile(a.mode)) {
    throw new O.g(28);
  }
  var c = T(a, "w");
  if (c) {
    throw new O.g(c);
  }
  a.h.v(a, {size:b, timestamp:Date.now()});
}, cb(a, b) {
  a = W(a);
  if (0 === (a.flags & 2097155)) {
    throw new O.g(28);
  }
  O.truncate(a.node, b);
}, nb(a, b, c) {
  a = U(a, {B:!0}).node;
  a.h.v(a, {timestamp:Math.max(b, c)});
}, open(a, b, c) {
  if ("" === a) {
    throw new O.g(44);
  }
  if ("string" == typeof b) {
    var d = {r:0, "r+":2, w:577, "w+":578, a:1089, "a+":1090}[b];
    if ("undefined" == typeof d) {
      throw Error(`Unknown file open mode: ${b}`);
    }
    b = d;
  }
  c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
  if ("object" == typeof a) {
    var f = a;
  } else {
    a = J(a);
    try {
      f = U(a, {B:!(b & 131072)}).node;
    } catch (g) {
    }
  }
  d = !1;
  if (b & 64) {
    if (f) {
      if (b & 128) {
        throw new O.g(20);
      }
    } else {
      f = O.J(a, c, 0), d = !0;
    }
  }
  if (!f) {
    throw new O.g(44);
  }
  8192 === (f.mode & 61440) && (b &= -513);
  if (b & 65536 && !R(f.mode)) {
    throw new O.g(54);
  }
  if (!d && (c = f ? 40960 === (f.mode & 61440) ? 32 : R(f.mode) && ("r" !== gb(b) || b & 512) ? 31 : T(f, gb(b)) : 44)) {
    throw new O.g(c);
  }
  b & 512 && !d && O.truncate(f, 0);
  b &= -131713;
  f = kb({node:f, path:V(f), flags:b, seekable:!0, position:0, l:f.l, Sa:[], error:!1});
  f.l.open && f.l.open(f);
  !e.logReadFiles || b & 1 || (O.ia || (O.ia = {}), a in O.ia || (O.ia[a] = 1));
  return f;
}, close(a) {
  if (null === a.fd) {
    throw new O.g(8);
  }
  a.M && (a.M = null);
  try {
    a.l.close && a.l.close(a);
  } catch (b) {
    throw b;
  } finally {
    O.streams[a.fd] = null;
  }
  a.fd = null;
}, A(a, b, c) {
  if (null === a.fd) {
    throw new O.g(8);
  }
  if (!a.seekable || !a.l.A) {
    throw new O.g(70);
  }
  if (0 != c && 1 != c && 2 != c) {
    throw new O.g(28);
  }
  a.position = a.l.A(a, b, c);
  a.Sa = [];
  return a.position;
}, read(a, b, c, d, f) {
  if (0 > d || 0 > f) {
    throw new O.g(28);
  }
  if (null === a.fd) {
    throw new O.g(8);
  }
  if (1 === (a.flags & 2097155)) {
    throw new O.g(8);
  }
  if (R(a.node.mode)) {
    throw new O.g(31);
  }
  if (!a.l.read) {
    throw new O.g(28);
  }
  var g = "undefined" != typeof f;
  if (!g) {
    f = a.position;
  } else if (!a.seekable) {
    throw new O.g(70);
  }
  b = a.l.read(a, b, c, d, f);
  g || (a.position += b);
  return b;
}, write(a, b, c, d, f, g) {
  if (0 > d || 0 > f) {
    throw new O.g(28);
  }
  if (null === a.fd) {
    throw new O.g(8);
  }
  if (0 === (a.flags & 2097155)) {
    throw new O.g(8);
  }
  if (R(a.node.mode)) {
    throw new O.g(31);
  }
  if (!a.l.write) {
    throw new O.g(28);
  }
  a.seekable && a.flags & 1024 && O.A(a, 0, 2);
  var l = "undefined" != typeof f;
  if (!l) {
    f = a.position;
  } else if (!a.seekable) {
    throw new O.g(70);
  }
  b = a.l.write(a, b, c, d, f, g);
  l || (a.position += b);
  return b;
}, T(a, b, c) {
  if (null === a.fd) {
    throw new O.g(8);
  }
  if (0 > b || 0 >= c) {
    throw new O.g(28);
  }
  if (0 === (a.flags & 2097155)) {
    throw new O.g(8);
  }
  if (!O.isFile(a.node.mode) && !R(a.node.mode)) {
    throw new O.g(43);
  }
  if (!a.l.T) {
    throw new O.g(138);
  }
  a.l.T(a, b, c);
}, S(a, b, c, d, f) {
  if (0 !== (d & 2) && 0 === (f & 2) && 2 !== (a.flags & 2097155)) {
    throw new O.g(2);
  }
  if (1 === (a.flags & 2097155)) {
    throw new O.g(2);
  }
  if (!a.l.S) {
    throw new O.g(43);
  }
  return a.l.S(a, b, c, d, f);
}, W(a, b, c, d, f) {
  return a.l.W ? a.l.W(a, b, c, d, f) : 0;
}, hb:() => 0, ea(a, b, c) {
  if (!a.l.ea) {
    throw new O.g(59);
  }
  return a.l.ea(a, b, c);
}, readFile(a, b = {}) {
  b.flags = b.flags || 0;
  b.encoding = b.encoding || "binary";
  if ("utf8" !== b.encoding && "binary" !== b.encoding) {
    throw Error(`Invalid encoding type "${b.encoding}"`);
  }
  var c, d = O.open(a, b.flags);
  a = O.stat(a).size;
  var f = new Uint8Array(a);
  O.read(d, f, 0, a, 0);
  "utf8" === b.encoding ? c = P(f, 0) : "binary" === b.encoding && (c = f);
  O.close(d);
  return c;
}, writeFile(a, b, c = {}) {
  c.flags = c.flags || 577;
  a = O.open(a, c.flags, c.mode);
  if ("string" == typeof b) {
    var d = new Uint8Array(Qa(b) + 1);
    b = Ra(b, d, 0, d.length);
    O.write(a, d, 0, b, void 0, c.Aa);
  } else if (ArrayBuffer.isView(b)) {
    O.write(a, b, 0, b.byteLength, void 0, c.Aa);
  } else {
    throw Error("Unsupported data type");
  }
  O.close(a);
}, cwd:() => O.na, chdir(a) {
  a = U(a, {B:!0});
  if (null === a.node) {
    throw new O.g(44);
  }
  if (!R(a.node.mode)) {
    throw new O.g(54);
  }
  var b = T(a.node, "x");
  if (b) {
    throw new O.g(b);
  }
  O.na = a.path;
}, U(a, b, c) {
  O.U.da = !0;
  nb();
  e.stdin = a || e.stdin;
  e.stdout = b || e.stdout;
  e.stderr = c || e.stderr;
  e.stdin ? O.L("/dev", "stdin", e.stdin) : O.symlink("/dev/tty", "/dev/stdin");
  e.stdout ? O.L("/dev", "stdout", null, e.stdout) : O.symlink("/dev/tty", "/dev/stdout");
  e.stderr ? O.L("/dev", "stderr", null, e.stderr) : O.symlink("/dev/tty1", "/dev/stderr");
  O.open("/dev/stdin", 0);
  O.open("/dev/stdout", 1);
  O.open("/dev/stderr", 1);
}, kb() {
  O.U.da = !1;
  for (var a = 0; a < O.streams.length; a++) {
    var b = O.streams[a];
    b && O.close(b);
  }
}, bb(a, b) {
  try {
    var c = U(a, {B:!b});
    a = c.path;
  } catch (g) {
  }
  var d = !1, f = null;
  try {
    c = U(a, {parent:!0}), L(a), c = U(a, {B:!b}), d = !0, f = c.node;
  } catch (g) {
  }
  return d ? f : null;
}, $a(a, b) {
  a = "string" == typeof a ? a : V(a);
  for (b = b.split("/").reverse(); b.length;) {
    var c = b.pop();
    if (c) {
      var d = J(a + "/" + c);
      try {
        O.mkdir(d);
      } catch (f) {
      }
      a = d;
    }
  }
  return d;
}, L(a, b, c, d) {
  a = Ja("string" == typeof a ? a : V(a), b);
  b = cb(!!c, !!d);
  O.L.ga || (O.L.ga = 64);
  var f = O.N(O.L.ga++, 0);
  Va(f, {open(g) {
    g.seekable = !1;
  }, close() {
    d && d.buffer && d.buffer.length && d(10);
  }, read(g, l, q, t) {
    for (var p = 0, m = 0; m < t; m++) {
      try {
        var w = c();
      } catch (F) {
        throw new O.g(29);
      }
      if (void 0 === w && 0 === p) {
        throw new O.g(6);
      }
      if (null === w || void 0 === w) {
        break;
      }
      p++;
      l[q + m] = w;
    }
    p && (g.node.timestamp = Date.now());
    return p;
  }, write(g, l, q, t) {
    for (var p = 0; p < t; p++) {
      try {
        d(l[q + p]);
      } catch (m) {
        throw new O.g(29);
      }
    }
    t && (g.node.timestamp = Date.now());
    return p;
  }});
  return mb(a, b, f);
}, Za(a, b, c, d, f) {
  function g() {
    this.fa = !1;
    this.I = [];
  }
  g.prototype.get = function(m) {
    if (!(m > this.length - 1 || 0 > m)) {
      var w = m % this.chunkSize;
      return this.qa(m / this.chunkSize | 0)[w];
    }
  };
  g.prototype.Ga = function(m) {
    this.qa = m;
  };
  g.prototype.la = function() {
    var m = new XMLHttpRequest();
    m.open("HEAD", c, !1);
    m.send(null);
    if (!(200 <= m.status && 300 > m.status || 304 === m.status)) {
      throw Error("Couldn't load " + c + ". Status: " + m.status);
    }
    var w = Number(m.getResponseHeader("Content-length")), F, k = (F = m.getResponseHeader("Accept-Ranges")) && "bytes" === F;
    m = (F = m.getResponseHeader("Content-Encoding")) && "gzip" === F;
    var v = 1048576;
    k || (v = w);
    var u = this;
    u.Ga(A => {
      var H = A * v, N = (A + 1) * v - 1;
      N = Math.min(N, w - 1);
      if ("undefined" == typeof u.I[A]) {
        var Na = u.I;
        if (H > N) {
          throw Error("invalid range (" + H + ", " + N + ") or no bytes requested!");
        }
        if (N > w - 1) {
          throw Error("only " + w + " bytes available! programmer error!");
        }
        var K = new XMLHttpRequest();
        K.open("GET", c, !1);
        w !== v && K.setRequestHeader("Range", "bytes=" + H + "-" + N);
        K.responseType = "arraybuffer";
        K.overrideMimeType && K.overrideMimeType("text/plain; charset=x-user-defined");
        K.send(null);
        if (!(200 <= K.status && 300 > K.status || 304 === K.status)) {
          throw Error("Couldn't load " + c + ". Status: " + K.status);
        }
        H = void 0 !== K.response ? new Uint8Array(K.response || []) : Sa(K.responseText || "", !0);
        Na[A] = H;
      }
      if ("undefined" == typeof u.I[A]) {
        throw Error("doXHR failed!");
      }
      return u.I[A];
    });
    if (m || !w) {
      v = w = 1, v = w = this.qa(0).length, ma("LazyFiles on gzip forces download of the whole file when length is accessed");
    }
    this.ya = w;
    this.xa = v;
    this.fa = !0;
  };
  if ("undefined" != typeof XMLHttpRequest) {
    if (!h) {
      throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
    }
    var l = new g();
    Object.defineProperties(l, {length:{get:function() {
      this.fa || this.la();
      return this.ya;
    }}, chunkSize:{get:function() {
      this.fa || this.la();
      return this.xa;
    }}});
    var q = void 0;
  } else {
    q = c, l = void 0;
  }
  var t = ob(a, b, d, f);
  l ? t.m = l : q && (t.m = null, t.url = q);
  Object.defineProperties(t, {o:{get:function() {
    return this.m.length;
  }}});
  var p = {};
  Object.keys(t.l).forEach(m => {
    var w = t.l[m];
    p[m] = function() {
      pb(t);
      return w.apply(null, arguments);
    };
  });
  p.read = (m, w, F, k, v) => {
    pb(t);
    m = m.node.m;
    if (v >= m.length) {
      w = 0;
    } else {
      k = Math.min(m.length - v, k);
      if (m.slice) {
        for (var u = 0; u < k; u++) {
          w[F + u] = m[v + u];
        }
      } else {
        for (u = 0; u < k; u++) {
          w[F + u] = m.get(v + u);
        }
      }
      w = k;
    }
    return w;
  };
  p.S = () => {
    pb(t);
    x();
    throw new O.g(48);
  };
  t.l = p;
  return t;
}};
function qb(a, b, c) {
  if ("/" === b.charAt(0)) {
    return b;
  }
  a = -100 === a ? O.cwd() : W(a).path;
  if (0 == b.length) {
    if (!c) {
      throw new O.g(44);
    }
    return a;
  }
  return J(a + "/" + b);
}
function rb(a, b, c) {
  try {
    var d = a(b);
  } catch (g) {
    if (g && g.node && J(b) !== J(V(g.node))) {
      return -54;
    }
    throw g;
  }
  C[c >> 2] = d.dev;
  C[c + 4 >> 2] = d.mode;
  D[c + 8 >> 2] = d.nlink;
  C[c + 12 >> 2] = d.uid;
  C[c + 16 >> 2] = d.gid;
  C[c + 20 >> 2] = d.rdev;
  E[c + 24 >> 3] = BigInt(d.size);
  C[c + 32 >> 2] = 4096;
  C[c + 36 >> 2] = d.blocks;
  a = d.atime.getTime();
  b = d.mtime.getTime();
  var f = d.ctime.getTime();
  E[c + 40 >> 3] = BigInt(Math.floor(a / 1000));
  D[c + 48 >> 2] = a % 1000 * 1000;
  E[c + 56 >> 3] = BigInt(Math.floor(b / 1000));
  D[c + 64 >> 2] = b % 1000 * 1000;
  E[c + 72 >> 3] = BigInt(Math.floor(f / 1000));
  D[c + 80 >> 2] = f % 1000 * 1000;
  E[c + 88 >> 3] = BigInt(d.ino);
  return 0;
}
var sb = void 0;
function X() {
  var a = C[+sb >> 2];
  sb += 4;
  return a;
}
var tb = a => 0 === a % 4 && (0 !== a % 100 || 0 === a % 400), ub = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], vb = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], xb = a => {
  var b = Qa(a) + 1, c = wb(b);
  c && Ra(a, z, c, b);
  return c;
}, yb = {}, Ab = () => {
  if (!zb) {
    var a = {USER:"web_user", LOGNAME:"web_user", PATH:"/", PWD:"/", HOME:"/home/web_user", LANG:("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _:da || "./this.program"}, b;
    for (b in yb) {
      void 0 === yb[b] ? delete a[b] : a[b] = yb[b];
    }
    var c = [];
    for (b in a) {
      c.push(`${b}=${a[b]}`);
    }
    zb = c;
  }
  return zb;
}, zb, Bb = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Cb = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Gb = (a, b, c, d) => {
  var f = {string:p => {
    var m = 0;
    if (null !== p && void 0 !== p && 0 !== p) {
      m = Qa(p) + 1;
      var w = Db(m);
      Ra(p, z, w, m);
      m = w;
    }
    return m;
  }, array:p => {
    var m = Db(p.length);
    y.set(p, m);
    return m;
  }};
  a = e["_" + a];
  var g = [], l = 0;
  if (d) {
    for (var q = 0; q < d.length; q++) {
      var t = f[c[q]];
      t ? (0 === l && (l = Eb()), g[q] = t(d[q])) : g[q] = d[q];
    }
  }
  c = a.apply(null, g);
  return c = function(p) {
    0 !== l && Fb(l);
    return "string" === b ? p ? P(z, p) : "" : "boolean" === b ? !!p : p;
  }(c);
}, Hb = [], Y, Ib, Jb = [];
function Kb(a, b, c, d) {
  a || (a = this);
  this.parent = a;
  this.u = a.u;
  this.C = null;
  this.id = O.Ma++;
  this.name = b;
  this.mode = c;
  this.h = {};
  this.l = {};
  this.rdev = d;
}
Object.defineProperties(Kb.prototype, {read:{get:function() {
  return 365 === (this.mode & 365);
}, set:function(a) {
  a ? this.mode |= 365 : this.mode &= -366;
}}, write:{get:function() {
  return 146 === (this.mode & 146);
}, set:function(a) {
  a ? this.mode |= 146 : this.mode &= -147;
}}, La:{get:function() {
  return R(this.mode);
}}, Ka:{get:function() {
  return 8192 === (this.mode & 61440);
}}});
O.va = Kb;
O.ab = (a, b, c, d, f, g, l, q, t, p) => {
  function m(F) {
    function k(v) {
      p && p();
      if (!q) {
        var u = a, A = b;
        u && (u = "string" == typeof u ? u : V(u), A = b ? J(u + "/" + b) : u);
        u = cb(d, f);
        A = O.create(A, u);
        if (v) {
          if ("string" == typeof v) {
            for (var H = Array(v.length), N = 0, Na = v.length; N < Na; ++N) {
              H[N] = v.charCodeAt(N);
            }
            v = H;
          }
          O.chmod(A, u | 146);
          H = O.open(A, 577);
          O.write(H, v, 0, v.length, 0, t);
          O.close(H);
          O.chmod(A, u);
        }
      }
      g && g();
      za();
    }
    bb(F, w, k, () => {
      l && l();
      za();
    }) || k(F);
  }
  var w = b ? M(J(a + "/" + b)) : a;
  ya();
  "string" == typeof c ? $a(c, F => m(F), l) : m(c);
};
nb();
O.F = Array(4096);
O.u(Q, {}, "/");
O.mkdir("/tmp");
O.mkdir("/home");
O.mkdir("/home/web_user");
(function() {
  O.mkdir("/dev");
  Va(O.N(1, 3), {read:() => 0, write:(d, f, g, l) => l});
  mb("/dev/null", O.N(1, 3));
  Ua(O.N(5, 0), Xa);
  Ua(O.N(6, 0), Ya);
  mb("/dev/tty", O.N(5, 0));
  mb("/dev/tty1", O.N(6, 0));
  var a = new Uint8Array(1024), b = 0, c = () => {
    0 === b && (b = La(a).byteLength);
    return a[--b];
  };
  O.L("/dev", "random", c);
  O.L("/dev", "urandom", c);
  O.mkdir("/dev/shm");
  O.mkdir("/dev/shm/tmp");
})();
(function() {
  O.mkdir("/proc");
  var a = O.mkdir("/proc/self");
  O.mkdir("/proc/self/fd");
  O.u({u() {
    var b = O.createNode(a, "fd", 16895, 73);
    b.h = {lookup(c, d) {
      var f = W(+d);
      c = {parent:null, u:{ta:"fake"}, h:{readlink:() => f.path}};
      return c.parent = c;
    }};
    return b;
  }}, {}, "/proc/self/fd");
})();
O.Da = {MEMFS:Q};
var Mb = {__syscall_faccessat:function(a, b, c) {
  try {
    b = b ? P(z, b) : "";
    b = qb(a, b);
    if (c & -8) {
      return -28;
    }
    var d = U(b, {B:!0}).node;
    if (!d) {
      return -44;
    }
    a = "";
    c & 4 && (a += "r");
    c & 2 && (a += "w");
    c & 1 && (a += "x");
    return a && T(d, a) ? -2 : 0;
  } catch (f) {
    if ("undefined" == typeof O || "ErrnoError" !== f.name) {
      throw f;
    }
    return -f.s;
  }
}, __syscall_fcntl64:function(a, b, c) {
  sb = c;
  try {
    var d = W(a);
    switch(b) {
      case 0:
        var f = X();
        if (0 > f) {
          return -28;
        }
        for (; O.streams[f];) {
          f++;
        }
        return kb(d, f).fd;
      case 1:
      case 2:
        return 0;
      case 3:
        return d.flags;
      case 4:
        return f = X(), d.flags |= f, 0;
      case 5:
        return f = X(), B[f + 0 >> 1] = 2, 0;
      case 6:
      case 7:
        return 0;
      case 16:
      case 8:
        return -28;
      case 9:
        return C[Lb() >> 2] = 28, -1;
      default:
        return -28;
    }
  } catch (g) {
    if ("undefined" == typeof O || "ErrnoError" !== g.name) {
      throw g;
    }
    return -g.s;
  }
}, __syscall_fstat64:function(a, b) {
  try {
    var c = W(a);
    return rb(O.stat, c.path, b);
  } catch (d) {
    if ("undefined" == typeof O || "ErrnoError" !== d.name) {
      throw d;
    }
    return -d.s;
  }
}, __syscall_getdents64:function(a, b, c) {
  try {
    var d = W(a);
    d.M || (d.M = O.readdir(d.path));
    a = 0;
    for (var f = O.A(d, 0, 1), g = Math.floor(f / 280); g < d.M.length && a + 280 <= c;) {
      var l = d.M[g];
      if ("." === l) {
        var q = d.node.id;
        var t = 4;
      } else if (".." === l) {
        q = U(d.path, {parent:!0}).node.id, t = 4;
      } else {
        var p = S(d.node, l);
        q = p.id;
        t = 8192 === (p.mode & 61440) ? 2 : R(p.mode) ? 4 : 40960 === (p.mode & 61440) ? 10 : 8;
      }
      E[b + a >> 3] = BigInt(q);
      E[b + a + 8 >> 3] = BigInt(280 * (g + 1));
      B[b + a + 16 >> 1] = 280;
      y[b + a + 18 >> 0] = t;
      Ra(l, z, b + a + 19, 256);
      a += 280;
      g += 1;
    }
    O.A(d, 280 * g, 0);
    return a;
  } catch (m) {
    if ("undefined" == typeof O || "ErrnoError" !== m.name) {
      throw m;
    }
    return -m.s;
  }
}, __syscall_ioctl:function(a, b, c) {
  sb = c;
  try {
    var d = W(a);
    switch(b) {
      case 21509:
        return d.tty ? 0 : -59;
      case 21505:
        if (!d.tty) {
          return -59;
        }
        if (d.tty.K.Ha) {
          a = [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          var f = X();
          C[f >> 2] = 25856;
          C[f + 4 >> 2] = 5;
          C[f + 8 >> 2] = 191;
          C[f + 12 >> 2] = 35387;
          for (var g = 0; 32 > g; g++) {
            y[f + g + 17 >> 0] = a[g] || 0;
          }
        }
        return 0;
      case 21510:
      case 21511:
      case 21512:
        return d.tty ? 0 : -59;
      case 21506:
      case 21507:
      case 21508:
        if (!d.tty) {
          return -59;
        }
        if (d.tty.K.Ia) {
          for (f = X(), a = [], g = 0; 32 > g; g++) {
            a.push(y[f + g + 17 >> 0]);
          }
        }
        return 0;
      case 21519:
        if (!d.tty) {
          return -59;
        }
        f = X();
        return C[f >> 2] = 0;
      case 21520:
        return d.tty ? -28 : -59;
      case 21531:
        return f = X(), O.ea(d, b, f);
      case 21523:
        if (!d.tty) {
          return -59;
        }
        d.tty.K.Ja && (g = [24, 80], f = X(), B[f >> 1] = g[0], B[f + 2 >> 1] = g[1]);
        return 0;
      case 21524:
        return d.tty ? 0 : -59;
      case 21515:
        return d.tty ? 0 : -59;
      default:
        return -28;
    }
  } catch (l) {
    if ("undefined" == typeof O || "ErrnoError" !== l.name) {
      throw l;
    }
    return -l.s;
  }
}, __syscall_lstat64:function(a, b) {
  try {
    return a = a ? P(z, a) : "", rb(O.lstat, a, b);
  } catch (c) {
    if ("undefined" == typeof O || "ErrnoError" !== c.name) {
      throw c;
    }
    return -c.s;
  }
}, __syscall_newfstatat:function(a, b, c, d) {
  try {
    b = b ? P(z, b) : "";
    var f = d & 256;
    b = qb(a, b, d & 4096);
    return rb(f ? O.lstat : O.stat, b, c);
  } catch (g) {
    if ("undefined" == typeof O || "ErrnoError" !== g.name) {
      throw g;
    }
    return -g.s;
  }
}, __syscall_openat:function(a, b, c, d) {
  sb = d;
  try {
    b = b ? P(z, b) : "";
    b = qb(a, b);
    var f = d ? X() : 0;
    return O.open(b, c, f).fd;
  } catch (g) {
    if ("undefined" == typeof O || "ErrnoError" !== g.name) {
      throw g;
    }
    return -g.s;
  }
}, __syscall_renameat:function(a, b, c, d) {
  try {
    return b = b ? P(z, b) : "", d = d ? P(z, d) : "", b = qb(a, b), d = qb(c, d), O.rename(b, d), 0;
  } catch (f) {
    if ("undefined" == typeof O || "ErrnoError" !== f.name) {
      throw f;
    }
    return -f.s;
  }
}, __syscall_rmdir:function(a) {
  try {
    return a = a ? P(z, a) : "", O.rmdir(a), 0;
  } catch (b) {
    if ("undefined" == typeof O || "ErrnoError" !== b.name) {
      throw b;
    }
    return -b.s;
  }
}, __syscall_stat64:function(a, b) {
  try {
    return a = a ? P(z, a) : "", rb(O.stat, a, b);
  } catch (c) {
    if ("undefined" == typeof O || "ErrnoError" !== c.name) {
      throw c;
    }
    return -c.s;
  }
}, __syscall_unlinkat:function(a, b, c) {
  try {
    return b = b ? P(z, b) : "", b = qb(a, b), 0 === c ? O.unlink(b) : 512 === c ? O.rmdir(b) : x("Invalid flags passed to unlinkat"), 0;
  } catch (d) {
    if ("undefined" == typeof O || "ErrnoError" !== d.name) {
      throw d;
    }
    return -d.s;
  }
}, _emscripten_get_now_is_monotonic:() => !0, _gmtime_js:function(a, b) {
  a = -9007199254740992 > a || 9007199254740992 < a ? NaN : Number(a);
  a = new Date(1000 * a);
  C[b >> 2] = a.getUTCSeconds();
  C[b + 4 >> 2] = a.getUTCMinutes();
  C[b + 8 >> 2] = a.getUTCHours();
  C[b + 12 >> 2] = a.getUTCDate();
  C[b + 16 >> 2] = a.getUTCMonth();
  C[b + 20 >> 2] = a.getUTCFullYear() - 1900;
  C[b + 24 >> 2] = a.getUTCDay();
  C[b + 28 >> 2] = (a.getTime() - Date.UTC(a.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864E5 | 0;
}, _localtime_js:function(a, b) {
  a = -9007199254740992 > a || 9007199254740992 < a ? NaN : Number(a);
  a = new Date(1000 * a);
  C[b >> 2] = a.getSeconds();
  C[b + 4 >> 2] = a.getMinutes();
  C[b + 8 >> 2] = a.getHours();
  C[b + 12 >> 2] = a.getDate();
  C[b + 16 >> 2] = a.getMonth();
  C[b + 20 >> 2] = a.getFullYear() - 1900;
  C[b + 24 >> 2] = a.getDay();
  C[b + 28 >> 2] = (tb(a.getFullYear()) ? ub : vb)[a.getMonth()] + a.getDate() - 1 | 0;
  C[b + 36 >> 2] = -(60 * a.getTimezoneOffset());
  var c = (new Date(a.getFullYear(), 6, 1)).getTimezoneOffset(), d = (new Date(a.getFullYear(), 0, 1)).getTimezoneOffset();
  C[b + 32 >> 2] = (c != d && a.getTimezoneOffset() == Math.min(d, c)) | 0;
}, _mktime_js:function(a) {
  var b = new Date(C[a + 20 >> 2] + 1900, C[a + 16 >> 2], C[a + 12 >> 2], C[a + 8 >> 2], C[a + 4 >> 2], C[a >> 2], 0), c = C[a + 32 >> 2], d = b.getTimezoneOffset(), f = (new Date(b.getFullYear(), 6, 1)).getTimezoneOffset(), g = (new Date(b.getFullYear(), 0, 1)).getTimezoneOffset(), l = Math.min(g, f);
  0 > c ? C[a + 32 >> 2] = Number(f != g && l == d) : 0 < c != (l == d) && (f = Math.max(g, f), b.setTime(b.getTime() + 60000 * ((0 < c ? l : f) - d)));
  C[a + 24 >> 2] = b.getDay();
  C[a + 28 >> 2] = (tb(b.getFullYear()) ? ub : vb)[b.getMonth()] + b.getDate() - 1 | 0;
  C[a >> 2] = b.getSeconds();
  C[a + 4 >> 2] = b.getMinutes();
  C[a + 8 >> 2] = b.getHours();
  C[a + 12 >> 2] = b.getDate();
  C[a + 16 >> 2] = b.getMonth();
  C[a + 20 >> 2] = b.getYear();
  return BigInt(b.getTime() / 1000);
}, _tzset_js:(a, b, c) => {
  function d(t) {
    return (t = t.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? t[1] : "GMT";
  }
  var f = (new Date()).getFullYear(), g = new Date(f, 0, 1), l = new Date(f, 6, 1);
  f = g.getTimezoneOffset();
  var q = l.getTimezoneOffset();
  D[a >> 2] = 60 * Math.max(f, q);
  C[b >> 2] = Number(f != q);
  a = d(g);
  b = d(l);
  a = xb(a);
  b = xb(b);
  q < f ? (D[c >> 2] = a, D[c + 4 >> 2] = b) : (D[c >> 2] = b, D[c + 4 >> 2] = a);
}, abort:() => {
  x("");
}, emscripten_date_now:() => Date.now(), emscripten_get_heap_max:() => z.length, emscripten_get_now:() => performance.now(), emscripten_memcpy_js:(a, b, c) => z.copyWithin(a, b, b + c), emscripten_resize_heap:() => {
  x("OOM");
}, environ_get:(a, b) => {
  var c = 0;
  Ab().forEach((d, f) => {
    var g = b + c;
    f = D[a + 4 * f >> 2] = g;
    for (g = 0; g < d.length; ++g) {
      y[f++ >> 0] = d.charCodeAt(g);
    }
    y[f >> 0] = 0;
    c += d.length + 1;
  });
  return 0;
}, environ_sizes_get:(a, b) => {
  var c = Ab();
  D[a >> 2] = c.length;
  var d = 0;
  c.forEach(f => d += f.length + 1);
  D[b >> 2] = d;
  return 0;
}, fd_close:function(a) {
  try {
    var b = W(a);
    O.close(b);
    return 0;
  } catch (c) {
    if ("undefined" == typeof O || "ErrnoError" !== c.name) {
      throw c;
    }
    return c.s;
  }
}, fd_fdstat_get:function(a, b) {
  try {
    var c = W(a);
    y[b >> 0] = c.tty ? 2 : R(c.mode) ? 3 : 40960 === (c.mode & 61440) ? 7 : 4;
    B[b + 2 >> 1] = 0;
    E[b + 8 >> 3] = BigInt(0);
    E[b + 16 >> 3] = BigInt(0);
    return 0;
  } catch (d) {
    if ("undefined" == typeof O || "ErrnoError" !== d.name) {
      throw d;
    }
    return d.s;
  }
}, fd_read:function(a, b, c, d) {
  try {
    a: {
      var f = W(a);
      a = b;
      for (var g, l = b = 0; l < c; l++) {
        var q = D[a >> 2], t = D[a + 4 >> 2];
        a += 8;
        var p = O.read(f, y, q, t, g);
        if (0 > p) {
          var m = -1;
          break a;
        }
        b += p;
        if (p < t) {
          break;
        }
        "undefined" !== typeof g && (g += p);
      }
      m = b;
    }
    D[d >> 2] = m;
    return 0;
  } catch (w) {
    if ("undefined" == typeof O || "ErrnoError" !== w.name) {
      throw w;
    }
    return w.s;
  }
}, fd_seek:function(a, b, c, d) {
  b = -9007199254740992 > b || 9007199254740992 < b ? NaN : Number(b);
  try {
    if (isNaN(b)) {
      return 61;
    }
    var f = W(a);
    O.A(f, b, c);
    E[d >> 3] = BigInt(f.position);
    f.M && 0 === b && 0 === c && (f.M = null);
    return 0;
  } catch (g) {
    if ("undefined" == typeof O || "ErrnoError" !== g.name) {
      throw g;
    }
    return g.s;
  }
}, fd_write:function(a, b, c, d) {
  try {
    a: {
      var f = W(a);
      a = b;
      for (var g, l = b = 0; l < c; l++) {
        var q = D[a >> 2], t = D[a + 4 >> 2];
        a += 8;
        var p = O.write(f, y, q, t, g);
        if (0 > p) {
          var m = -1;
          break a;
        }
        b += p;
        "undefined" !== typeof g && (g += p);
      }
      m = b;
    }
    D[d >> 2] = m;
    return 0;
  } catch (w) {
    if ("undefined" == typeof O || "ErrnoError" !== w.name) {
      throw w;
    }
    return w.s;
  }
}, strftime:(a, b, c, d) => {
  function f(k, v, u) {
    for (k = "number" == typeof k ? k.toString() : k || ""; k.length < v;) {
      k = u[0] + k;
    }
    return k;
  }
  function g(k, v) {
    return f(k, v, "0");
  }
  function l(k, v) {
    function u(H) {
      return 0 > H ? -1 : 0 < H ? 1 : 0;
    }
    var A;
    0 === (A = u(k.getFullYear() - v.getFullYear())) && 0 === (A = u(k.getMonth() - v.getMonth())) && (A = u(k.getDate() - v.getDate()));
    return A;
  }
  function q(k) {
    switch(k.getDay()) {
      case 0:
        return new Date(k.getFullYear() - 1, 11, 29);
      case 1:
        return k;
      case 2:
        return new Date(k.getFullYear(), 0, 3);
      case 3:
        return new Date(k.getFullYear(), 0, 2);
      case 4:
        return new Date(k.getFullYear(), 0, 1);
      case 5:
        return new Date(k.getFullYear() - 1, 11, 31);
      case 6:
        return new Date(k.getFullYear() - 1, 11, 30);
    }
  }
  function t(k) {
    var v = k.P;
    for (k = new Date((new Date(k.R + 1900, 0, 1)).getTime()); 0 < v;) {
      var u = k.getMonth(), A = (tb(k.getFullYear()) ? Bb : Cb)[u];
      if (v > A - k.getDate()) {
        v -= A - k.getDate() + 1, k.setDate(1), 11 > u ? k.setMonth(u + 1) : (k.setMonth(0), k.setFullYear(k.getFullYear() + 1));
      } else {
        k.setDate(k.getDate() + v);
        break;
      }
    }
    u = new Date(k.getFullYear() + 1, 0, 4);
    v = q(new Date(k.getFullYear(), 0, 4));
    u = q(u);
    return 0 >= l(v, k) ? 0 >= l(u, k) ? k.getFullYear() + 1 : k.getFullYear() : k.getFullYear() - 1;
  }
  var p = D[d + 40 >> 2];
  d = {Qa:C[d >> 2], Pa:C[d + 4 >> 2], Z:C[d + 8 >> 2], ka:C[d + 12 >> 2], $:C[d + 16 >> 2], R:C[d + 20 >> 2], H:C[d + 24 >> 2], P:C[d + 28 >> 2], lb:C[d + 32 >> 2], Oa:C[d + 36 >> 2], Ra:p ? p ? P(z, p) : "" : ""};
  c = c ? P(z, c) : "";
  p = {"%c":"%a %b %d %H:%M:%S %Y", "%D":"%m/%d/%y", "%F":"%Y-%m-%d", "%h":"%b", "%r":"%I:%M:%S %p", "%R":"%H:%M", "%T":"%H:%M:%S", "%x":"%m/%d/%y", "%X":"%H:%M:%S", "%Ec":"%c", "%EC":"%C", "%Ex":"%m/%d/%y", "%EX":"%H:%M:%S", "%Ey":"%y", "%EY":"%Y", "%Od":"%d", "%Oe":"%e", "%OH":"%H", "%OI":"%I", "%Om":"%m", "%OM":"%M", "%OS":"%S", "%Ou":"%u", "%OU":"%U", "%OV":"%V", "%Ow":"%w", "%OW":"%W", "%Oy":"%y"};
  for (var m in p) {
    c = c.replace(new RegExp(m, "g"), p[m]);
  }
  var w = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), F = "January February March April May June July August September October November December".split(" ");
  p = {"%a":k => w[k.H].substring(0, 3), "%A":k => w[k.H], "%b":k => F[k.$].substring(0, 3), "%B":k => F[k.$], "%C":k => g((k.R + 1900) / 100 | 0, 2), "%d":k => g(k.ka, 2), "%e":k => f(k.ka, 2, " "), "%g":k => t(k).toString().substring(2), "%G":k => t(k), "%H":k => g(k.Z, 2), "%I":k => {
    k = k.Z;
    0 == k ? k = 12 : 12 < k && (k -= 12);
    return g(k, 2);
  }, "%j":k => {
    for (var v = 0, u = 0; u <= k.$ - 1; v += (tb(k.R + 1900) ? Bb : Cb)[u++]) {
    }
    return g(k.ka + v, 3);
  }, "%m":k => g(k.$ + 1, 2), "%M":k => g(k.Pa, 2), "%n":() => "\n", "%p":k => 0 <= k.Z && 12 > k.Z ? "AM" : "PM", "%S":k => g(k.Qa, 2), "%t":() => "\t", "%u":k => k.H || 7, "%U":k => g(Math.floor((k.P + 7 - k.H) / 7), 2), "%V":k => {
    var v = Math.floor((k.P + 7 - (k.H + 6) % 7) / 7);
    2 >= (k.H + 371 - k.P - 2) % 7 && v++;
    if (v) {
      53 == v && (u = (k.H + 371 - k.P) % 7, 4 == u || 3 == u && tb(k.R) || (v = 1));
    } else {
      v = 52;
      var u = (k.H + 7 - k.P - 1) % 7;
      (4 == u || 5 == u && tb(k.R % 400 - 1)) && v++;
    }
    return g(v, 2);
  }, "%w":k => k.H, "%W":k => g(Math.floor((k.P + 7 - (k.H + 6) % 7) / 7), 2), "%y":k => (k.R + 1900).toString().substring(2), "%Y":k => k.R + 1900, "%z":k => {
    k = k.Oa;
    var v = 0 <= k;
    k = Math.abs(k) / 60;
    return (v ? "+" : "-") + String("0000" + (k / 60 * 100 + k % 60)).slice(-4);
  }, "%Z":k => k.Ra, "%%":() => "%"};
  c = c.replace(/%%/g, "\x00\x00");
  for (m in p) {
    c.includes(m) && (c = c.replace(new RegExp(m, "g"), p[m](d)));
  }
  c = c.replace(/\0\0/g, "%");
  m = Sa(c, !1);
  if (m.length > b) {
    return 0;
  }
  y.set(m, a);
  return m.length - 1;
}}, Z = function() {
  function a(c) {
    Z = c.exports;
    oa = Z.memory;
    c = oa.buffer;
    e.HEAP8 = y = new Int8Array(c);
    e.HEAP16 = B = new Int16Array(c);
    e.HEAPU8 = z = new Uint8Array(c);
    e.HEAPU16 = new Uint16Array(c);
    e.HEAP32 = C = new Int32Array(c);
    e.HEAPU32 = D = new Uint32Array(c);
    e.HEAPF32 = qa = new Float32Array(c);
    e.HEAPF64 = ra = new Float64Array(c);
    e.HEAP64 = E = new BigInt64Array(c);
    e.HEAPU64 = new BigUint64Array(c);
    Y = Z.__indirect_function_table;
    ta.unshift(Z.__wasm_call_ctors);
    za();
    return Z;
  }
  var b = {env:Mb, wasi_snapshot_preview1:Mb};
  ya();
  if (e.instantiateWasm) {
    try {
      return e.instantiateWasm(b, a);
    } catch (c) {
      r(`Module.instantiateWasm callback failed with error: ${c}`), ba(c);
    }
  }
  Fa(b, function(c) {
    a(c.instance);
  }).catch(ba);
  return {};
}();
e._avformat_free_context = a => (e._avformat_free_context = Z.avformat_free_context)(a);
e._av_find_best_stream = (a, b, c, d, f, g) => (e._av_find_best_stream = Z.av_find_best_stream)(a, b, c, d, f, g);
e._avio_alloc_context = (a, b, c, d, f, g, l) => (e._avio_alloc_context = Z.avio_alloc_context)(a, b, c, d, f, g, l);
e._avformat_open_input = (a, b, c, d) => (e._avformat_open_input = Z.avformat_open_input)(a, b, c, d);
e._av_read_frame = (a, b) => (e._av_read_frame = Z.av_read_frame)(a, b);
e._avformat_find_stream_info = (a, b) => (e._avformat_find_stream_info = Z.avformat_find_stream_info)(a, b);
e._avformat_alloc_context = () => (e._avformat_alloc_context = Z.avformat_alloc_context)();
e._avformat_version = () => (e._avformat_version = Z.avformat_version)();
e._av_packet_alloc = () => (e._av_packet_alloc = Z.av_packet_alloc)();
e._av_packet_free = a => (e._av_packet_free = Z.av_packet_free)(a);
e._av_log_set_level = a => (e._av_log_set_level = Z.av_log_set_level)(a);
e._av_rescale_q = (a, b, c) => (e._av_rescale_q = Z.av_rescale_q)(a, b, c);
e._av_malloc = a => (e._av_malloc = Z.av_malloc)(a);
e._logAvError = a => (e._logAvError = Z.logAvError)(a);
e._free = a => (e._free = Z.free)(a);
e._nativePointerTest = a => (e._nativePointerTest = Z.nativePointerTest)(a);
e._MicrosecondsTimeBase = a => (e._MicrosecondsTimeBase = Z.MicrosecondsTimeBase)(a);
e._CONST_AV_NOPTS_VALUE = () => (e._CONST_AV_NOPTS_VALUE = Z.CONST_AV_NOPTS_VALUE)();
e._CONST_AV_CODEC_ID_AAC = () => (e._CONST_AV_CODEC_ID_AAC = Z.CONST_AV_CODEC_ID_AAC)();
e._CONST_AVFMT_FLAG_CUSTOM_IO = () => (e._CONST_AVFMT_FLAG_CUSTOM_IO = Z.CONST_AVFMT_FLAG_CUSTOM_IO)();
e._CONST_AVFMT_FLAG_FAST_SEEK = () => (e._CONST_AVFMT_FLAG_FAST_SEEK = Z.CONST_AVFMT_FLAG_FAST_SEEK)();
e._CONST_AV_EF_EXPLODE = () => (e._CONST_AV_EF_EXPLODE = Z.CONST_AV_EF_EXPLODE)();
e._AVIOContext_seekable_s = (a, b) => (e._AVIOContext_seekable_s = Z.AVIOContext_seekable_s)(a, b);
e._AVIOContext_write_flag_s = (a, b) => (e._AVIOContext_write_flag_s = Z.AVIOContext_write_flag_s)(a, b);
e._AVFormatContext_flags_s = (a, b) => (e._AVFormatContext_flags_s = Z.AVFormatContext_flags_s)(a, b);
e._AVFormatContext_error_recognition_s = (a, b) => (e._AVFormatContext_error_recognition_s = Z.AVFormatContext_error_recognition_s)(a, b);
e._AVFormatContext_pb_s = (a, b) => (e._AVFormatContext_pb_s = Z.AVFormatContext_pb_s)(a, b);
e._AVFormatContext_streams_a = (a, b) => (e._AVFormatContext_streams_a = Z.AVFormatContext_streams_a)(a, b);
e._AVStream_time_base_a = (a, b) => (e._AVStream_time_base_a = Z.AVStream_time_base_a)(a, b);
e._AVStream_codecpar_a = a => (e._AVStream_codecpar_a = Z.AVStream_codecpar_a)(a);
e._AVCodecParameters_codec_id_a = a => (e._AVCodecParameters_codec_id_a = Z.AVCodecParameters_codec_id_a)(a);
e._AVCodecParameters_profile_a = a => (e._AVCodecParameters_profile_a = Z.AVCodecParameters_profile_a)(a);
e._AVCodecParameters_channels_a = a => (e._AVCodecParameters_channels_a = Z.AVCodecParameters_channels_a)(a);
e._AVCodecParameters_extradata_a = a => (e._AVCodecParameters_extradata_a = Z.AVCodecParameters_extradata_a)(a);
e._AVCodecParameters_extradata_size_a = a => (e._AVCodecParameters_extradata_size_a = Z.AVCodecParameters_extradata_size_a)(a);
e._AVCodecParameters_sample_rate_a = a => (e._AVCodecParameters_sample_rate_a = Z.AVCodecParameters_sample_rate_a)(a);
e._AVPacket_pts_a = a => (e._AVPacket_pts_a = Z.AVPacket_pts_a)(a);
e._AVPacket_data_a = a => (e._AVPacket_data_a = Z.AVPacket_data_a)(a);
e._AVPacket_size_a = a => (e._AVPacket_size_a = Z.AVPacket_size_a)(a);
e._AVPacket_stream_index_a = a => (e._AVPacket_stream_index_a = Z.AVPacket_stream_index_a)(a);
var Lb = () => (Lb = Z.__errno_location)(), wb = e._malloc = a => (wb = e._malloc = Z.malloc)(a);
e._calloc = (a, b) => (e._calloc = Z.calloc)(a, b);
var Eb = () => (Eb = Z.stackSave)(), Fb = a => (Fb = Z.stackRestore)(a), Db = a => (Db = Z.stackAlloc)(a);
e.cwrap = (a, b, c, d) => {
  var f = !c || c.every(g => "number" === g || "boolean" === g);
  return "string" !== b && f && !d ? e["_" + a] : function() {
    return Gb(a, b, c, arguments);
  };
};
e.addFunction = (a, b) => {
  if (!Ib) {
    Ib = new WeakMap();
    var c = Y.length;
    if (Ib) {
      for (var d = 0; d < 0 + c; d++) {
        var f = d;
        var g = Hb[f];
        g || (f >= Hb.length && (Hb.length = f + 1), Hb[f] = g = Y.get(f));
        (f = g) && Ib.set(f, d);
      }
    }
  }
  if (c = Ib.get(a) || 0) {
    return c;
  }
  if (Jb.length) {
    c = Jb.pop();
  } else {
    try {
      Y.grow(1);
    } catch (q) {
      if (!(q instanceof RangeError)) {
        throw q;
      }
      throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
    }
    c = Y.length - 1;
  }
  try {
    d = c, Y.set(d, a), Hb[d] = Y.get(d);
  } catch (q) {
    if (!(q instanceof TypeError)) {
      throw q;
    }
    if ("function" == typeof WebAssembly.Function) {
      d = WebAssembly.Function;
      f = {i:"i32", j:"i64", f:"f32", d:"f64", e:"externref", p:"i32"};
      g = {parameters:[], results:"v" == b[0] ? [] : [f[b[0]]]};
      for (var l = 1; l < b.length; ++l) {
        g.parameters.push(f[b[l]]);
      }
      b = new d(g, a);
    } else {
      d = [1];
      f = b.slice(0, 1);
      b = b.slice(1);
      g = {i:127, p:127, j:126, f:125, d:124, e:111};
      d.push(96);
      l = b.length;
      128 > l ? d.push(l) : d.push(l % 128 | 128, l >> 7);
      for (l = 0; l < b.length; ++l) {
        d.push(g[b[l]]);
      }
      "v" == f ? d.push(0) : d.push(1, g[f]);
      b = [0, 97, 115, 109, 1, 0, 0, 0, 1];
      f = d.length;
      128 > f ? b.push(f) : b.push(f % 128 | 128, f >> 7);
      b.push.apply(b, d);
      b.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
      b = new WebAssembly.Module(new Uint8Array(b));
      b = (new WebAssembly.Instance(b, {e:{f:a}})).exports.f;
    }
    d = c;
    Y.set(d, b);
    Hb[d] = Y.get(d);
  }
  Ib.set(a, c);
  return c;
};
e.setValue = function(a, b, c = "i8") {
  c.endsWith("*") && (c = "*");
  switch(c) {
    case "i1":
      y[a >> 0] = b;
      break;
    case "i8":
      y[a >> 0] = b;
      break;
    case "i16":
      B[a >> 1] = b;
      break;
    case "i32":
      C[a >> 2] = b;
      break;
    case "i64":
      E[a >> 3] = BigInt(b);
      break;
    case "float":
      qa[a >> 2] = b;
      break;
    case "double":
      ra[a >> 3] = b;
      break;
    case "*":
      D[a >> 2] = b;
      break;
    default:
      x(`invalid type for setValue: ${c}`);
  }
};
e.getValue = function(a, b = "i8") {
  b.endsWith("*") && (b = "*");
  switch(b) {
    case "i1":
      return y[a >> 0];
    case "i8":
      return y[a >> 0];
    case "i16":
      return B[a >> 1];
    case "i32":
      return C[a >> 2];
    case "i64":
      return E[a >> 3];
    case "float":
      return qa[a >> 2];
    case "double":
      return ra[a >> 3];
    case "*":
      return D[a >> 2];
    default:
      x(`invalid type for getValue: ${b}`);
  }
};
e.intArrayFromString = Sa;
e.FS = O;
e.ALLOC_NORMAL = 0;
e.allocate = (a, b) => {
  b = 1 == b ? Db(a.length) : wb(a.length);
  a.subarray || a.slice || (a = new Uint8Array(a));
  z.set(a, b);
  return b;
};
var Nb;
xa = function Ob() {
  Nb || Pb();
  Nb || (xa = Ob);
};
function Pb() {
  function a() {
    if (!Nb && (Nb = !0, e.calledRun = !0, !pa)) {
      e.noFSInit || O.U.da || O.U();
      O.ra = !1;
      Ga(ta);
      aa(e);
      if (e.onRuntimeInitialized) {
        e.onRuntimeInitialized();
      }
      if (e.postRun) {
        for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length;) {
          var b = e.postRun.shift();
          ua.unshift(b);
        }
      }
      Ga(ua);
    }
  }
  if (!(0 < G)) {
    if (e.preRun) {
      for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length;) {
        va();
      }
    }
    Ga(sa);
    0 < G || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        e.setStatus("");
      }, 1);
      a();
    }, 1)) : a());
  }
}
if (e.preInit) {
  for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); 0 < e.preInit.length;) {
    e.preInit.pop()();
  }
}
Pb();



  return moduleArg.ready
}

);
})();
export default createWasmModule;