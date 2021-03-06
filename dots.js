! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports._vantaEffect = e() : t._vantaEffect = e()
}("undefined" != typeof self ? self : this, (function() {
    return function(t) {
        var e = {};

        function i(s) {
            if (e[s]) return e[s].exports;
            var o = e[s] = {
                i: s,
                l: !1,
                exports: {}
            };
            return t[s].call(o.exports, o, o.exports, i), o.l = !0, o.exports
        }
        return i.m = t, i.c = e, i.d = function(t, e, s) {
            i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: s
            })
        }, i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, i.t = function(t, e) {
            if (1 & e && (t = i(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var s = Object.create(null);
            if (i.r(s), Object.defineProperty(s, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var o in t) i.d(s, o, function(e) {
                    return t[e]
                }.bind(null, o));
            return s
        }, i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return i.d(e, "a", e), e
        }, i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.p = "", i(i.s = 8)
    }({
        0: function(t, e, i) {
            "use strict";

            function s(t, e) {
                for (let i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                return t
            }

            function o() {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 600
            }
            i.d(e, "c", (function() {
                return s
            })), i.d(e, "e", (function() {
                return o
            })), i.d(e, "i", (function() {
                return n
            })), i.d(e, "h", (function() {
                return r
            })), i.d(e, "g", (function() {
                return h
            })), i.d(e, "f", (function() {
                return a
            })), i.d(e, "a", (function() {
                return c
            })), i.d(e, "b", (function() {
                return u
            })), i.d(e, "d", (function() {
                return l
            })), Number.prototype.clamp = function(t, e) {
                return Math.min(Math.max(this, t), e)
            };
            const n = t => t[Math.floor(Math.random() * t.length)];

            function r(t, e) {
                return null == t && (t = 0), null == e && (e = 1), t + Math.random() * (e - t)
            }

            function h(t, e) {
                return null == t && (t = 0), null == e && (e = 1), Math.floor(t + Math.random() * (e - t + 1))
            }
            const a = t => document.querySelector(t),
                c = t => "number" == typeof t ? "#" + ("00000" + t.toString(16)).slice(-6) : t,
                u = (t, e = 1) => {
                    const i = c(t),
                        s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),
                        o = s ? {
                            r: parseInt(s[1], 16),
                            g: parseInt(s[2], 16),
                            b: parseInt(s[3], 16)
                        } : null;
                    return "rgba(" + o.r + "," + o.g + "," + o.b + "," + e + ")"
                },
                l = t => .299 * t.r + .587 * t.g + .114 * t.b
        },
        1: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return r
            }));
            var s = i(0);
            const o = "object" == typeof window;
            let n = o && window.THREE || {};
            o && !window.VANTA && (window.VANTA = {});
            const r = o && window.VANTA || {};
            r.register = (t, e) => r[t] = t => new e(t), r.version = "0.5.4";
            const h = function() {
                return Array.prototype.unshift.call(arguments, "[VANTA]"), console.error.apply(this, arguments)
            };
            r.VantaBase = class {
                constructor(t = {}) {
                    if (!o) return !1;
                    if (r.current = this, this.windowMouseMoveWrapper = this.windowMouseMoveWrapper.bind(this), this.windowTouchWrapper = this.windowTouchWrapper.bind(this), this.resize = this.resize.bind(this), this.animationLoop = this.animationLoop.bind(this), this.restart = this.restart.bind(this), this.options = Object(s.c)({}, this.defaultOptions), (t instanceof HTMLElement || "string" == typeof t) && (t = {
                            el: t
                        }), Object(s.c)(this.options, t), this.options.THREE && (n = this.options.THREE), this.el = this.options.el, null == this.el) h('Instance needs "el" param!');
                    else if (!(this.options.el instanceof HTMLElement)) {
                        const t = this.el;
                        if (this.el = Object(s.f)(t), !this.el) return void h("Cannot find element", t)
                    }
                    let e, i;
                    for (e = 0; e < this.el.children.length; e++) i = this.el.children[e], "static" === getComputedStyle(i).position && (i.style.position = "relative"), "auto" === getComputedStyle(i).zIndex && (i.style.zIndex = 1);
                    "static" === getComputedStyle(this.el).position && (this.el.style.position = "relative"), this.initThree(), this.setSize();
                    try {
                        this.init()
                    } catch (t) {
                        return h("Init error", t), this.renderer && this.renderer.domElement && this.el.removeChild(this.renderer.domElement), void(this.options.backgroundColor && (console.log("[VANTA] Falling back to backgroundColor"), this.el.style.background = Object(s.a)(this.options.backgroundColor)))
                    }
                    const a = window.addEventListener;
                    a("resize", this.resize), this.resize(), this.animationLoop(), a("scroll", this.windowMouseMoveWrapper), a("mousemove", this.windowMouseMoveWrapper), a("touchstart", this.windowTouchWrapper), a("touchmove", this.windowTouchWrapper)
                }
                setOptions(t = {}) {
                    Object(s.c)(this.options, t)
                }
                applyCanvasStyles(t, e = {}) {
                    Object(s.c)(t.style, {
                        position: "absolute",
                        zIndex: 0,
                        top: 0,
                        left: 0,
                        background: ""
                    }), Object(s.c)(t.style, e), t.classList.add("vanta-canvas")
                }
                initThree() {
                    n.WebGLRenderer ? (this.renderer = new n.WebGLRenderer({
                        alpha: !0,
                        antialias: !0
                    }), this.el.appendChild(this.renderer.domElement), this.applyCanvasStyles(this.renderer.domElement), isNaN(this.options.backgroundAlpha) && (this.options.backgroundAlpha = 1), this.scene = new n.Scene) : console.warn("[VANTA] No THREE defined on window")
                }
                getCanvasElement() {
                    return this.renderer ? this.renderer.domElement : this.p5renderer ? this.p5renderer.canvas : void 0
                }
                windowMouseMoveWrapper(t) {
                    const e = this.getCanvasElement();
                    if (!e) return !1;
                    const i = e.getBoundingClientRect(),
                        s = t.clientX - i.left,
                        o = t.clientY - i.top;
                    s >= 0 && o >= 0 && s <= i.width && o <= i.height && (this.mouseX = s, this.mouseY = o, this.options.mouseEase || this.triggerMouseMove(s, o))
                }
                windowTouchWrapper(t) {
                    if (1 === t.touches.length) {
                        const e = this.getCanvasElement();
                        if (!e) return !1;
                        const i = e.getBoundingClientRect(),
                            s = t.touches[0].clientX - i.left,
                            o = t.touches[0].clientY - i.top;
                        s >= 0 && o >= 0 && s <= i.width && o <= i.height && (this.mouseX = s, this.mouseY = o, this.options.mouseEase || this.triggerMouseMove(s, o))
                    }
                }
                triggerMouseMove(t, e) {
                    this.uniforms && (this.uniforms.u_mouse.value.x = t / this.scale, this.uniforms.u_mouse.value.y = e / this.scale);
                    const i = t / this.width,
                        s = e / this.height;
                    "function" == typeof this.onMouseMove && this.onMouseMove(i, s)
                }
                setSize() {
                    this.scale || (this.scale = 1), Object(s.e)() && this.options.scaleMobile ? this.scale = this.options.scaleMobile : this.options.scale && (this.scale = this.options.scale), this.width = this.el.offsetWidth || window.innerWidth, this.height = this.el.offsetHeight || window.innerHeight
                }
                resize() {
                    this.setSize(), this.camera && (this.camera.aspect = this.width / this.height, "function" == typeof this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix()), this.renderer && (this.renderer.setSize(this.width, this.height), this.renderer.setPixelRatio(window.devicePixelRatio / this.scale)), "function" == typeof this.onResize && this.onResize()
                }
                isOnScreen() {
                    const t = this.el.offsetHeight,
                        e = this.el.getBoundingClientRect(),
                        i = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop,
                        s = e.top + i;
                    return s - window.innerHeight <= i && i <= s + t
                }
                animationLoop() {
                    return this.t || (this.t = 0), this.t += 1, this.t2 || (this.t2 = 0), this.t2 += this.options.speed || 1, this.uniforms && (this.uniforms.u_time.value = .016667 * this.t2), this.options.mouseEase && (this.mouseEaseX = this.mouseEaseX || this.mouseX || 0, this.mouseEaseY = this.mouseEaseY || this.mouseY || 0, Math.abs(this.mouseEaseX - this.mouseX) + Math.abs(this.mouseEaseY - this.mouseY) > .1 && (this.mouseEaseX = this.mouseEaseX + .05 * (this.mouseX - this.mouseEaseX), this.mouseEaseY = this.mouseEaseY + .05 * (this.mouseY - this.mouseEaseY), this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY))), (this.isOnScreen() || this.options.forceAnimate) && ("function" == typeof this.onUpdate && this.onUpdate(), this.scene && this.camera && (this.renderer.render(this.scene, this.camera), this.renderer.setClearColor(this.options.backgroundColor, this.options.backgroundAlpha)), this.fps && this.fps.update && this.fps.update()), this.req = window.requestAnimationFrame(this.animationLoop)
                }
                restart() {
                    if (this.scene)
                        for (; this.scene.children.length;) this.scene.remove(this.scene.children[0]);
                    "function" == typeof this.onRestart && this.onRestart(), this.init()
                }
                init() {
                    "function" == typeof this.onInit && this.onInit()
                }
                destroy() {
                    "function" == typeof this.onDestroy && this.onDestroy();
                    const t = window.removeEventListener;
                    t("touchstart", this.windowTouchWrapper), t("touchmove", this.windowTouchWrapper), t("scroll", this.windowMouseMoveWrapper), t("mousemove", this.windowMouseMoveWrapper), t("resize", this.resize), window.cancelAnimationFrame(this.req), this.renderer && (this.renderer.domElement && this.el.removeChild(this.renderer.domElement), this.renderer = null, this.scene = null)
                }
            }, e.b = r.VantaBase
        },
        8: function(t, e, i) {
            "use strict";
            i.r(e);
            var s = i(1),
                o = i(0);
            class n extends s.b {
                static initClass() {
                    this.prototype.defaultOptions = {
                        color: 16746528,
                        color2: 16746528,
                        backgroundColor: 2236962,
                        size: 3,
                        spacing: 35
                    }
                }
                onInit() {
                    var t = this.camera = new THREE.PerspectiveCamera(50, this.width / this.height, .1, 5e3);
                    t.position.x = 0, t.position.y = 250, t.position.z = 50, t.tx = 0, t.ty = 50, t.tz = 350, t.lookAt(0, 0, 0), this.scene.add(t);
                    var e, i, s, n, r, h, a, c = this.starsGeometry = new THREE.Geometry,
                        u = this.options.spacing;
                    for (e = s = -30; s <= 30; e = ++s)
                        for (i = n = -30; n <= 30; i = ++n)(r = new THREE.Vector3).x = e * u + u / 2, r.y = Object(o.h)(0, 5) - 150, r.z = i * u + u / 2, c.vertices.push(r);
                    h = new THREE.PointsMaterial({
                        color: this.options.color,
                        size: this.options.size
                    }), a = this.starField = new THREE.Points(c, h), this.scene.add(a);
                    var l = new THREE.LineBasicMaterial({
                            color: this.options.color2
                        }),
                        d = new THREE.Geometry;
                    for (e = 0; e < 200; e++) {
                        var p = Object(o.h)(40, 60),
                            f = p + Object(o.h)(12, 20),
                            m = Object(o.h)(-1, 1),
                            w = Math.sqrt(1 - m * m),
                            g = Object(o.h)(0, 2 * Math.PI),
                            v = Math.sin(g) * w,
                            y = Math.cos(g) * w;
                        d.vertices.push(new THREE.Vector3(y * p, v * p, m * p)), d.vertices.push(new THREE.Vector3(y * f, v * f, m * f))
                    }
                    this.linesMesh = new THREE.LineSegments(d, l), this.scene.add(this.linesMesh)
                }
                onUpdate() {
                    const t = this.starsGeometry;
                    this.starField;
                    for (var e = 0; e < t.vertices.length; e++) {
                        var i = t.vertices[e];
                        i.y += .1 * Math.sin(.02 * i.z + .015 * i.x + .02 * this.t)
                    }
                    t.verticesNeedUpdate = !0;
                    const s = this.camera;
                    s.position.x += .003 * (s.tx - s.position.x), s.position.y += .003 * (s.ty - s.position.y), s.position.z += .003 * (s.tz - s.position.z), s.lookAt(0, 0, 0), this.linesMesh.rotation.z += .002, this.linesMesh.rotation.x += 8e-4, this.linesMesh.rotation.y += 5e-4
                }
                onMouseMove(t, e) {
                    this.camera.tx = 100 * (t - .5), this.camera.ty = 50 + 50 * e
                }
                onRestart() {
                    this.scene.remove(this.starField)
                }
            }
            n.initClass(), e.default = s.a.register("DOTS", n)
        }
    })
}));
