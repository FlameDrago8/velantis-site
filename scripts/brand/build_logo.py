"""Velantis 'Zero tick' logo, rebuilt from the recorded spec:
1000u cap grid, 70u extended monoline caps (108u small cut), horizontals -8% optical,
A closed into a plain Lambda, square-cut zero tick as the symbol (one blue per lockup)."""
import math, sys, json
from shapely.geometry import LineString, box, Polygon
from shapely.ops import unary_union
from shapely import affinity

CAP = 1000

def stroke(pts, w):
    return LineString(pts).buffer(w/2, cap_style=2, join_style=2, mitre_limit=10)

def band(g, w=4000):
    return g.intersection(box(-500, 0, w, CAP))

def hbar(x0, x1, y0, h):
    return box(x0, y0, x1, y0+h)

def diag_x(top_x, bot_x, s):
    pass

def glyph(ch, s):
    h = s*0.92
    if ch == 'V' or ch == 'L_':
        W = 1080
        # outer edges hit x=0 / x=W at the cap line; centerline offset by s/(2cos)
        ang = math.atan2(W/2, CAP); off = s/2/math.cos(ang)
        g = stroke([(off-2*W/2/CAP*0+0, -0.0), (W/2, CAP)], 1)  # placeholder
        L1 = LineString([(off, 0), (W/2, CAP)]); L2 = LineString([(W/2, CAP), (W-off, 0)])
        g = LineString([(off - (W/2-off)/CAP*200, -200), (W/2, CAP), (W-off + (W/2-off)/CAP*200, -200)]).buffer(s/2, cap_style=2, join_style=2, mitre_limit=20)
        g = band(g)
        if ch == 'L_':
            g = affinity.scale(g, 1, -1, origin=(0, CAP/2))
        return g, W
    if ch == 'E':
        W = 820
        return unary_union([box(0, 0, s, CAP), hbar(0, W, 0, h), hbar(0, W*0.94, CAP/2-h/2, h), hbar(0, W, CAP-h, h)]), W
    if ch == 'L':
        W = 760
        return unary_union([box(0, 0, s, CAP), hbar(0, W, CAP-h, h)]), W
    if ch == 'N':
        W = 960
        ang = math.atan2(W - s, CAP)
        d = LineString([(s/2 - 0, -300*(W-s)/CAP), (W - s/2, CAP + 300*(W-s)/CAP)])
        d = LineString([(0 + s*0.5, 0 - 0), (W - s*0.5, CAP)])
        # extend
        dx, dy = (W - s), CAP
        k = 0.3
        d = LineString([(s*0.5 - dx*k, -dy*k), (W - s*0.5 + dx*k, CAP + dy*k)]).buffer(s/2, cap_style=2)
        d = d.intersection(box(0, 0, W, CAP))
        return unary_union([box(0, 0, s, CAP), box(W-s, 0, W, CAP), d]), W
    if ch == 'T':
        W = 900
        return unary_union([hbar(0, W, 0, h), box(W/2-s/2, 0, W/2+s/2, CAP)]), W
    if ch == 'I':
        return box(0, 0, s, CAP), s
    if ch == 'S':
        W = 920
        R = 222  # centerline corner radius (2R must fit the bowl)
        cy0, cym, cy1 = h/2, CAP/2, CAP - h/2
        xl, xr = s/2, W - s/2
        pts = []
        def arc(cx, cy, a0, a1, n=24):
            for i in range(n+1):
                a = math.radians(a0 + (a1-a0)*i/n)
                pts.append((cx + R*math.cos(a), cy + R*math.sin(a)))
        pts.append((W, cy0))
        arc(xl + R, cy0 + R, -90, -180)            # top-left corner
        arc(xl + R, cym - R + 0, 180, 90)          # into middle bar
        arc(xr - R, cym + R, -90, 0)               # middle-right corner
        arc(xr - R, cy1 - R, 0, 90)                # bottom-right corner
        pts.append((0, cy1))
        # monoline: verticals s wide, horizontals h tall -> buffer by s/2 then squash vertical bars
        g = LineString(pts).buffer(s/2, cap_style=2, join_style=1, quad_segs=24)
        return g, W
    raise ValueError(ch)

TICK = dict(w=1.25, top=0.40, bot=0.78)  # tick width in stems; top/bottom as fraction of cap

def tick_geom(s, W):
    tw = s*TICK['w']
    return box(W/2 - tw/2, CAP*TICK['top'], W/2 + tw/2, CAP*TICK['bot'])

# advance gaps (sidebearings) tuned optically, in units, between glyph boxes
GAP = 190
KERN = {('V','E'): -60, ('E','L'): 0, ('L','A'): -150, ('A','N'): -40, ('N','T'): -20,
        ('T','I'): -10, ('I','S'): 0}

def wordmark(s):
    x = 0; parts = []; tick = None
    word = 'VELANTIS'
    for i, ch in enumerate(word):
        if i: x += GAP + KERN.get((word[i-1], ch), 0)
        g, W = glyph('L_' if ch == 'A' else ch, s)
        g = affinity.translate(g, x, 0)
        parts.append(g)
        if ch == 'A':
            tick = affinity.translate(tick_geom(s, W), x, 0)
        x += W
    return unary_union(parts), tick, x

def mark(s):
    g, W = glyph('L_', s)
    return g, tick_geom(s, W), W

def to_path(geom, pad_x=0, pad_y=0, scale=1.0):
    polys = [geom] if geom.geom_type == 'Polygon' else list(geom.geoms)
    out = []
    for p in polys:
        for ring in [p.exterior] + list(p.interiors):
            c = list(ring.coords)[:-1]
            out.append('M' + 'L'.join(f'{(x+pad_x)*scale:.1f} {(y+pad_y)*scale:.1f}' for x, y in c) + 'Z')
    return ''.join(out)

if __name__ == '__main__':
    out = {}
    for name, s in (('display', 70), ('small', 108)):
        w, t, W = wordmark(s)
        out[name] = dict(word=to_path(w), tick=to_path(t), width=round(W, 1), height=CAP)
    g, t, W = mark(70)
    out['mark'] = dict(glyph=to_path(g), tick=to_path(t), width=W, height=CAP)
    g, t, W = mark(130)
    out['mark_bold'] = dict(glyph=to_path(g), tick=to_path(t), width=W, height=CAP)
    json.dump(out, open(sys.argv[1], 'w'))
    print({k: v['width'] for k, v in out.items()})
