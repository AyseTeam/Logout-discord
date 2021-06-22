function LogOut() {
    var t = webpackJsonp.push([
        [], {
            extra_id: (t, n, e) => t.exports = e
        },
        [
            ["extra_id"]
        ]
    ]);
    (function(n) {
        const e = "string" == typeof n ? n : null;
        for (const o in t.c)
            if (t.c.hasOwnProperty(o)) {
                const r = t.c[o].exports;
                if (r && r.__esModule && r.default && (e ? r.default[e] : n(r.default))) return r.default;
                if (r && (e ? r[e] : n(r))) return r
            } return null
    })("login").logout()
}

LogOut()