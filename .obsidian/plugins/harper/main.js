'use strict';

var view = require('@codemirror/view');
var state = require('@codemirror/state');
var obsidian = require('obsidian');

var logoSvg = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 695 411\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" xmlns:serif=\"http://www.serif.com/\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;\" fill=\"#ffffff\" stroke=\"currentColor\">\n    <g transform=\"matrix(1,0,0,1,-5,-1720)\">\n        <g id=\"Artboard1\" transform=\"matrix(0.824576,0,0,0.749254,0.365685,430.856)\">\n            <rect x=\"5.62\" y=\"1720.57\" width=\"842.425\" height=\"547.24\" style=\"fill:none;\"/>\n            <g transform=\"matrix(1.21274,0,0,1.33466,-2183.71,393.157)\">\n                <g transform=\"matrix(1,0,0,1,-22.3927,1.08043)\">\n                    <path d=\"M1930.93,1121.75C1930.93,1121.75 1974.66,1080.73 2041.34,1094.1C2086.61,1103.18 2122.83,1145.4 2122.83,1145.4\" style=\"fill:none;stroke-width:22.92px;\"/>\n                </g>\n                <g transform=\"matrix(1,0,0,1,-47.3485,12.3935)\">\n                    <path d=\"M2250.3,1107.1C2250.3,1107.1 2261.8,1065.58 2311.59,1047.05C2361.62,1028.44 2422.42,1051.13 2422.42,1051.13\" style=\"fill:none;stroke-width:22.92px;\"/>\n                </g>\n                <g transform=\"matrix(1.10085,0,0,1.10085,-212.096,-122.054)\">\n                    <g transform=\"matrix(1,0,0,1,14.3186,-0.853887)\">\n                        <ellipse cx=\"1981.62\" cy=\"1247.49\" rx=\"87.401\" ry=\"87.881\" style=\"fill:none;stroke-width:20.82px;\"/>\n                    </g>\n                    <rect x=\"2083.34\" y=\"1231.11\" width=\"66.702\" height=\"15.521\" style=\"fill:none;stroke-width:20.82px;\"/>\n                    <rect x=\"1892.23\" y=\"1208.69\" width=\"16.306\" height=\"30.182\" style=\"fill:none;stroke-width:20.82px;\"/>\n                    <g transform=\"matrix(-1,0,0,1,4281.79,-0.853887)\">\n                        <ellipse cx=\"1981.62\" cy=\"1247.49\" rx=\"87.401\" ry=\"87.881\" style=\"fill:none;stroke-width:20.82px;\"/>\n                    </g>\n                    <g transform=\"matrix(-1,0,0,1,4296.11,0)\">\n                        <rect x=\"2083.34\" y=\"1231.11\" width=\"66.702\" height=\"15.521\" style=\"fill:none;stroke-width:20.82px;\"/>\n                    </g>\n                    <g transform=\"matrix(-1,0,0,1,4296.11,0)\">\n                        <rect x=\"1892.23\" y=\"1208.69\" width=\"16.306\" height=\"30.182\" style=\"fill:none;stroke-width:20.82px;\"/>\n                    </g>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>\n";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function crelt() {
  var elt = arguments[0];
  if (typeof elt == "string") elt = document.createElement(elt);
  var i = 1, next = arguments[1];
  if (next && typeof next == "object" && next.nodeType == null && !Array.isArray(next)) {
    for (var name in next) if (Object.prototype.hasOwnProperty.call(next, name)) {
      var value = next[name];
      if (typeof value == "string") elt.setAttribute(name, value);
      else if (value != null) elt[name] = value;
    }
    i++;
  }
  for (; i < arguments.length; i++) add(elt, arguments[i]);
  return elt
}

function add(elt, child) {
  if (typeof child == "string") {
    elt.appendChild(document.createTextNode(child));
  } else if (child == null) ; else if (child.nodeType != null) {
    elt.appendChild(child);
  } else if (Array.isArray(child)) {
    for (var i = 0; i < child.length; i++) add(elt, child[i]);
  } else {
    throw new RangeError("Unsupported child node: " + child)
  }
}

var SelectedDiagnostic = /** @class */ (function () {
    function SelectedDiagnostic(from, to, diagnostic) {
        this.from = from;
        this.to = to;
        this.diagnostic = diagnostic;
    }
    return SelectedDiagnostic;
}());
var LintState = /** @class */ (function () {
    function LintState(diagnostics, selected) {
        this.diagnostics = diagnostics;
        this.selected = selected;
    }
    LintState.init = function (diagnostics, state) {
        // Filter the list of diagnostics for which to create markers
        var markedDiagnostics = diagnostics;
        var diagnosticFilter = state.facet(lintConfig).markerFilter;
        if (diagnosticFilter)
            markedDiagnostics = diagnosticFilter(markedDiagnostics, state);
        var ranges = view.Decoration.set(markedDiagnostics.map(function (d) {
            // For zero-length ranges or ranges covering only a line break, create a widget
            return d.from == d.to || (d.from == d.to - 1 && state.doc.lineAt(d.from).to == d.from)
                ? view.Decoration.widget({
                    widget: new DiagnosticWidget(d),
                    diagnostic: d
                }).range(d.from)
                : view.Decoration.mark({
                    attributes: {
                        class: 'cm-lintRange cm-lintRange-' + d.severity + (d.markClass ? ' ' + d.markClass : '')
                    },
                    diagnostic: d
                }).range(d.from, d.to);
        }), true);
        return new LintState(ranges, findDiagnostic(ranges));
    };
    return LintState;
}());
function findDiagnostic(diagnostics, diagnostic, after) {
    if (diagnostic === void 0) { diagnostic = null; }
    if (after === void 0) { after = 0; }
    var found = null;
    diagnostics.between(after, 1e9, function (from, to, _a) {
        var spec = _a.spec;
        if (diagnostic && spec.diagnostic != diagnostic)
            return;
        found = new SelectedDiagnostic(from, to, spec.diagnostic);
        return false;
    });
    return found;
}
function hideTooltip(tr, tooltip) {
    var from = tooltip.pos, to = tooltip.end || from;
    var result = tr.state.facet(lintConfig).hideOn(tr, from, to);
    if (result != null)
        return result;
    var line = tr.startState.doc.lineAt(tooltip.pos);
    return !!(tr.effects.some(function (e) { return e.is(setDiagnosticsEffect); }) ||
        tr.changes.touchesRange(line.from, Math.max(line.to, to)));
}
function maybeEnableLint(state$1, effects) {
    return state$1.field(lintState, false)
        ? effects
        : effects.concat(state.StateEffect.appendConfig.of(lintExtensions));
}
/// Returns a transaction spec which updates the current set of
/// diagnostics, and enables the lint extension if if wasn't already
/// active.
function setDiagnostics(state, diagnostics) {
    return {
        effects: maybeEnableLint(state, [setDiagnosticsEffect.of(diagnostics)])
    };
}
/// The state effect that updates the set of active diagnostics. Can
/// be useful when writing an extension that needs to track these.
var setDiagnosticsEffect = state.StateEffect.define();
var movePanelSelection = state.StateEffect.define();
var lintState = state.StateField.define({
    create: function () {
        return new LintState(view.Decoration.none, null);
    },
    update: function (value, tr) {
        if (tr.docChanged && value.diagnostics.size) {
            var mapped = value.diagnostics.map(tr.changes);
            var selected = null;
            if (value.selected) {
                var selPos = tr.changes.mapPos(value.selected.from, 1);
                selected =
                    findDiagnostic(mapped, value.selected.diagnostic, selPos) ||
                        findDiagnostic(mapped, null, selPos);
            }
            value = new LintState(mapped, selected);
        }
        for (var _i = 0, _a = tr.effects; _i < _a.length; _i++) {
            var effect = _a[_i];
            if (effect.is(setDiagnosticsEffect)) {
                value = LintState.init(effect.value, tr.state);
            }
            else if (effect.is(movePanelSelection)) {
                value = new LintState(value.diagnostics, effect.value);
            }
        }
        return value;
    },
    provide: function (f) { return [view.EditorView.decorations.from(f, function (s) { return s.diagnostics; })]; }
});
var activeMark = view.Decoration.mark({ class: 'cm-lintRange cm-lintRange-active' });
function lintTooltip(view, pos, side) {
    var diagnostics = view.state.field(lintState).diagnostics;
    var found = [], stackStart = 2e8, stackEnd = 0;
    diagnostics.between(pos - (side < 0 ? 1 : 0), pos + (side > 0 ? 1 : 0), function (from, to, _a) {
        var spec = _a.spec;
        if (pos >= from &&
            pos <= to &&
            (from == to || ((pos > from || side > 0) && (pos < to || side < 0)))) {
            found.push(spec.diagnostic);
            stackStart = Math.min(from, stackStart);
            stackEnd = Math.max(to, stackEnd);
        }
    });
    var diagnosticFilter = view.state.facet(lintConfig).tooltipFilter;
    if (diagnosticFilter)
        found = diagnosticFilter(found, view.state);
    if (!found.length)
        return null;
    return {
        pos: stackStart,
        end: stackEnd,
        above: view.state.doc.lineAt(stackStart).to < stackEnd,
        create: function () {
            return { dom: diagnosticsTooltip(view, found) };
        }
    };
}
function diagnosticsTooltip(view, diagnostics) {
    return crelt('ul', { class: 'cm-tooltip-lint' }, diagnostics.map(function (d) { return renderDiagnostic(view, d); }));
}
var lintPlugin = view.ViewPlugin.fromClass(/** @class */ (function () {
    function class_1(view) {
        this.view = view;
        this.timeout = -1;
        this.set = true;
        var delay = view.state.facet(lintConfig).delay;
        this.lintTime = Date.now() + delay;
        this.run = this.run.bind(this);
        this.timeout = setTimeout(this.run, delay);
    }
    class_1.prototype.run = function () {
        var _this = this;
        clearTimeout(this.timeout);
        var now = Date.now();
        if (now < this.lintTime - 10) {
            this.timeout = setTimeout(this.run, this.lintTime - now);
        }
        else {
            this.set = false;
            var state_1 = this.view.state, sources = state_1.facet(lintConfig).sources;
            if (sources.length)
                Promise.all(sources.map(function (source) { return Promise.resolve(source(_this.view)); })).then(function (annotations) {
                    var all = annotations.reduce(function (a, b) { return a.concat(b); });
                    if (_this.view.state.doc == state_1.doc)
                        _this.view.dispatch(setDiagnostics(_this.view.state, all));
                }, function (error) {
                    view.logException(_this.view.state, error);
                });
        }
    };
    class_1.prototype.update = function (update) {
        var config = update.state.facet(lintConfig);
        if (update.docChanged ||
            config != update.startState.facet(lintConfig) ||
            (config.needsRefresh && config.needsRefresh(update))) {
            this.lintTime = Date.now() + config.delay;
            if (!this.set) {
                this.set = true;
                this.timeout = setTimeout(this.run, config.delay);
            }
        }
    };
    class_1.prototype.force = function () {
        if (this.set) {
            this.lintTime = Date.now();
            this.run();
        }
    };
    class_1.prototype.destroy = function () {
        clearTimeout(this.timeout);
    };
    return class_1;
}()));
var lintConfig = state.Facet.define({
    combine: function (input) {
        return __assign({ sources: input.map(function (i) { return i.source; }).filter(function (x) { return x != null; }) }, state.combineConfig(input.map(function (i) { return i.config; }), {
            delay: 750,
            markerFilter: null,
            tooltipFilter: null,
            needsRefresh: null,
            hideOn: function () { return null; }
        }, {
            needsRefresh: function (a, b) { return (!a ? b : !b ? a : function (u) { return a(u) || b(u); }); }
        }));
    }
});
/// Given a diagnostic source, this function returns an extension that
/// enables linting with that source. It will be called whenever the
/// editor is idle (after its content changed). If `null` is given as
/// source, this only configures the lint extension.
function linter(source, config) {
    if (config === void 0) { config = {}; }
    return [lintConfig.of({ source: source, config: config }), lintPlugin, lintExtensions];
}
function renderDiagnostic(view, diagnostic, inPanel) {
    var _a;
    var keys = [];
    return crelt('li', { class: 'cm-diagnostic cm-diagnostic-' + diagnostic.severity }, crelt('span', { class: 'cm-diagnosticTitle' }, diagnostic.title), crelt('span', { class: 'cm-diagnosticText' }, diagnostic.renderMessage ? diagnostic.renderMessage(view) : diagnostic.message), (_a = diagnostic.actions) === null || _a === void 0 ? void 0 : _a.map(function (action, i) {
        var fired = false;
        var click = function (e) {
            e.preventDefault();
            if (fired)
                return;
            fired = true;
            var found = findDiagnostic(view.state.field(lintState).diagnostics, diagnostic);
            if (found)
                action.apply(view, found.from, found.to);
        };
        var name = action.name, keyIndex = keys[i] ? name.indexOf(keys[i]) : -1;
        var nameElt = keyIndex < 0
            ? name
            : [
                name.slice(0, keyIndex),
                crelt('u', name.slice(keyIndex, keyIndex + 1)),
                name.slice(keyIndex + 1)
            ];
        return crelt('button', {
            type: 'button',
            class: 'cm-diagnosticAction',
            onclick: click,
            onmousedown: click,
            'aria-label': " Action: ".concat(name).concat(keyIndex < 0 ? '' : " (access key \"".concat(keys[i], ")\""), ".")
        }, nameElt);
    }), diagnostic.source && crelt('div', { class: 'cm-diagnosticSource' }, diagnostic.source));
}
var DiagnosticWidget = /** @class */ (function (_super) {
    __extends(DiagnosticWidget, _super);
    function DiagnosticWidget(diagnostic) {
        var _this = _super.call(this) || this;
        _this.diagnostic = diagnostic;
        return _this;
    }
    DiagnosticWidget.prototype.eq = function (other) {
        return other.diagnostic == this.diagnostic;
    };
    DiagnosticWidget.prototype.toDOM = function () {
        return crelt('span', { class: 'cm-lintPoint cm-lintPoint-' + this.diagnostic.severity });
    };
    return DiagnosticWidget;
}(view.WidgetType));
function svg(content, attrs) {
    return "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" ".concat(attrs, ">").concat(encodeURIComponent(content), "</svg>')");
}
function underline(color) {
    return svg("<path d=\"m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0\" stroke=\"".concat(color, "\" fill=\"none\" stroke-width=\"1\"/>"), "width=\"6\" height=\"3\"");
}
var baseTheme = view.EditorView.baseTheme({
    '.cm-diagnostic': {
        padding: '4px',
        marginLeft: '0px',
        display: 'flex',
        flexDirection: 'column',
        whiteSpace: 'pre-wrap'
    },
    '.cm-diagnosticTitle': {
        boxShadow: 'inset 0 -2px #DB2B39',
        width: 'max-content',
        fontWeight: 'bold'
    },
    '.cm-diagnosticText': {
        marginTop: '8px'
    },
    '.cm-diagnosticAction': {
        font: 'inherit',
        border: 'none',
        marginTop: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--size-4-2)',
        padding: 'var(--size-4-1) var(--size-4-2)',
        cursor: 'var(--cursor)',
        fontSize: 'var(--font-ui-small)',
        borderRadius: 'var(--radius-s)',
        whiteSpace: 'nowrap',
        width: '100%'
    },
    '.cm-tooltip': {
        padding: 'var(--size-2-3) !important',
        border: '1px solid var(--background-modifier-border-hover) !important',
        backgroundColor: 'var(--background-secondary) !important',
        borderRadius: 'var(--radius-m) !important',
        boxShadow: 'var(--shadow-s) !important',
        zIndex: 'var(--layer-menu) !important',
        userSelect: 'none !important',
        maxHeight: 'calc(100% - var(--header-height)) !important',
        overflow: 'hidden !important'
    },
    '.cm-diagnosticSource': {
        fontSize: '70%',
        opacity: 0.7
    },
    '.cm-lintRange': {
        backgroundPosition: 'left bottom',
        backgroundRepeat: 'repeat-x',
        paddingBottom: '0.7px'
    },
    '.cm-lintRange-error': { backgroundImage: underline('#d11') },
    '.cm-lintRange-warning': { backgroundImage: underline('orange') },
    '.cm-lintRange-info': { backgroundImage: underline('#999') },
    '.cm-lintRange-hint': { backgroundImage: underline('#66d') },
    '.cm-lintRange-active': { backgroundColor: '#ffdd9980' },
    '.cm-tooltip-lint': {
        padding: 0,
        margin: 0
    },
    '.cm-lintPoint': {
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: '-2px',
            borderLeft: '3px solid transparent',
            borderRight: '3px solid transparent',
            borderBottom: '4px solid #d11'
        }
    },
    '.cm-lintPoint-warning': {
        '&:after': { borderBottomColor: 'orange' }
    },
    '.cm-lintPoint-info': {
        '&:after': { borderBottomColor: '#999' }
    },
    '.cm-lintPoint-hint': {
        '&:after': { borderBottomColor: '#66d' }
    },
    '.cm-panel.cm-panel-lint': {
        position: 'relative',
        '& ul': {
            maxHeight: '100px',
            overflowY: 'auto',
            '& [aria-selected]': {
                backgroundColor: '#ddd',
                '& u': { textDecoration: 'underline' }
            },
            '&:focus [aria-selected]': {
                background_fallback: '#bdf',
                backgroundColor: 'Highlight',
                color_fallback: 'white',
                color: 'HighlightText'
            },
            '& u': { textDecoration: 'none' },
            padding: 0,
            margin: 0
        },
        '& [name=close]': {
            position: 'absolute',
            top: '0',
            right: '2px',
            background: 'inherit',
            border: 'none',
            font: 'inherit',
            padding: 0,
            margin: 0
        }
    }
});
var lintExtensions = [
    lintState,
    view.EditorView.decorations.compute([lintState], function (state) {
        var _a = state.field(lintState), selected = _a.selected, panel = _a.panel;
        return !selected || !panel || selected.from == selected.to
            ? view.Decoration.none
            : view.Decoration.set([activeMark.range(selected.from, selected.to)]);
    }),
    view.hoverTooltip(lintTooltip, { hideOn: hideTooltip }),
    baseTheme
];

var _ = Object.defineProperty;
var $ = (Q, A, C) => A in Q ? _(Q, A, { enumerable: !0, configurable: !0, writable: !0, value: C }) : Q[A] = C;
var D = (Q, A, C) => $(Q, typeof A != "symbol" ? A + "" : A, C);
let CA = AA;
function H() {
  return CA;
}
async function i() {
  const Q = await Promise.resolve().then(() => MA);
  return await Q.default({ module_or_path: H() }), Q;
}
class VA {
  constructor() {
    D(this, "inner");
  }
  /** Initialize the WebAssembly and construct the inner Linter. */
  async initialize() {
    if (!this.inner) {
      const A = await i();
      A.setup(), this.inner = A.Linter.new();
    }
  }
  async setup() {
    await this.initialize(), this.inner.lint("");
  }
  async lint(A) {
    await this.initialize();
    let C = this.inner.lint(A);
    return C = C.filter((g) => g.suggestion_count() > 0), C;
  }
  async applySuggestion(A, C, g) {
    return (await i()).apply_suggestion(A, g, C);
  }
  async isLikelyEnglish(A) {
    return await this.initialize(), this.inner.is_likely_english(A);
  }
  async isolateEnglish(A) {
    return await this.initialize(), this.inner.isolate_english(A);
  }
  async getLintConfig() {
    return await this.initialize(), this.inner.get_lint_config_as_object();
  }
  async setLintConfig(A) {
    await this.initialize(), this.inner.set_lint_config_from_object(A);
  }
  async getLintConfigAsJSON() {
    return await this.initialize(), this.inner.get_lint_config_as_json();
  }
  async setLintConfigWithJSON(A) {
    await this.initialize(), this.inner.set_lint_config_from_json(A);
  }
  async toTitleCase(A) {
    return (await i()).to_title_case(A);
  }
  async getLintDescriptions() {
    return await this.initialize(), this.inner.get_lint_descriptions_as_object();
  }
  async getLintDescriptionsAsJSON() {
    return await this.initialize(), this.inner.get_lint_descriptions_as_json();
  }
}
async function QA(Q) {
  return {
    procName: Q.procName,
    args: await Promise.all(Q.args.map(n))
  };
}
async function n(Q) {
  const { Lint: A, Span: C, Suggestion: g } = await i();
  if (Array.isArray(Q))
    return { json: JSON.stringify(await Promise.all(Q.map(n))), type: "Array" };
  switch (typeof Q) {
    case "string":
    case "number":
    case "boolean":
    case "undefined":
      return { json: JSON.stringify(Q), type: typeof Q };
  }
  if (Q.to_json != null) {
    const B = Q.to_json();
    let E;
    if (Q instanceof A ? E = "Lint" : Q instanceof g ? E = "Suggestion" : Q instanceof C && (E = "Span"), E == null)
      throw new Error("Unhandled case");
    return { json: B, type: E };
  }
  throw new Error("Unhandled case");
}
async function u(Q) {
  const { Lint: A, Span: C, Suggestion: g } = await i();
  switch (Q.type) {
    case "undefined":
      return;
    case "boolean":
    case "number":
    case "string":
      return JSON.parse(Q.json);
    case "Suggestion":
      return g.from_json(Q.json);
    case "Lint":
      return A.from_json(Q.json);
    case "Span":
      return C.from_json(Q.json);
    case "Array":
      return await Promise.all(JSON.parse(Q.json).map(u));
    default:
      throw new Error(`Unhandled case: ${Q.type}`);
  }
}
const q = "dmFyIFggPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7CnZhciBZID0gKG4sIHQsIGUpID0+IHQgaW4gbiA/IFgobiwgdCwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IG5bdF0gPSBlOwp2YXIgRiA9IChuLCB0LCBlKSA9PiBZKG4sIHR5cGVvZiB0ICE9ICJzeW1ib2wiID8gdCArICIiIDogdCwgZSk7CnZhciBaID0gIiI7CmxldCBDID0gWjsKZnVuY3Rpb24gcSgpIHsKICByZXR1cm4gQzsKfQpmdW5jdGlvbiB0dChuKSB7CiAgQyA9IG47Cn0KYXN5bmMgZnVuY3Rpb24gaygpIHsKICBjb25zdCBuID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHsKICAgIHJldHVybiB3dDsKICB9KTsKICByZXR1cm4gYXdhaXQgbi5kZWZhdWx0KHsgbW9kdWxlX29yX3BhdGg6IHEoKSB9KSwgbjsKfQpjbGFzcyBldCB7CiAgY29uc3RydWN0b3IoKSB7CiAgICBGKHRoaXMsICJpbm5lciIpOwogIH0KICAvKiogSW5pdGlhbGl6ZSB0aGUgV2ViQXNzZW1ibHkgYW5kIGNvbnN0cnVjdCB0aGUgaW5uZXIgTGludGVyLiAqLwogIGFzeW5jIGluaXRpYWxpemUoKSB7CiAgICBpZiAoIXRoaXMuaW5uZXIpIHsKICAgICAgY29uc3QgdCA9IGF3YWl0IGsoKTsKICAgICAgdC5zZXR1cCgpLCB0aGlzLmlubmVyID0gdC5MaW50ZXIubmV3KCk7CiAgICB9CiAgfQogIGFzeW5jIHNldHVwKCkgewogICAgYXdhaXQgdGhpcy5pbml0aWFsaXplKCksIHRoaXMuaW5uZXIubGludCgiIik7CiAgfQogIGFzeW5jIGxpbnQodCkgewogICAgYXdhaXQgdGhpcy5pbml0aWFsaXplKCk7CiAgICBsZXQgZSA9IHRoaXMuaW5uZXIubGludCh0KTsKICAgIHJldHVybiBlID0gZS5maWx0ZXIoKHIpID0+IHIuc3VnZ2VzdGlvbl9jb3VudCgpID4gMCksIGU7CiAgfQogIGFzeW5jIGFwcGx5U3VnZ2VzdGlvbih0LCBlLCByKSB7CiAgICByZXR1cm4gKGF3YWl0IGsoKSkuYXBwbHlfc3VnZ2VzdGlvbih0LCByLCBlKTsKICB9CiAgYXN5bmMgaXNMaWtlbHlFbmdsaXNoKHQpIHsKICAgIHJldHVybiBhd2FpdCB0aGlzLmluaXRpYWxpemUoKSwgdGhpcy5pbm5lci5pc19saWtlbHlfZW5nbGlzaCh0KTsKICB9CiAgYXN5bmMgaXNvbGF0ZUVuZ2xpc2godCkgewogICAgcmV0dXJuIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZSgpLCB0aGlzLmlubmVyLmlzb2xhdGVfZW5nbGlzaCh0KTsKICB9CiAgYXN5bmMgZ2V0TGludENvbmZpZygpIHsKICAgIHJldHVybiBhd2FpdCB0aGlzLmluaXRpYWxpemUoKSwgdGhpcy5pbm5lci5nZXRfbGludF9jb25maWdfYXNfb2JqZWN0KCk7CiAgfQogIGFzeW5jIHNldExpbnRDb25maWcodCkgewogICAgYXdhaXQgdGhpcy5pbml0aWFsaXplKCksIHRoaXMuaW5uZXIuc2V0X2xpbnRfY29uZmlnX2Zyb21fb2JqZWN0KHQpOwogIH0KICBhc3luYyBnZXRMaW50Q29uZmlnQXNKU09OKCkgewogICAgcmV0dXJuIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZSgpLCB0aGlzLmlubmVyLmdldF9saW50X2NvbmZpZ19hc19qc29uKCk7CiAgfQogIGFzeW5jIHNldExpbnRDb25maWdXaXRoSlNPTih0KSB7CiAgICBhd2FpdCB0aGlzLmluaXRpYWxpemUoKSwgdGhpcy5pbm5lci5zZXRfbGludF9jb25maWdfZnJvbV9qc29uKHQpOwogIH0KICBhc3luYyB0b1RpdGxlQ2FzZSh0KSB7CiAgICByZXR1cm4gKGF3YWl0IGsoKSkudG9fdGl0bGVfY2FzZSh0KTsKICB9CiAgYXN5bmMgZ2V0TGludERlc2NyaXB0aW9ucygpIHsKICAgIHJldHVybiBhd2FpdCB0aGlzLmluaXRpYWxpemUoKSwgdGhpcy5pbm5lci5nZXRfbGludF9kZXNjcmlwdGlvbnNfYXNfb2JqZWN0KCk7CiAgfQogIGFzeW5jIGdldExpbnREZXNjcmlwdGlvbnNBc0pTT04oKSB7CiAgICByZXR1cm4gYXdhaXQgdGhpcy5pbml0aWFsaXplKCksIHRoaXMuaW5uZXIuZ2V0X2xpbnRfZGVzY3JpcHRpb25zX2FzX2pzb24oKTsKICB9Cn0KYXN5bmMgZnVuY3Rpb24gSihuKSB7CiAgY29uc3QgeyBMaW50OiB0LCBTcGFuOiBlLCBTdWdnZXN0aW9uOiByIH0gPSBhd2FpdCBrKCk7CiAgaWYgKEFycmF5LmlzQXJyYXkobikpCiAgICByZXR1cm4geyBqc29uOiBKU09OLnN0cmluZ2lmeShhd2FpdCBQcm9taXNlLmFsbChuLm1hcChKKSkpLCB0eXBlOiAiQXJyYXkiIH07CiAgc3dpdGNoICh0eXBlb2YgbikgewogICAgY2FzZSAic3RyaW5nIjoKICAgIGNhc2UgIm51bWJlciI6CiAgICBjYXNlICJib29sZWFuIjoKICAgIGNhc2UgInVuZGVmaW5lZCI6CiAgICAgIHJldHVybiB7IGpzb246IEpTT04uc3RyaW5naWZ5KG4pLCB0eXBlOiB0eXBlb2YgbiB9OwogIH0KICBpZiAobi50b19qc29uICE9IG51bGwpIHsKICAgIGNvbnN0IGkgPSBuLnRvX2pzb24oKTsKICAgIGxldCBzOwogICAgaWYgKG4gaW5zdGFuY2VvZiB0ID8gcyA9ICJMaW50IiA6IG4gaW5zdGFuY2VvZiByID8gcyA9ICJTdWdnZXN0aW9uIiA6IG4gaW5zdGFuY2VvZiBlICYmIChzID0gIlNwYW4iKSwgcyA9PSBudWxsKQogICAgICB0aHJvdyBuZXcgRXJyb3IoIlVuaGFuZGxlZCBjYXNlIik7CiAgICByZXR1cm4geyBqc29uOiBpLCB0eXBlOiBzIH07CiAgfQogIHRocm93IG5ldyBFcnJvcigiVW5oYW5kbGVkIGNhc2UiKTsKfQphc3luYyBmdW5jdGlvbiAkKG4pIHsKICBjb25zdCB7IExpbnQ6IHQsIFNwYW46IGUsIFN1Z2dlc3Rpb246IHIgfSA9IGF3YWl0IGsoKTsKICBzd2l0Y2ggKG4udHlwZSkgewogICAgY2FzZSAidW5kZWZpbmVkIjoKICAgICAgcmV0dXJuOwogICAgY2FzZSAiYm9vbGVhbiI6CiAgICBjYXNlICJudW1iZXIiOgogICAgY2FzZSAic3RyaW5nIjoKICAgICAgcmV0dXJuIEpTT04ucGFyc2Uobi5qc29uKTsKICAgIGNhc2UgIlN1Z2dlc3Rpb24iOgogICAgICByZXR1cm4gci5mcm9tX2pzb24obi5qc29uKTsKICAgIGNhc2UgIkxpbnQiOgogICAgICByZXR1cm4gdC5mcm9tX2pzb24obi5qc29uKTsKICAgIGNhc2UgIlNwYW4iOgogICAgICByZXR1cm4gZS5mcm9tX2pzb24obi5qc29uKTsKICAgIGNhc2UgIkFycmF5IjoKICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKEpTT04ucGFyc2Uobi5qc29uKS5tYXAoJCkpOwogICAgZGVmYXVsdDoKICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgY2FzZTogJHtuLnR5cGV9YCk7CiAgfQp9CmFzeW5jIGZ1bmN0aW9uIG50KG4pIHsKICByZXR1cm4gewogICAgcHJvY05hbWU6IG4ucHJvY05hbWUsCiAgICBhcmdzOiBhd2FpdCBQcm9taXNlLmFsbChuLmFyZ3MubWFwKCQpKQogIH07Cn0KY29uc3QgX3QgPSBuZXcgZXQoKTsKYXN5bmMgZnVuY3Rpb24gcnQobikgewogIGNvbnN0IHsgcHJvY05hbWU6IHQsIGFyZ3M6IGUgfSA9IGF3YWl0IG50KG4pOwogIGxldCByID0gYXdhaXQgX3RbdF0oLi4uZSk7CiAgcG9zdE1lc3NhZ2UoYXdhaXQgSihyKSk7Cn0Kc2VsZi5vbm1lc3NhZ2UgPSBmdW5jdGlvbihuKSB7CiAgdHQobi5kYXRhKSwgc2VsZi5vbm1lc3NhZ2UgPSBmdW5jdGlvbih0KSB7CiAgICBydCh0LmRhdGEpOwogIH07Cn07CnBvc3RNZXNzYWdlKCJyZWFkeSIpOwpsZXQgXzsKY29uc3QgcCA9IG5ldyBBcnJheSgxMjgpLmZpbGwodm9pZCAwKTsKcC5wdXNoKHZvaWQgMCwgbnVsbCwgITAsICExKTsKZnVuY3Rpb24gZyhuKSB7CiAgcmV0dXJuIHBbbl07Cn0KbGV0IGYgPSAwLCBJID0gbnVsbDsKZnVuY3Rpb24geigpIHsKICByZXR1cm4gKEkgPT09IG51bGwgfHwgSS5ieXRlTGVuZ3RoID09PSAwKSAmJiAoSSA9IG5ldyBVaW50OEFycmF5KF8ubWVtb3J5LmJ1ZmZlcikpLCBJOwp9CmNvbnN0IEEgPSB0eXBlb2YgVGV4dEVuY29kZXIgPCAidSIgPyBuZXcgVGV4dEVuY29kZXIoInV0Zi04IikgOiB7IGVuY29kZTogKCkgPT4gewogIHRocm93IEVycm9yKCJUZXh0RW5jb2RlciBub3QgYXZhaWxhYmxlIik7Cn0gfSwgaXQgPSB0eXBlb2YgQS5lbmNvZGVJbnRvID09ICJmdW5jdGlvbiIgPyBmdW5jdGlvbihuLCB0KSB7CiAgcmV0dXJuIEEuZW5jb2RlSW50byhuLCB0KTsKfSA6IGZ1bmN0aW9uKG4sIHQpIHsKICBjb25zdCBlID0gQS5lbmNvZGUobik7CiAgcmV0dXJuIHQuc2V0KGUpLCB7CiAgICByZWFkOiBuLmxlbmd0aCwKICAgIHdyaXR0ZW46IGUubGVuZ3RoCiAgfTsKfTsKZnVuY3Rpb24gYihuLCB0LCBlKSB7CiAgaWYgKGUgPT09IHZvaWQgMCkgewogICAgY29uc3QgYyA9IEEuZW5jb2RlKG4pLCB1ID0gdChjLmxlbmd0aCwgMSkgPj4+IDA7CiAgICByZXR1cm4geigpLnN1YmFycmF5KHUsIHUgKyBjLmxlbmd0aCkuc2V0KGMpLCBmID0gYy5sZW5ndGgsIHU7CiAgfQogIGxldCByID0gbi5sZW5ndGgsIGkgPSB0KHIsIDEpID4+PiAwOwogIGNvbnN0IHMgPSB6KCk7CiAgbGV0IGEgPSAwOwogIGZvciAoOyBhIDwgcjsgYSsrKSB7CiAgICBjb25zdCBjID0gbi5jaGFyQ29kZUF0KGEpOwogICAgaWYgKGMgPiAxMjcpIGJyZWFrOwogICAgc1tpICsgYV0gPSBjOwogIH0KICBpZiAoYSAhPT0gcikgewogICAgYSAhPT0gMCAmJiAobiA9IG4uc2xpY2UoYSkpLCBpID0gZShpLCByLCByID0gYSArIG4ubGVuZ3RoICogMywgMSkgPj4+IDA7CiAgICBjb25zdCBjID0geigpLnN1YmFycmF5KGkgKyBhLCBpICsgciksIHUgPSBpdChuLCBjKTsKICAgIGEgKz0gdS53cml0dGVuLCBpID0gZShpLCByLCBhLCAxKSA+Pj4gMDsKICB9CiAgcmV0dXJuIGYgPSBhLCBpOwp9CmxldCB5ID0gbnVsbDsKZnVuY3Rpb24gbygpIHsKICByZXR1cm4gKHkgPT09IG51bGwgfHwgeS5idWZmZXIuZGV0YWNoZWQgPT09ICEwIHx8IHkuYnVmZmVyLmRldGFjaGVkID09PSB2b2lkIDAgJiYgeS5idWZmZXIgIT09IF8ubWVtb3J5LmJ1ZmZlcikgJiYgKHkgPSBuZXcgRGF0YVZpZXcoXy5tZW1vcnkuYnVmZmVyKSksIHk7Cn0KbGV0IHYgPSBwLmxlbmd0aDsKZnVuY3Rpb24gdyhuKSB7CiAgdiA9PT0gcC5sZW5ndGggJiYgcC5wdXNoKHAubGVuZ3RoICsgMSk7CiAgY29uc3QgdCA9IHY7CiAgcmV0dXJuIHYgPSBwW3RdLCBwW3RdID0gbiwgdDsKfQpjb25zdCBQID0gdHlwZW9mIFRleHREZWNvZGVyIDwgInUiID8gbmV3IFRleHREZWNvZGVyKCJ1dGYtOCIsIHsgaWdub3JlQk9NOiAhMCwgZmF0YWw6ICEwIH0pIDogeyBkZWNvZGU6ICgpID0+IHsKICB0aHJvdyBFcnJvcigiVGV4dERlY29kZXIgbm90IGF2YWlsYWJsZSIpOwp9IH07CnR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiAmJiBQLmRlY29kZSgpOwpmdW5jdGlvbiBkKG4sIHQpIHsKICByZXR1cm4gbiA9IG4gPj4+IDAsIFAuZGVjb2RlKHooKS5zdWJhcnJheShuLCBuICsgdCkpOwp9CmZ1bmN0aW9uIHN0KG4sIHQpIHsKICB0cnkgewogICAgcmV0dXJuIG4uYXBwbHkodGhpcywgdCk7CiAgfSBjYXRjaCAoZSkgewogICAgXy5fX3diaW5kZ2VuX2V4cG9ydF8zKHcoZSkpOwogIH0KfQpmdW5jdGlvbiBvdChuKSB7CiAgbiA8IDEzMiB8fCAocFtuXSA9IHYsIHYgPSBuKTsKfQpmdW5jdGlvbiBsKG4pIHsKICBjb25zdCB0ID0gZyhuKTsKICByZXR1cm4gb3QobiksIHQ7Cn0KZnVuY3Rpb24gVyhuKSB7CiAgY29uc3QgdCA9IHR5cGVvZiBuOwogIGlmICh0ID09ICJudW1iZXIiIHx8IHQgPT0gImJvb2xlYW4iIHx8IG4gPT0gbnVsbCkKICAgIHJldHVybiBgJHtufWA7CiAgaWYgKHQgPT0gInN0cmluZyIpCiAgICByZXR1cm4gYCIke259ImA7CiAgaWYgKHQgPT0gInN5bWJvbCIpIHsKICAgIGNvbnN0IGkgPSBuLmRlc2NyaXB0aW9uOwogICAgcmV0dXJuIGkgPT0gbnVsbCA/ICJTeW1ib2wiIDogYFN5bWJvbCgke2l9KWA7CiAgfQogIGlmICh0ID09ICJmdW5jdGlvbiIpIHsKICAgIGNvbnN0IGkgPSBuLm5hbWU7CiAgICByZXR1cm4gdHlwZW9mIGkgPT0gInN0cmluZyIgJiYgaS5sZW5ndGggPiAwID8gYEZ1bmN0aW9uKCR7aX0pYCA6ICJGdW5jdGlvbiI7CiAgfQogIGlmIChBcnJheS5pc0FycmF5KG4pKSB7CiAgICBjb25zdCBpID0gbi5sZW5ndGg7CiAgICBsZXQgcyA9ICJbIjsKICAgIGkgPiAwICYmIChzICs9IFcoblswXSkpOwogICAgZm9yIChsZXQgYSA9IDE7IGEgPCBpOyBhKyspCiAgICAgIHMgKz0gIiwgIiArIFcoblthXSk7CiAgICByZXR1cm4gcyArPSAiXSIsIHM7CiAgfQogIGNvbnN0IGUgPSAvXFtvYmplY3QgKFteXF1dKylcXS8uZXhlYyh0b1N0cmluZy5jYWxsKG4pKTsKICBsZXQgcjsKICBpZiAoZSAmJiBlLmxlbmd0aCA+IDEpCiAgICByID0gZVsxXTsKICBlbHNlCiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChuKTsKICBpZiAociA9PSAiT2JqZWN0IikKICAgIHRyeSB7CiAgICAgIHJldHVybiAiT2JqZWN0KCIgKyBKU09OLnN0cmluZ2lmeShuKSArICIpIjsKICAgIH0gY2F0Y2ggewogICAgICByZXR1cm4gIk9iamVjdCI7CiAgICB9CiAgcmV0dXJuIG4gaW5zdGFuY2VvZiBFcnJvciA/IGAke24ubmFtZX06ICR7bi5tZXNzYWdlfQoke24uc3RhY2t9YCA6IHI7Cn0KZnVuY3Rpb24gRShuKSB7CiAgcmV0dXJuIG4gPT0gbnVsbDsKfQpmdW5jdGlvbiBhdCgpIHsKICBfLnNldHVwKCk7Cn0KZnVuY3Rpb24gVihuLCB0KSB7CiAgbiA9IG4gPj4+IDA7CiAgY29uc3QgZSA9IG8oKSwgciA9IFtdOwogIGZvciAobGV0IGkgPSBuOyBpIDwgbiArIDQgKiB0OyBpICs9IDQpCiAgICByLnB1c2gobChlLmdldFVpbnQzMihpLCAhMCkpKTsKICByZXR1cm4gcjsKfQpmdW5jdGlvbiBjdChuKSB7CiAgbGV0IHQsIGU7CiAgdHJ5IHsKICAgIGNvbnN0IHMgPSBfLl9fd2JpbmRnZW5fYWRkX3RvX3N0YWNrX3BvaW50ZXIoLTE2KSwgYSA9IGIobiwgXy5fX3diaW5kZ2VuX2V4cG9ydF8wLCBfLl9fd2JpbmRnZW5fZXhwb3J0XzEpLCBjID0gZjsKICAgIF8udG9fdGl0bGVfY2FzZShzLCBhLCBjKTsKICAgIHZhciByID0gbygpLmdldEludDMyKHMgKyA0ICogMCwgITApLCBpID0gbygpLmdldEludDMyKHMgKyA0ICogMSwgITApOwogICAgcmV0dXJuIHQgPSByLCBlID0gaSwgZChyLCBpKTsKICB9IGZpbmFsbHkgewogICAgXy5fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyKDE2KSwgXy5fX3diaW5kZ2VuX2V4cG9ydF8yKHQsIGUsIDEpOwogIH0KfQpmdW5jdGlvbiBVKG4sIHQpIHsKICBpZiAoIShuIGluc3RhbmNlb2YgdCkpCiAgICB0aHJvdyBuZXcgRXJyb3IoYGV4cGVjdGVkIGluc3RhbmNlIG9mICR7dC5uYW1lfWApOwp9CmZ1bmN0aW9uIGd0KG4sIHQsIGUpIHsKICBsZXQgciwgaTsKICB0cnkgewogICAgY29uc3QgeCA9IF8uX193YmluZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlcigtMTYpLCBHID0gYihuLCBfLl9fd2JpbmRnZW5fZXhwb3J0XzAsIF8uX193YmluZGdlbl9leHBvcnRfMSksIFEgPSBmOwogICAgVSh0LCBoKTsKICAgIHZhciBzID0gdC5fX2Rlc3Ryb3lfaW50b19yYXcoKTsKICAgIFUoZSwgaiksIF8uYXBwbHlfc3VnZ2VzdGlvbih4LCBHLCBRLCBzLCBlLl9fd2JnX3B0cik7CiAgICB2YXIgYSA9IG8oKS5nZXRJbnQzMih4ICsgNCAqIDAsICEwKSwgYyA9IG8oKS5nZXRJbnQzMih4ICsgNCAqIDEsICEwKSwgdSA9IG8oKS5nZXRJbnQzMih4ICsgNCAqIDIsICEwKSwgTyA9IG8oKS5nZXRJbnQzMih4ICsgNCAqIDMsICEwKSwgbSA9IGEsIFIgPSBjOwogICAgaWYgKE8pCiAgICAgIHRocm93IG0gPSAwLCBSID0gMCwgbCh1KTsKICAgIHJldHVybiByID0gbSwgaSA9IFIsIGQobSwgUik7CiAgfSBmaW5hbGx5IHsKICAgIF8uX193YmluZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlcigxNiksIF8uX193YmluZGdlbl9leHBvcnRfMihyLCBpLCAxKTsKICB9Cn0KY29uc3QgZHQgPSBPYmplY3QuZnJlZXplKHsKICBSZXBsYWNlOiAwLAogIDA6ICJSZXBsYWNlIiwKICBSZW1vdmU6IDEsCiAgMTogIlJlbW92ZSIKfSksIE4gPSB0eXBlb2YgRmluYWxpemF0aW9uUmVnaXN0cnkgPiAidSIgPyB7IHJlZ2lzdGVyOiAoKSA9PiB7Cn0sIHVucmVnaXN0ZXI6ICgpID0+IHsKfSB9IDogbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChuKSA9PiBfLl9fd2JnX2xpbnRfZnJlZShuID4+PiAwLCAxKSk7CmNsYXNzIFMgewogIHN0YXRpYyBfX3dyYXAodCkgewogICAgdCA9IHQgPj4+IDA7CiAgICBjb25zdCBlID0gT2JqZWN0LmNyZWF0ZShTLnByb3RvdHlwZSk7CiAgICByZXR1cm4gZS5fX3diZ19wdHIgPSB0LCBOLnJlZ2lzdGVyKGUsIGUuX193YmdfcHRyLCBlKSwgZTsKICB9CiAgX19kZXN0cm95X2ludG9fcmF3KCkgewogICAgY29uc3QgdCA9IHRoaXMuX193YmdfcHRyOwogICAgcmV0dXJuIHRoaXMuX193YmdfcHRyID0gMCwgTi51bnJlZ2lzdGVyKHRoaXMpLCB0OwogIH0KICBmcmVlKCkgewogICAgY29uc3QgdCA9IHRoaXMuX19kZXN0cm95X2ludG9fcmF3KCk7CiAgICBfLl9fd2JnX2xpbnRfZnJlZSh0LCAwKTsKICB9CiAgLyoqCiAgICogQHJldHVybnMge3N0cmluZ30KICAgKi8KICB0b19qc29uKCkgewogICAgbGV0IHQsIGU7CiAgICB0cnkgewogICAgICBjb25zdCBzID0gXy5fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyKC0xNik7CiAgICAgIF8ubGludF90b19qc29uKHMsIHRoaXMuX193YmdfcHRyKTsKICAgICAgdmFyIHIgPSBvKCkuZ2V0SW50MzIocyArIDQgKiAwLCAhMCksIGkgPSBvKCkuZ2V0SW50MzIocyArIDQgKiAxLCAhMCk7CiAgICAgIHJldHVybiB0ID0gciwgZSA9IGksIGQociwgaSk7CiAgICB9IGZpbmFsbHkgewogICAgICBfLl9fd2JpbmRnZW5fYWRkX3RvX3N0YWNrX3BvaW50ZXIoMTYpLCBfLl9fd2JpbmRnZW5fZXhwb3J0XzIodCwgZSwgMSk7CiAgICB9CiAgfQogIC8qKgogICAqIEBwYXJhbSB7c3RyaW5nfSBqc29uCiAgICogQHJldHVybnMge0xpbnR9CiAgICovCiAgc3RhdGljIGZyb21fanNvbih0KSB7CiAgICB0cnkgewogICAgICBjb25zdCBzID0gXy5fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyKC0xNiksIGEgPSBiKHQsIF8uX193YmluZGdlbl9leHBvcnRfMCwgXy5fX3diaW5kZ2VuX2V4cG9ydF8xKSwgYyA9IGY7CiAgICAgIF8ubGludF9mcm9tX2pzb24ocywgYSwgYyk7CiAgICAgIHZhciBlID0gbygpLmdldEludDMyKHMgKyA0ICogMCwgITApLCByID0gbygpLmdldEludDMyKHMgKyA0ICogMSwgITApLCBpID0gbygpLmdldEludDMyKHMgKyA0ICogMiwgITApOwogICAgICBpZiAoaSkKICAgICAgICB0aHJvdyBsKHIpOwogICAgICByZXR1cm4gUy5fX3dyYXAoZSk7CiAgICB9IGZpbmFsbHkgewogICAgICBfLl9fd2JpbmRnZW5fYWRkX3RvX3N0YWNrX3BvaW50ZXIoMTYpOwogICAgfQogIH0KICAvKioKICAgKiBHZXQgdGhlIGNvbnRlbnQgb2YgdGhlIHNvdXJjZSBtYXRlcmlhbCBwb2ludGVkIHRvIGJ5IFtgU2VsZjo6c3BhbmBdCiAgICogQHJldHVybnMge3N0cmluZ30KICAgKi8KICBnZXRfcHJvYmxlbV90ZXh0KCkgewogICAgbGV0IHQsIGU7CiAgICB0cnkgewogICAgICBjb25zdCBzID0gXy5fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyKC0xNik7CiAgICAgIF8ubGludF9nZXRfcHJvYmxlbV90ZXh0KHMsIHRoaXMuX193YmdfcHRyKTsKICAgICAgdmFyIHIgPSBvKCkuZ2V0SW50MzIocyArIDQgKiAwLCAhMCksIGkgPSBvKCkuZ2V0SW50MzIocyArIDQgKiAxLCAhMCk7CiAgICAgIHJldHVybiB0ID0gciwgZSA9IGksIGQociwgaSk7CiAgICB9IGZpbmFsbHkgewogICAgICBfLl9fd2JpbmRnZW5fYWRkX3RvX3N0YWNrX3BvaW50ZXIoMTYpLCBfLl9fd2JpbmRnZW5fZXhwb3J0XzIodCwgZSwgMSk7CiAgICB9CiAgfQogIC8qKgogICAqIEdldCBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGdlbmVyYWwgY2F0ZWdvcnkgb2YgdGhlIGxpbnQuCiAgICogQHJldHVybnMge3N0cmluZ30KICAgKi8KICBsaW50X2tpbmQoKSB7CiAgICBsZXQgdCwgZTsKICAgIHRyeSB7CiAgICAgIGNvbnN0IHMgPSBfLl9fd2JpbmRnZW5fYWRkX3RvX3N0YWNrX3BvaW50ZXIoLTE2KTsKICAgICAgXy5saW50X2xpbnRfa2luZChzLCB0aGlzLl9fd2JnX3B0cik7CiAgICAgIHZhciByID0gbygpLmdldEludDMyKHMgKyA0ICogMCwgITApLCBpID0gbygpLmdldEludDMyKHMgKyA0ICogMSwgITApOwogICAgICByZXR1cm4gdCA9IHIsIGUgPSBpLCBkKHIsIGkpOwogICAgfSBmaW5hbGx5IHsKICAgICAgXy5fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyKDE2KSwgXy5fX3diaW5kZ2VuX2V4cG9ydF8yKHQsIGUsIDEpOwogICAgfQogIH0KICAvKioKICAgKiBAcmV0dXJucyB7bnVtYmVyfQogICAqLwogIHN1Z2dlc3Rpb25fY291bnQoKSB7CiAgICByZXR1cm4gXy5saW50X3N1Z2dlc3Rpb25fY291bnQodGhpcy5fX3diZ19wdHIpID4+PiAwOwogIH0KICAvKioKICAgKiBAcmV0dXJucyB7KFN1Z2dlc3Rpb24pW119CiAgICovCiAgc3VnZ2VzdGlvbnMoKSB7CiAgICB0cnkgewogICAgICBjb25zdCBpID0gXy5fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyKC0xNik7CiAgICAgIF8ubGludF9zdWdnZXN0aW9ucyhpLCB0aGlzLl9fd2JnX3B0cik7CiAgICAgIHZhciB0ID0gbygpLmdldEludDMyKGkgKyA0ICogMCwgITApLCBlID0gbygpLmdldEludDMyKGkgKyA0ICogMSwgITApLCByID0gVih0LCBlKS5zbGljZSgpOwogICAgICByZXR1cm4gXy5fX3diaW5kZ2VuX2V4cG9ydF8yKHQsIGUgKiA0LCA0KSwgcjsKICAgIH0gZmluYWxseSB7CiAgICAgIF8uX193YmluZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlcigxNik7CiAgICB9CiAgfQogIC8qKgogICAqIEByZXR1cm5zIHtTcGFufQogICAqLwogIHNwYW4oKSB7CiAgICBjb25zdCB0ID0gXy5saW50X3NwYW4odGhpcy5fX3diZ19wdHIpOwogICAgcmV0dXJuIGguX193cmFwKHQpOwogIH0KICAvKioKICAgKiBAcmV0dXJucyB7c3RyaW5nfQogICAqLwogIG1lc3NhZ2UoKSB7CiAgICBsZXQgdCwgZTsKICAgIHRyeSB7CiAgICAgIGNvbnN0IHMgPSBfLl9fd2JpbmRnZW5fYWRkX3RvX3N0YWNrX3BvaW50ZXIoLTE2KTsKICAgICAgXy5saW50X21lc3NhZ2UocywgdGhpcy5fX3diZ19wdHIpOwogICAgICB2YXIgciA9IG8oKS5nZXRJbnQzMihzICsgNCAqIDAsICEwKSwgaSA9IG8oKS5nZXRJbnQzMihzICsgNCAqIDEsICEwKTsKICAgICAgcmV0dXJuIHQgPSByLCBlID0gaSwgZChyLCBpKTsKICAgIH0gZmluYWxseSB7CiAgICAgIF8uX193YmluZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlcigxNiksIF8uX193YmluZGdlbl9leHBvcnRfMih0LCBlLCAxKTsKICAgIH0KICB9Cn0KY29uc3QgTSA9IHR5cGVvZiBGaW5hbGl6YXRpb25SZWdpc3RyeSA+ICJ1IiA/IHsgcmVnaXN0ZXI6ICgpID0+IHsKfSwgdW5yZWdpc3RlcjogKCkgPT4gewp9IH0gOiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKG4pID0+IF8uX193YmdfbGludGVyX2ZyZWUobiA+Pj4gMCwgMSkpOwpjbGFzcyBMIHsKICBzdGF0aWMgX193cmFwKHQpIHsKICAgIHQgPSB0ID4+PiAwOwogICAgY29uc3QgZSA9IE9iamVjdC5jcmVhdGUoTC5wcm90b3R5cGUpOwogICAgcmV0dXJuIGUuX193YmdfcHRyID0gdCwgTS5yZWdpc3RlcihlLCBlLl9fd2JnX3B0ciwgZSksIGU7CiAgfQogIF9fZGVzdHJveV9pbnRvX3JhdygpIHsKICAgIGNvbnN0IHQgPSB0aGlzLl9fd2JnX3B0cjsKICAgIHJldHVybiB0aGlzLl9fd2JnX3B0ciA9IDAsIE0udW5yZWdpc3Rlcih0aGlzKSwgdDsKICB9CiAgZnJlZSgpIHsKICAgIGNvbnN0IHQgPSB0aGlzLl9fZGVzdHJveV9pbnRvX3JhdygpOwogICAgXy5fX3diZ19saW50ZXJfZnJlZSh0LCAwKTsKICB9CiAgLyoqCiAgICogQ29uc3RydWN0IGEgbmV3IGBMaW50ZXJgLgogICAqIE5vdGUgdGhhdCB0aGlzIGNhbiBtZWFuIGNvbnN0cnVjdGluZyB0aGUgY3VyYXRlZCBkaWN0aW9uYXJ5LCB3aGljaCBpcyB0aGUgbW9zdCBleHBlbnNpdmUgb3BlcmF0aW9uCiAgICogaW4gSGFycGVyLgogICAqIEByZXR1cm5zIHtMaW50ZXJ9CiAgICovCiAgc3RhdGljIG5ldygpIHsKICAgIGNvbnN0IHQgPSBfLmxpbnRlcl9uZXcoKTsKICAgIHJldHVybiBMLl9fd3JhcCh0KTsKICB9CiAgLyoqCiAgICogSGVscGVyIG1ldGhvZCB0byBxdWlja2x5IGNoZWNrIGlmIGEgcGxhaW4gc3RyaW5nIGlzIGxpa2VseSBpbnRlbmRlZCB0byBiZSBFbmdsaXNoCiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQKICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0KICAgKi8KICBpc19saWtlbHlfZW5nbGlzaCh0KSB7CiAgICBjb25zdCBlID0gYih0LCBfLl9fd2JpbmRnZW5fZXhwb3J0XzAsIF8uX193YmluZGdlbl9leHBvcnRfMSksIHIgPSBmOwogICAgcmV0dXJuIF8ubGludGVyX2lzX2xpa2VseV9lbmdsaXNoKHRoaXMuX193YmdfcHRyLCBlLCByKSAhPT0gMDsKICB9CiAgLyoqCiAgICogSGVscGVyIG1ldGhvZCB0byByZW1vdmUgbm9uLUVuZ2xpc2ggdGV4dCBmcm9tIGEgcGxhaW4gRW5nbGlzaCBkb2N1bWVudC4KICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dAogICAqIEByZXR1cm5zIHtzdHJpbmd9CiAgICovCiAgaXNvbGF0ZV9lbmdsaXNoKHQpIHsKICAgIGxldCBlLCByOwogICAgdHJ5IHsKICAgICAgY29uc3QgYSA9IF8uX193YmluZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlcigtMTYpLCBjID0gYih0LCBfLl9fd2JpbmRnZW5fZXhwb3J0XzAsIF8uX193YmluZGdlbl9leHBvcnRfMSksIHUgPSBmOwogICAgICBfLmxpbnRlcl9pc29sYXRlX2VuZ2xpc2goYSwgdGhpcy5fX3diZ19wdHIsIGMsIHUpOwogICAgICB2YXIgaSA9IG8oKS5nZXRJbnQzMihhICsgNCAqIDAsICEwKSwgcyA9IG8oKS5nZXRJbnQzMihhICsgNCAqIDEsICEwKTsKICAgICAgcmV0dXJuIGUgPSBpLCByID0gcywgZChpLCBzKTsKICAgIH0gZmluYWxseSB7CiAgICAgIF8uX193YmluZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlcigxNiksIF8uX193YmluZGdlbl9leHBvcnRfMihlLCByLCAxKTsKICAgIH0KICB9CiAgLyoqCiAgICogR2V0IGEgSlNPTiBtYXAgY29udGFpbmluZyB0aGUgZGVzY3JpcHRpb25zIG9mIGFsbCB0aGUgbGludGluZyBydWxlcy4KICAgKiBAcmV0dXJucyB7c3RyaW5nfQogICAqLwogIGdldF9saW50X2Rlc2NyaXB0aW9uc19hc19qc29uKCkgewogICAgbGV0IHQsIGU7CiAgICB0cnkgewogICAgICBjb25zdCBzID0gXy5fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyKC0xNik7CiAgICAgIF8ubGludGVyX2dldF9saW50X2Rlc2NyaXB0aW9uc19hc19qc29uKHMsIHRoaXMuX193YmdfcHRyKTsKICAgICAgdmFyIHIgPSBvKCkuZ2V0SW50MzIocyArIDQgKiAwLCAhMCksIGkgPSBvKCkuZ2V0SW50MzIocyArIDQgKiAxLCAhMCk7CiAgICAgIHJldHVybiB0ID0gciwgZSA9IGksIGQociwgaSk7CiAgICB9IGZpbmFsbHkgewogICAgICBfLl9fd2JpbmRnZW5fYWRkX3RvX3N0YWNrX3BvaW50ZXIoMTYpLCBfLl9fd2JpbmRnZW5fZXhwb3J0XzIodCwgZSwgMSk7CiAgICB9CiAgfQogIC8qKgogICAqIEByZXR1cm5zIHtzdHJpbmd9CiAgICovCiAgZ2V0X2xpbnRfY29uZmlnX2FzX2pzb24oKSB7CiAgICBsZXQgdCwgZTsKICAgIHRyeSB7CiAgICAgIGNvbnN0IHMgPSBfLl9fd2JpbmRnZW5fYWRkX3RvX3N0YWNrX3BvaW50ZXIoLTE2KTsKICAgICAgXy5saW50ZXJfZ2V0X2xpbnRfY29uZmlnX2FzX2pzb24ocywgdGhpcy5fX3diZ19wdHIpOwogICAgICB2YXIgciA9IG8oKS5nZXRJbnQzMihzICsgNCAqIDAsICEwKSwgaSA9IG8oKS5nZXRJbnQzMihzICsgNCAqIDEsICEwKTsKICAgICAgcmV0dXJuIHQgPSByLCBlID0gaSwgZChyLCBpKTsKICAgIH0gZmluYWxseSB7CiAgICAgIF8uX193YmluZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlcigxNiksIF8uX193YmluZGdlbl9leHBvcnRfMih0LCBlLCAxKTsKICAgIH0KICB9CiAgLyoqCiAgICogQHBhcmFtIHtzdHJpbmd9IGpzb24KICAgKi8KICBzZXRfbGludF9jb25maWdfZnJvbV9qc29uKHQpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IGkgPSBfLl9fd2JpbmRnZW5fYWRkX3RvX3N0YWNrX3BvaW50ZXIoLTE2KSwgcyA9IGIodCwgXy5fX3diaW5kZ2VuX2V4cG9ydF8wLCBfLl9fd2JpbmRnZW5fZXhwb3J0XzEpLCBhID0gZjsKICAgICAgXy5saW50ZXJfc2V0X2xpbnRfY29uZmlnX2Zyb21fanNvbihpLCB0aGlzLl9fd2JnX3B0ciwgcywgYSk7CiAgICAgIHZhciBlID0gbygpLmdldEludDMyKGkgKyA0ICogMCwgITApLCByID0gbygpLmdldEludDMyKGkgKyA0ICogMSwgITApOwogICAgICBpZiAocikKICAgICAgICB0aHJvdyBsKGUpOwogICAgfSBmaW5hbGx5IHsKICAgICAgXy5fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyKDE2KTsKICAgIH0KICB9CiAgLyoqCiAgICogR2V0IGEgUmVjb3JkIGNvbnRhaW5pbmcgdGhlIGRlc2NyaXB0aW9ucyBvZiBhbGwgdGhlIGxpbnRpbmcgcnVsZXMuCiAgICogQHJldHVybnMge2FueX0KICAgKi8KICBnZXRfbGludF9kZXNjcmlwdGlvbnNfYXNfb2JqZWN0KCkgewogICAgY29uc3QgdCA9IF8ubGludGVyX2dldF9saW50X2Rlc2NyaXB0aW9uc19hc19vYmplY3QodGhpcy5fX3diZ19wdHIpOwogICAgcmV0dXJuIGwodCk7CiAgfQogIC8qKgogICAqIEByZXR1cm5zIHthbnl9CiAgICovCiAgZ2V0X2xpbnRfY29uZmlnX2FzX29iamVjdCgpIHsKICAgIGNvbnN0IHQgPSBfLmxpbnRlcl9nZXRfbGludF9jb25maWdfYXNfb2JqZWN0KHRoaXMuX193YmdfcHRyKTsKICAgIHJldHVybiBsKHQpOwogIH0KICAvKioKICAgKiBAcGFyYW0ge2FueX0gb2JqZWN0CiAgICovCiAgc2V0X2xpbnRfY29uZmlnX2Zyb21fb2JqZWN0KHQpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IGkgPSBfLl9fd2JpbmRnZW5fYWRkX3RvX3N0YWNrX3BvaW50ZXIoLTE2KTsKICAgICAgXy5saW50ZXJfc2V0X2xpbnRfY29uZmlnX2Zyb21fb2JqZWN0KGksIHRoaXMuX193YmdfcHRyLCB3KHQpKTsKICAgICAgdmFyIGUgPSBvKCkuZ2V0SW50MzIoaSArIDQgKiAwLCAhMCksIHIgPSBvKCkuZ2V0SW50MzIoaSArIDQgKiAxLCAhMCk7CiAgICAgIGlmIChyKQogICAgICAgIHRocm93IGwoZSk7CiAgICB9IGZpbmFsbHkgewogICAgICBfLl9fd2JpbmRnZW5fYWRkX3RvX3N0YWNrX3BvaW50ZXIoMTYpOwogICAgfQogIH0KICAvKioKICAgKiBQZXJmb3JtIHRoZSBjb25maWd1cmVkIGxpbnRpbmcgb24gdGhlIHByb3ZpZGVkIHRleHQuCiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQKICAgKiBAcmV0dXJucyB7KExpbnQpW119CiAgICovCiAgbGludCh0KSB7CiAgICB0cnkgewogICAgICBjb25zdCBzID0gXy5fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyKC0xNiksIGEgPSBiKHQsIF8uX193YmluZGdlbl9leHBvcnRfMCwgXy5fX3diaW5kZ2VuX2V4cG9ydF8xKSwgYyA9IGY7CiAgICAgIF8ubGludGVyX2xpbnQocywgdGhpcy5fX3diZ19wdHIsIGEsIGMpOwogICAgICB2YXIgZSA9IG8oKS5nZXRJbnQzMihzICsgNCAqIDAsICEwKSwgciA9IG8oKS5nZXRJbnQzMihzICsgNCAqIDEsICEwKSwgaSA9IFYoZSwgcikuc2xpY2UoKTsKICAgICAgcmV0dXJuIF8uX193YmluZGdlbl9leHBvcnRfMihlLCByICogNCwgNCksIGk7CiAgICB9IGZpbmFsbHkgewogICAgICBfLl9fd2JpbmRnZW5fYWRkX3RvX3N0YWNrX3BvaW50ZXIoMTYpOwogICAgfQogIH0KfQpjb25zdCBUID0gdHlwZW9mIEZpbmFsaXphdGlvblJlZ2lzdHJ5ID4gInUiID8geyByZWdpc3RlcjogKCkgPT4gewp9LCB1bnJlZ2lzdGVyOiAoKSA9PiB7Cn0gfSA6IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeSgobikgPT4gXy5fX3diZ19zcGFuX2ZyZWUobiA+Pj4gMCwgMSkpOwpjbGFzcyBoIHsKICBzdGF0aWMgX193cmFwKHQpIHsKICAgIHQgPSB0ID4+PiAwOwogICAgY29uc3QgZSA9IE9iamVjdC5jcmVhdGUoaC5wcm90b3R5cGUpOwogICAgcmV0dXJuIGUuX193YmdfcHRyID0gdCwgVC5yZWdpc3RlcihlLCBlLl9fd2JnX3B0ciwgZSksIGU7CiAgfQogIF9fZGVzdHJveV9pbnRvX3JhdygpIHsKICAgIGNvbnN0IHQgPSB0aGlzLl9fd2JnX3B0cjsKICAgIHJldHVybiB0aGlzLl9fd2JnX3B0ciA9IDAsIFQudW5yZWdpc3Rlcih0aGlzKSwgdDsKICB9CiAgZnJlZSgpIHsKICAgIGNvbnN0IHQgPSB0aGlzLl9fZGVzdHJveV9pbnRvX3JhdygpOwogICAgXy5fX3diZ19zcGFuX2ZyZWUodCwgMCk7CiAgfQogIC8qKgogICAqIEByZXR1cm5zIHtzdHJpbmd9CiAgICovCiAgdG9fanNvbigpIHsKICAgIGxldCB0LCBlOwogICAgdHJ5IHsKICAgICAgY29uc3QgcyA9IF8uX193YmluZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlcigtMTYpOwogICAgICBfLnNwYW5fdG9fanNvbihzLCB0aGlzLl9fd2JnX3B0cik7CiAgICAgIHZhciByID0gbygpLmdldEludDMyKHMgKyA0ICogMCwgITApLCBpID0gbygpLmdldEludDMyKHMgKyA0ICogMSwgITApOwogICAgICByZXR1cm4gdCA9IHIsIGUgPSBpLCBkKHIsIGkpOwogICAgfSBmaW5hbGx5IHsKICAgICAgXy5fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyKDE2KSwgXy5fX3diaW5kZ2VuX2V4cG9ydF8yKHQsIGUsIDEpOwogICAgfQogIH0KICAvKioKICAgKiBAcGFyYW0ge3N0cmluZ30ganNvbgogICAqIEByZXR1cm5zIHtTcGFufQogICAqLwogIHN0YXRpYyBmcm9tX2pzb24odCkgewogICAgdHJ5IHsKICAgICAgY29uc3QgcyA9IF8uX193YmluZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlcigtMTYpLCBhID0gYih0LCBfLl9fd2JpbmRnZW5fZXhwb3J0XzAsIF8uX193YmluZGdlbl9leHBvcnRfMSksIGMgPSBmOwogICAgICBfLnNwYW5fZnJvbV9qc29uKHMsIGEsIGMpOwogICAgICB2YXIgZSA9IG8oKS5nZXRJbnQzMihzICsgNCAqIDAsICEwKSwgciA9IG8oKS5nZXRJbnQzMihzICsgNCAqIDEsICEwKSwgaSA9IG8oKS5nZXRJbnQzMihzICsgNCAqIDIsICEwKTsKICAgICAgaWYgKGkpCiAgICAgICAgdGhyb3cgbChyKTsKICAgICAgcmV0dXJuIGguX193cmFwKGUpOwogICAgfSBmaW5hbGx5IHsKICAgICAgXy5fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyKDE2KTsKICAgIH0KICB9CiAgLyoqCiAgICogQHJldHVybnMge251bWJlcn0KICAgKi8KICBnZXQgc3RhcnQoKSB7CiAgICByZXR1cm4gXy5fX3diZ19nZXRfc3Bhbl9zdGFydCh0aGlzLl9fd2JnX3B0cikgPj4+IDA7CiAgfQogIC8qKgogICAqIEBwYXJhbSB7bnVtYmVyfSBhcmcwCiAgICovCiAgc2V0IHN0YXJ0KHQpIHsKICAgIF8uX193Ymdfc2V0X3NwYW5fc3RhcnQodGhpcy5fX3diZ19wdHIsIHQpOwogIH0KICAvKioKICAgKiBAcmV0dXJucyB7bnVtYmVyfQogICAqLwogIGdldCBlbmQoKSB7CiAgICByZXR1cm4gXy5fX3diZ19nZXRfc3Bhbl9lbmQodGhpcy5fX3diZ19wdHIpID4+PiAwOwogIH0KICAvKioKICAgKiBAcGFyYW0ge251bWJlcn0gYXJnMAogICAqLwogIHNldCBlbmQodCkgewogICAgXy5fX3diZ19zZXRfc3Bhbl9lbmQodGhpcy5fX3diZ19wdHIsIHQpOwogIH0KICAvKioKICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQKICAgKiBAcGFyYW0ge251bWJlcn0gZW5kCiAgICogQHJldHVybnMge1NwYW59CiAgICovCiAgc3RhdGljIG5ldyh0LCBlKSB7CiAgICBjb25zdCByID0gXy5zcGFuX25ldyh0LCBlKTsKICAgIHJldHVybiBoLl9fd3JhcChyKTsKICB9CiAgLyoqCiAgICogQHJldHVybnMge2Jvb2xlYW59CiAgICovCiAgaXNfZW1wdHkoKSB7CiAgICByZXR1cm4gXy5zcGFuX2lzX2VtcHR5KHRoaXMuX193YmdfcHRyKSAhPT0gMDsKICB9CiAgLyoqCiAgICogQHJldHVybnMge251bWJlcn0KICAgKi8KICBsZW4oKSB7CiAgICByZXR1cm4gXy5zcGFuX2xlbih0aGlzLl9fd2JnX3B0cikgPj4+IDA7CiAgfQp9CmNvbnN0IEQgPSB0eXBlb2YgRmluYWxpemF0aW9uUmVnaXN0cnkgPiAidSIgPyB7IHJlZ2lzdGVyOiAoKSA9PiB7Cn0sIHVucmVnaXN0ZXI6ICgpID0+IHsKfSB9IDogbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChuKSA9PiBfLl9fd2JnX3N1Z2dlc3Rpb25fZnJlZShuID4+PiAwLCAxKSk7CmNsYXNzIGogewogIHN0YXRpYyBfX3dyYXAodCkgewogICAgdCA9IHQgPj4+IDA7CiAgICBjb25zdCBlID0gT2JqZWN0LmNyZWF0ZShqLnByb3RvdHlwZSk7CiAgICByZXR1cm4gZS5fX3diZ19wdHIgPSB0LCBELnJlZ2lzdGVyKGUsIGUuX193YmdfcHRyLCBlKSwgZTsKICB9CiAgX19kZXN0cm95X2ludG9fcmF3KCkgewogICAgY29uc3QgdCA9IHRoaXMuX193YmdfcHRyOwogICAgcmV0dXJuIHRoaXMuX193YmdfcHRyID0gMCwgRC51bnJlZ2lzdGVyKHRoaXMpLCB0OwogIH0KICBmcmVlKCkgewogICAgY29uc3QgdCA9IHRoaXMuX19kZXN0cm95X2ludG9fcmF3KCk7CiAgICBfLl9fd2JnX3N1Z2dlc3Rpb25fZnJlZSh0LCAwKTsKICB9CiAgLyoqCiAgICogQHJldHVybnMge3N0cmluZ30KICAgKi8KICB0b19qc29uKCkgewogICAgbGV0IHQsIGU7CiAgICB0cnkgewogICAgICBjb25zdCBzID0gXy5fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyKC0xNik7CiAgICAgIF8uc3VnZ2VzdGlvbl90b19qc29uKHMsIHRoaXMuX193YmdfcHRyKTsKICAgICAgdmFyIHIgPSBvKCkuZ2V0SW50MzIocyArIDQgKiAwLCAhMCksIGkgPSBvKCkuZ2V0SW50MzIocyArIDQgKiAxLCAhMCk7CiAgICAgIHJldHVybiB0ID0gciwgZSA9IGksIGQociwgaSk7CiAgICB9IGZpbmFsbHkgewogICAgICBfLl9fd2JpbmRnZW5fYWRkX3RvX3N0YWNrX3BvaW50ZXIoMTYpLCBfLl9fd2JpbmRnZW5fZXhwb3J0XzIodCwgZSwgMSk7CiAgICB9CiAgfQogIC8qKgogICAqIEBwYXJhbSB7c3RyaW5nfSBqc29uCiAgICogQHJldHVybnMge1N1Z2dlc3Rpb259CiAgICovCiAgc3RhdGljIGZyb21fanNvbih0KSB7CiAgICB0cnkgewogICAgICBjb25zdCBzID0gXy5fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyKC0xNiksIGEgPSBiKHQsIF8uX193YmluZGdlbl9leHBvcnRfMCwgXy5fX3diaW5kZ2VuX2V4cG9ydF8xKSwgYyA9IGY7CiAgICAgIF8uc3VnZ2VzdGlvbl9mcm9tX2pzb24ocywgYSwgYyk7CiAgICAgIHZhciBlID0gbygpLmdldEludDMyKHMgKyA0ICogMCwgITApLCByID0gbygpLmdldEludDMyKHMgKyA0ICogMSwgITApLCBpID0gbygpLmdldEludDMyKHMgKyA0ICogMiwgITApOwogICAgICBpZiAoaSkKICAgICAgICB0aHJvdyBsKHIpOwogICAgICByZXR1cm4gai5fX3dyYXAoZSk7CiAgICB9IGZpbmFsbHkgewogICAgICBfLl9fd2JpbmRnZW5fYWRkX3RvX3N0YWNrX3BvaW50ZXIoMTYpOwogICAgfQogIH0KICAvKioKICAgKiBHZXQgdGhlIHRleHQgdGhhdCBpcyBnb2luZyB0byByZXBsYWNlIGVycm9yLgogICAqIElmIFtgU2VsZjo6a2luZGBdIGlzIGBTdWdnZXN0aW9uS2luZDo6UmVtb3ZlYCwgdGhpcyB3aWxsIHJldHVybiBhbiBlbXB0eQogICAqIHN0cmluZy4KICAgKiBAcmV0dXJucyB7c3RyaW5nfQogICAqLwogIGdldF9yZXBsYWNlbWVudF90ZXh0KCkgewogICAgbGV0IHQsIGU7CiAgICB0cnkgewogICAgICBjb25zdCBzID0gXy5fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyKC0xNik7CiAgICAgIF8uc3VnZ2VzdGlvbl9nZXRfcmVwbGFjZW1lbnRfdGV4dChzLCB0aGlzLl9fd2JnX3B0cik7CiAgICAgIHZhciByID0gbygpLmdldEludDMyKHMgKyA0ICogMCwgITApLCBpID0gbygpLmdldEludDMyKHMgKyA0ICogMSwgITApOwogICAgICByZXR1cm4gdCA9IHIsIGUgPSBpLCBkKHIsIGkpOwogICAgfSBmaW5hbGx5IHsKICAgICAgXy5fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyKDE2KSwgXy5fX3diaW5kZ2VuX2V4cG9ydF8yKHQsIGUsIDEpOwogICAgfQogIH0KICAvKioKICAgKiBAcmV0dXJucyB7U3VnZ2VzdGlvbktpbmR9CiAgICovCiAga2luZCgpIHsKICAgIHJldHVybiBfLnN1Z2dlc3Rpb25fa2luZCh0aGlzLl9fd2JnX3B0cik7CiAgfQp9CmFzeW5jIGZ1bmN0aW9uIGZ0KG4sIHQpIHsKICBpZiAodHlwZW9mIFJlc3BvbnNlID09ICJmdW5jdGlvbiIgJiYgbiBpbnN0YW5jZW9mIFJlc3BvbnNlKSB7CiAgICBpZiAodHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nID09ICJmdW5jdGlvbiIpCiAgICAgIHRyeSB7CiAgICAgICAgcmV0dXJuIGF3YWl0IFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKG4sIHQpOwogICAgICB9IGNhdGNoIChyKSB7CiAgICAgICAgaWYgKG4uaGVhZGVycy5nZXQoIkNvbnRlbnQtVHlwZSIpICE9ICJhcHBsaWNhdGlvbi93YXNtIikKICAgICAgICAgIGNvbnNvbGUud2FybigiYFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nYCBmYWlsZWQgYmVjYXVzZSB5b3VyIHNlcnZlciBkb2VzIG5vdCBzZXJ2ZSBXYXNtIHdpdGggYGFwcGxpY2F0aW9uL3dhc21gIE1JTUUgdHlwZS4gRmFsbGluZyBiYWNrIHRvIGBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZWAgd2hpY2ggaXMgc2xvd2VyLiBPcmlnaW5hbCBlcnJvcjpcbiIsIHIpOwogICAgICAgIGVsc2UKICAgICAgICAgIHRocm93IHI7CiAgICAgIH0KICAgIGNvbnN0IGUgPSBhd2FpdCBuLmFycmF5QnVmZmVyKCk7CiAgICByZXR1cm4gYXdhaXQgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoZSwgdCk7CiAgfSBlbHNlIHsKICAgIGNvbnN0IGUgPSBhd2FpdCBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShuLCB0KTsKICAgIHJldHVybiBlIGluc3RhbmNlb2YgV2ViQXNzZW1ibHkuSW5zdGFuY2UgPyB7IGluc3RhbmNlOiBlLCBtb2R1bGU6IG4gfSA6IGU7CiAgfQp9CmZ1bmN0aW9uIEIoKSB7CiAgY29uc3QgbiA9IHt9OwogIHJldHVybiBuLndiZyA9IHt9LCBuLndiZy5fX3diZ19TdHJpbmdfOGYwZWIzOWE0YTRjMmY2NiA9IGZ1bmN0aW9uKHQsIGUpIHsKICAgIGNvbnN0IHIgPSBTdHJpbmcoZyhlKSksIGkgPSBiKHIsIF8uX193YmluZGdlbl9leHBvcnRfMCwgXy5fX3diaW5kZ2VuX2V4cG9ydF8xKSwgcyA9IGY7CiAgICBvKCkuc2V0SW50MzIodCArIDQgKiAxLCBzLCAhMCksIG8oKS5zZXRJbnQzMih0ICsgNCAqIDAsIGksICEwKTsKICB9LCBuLndiZy5fX3diZ19idWZmZXJfNzE2NjdiMTEwMWRmMTlkYSA9IGZ1bmN0aW9uKHQpIHsKICAgIGNvbnN0IGUgPSBnKHQpLmJ1ZmZlcjsKICAgIHJldHVybiB3KGUpOwogIH0sIG4ud2JnLl9fd2JnX2Vycm9yXzc1MzRiOGU5YTM2ZjFhYjQgPSBmdW5jdGlvbih0LCBlKSB7CiAgICBsZXQgciwgaTsKICAgIHRyeSB7CiAgICAgIHIgPSB0LCBpID0gZSwgY29uc29sZS5lcnJvcihkKHQsIGUpKTsKICAgIH0gZmluYWxseSB7CiAgICAgIF8uX193YmluZGdlbl9leHBvcnRfMihyLCBpLCAxKTsKICAgIH0KICB9LCBuLndiZy5fX3diZ19nZXR3aXRocmVma2V5XzFkYzM2MWJkMTAwNTNiZmUgPSBmdW5jdGlvbih0LCBlKSB7CiAgICBjb25zdCByID0gZyh0KVtnKGUpXTsKICAgIHJldHVybiB3KHIpOwogIH0sIG4ud2JnLl9fd2JnX2luc3RhbmNlb2ZfQXJyYXlCdWZmZXJfMzYyMTRkYmM2ZWE4ZGQzZCA9IGZ1bmN0aW9uKHQpIHsKICAgIGxldCBlOwogICAgdHJ5IHsKICAgICAgZSA9IGcodCkgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcjsKICAgIH0gY2F0Y2ggewogICAgICBlID0gITE7CiAgICB9CiAgICByZXR1cm4gZTsKICB9LCBuLndiZy5fX3diZ19pbnN0YW5jZW9mX1VpbnQ4QXJyYXlfMGQ4OThmNzk4MWZlMGEyZCA9IGZ1bmN0aW9uKHQpIHsKICAgIGxldCBlOwogICAgdHJ5IHsKICAgICAgZSA9IGcodCkgaW5zdGFuY2VvZiBVaW50OEFycmF5OwogICAgfSBjYXRjaCB7CiAgICAgIGUgPSAhMTsKICAgIH0KICAgIHJldHVybiBlOwogIH0sIG4ud2JnLl9fd2JnX2xlbmd0aF9iNTJjM2Q1MjhiODg0NjhlID0gZnVuY3Rpb24odCkgewogICAgcmV0dXJuIGcodCkubGVuZ3RoOwogIH0sIG4ud2JnLl9fd2JnX2xpbnRfbmV3ID0gZnVuY3Rpb24odCkgewogICAgY29uc3QgZSA9IFMuX193cmFwKHQpOwogICAgcmV0dXJuIHcoZSk7CiAgfSwgbi53YmcuX193YmdfbG9nXzBjYzFiNzc2ODM5N2JjZmUgPSBmdW5jdGlvbih0LCBlLCByLCBpLCBzLCBhLCBjLCB1KSB7CiAgICBsZXQgTywgbTsKICAgIHRyeSB7CiAgICAgIE8gPSB0LCBtID0gZSwgY29uc29sZS5sb2coZCh0LCBlKSwgZChyLCBpKSwgZChzLCBhKSwgZChjLCB1KSk7CiAgICB9IGZpbmFsbHkgewogICAgICBfLl9fd2JpbmRnZW5fZXhwb3J0XzIoTywgbSwgMSk7CiAgICB9CiAgfSwgbi53YmcuX193YmdfbG9nX2NiOWUxOTBhY2M1NzUzZmIgPSBmdW5jdGlvbih0LCBlKSB7CiAgICBsZXQgciwgaTsKICAgIHRyeSB7CiAgICAgIHIgPSB0LCBpID0gZSwgY29uc29sZS5sb2coZCh0LCBlKSk7CiAgICB9IGZpbmFsbHkgewogICAgICBfLl9fd2JpbmRnZW5fZXhwb3J0XzIociwgaSwgMSk7CiAgICB9CiAgfSwgbi53YmcuX193YmdfbWFya183NDM4MTQ3Y2UzMWU5ZDRiID0gZnVuY3Rpb24odCwgZSkgewogICAgcGVyZm9ybWFuY2UubWFyayhkKHQsIGUpKTsKICB9LCBuLndiZy5fX3diZ19tZWFzdXJlX2ZiNzgyNWMxMTYxMmM4MjMgPSBmdW5jdGlvbigpIHsKICAgIHJldHVybiBzdChmdW5jdGlvbih0LCBlLCByLCBpKSB7CiAgICAgIGxldCBzLCBhLCBjLCB1OwogICAgICB0cnkgewogICAgICAgIHMgPSB0LCBhID0gZSwgYyA9IHIsIHUgPSBpLCBwZXJmb3JtYW5jZS5tZWFzdXJlKGQodCwgZSksIGQociwgaSkpOwogICAgICB9IGZpbmFsbHkgewogICAgICAgIF8uX193YmluZGdlbl9leHBvcnRfMihzLCBhLCAxKSwgXy5fX3diaW5kZ2VuX2V4cG9ydF8yKGMsIHUsIDEpOwogICAgICB9CiAgICB9LCBhcmd1bWVudHMpOwogIH0sIG4ud2JnLl9fd2JnX25ld184YTZmMjM4YTZlY2U4NmVhID0gZnVuY3Rpb24oKSB7CiAgICBjb25zdCB0ID0gbmV3IEVycm9yKCk7CiAgICByZXR1cm4gdyh0KTsKICB9LCBuLndiZy5fX3diZ19uZXdfOWVkNDUwNjgwNzkxMTQ0MCA9IGZ1bmN0aW9uKHQpIHsKICAgIGNvbnN0IGUgPSBuZXcgVWludDhBcnJheShnKHQpKTsKICAgIHJldHVybiB3KGUpOwogIH0sIG4ud2JnLl9fd2JnX25ld19kYmI0OTU1MTQ5OTc1YjE4ID0gZnVuY3Rpb24oKSB7CiAgICBjb25zdCB0ID0gbmV3IE9iamVjdCgpOwogICAgcmV0dXJuIHcodCk7CiAgfSwgbi53YmcuX193Ymdfc2V0XzNmMWQwYjk4NGVkMjcyZWQgPSBmdW5jdGlvbih0LCBlLCByKSB7CiAgICBnKHQpW2woZSldID0gbChyKTsKICB9LCBuLndiZy5fX3diZ19zZXRfZThkOTM4MGU4NjZhMWU0MSA9IGZ1bmN0aW9uKHQsIGUsIHIpIHsKICAgIGcodCkuc2V0KGcoZSksIHIgPj4+IDApOwogIH0sIG4ud2JnLl9fd2JnX3N0YWNrXzBlZDc1ZDY4NTc1YjBmM2MgPSBmdW5jdGlvbih0LCBlKSB7CiAgICBjb25zdCByID0gZyhlKS5zdGFjaywgaSA9IGIociwgXy5fX3diaW5kZ2VuX2V4cG9ydF8wLCBfLl9fd2JpbmRnZW5fZXhwb3J0XzEpLCBzID0gZjsKICAgIG8oKS5zZXRJbnQzMih0ICsgNCAqIDEsIHMsICEwKSwgbygpLnNldEludDMyKHQgKyA0ICogMCwgaSwgITApOwogIH0sIG4ud2JnLl9fd2JnX3N1Z2dlc3Rpb25fbmV3ID0gZnVuY3Rpb24odCkgewogICAgY29uc3QgZSA9IGouX193cmFwKHQpOwogICAgcmV0dXJuIHcoZSk7CiAgfSwgbi53YmcuX193YmluZGdlbl9ib29sZWFuX2dldCA9IGZ1bmN0aW9uKHQpIHsKICAgIGNvbnN0IGUgPSBnKHQpOwogICAgcmV0dXJuIHR5cGVvZiBlID09ICJib29sZWFuIiA/IGUgPyAxIDogMCA6IDI7CiAgfSwgbi53YmcuX193YmluZGdlbl9kZWJ1Z19zdHJpbmcgPSBmdW5jdGlvbih0LCBlKSB7CiAgICBjb25zdCByID0gVyhnKGUpKSwgaSA9IGIociwgXy5fX3diaW5kZ2VuX2V4cG9ydF8wLCBfLl9fd2JpbmRnZW5fZXhwb3J0XzEpLCBzID0gZjsKICAgIG8oKS5zZXRJbnQzMih0ICsgNCAqIDEsIHMsICEwKSwgbygpLnNldEludDMyKHQgKyA0ICogMCwgaSwgITApOwogIH0sIG4ud2JnLl9fd2JpbmRnZW5fZXJyb3JfbmV3ID0gZnVuY3Rpb24odCwgZSkgewogICAgY29uc3QgciA9IG5ldyBFcnJvcihkKHQsIGUpKTsKICAgIHJldHVybiB3KHIpOwogIH0sIG4ud2JnLl9fd2JpbmRnZW5faW4gPSBmdW5jdGlvbih0LCBlKSB7CiAgICByZXR1cm4gZyh0KSBpbiBnKGUpOwogIH0sIG4ud2JnLl9fd2JpbmRnZW5faXNfb2JqZWN0ID0gZnVuY3Rpb24odCkgewogICAgY29uc3QgZSA9IGcodCk7CiAgICByZXR1cm4gdHlwZW9mIGUgPT0gIm9iamVjdCIgJiYgZSAhPT0gbnVsbDsKICB9LCBuLndiZy5fX3diaW5kZ2VuX2lzX3VuZGVmaW5lZCA9IGZ1bmN0aW9uKHQpIHsKICAgIHJldHVybiBnKHQpID09PSB2b2lkIDA7CiAgfSwgbi53YmcuX193YmluZGdlbl9qc3ZhbF9sb29zZV9lcSA9IGZ1bmN0aW9uKHQsIGUpIHsKICAgIHJldHVybiBnKHQpID09IGcoZSk7CiAgfSwgbi53YmcuX193YmluZGdlbl9tZW1vcnkgPSBmdW5jdGlvbigpIHsKICAgIGNvbnN0IHQgPSBfLm1lbW9yeTsKICAgIHJldHVybiB3KHQpOwogIH0sIG4ud2JnLl9fd2JpbmRnZW5fbnVtYmVyX2dldCA9IGZ1bmN0aW9uKHQsIGUpIHsKICAgIGNvbnN0IHIgPSBnKGUpLCBpID0gdHlwZW9mIHIgPT0gIm51bWJlciIgPyByIDogdm9pZCAwOwogICAgbygpLnNldEZsb2F0NjQodCArIDggKiAxLCBFKGkpID8gMCA6IGksICEwKSwgbygpLnNldEludDMyKHQgKyA0ICogMCwgIUUoaSksICEwKTsKICB9LCBuLndiZy5fX3diaW5kZ2VuX29iamVjdF9jbG9uZV9yZWYgPSBmdW5jdGlvbih0KSB7CiAgICBjb25zdCBlID0gZyh0KTsKICAgIHJldHVybiB3KGUpOwogIH0sIG4ud2JnLl9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmID0gZnVuY3Rpb24odCkgewogICAgbCh0KTsKICB9LCBuLndiZy5fX3diaW5kZ2VuX3N0cmluZ19nZXQgPSBmdW5jdGlvbih0LCBlKSB7CiAgICBjb25zdCByID0gZyhlKSwgaSA9IHR5cGVvZiByID09ICJzdHJpbmciID8gciA6IHZvaWQgMDsKICAgIHZhciBzID0gRShpKSA/IDAgOiBiKGksIF8uX193YmluZGdlbl9leHBvcnRfMCwgXy5fX3diaW5kZ2VuX2V4cG9ydF8xKSwgYSA9IGY7CiAgICBvKCkuc2V0SW50MzIodCArIDQgKiAxLCBhLCAhMCksIG8oKS5zZXRJbnQzMih0ICsgNCAqIDAsIHMsICEwKTsKICB9LCBuLndiZy5fX3diaW5kZ2VuX3N0cmluZ19uZXcgPSBmdW5jdGlvbih0LCBlKSB7CiAgICBjb25zdCByID0gZCh0LCBlKTsKICAgIHJldHVybiB3KHIpOwogIH0sIG4ud2JnLl9fd2JpbmRnZW5fdGhyb3cgPSBmdW5jdGlvbih0LCBlKSB7CiAgICB0aHJvdyBuZXcgRXJyb3IoZCh0LCBlKSk7CiAgfSwgbjsKfQpmdW5jdGlvbiBLKG4sIHQpIHsKICByZXR1cm4gXyA9IG4uZXhwb3J0cywgSC5fX3diaW5kZ2VuX3dhc21fbW9kdWxlID0gdCwgeSA9IG51bGwsIEkgPSBudWxsLCBfLl9fd2JpbmRnZW5fc3RhcnQoKSwgXzsKfQpmdW5jdGlvbiB1dChuKSB7CiAgaWYgKF8gIT09IHZvaWQgMCkgcmV0dXJuIF87CiAgdHlwZW9mIG4gPCAidSIgJiYgKE9iamVjdC5nZXRQcm90b3R5cGVPZihuKSA9PT0gT2JqZWN0LnByb3RvdHlwZSA/IHsgbW9kdWxlOiBuIH0gPSBuIDogY29uc29sZS53YXJuKCJ1c2luZyBkZXByZWNhdGVkIHBhcmFtZXRlcnMgZm9yIGBpbml0U3luYygpYDsgcGFzcyBhIHNpbmdsZSBvYmplY3QgaW5zdGVhZCIpKTsKICBjb25zdCB0ID0gQigpOwogIG4gaW5zdGFuY2VvZiBXZWJBc3NlbWJseS5Nb2R1bGUgfHwgKG4gPSBuZXcgV2ViQXNzZW1ibHkuTW9kdWxlKG4pKTsKICBjb25zdCBlID0gbmV3IFdlYkFzc2VtYmx5Lkluc3RhbmNlKG4sIHQpOwogIHJldHVybiBLKGUsIG4pOwp9CmFzeW5jIGZ1bmN0aW9uIEgobikgewogIGlmIChfICE9PSB2b2lkIDApIHJldHVybiBfOwogIHR5cGVvZiBuIDwgInUiICYmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YobikgPT09IE9iamVjdC5wcm90b3R5cGUgPyB7IG1vZHVsZV9vcl9wYXRoOiBuIH0gPSBuIDogY29uc29sZS53YXJuKCJ1c2luZyBkZXByZWNhdGVkIHBhcmFtZXRlcnMgZm9yIHRoZSBpbml0aWFsaXphdGlvbiBmdW5jdGlvbjsgcGFzcyBhIHNpbmdsZSBvYmplY3QgaW5zdGVhZCIpKSwgdHlwZW9mIG4gPiAidSIgJiYgKG4gPSBuZXcgVVJMKCkpOwogIGNvbnN0IHQgPSBCKCk7CiAgKHR5cGVvZiBuID09ICJzdHJpbmciIHx8IHR5cGVvZiBSZXF1ZXN0ID09ICJmdW5jdGlvbiIgJiYgbiBpbnN0YW5jZW9mIFJlcXVlc3QgfHwgdHlwZW9mIFVSTCA9PSAiZnVuY3Rpb24iICYmIG4gaW5zdGFuY2VvZiBVUkwpICYmIChuID0gZmV0Y2gobikpOwogIGNvbnN0IHsgaW5zdGFuY2U6IGUsIG1vZHVsZTogciB9ID0gYXdhaXQgZnQoYXdhaXQgbiwgdCk7CiAgcmV0dXJuIEsoZSwgcik7Cn0KdmFyIHd0ID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoewogIF9fcHJvdG9fXzogbnVsbCwKICBMaW50OiBTLAogIExpbnRlcjogTCwKICBTcGFuOiBoLAogIFN1Z2dlc3Rpb246IGosCiAgU3VnZ2VzdGlvbktpbmQ6IGR0LAogIGFwcGx5X3N1Z2dlc3Rpb246IGd0LAogIGRlZmF1bHQ6IEgsCiAgaW5pdFN5bmM6IHV0LAogIHNldHVwOiBhdCwKICB0b190aXRsZV9jYXNlOiBjdAp9KTsK", IA = (Q) => Uint8Array.from(atob(Q), (A) => A.charCodeAt(0)), z = typeof self < "u" && self.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", IA(q)], { type: "text/javascript;charset=utf-8" });
function gA(Q) {
  let A;
  try {
    if (A = z && (self.URL || self.webkitURL).createObjectURL(z), !A) throw "";
    const C = new Worker(A, {
      type: "module",
      name: Q == null ? void 0 : Q.name
    });
    return C.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(A);
    }), C;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + q,
      {
        type: "module",
        name: Q == null ? void 0 : Q.name
      }
    );
  }
}
class lA {
  constructor() {
    D(this, "worker");
    D(this, "requestQueue");
    D(this, "working", !0);
    this.worker = new gA(), this.requestQueue = [], this.worker.onmessage = () => {
      this.setupMainEventListeners(), this.worker.postMessage(H()), this.working = !1, this.submitRemainingRequests();
    };
  }
  setupMainEventListeners() {
    this.worker.onmessage = (A) => {
      const { resolve: C } = this.requestQueue.shift();
      u(A.data).then((g) => {
        C(g), this.working = !1, this.submitRemainingRequests();
      });
    }, this.worker.onmessageerror = (A) => {
      const { reject: C } = this.requestQueue.shift();
      C(A.data), this.working = !1, this.submitRemainingRequests();
    };
  }
  setup() {
    return this.rpc("setup", []);
  }
  lint(A) {
    return this.rpc("lint", [A]);
  }
  applySuggestion(A, C, g) {
    return this.rpc("applySuggestion", [A, C, g]);
  }
  isLikelyEnglish(A) {
    return this.rpc("isLikelyEnglish", [A]);
  }
  isolateEnglish(A) {
    return this.rpc("isolateEnglish", [A]);
  }
  async getLintConfig() {
    return JSON.parse(await this.getLintConfigAsJSON());
  }
  setLintConfig(A) {
    return this.setLintConfigWithJSON(JSON.stringify(A));
  }
  getLintConfigAsJSON() {
    return this.rpc("getLintConfigAsJSON", []);
  }
  setLintConfigWithJSON(A) {
    return this.rpc("setLintConfigWithJSON", [A]);
  }
  toTitleCase(A) {
    return this.rpc("toTitleCase", [A]);
  }
  getLintDescriptionsAsJSON() {
    return this.rpc("getLintDescriptionsAsJSON", []);
  }
  async getLintDescriptions() {
    return JSON.parse(await this.getLintDescriptionsAsJSON());
  }
  /** Run a procedure on the remote worker. */
  async rpc(A, C) {
    return new Promise((B, E) => {
      this.requestQueue.push({
        resolve: B,
        reject: E,
        request: { procName: A, args: C }
      }), this.submitRemainingRequests();
    });
  }
  async submitRemainingRequests() {
    if (!this.working)
      if (this.working = !0, this.requestQueue.length > 0) {
        const { request: A } = this.requestQueue[0];
        this.worker.postMessage(await QA(A));
      } else
        this.working = !1;
  }
}
let I;
const V = new Array(128).fill(void 0);
V.push(void 0, null, !0, !1);
function c(Q) {
  return V[Q];
}
let b = 0, K = null;
function k() {
  return (K === null || K.byteLength === 0) && (K = new Uint8Array(I.memory.buffer)), K;
}
const L = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, EA = typeof L.encodeInto == "function" ? function(Q, A) {
  return L.encodeInto(Q, A);
} : function(Q, A) {
  const C = L.encode(Q);
  return A.set(C), {
    read: Q.length,
    written: C.length
  };
};
function M(Q, A, C) {
  if (C === void 0) {
    const F = L.encode(Q), U = A(F.length, 1) >>> 0;
    return k().subarray(U, U + F.length).set(F), b = F.length, U;
  }
  let g = Q.length, B = A(g, 1) >>> 0;
  const E = k();
  let G = 0;
  for (; G < g; G++) {
    const F = Q.charCodeAt(G);
    if (F > 127) break;
    E[B + G] = F;
  }
  if (G !== g) {
    G !== 0 && (Q = Q.slice(G)), B = C(B, g, g = G + Q.length * 3, 1) >>> 0;
    const F = k().subarray(B + G, B + g), U = EA(Q, F);
    G += U.written, B = C(B, g, G, 1) >>> 0;
  }
  return b = G, B;
}
let l = null;
function N() {
  return (l === null || l.buffer.detached === !0 || l.buffer.detached === void 0 && l.buffer !== I.memory.buffer) && (l = new DataView(I.memory.buffer)), l;
}
let y = V.length;
function w(Q) {
  y === V.length && V.push(V.length + 1);
  const A = y;
  return y = V[A], V[A] = Q, A;
}
const t = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && t.decode();
function p(Q, A) {
  return Q = Q >>> 0, t.decode(k().subarray(Q, Q + A));
}
function NA(Q, A) {
  try {
    return Q.apply(this, A);
  } catch (C) {
    I.__wbindgen_export_3(w(C));
  }
}
function GA(Q) {
  Q < 132 || (V[Q] = y, y = Q);
}
function R(Q) {
  const A = c(Q);
  return GA(Q), A;
}
function d(Q) {
  const A = typeof Q;
  if (A == "number" || A == "boolean" || Q == null)
    return `${Q}`;
  if (A == "string")
    return `"${Q}"`;
  if (A == "symbol") {
    const B = Q.description;
    return B == null ? "Symbol" : `Symbol(${B})`;
  }
  if (A == "function") {
    const B = Q.name;
    return typeof B == "string" && B.length > 0 ? `Function(${B})` : "Function";
  }
  if (Array.isArray(Q)) {
    const B = Q.length;
    let E = "[";
    B > 0 && (E += d(Q[0]));
    for (let G = 1; G < B; G++)
      E += ", " + d(Q[G]);
    return E += "]", E;
  }
  const C = /\[object ([^\]]+)\]/.exec(toString.call(Q));
  let g;
  if (C && C.length > 1)
    g = C[1];
  else
    return toString.call(Q);
  if (g == "Object")
    try {
      return "Object(" + JSON.stringify(Q) + ")";
    } catch {
      return "Object";
    }
  return Q instanceof Error ? `${Q.name}: ${Q.message}
${Q.stack}` : g;
}
function v(Q) {
  return Q == null;
}
function FA() {
  I.setup();
}
function j(Q, A) {
  Q = Q >>> 0;
  const C = N(), g = [];
  for (let B = Q; B < Q + 4 * A; B += 4)
    g.push(R(C.getUint32(B, !0)));
  return g;
}
function cA(Q) {
  let A, C;
  try {
    const E = I.__wbindgen_add_to_stack_pointer(-16), G = M(Q, I.__wbindgen_export_0, I.__wbindgen_export_1), F = b;
    I.to_title_case(E, G, F);
    var g = N().getInt32(E + 4 * 0, !0), B = N().getInt32(E + 4 * 1, !0);
    return A = g, C = B, p(g, B);
  } finally {
    I.__wbindgen_add_to_stack_pointer(16), I.__wbindgen_export_2(A, C, 1);
  }
}
function o(Q, A) {
  if (!(Q instanceof A))
    throw new Error(`expected instance of ${A.name}`);
}
function pA(Q, A, C) {
  let g, B;
  try {
    const m = I.__wbindgen_add_to_stack_pointer(-16), f = M(Q, I.__wbindgen_export_0, I.__wbindgen_export_1), P = b;
    o(A, W);
    var E = A.__destroy_into_raw();
    o(C, Z), I.apply_suggestion(m, f, P, E, C.__wbg_ptr);
    var G = N().getInt32(m + 4 * 0, !0), F = N().getInt32(m + 4 * 1, !0), U = N().getInt32(m + 4 * 2, !0), h = N().getInt32(m + 4 * 3, !0), Y = G, J = F;
    if (h)
      throw Y = 0, J = 0, R(U);
    return g = Y, B = J, p(Y, J);
  } finally {
    I.__wbindgen_add_to_stack_pointer(16), I.__wbindgen_export_2(g, B, 1);
  }
}
const bA = Object.freeze({
  Replace: 0,
  0: "Replace",
  Remove: 1,
  1: "Remove"
}), x = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((Q) => I.__wbg_lint_free(Q >>> 0, 1));
class a {
  static __wrap(A) {
    A = A >>> 0;
    const C = Object.create(a.prototype);
    return C.__wbg_ptr = A, x.register(C, C.__wbg_ptr, C), C;
  }
  __destroy_into_raw() {
    const A = this.__wbg_ptr;
    return this.__wbg_ptr = 0, x.unregister(this), A;
  }
  free() {
    const A = this.__destroy_into_raw();
    I.__wbg_lint_free(A, 0);
  }
  /**
   * @returns {string}
   */
  to_json() {
    let A, C;
    try {
      const E = I.__wbindgen_add_to_stack_pointer(-16);
      I.lint_to_json(E, this.__wbg_ptr);
      var g = N().getInt32(E + 4 * 0, !0), B = N().getInt32(E + 4 * 1, !0);
      return A = g, C = B, p(g, B);
    } finally {
      I.__wbindgen_add_to_stack_pointer(16), I.__wbindgen_export_2(A, C, 1);
    }
  }
  /**
   * @param {string} json
   * @returns {Lint}
   */
  static from_json(A) {
    try {
      const E = I.__wbindgen_add_to_stack_pointer(-16), G = M(A, I.__wbindgen_export_0, I.__wbindgen_export_1), F = b;
      I.lint_from_json(E, G, F);
      var C = N().getInt32(E + 4 * 0, !0), g = N().getInt32(E + 4 * 1, !0), B = N().getInt32(E + 4 * 2, !0);
      if (B)
        throw R(g);
      return a.__wrap(C);
    } finally {
      I.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Get the content of the source material pointed to by [`Self::span`]
   * @returns {string}
   */
  get_problem_text() {
    let A, C;
    try {
      const E = I.__wbindgen_add_to_stack_pointer(-16);
      I.lint_get_problem_text(E, this.__wbg_ptr);
      var g = N().getInt32(E + 4 * 0, !0), B = N().getInt32(E + 4 * 1, !0);
      return A = g, C = B, p(g, B);
    } finally {
      I.__wbindgen_add_to_stack_pointer(16), I.__wbindgen_export_2(A, C, 1);
    }
  }
  /**
   * Get a string representing the general category of the lint.
   * @returns {string}
   */
  lint_kind() {
    let A, C;
    try {
      const E = I.__wbindgen_add_to_stack_pointer(-16);
      I.lint_lint_kind(E, this.__wbg_ptr);
      var g = N().getInt32(E + 4 * 0, !0), B = N().getInt32(E + 4 * 1, !0);
      return A = g, C = B, p(g, B);
    } finally {
      I.__wbindgen_add_to_stack_pointer(16), I.__wbindgen_export_2(A, C, 1);
    }
  }
  /**
   * @returns {number}
   */
  suggestion_count() {
    return I.lint_suggestion_count(this.__wbg_ptr) >>> 0;
  }
  /**
   * @returns {(Suggestion)[]}
   */
  suggestions() {
    try {
      const B = I.__wbindgen_add_to_stack_pointer(-16);
      I.lint_suggestions(B, this.__wbg_ptr);
      var A = N().getInt32(B + 4 * 0, !0), C = N().getInt32(B + 4 * 1, !0), g = j(A, C).slice();
      return I.__wbindgen_export_2(A, C * 4, 4), g;
    } finally {
      I.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {Span}
   */
  span() {
    const A = I.lint_span(this.__wbg_ptr);
    return W.__wrap(A);
  }
  /**
   * @returns {string}
   */
  message() {
    let A, C;
    try {
      const E = I.__wbindgen_add_to_stack_pointer(-16);
      I.lint_message(E, this.__wbg_ptr);
      var g = N().getInt32(E + 4 * 0, !0), B = N().getInt32(E + 4 * 1, !0);
      return A = g, C = B, p(g, B);
    } finally {
      I.__wbindgen_add_to_stack_pointer(16), I.__wbindgen_export_2(A, C, 1);
    }
  }
}
const s = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((Q) => I.__wbg_linter_free(Q >>> 0, 1));
class T {
  static __wrap(A) {
    A = A >>> 0;
    const C = Object.create(T.prototype);
    return C.__wbg_ptr = A, s.register(C, C.__wbg_ptr, C), C;
  }
  __destroy_into_raw() {
    const A = this.__wbg_ptr;
    return this.__wbg_ptr = 0, s.unregister(this), A;
  }
  free() {
    const A = this.__destroy_into_raw();
    I.__wbg_linter_free(A, 0);
  }
  /**
   * Construct a new `Linter`.
   * Note that this can mean constructing the curated dictionary, which is the most expensive operation
   * in Harper.
   * @returns {Linter}
   */
  static new() {
    const A = I.linter_new();
    return T.__wrap(A);
  }
  /**
   * Helper method to quickly check if a plain string is likely intended to be English
   * @param {string} text
   * @returns {boolean}
   */
  is_likely_english(A) {
    const C = M(A, I.__wbindgen_export_0, I.__wbindgen_export_1), g = b;
    return I.linter_is_likely_english(this.__wbg_ptr, C, g) !== 0;
  }
  /**
   * Helper method to remove non-English text from a plain English document.
   * @param {string} text
   * @returns {string}
   */
  isolate_english(A) {
    let C, g;
    try {
      const G = I.__wbindgen_add_to_stack_pointer(-16), F = M(A, I.__wbindgen_export_0, I.__wbindgen_export_1), U = b;
      I.linter_isolate_english(G, this.__wbg_ptr, F, U);
      var B = N().getInt32(G + 4 * 0, !0), E = N().getInt32(G + 4 * 1, !0);
      return C = B, g = E, p(B, E);
    } finally {
      I.__wbindgen_add_to_stack_pointer(16), I.__wbindgen_export_2(C, g, 1);
    }
  }
  /**
   * Get a JSON map containing the descriptions of all the linting rules.
   * @returns {string}
   */
  get_lint_descriptions_as_json() {
    let A, C;
    try {
      const E = I.__wbindgen_add_to_stack_pointer(-16);
      I.linter_get_lint_descriptions_as_json(E, this.__wbg_ptr);
      var g = N().getInt32(E + 4 * 0, !0), B = N().getInt32(E + 4 * 1, !0);
      return A = g, C = B, p(g, B);
    } finally {
      I.__wbindgen_add_to_stack_pointer(16), I.__wbindgen_export_2(A, C, 1);
    }
  }
  /**
   * @returns {string}
   */
  get_lint_config_as_json() {
    let A, C;
    try {
      const E = I.__wbindgen_add_to_stack_pointer(-16);
      I.linter_get_lint_config_as_json(E, this.__wbg_ptr);
      var g = N().getInt32(E + 4 * 0, !0), B = N().getInt32(E + 4 * 1, !0);
      return A = g, C = B, p(g, B);
    } finally {
      I.__wbindgen_add_to_stack_pointer(16), I.__wbindgen_export_2(A, C, 1);
    }
  }
  /**
   * @param {string} json
   */
  set_lint_config_from_json(A) {
    try {
      const B = I.__wbindgen_add_to_stack_pointer(-16), E = M(A, I.__wbindgen_export_0, I.__wbindgen_export_1), G = b;
      I.linter_set_lint_config_from_json(B, this.__wbg_ptr, E, G);
      var C = N().getInt32(B + 4 * 0, !0), g = N().getInt32(B + 4 * 1, !0);
      if (g)
        throw R(C);
    } finally {
      I.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Get a Record containing the descriptions of all the linting rules.
   * @returns {any}
   */
  get_lint_descriptions_as_object() {
    const A = I.linter_get_lint_descriptions_as_object(this.__wbg_ptr);
    return R(A);
  }
  /**
   * @returns {any}
   */
  get_lint_config_as_object() {
    const A = I.linter_get_lint_config_as_object(this.__wbg_ptr);
    return R(A);
  }
  /**
   * @param {any} object
   */
  set_lint_config_from_object(A) {
    try {
      const B = I.__wbindgen_add_to_stack_pointer(-16);
      I.linter_set_lint_config_from_object(B, this.__wbg_ptr, w(A));
      var C = N().getInt32(B + 4 * 0, !0), g = N().getInt32(B + 4 * 1, !0);
      if (g)
        throw R(C);
    } finally {
      I.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Perform the configured linting on the provided text.
   * @param {string} text
   * @returns {(Lint)[]}
   */
  lint(A) {
    try {
      const E = I.__wbindgen_add_to_stack_pointer(-16), G = M(A, I.__wbindgen_export_0, I.__wbindgen_export_1), F = b;
      I.linter_lint(E, this.__wbg_ptr, G, F);
      var C = N().getInt32(E + 4 * 0, !0), g = N().getInt32(E + 4 * 1, !0), B = j(C, g).slice();
      return I.__wbindgen_export_2(C, g * 4, 4), B;
    } finally {
      I.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
const S = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((Q) => I.__wbg_span_free(Q >>> 0, 1));
class W {
  static __wrap(A) {
    A = A >>> 0;
    const C = Object.create(W.prototype);
    return C.__wbg_ptr = A, S.register(C, C.__wbg_ptr, C), C;
  }
  __destroy_into_raw() {
    const A = this.__wbg_ptr;
    return this.__wbg_ptr = 0, S.unregister(this), A;
  }
  free() {
    const A = this.__destroy_into_raw();
    I.__wbg_span_free(A, 0);
  }
  /**
   * @returns {string}
   */
  to_json() {
    let A, C;
    try {
      const E = I.__wbindgen_add_to_stack_pointer(-16);
      I.span_to_json(E, this.__wbg_ptr);
      var g = N().getInt32(E + 4 * 0, !0), B = N().getInt32(E + 4 * 1, !0);
      return A = g, C = B, p(g, B);
    } finally {
      I.__wbindgen_add_to_stack_pointer(16), I.__wbindgen_export_2(A, C, 1);
    }
  }
  /**
   * @param {string} json
   * @returns {Span}
   */
  static from_json(A) {
    try {
      const E = I.__wbindgen_add_to_stack_pointer(-16), G = M(A, I.__wbindgen_export_0, I.__wbindgen_export_1), F = b;
      I.span_from_json(E, G, F);
      var C = N().getInt32(E + 4 * 0, !0), g = N().getInt32(E + 4 * 1, !0), B = N().getInt32(E + 4 * 2, !0);
      if (B)
        throw R(g);
      return W.__wrap(C);
    } finally {
      I.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {number}
   */
  get start() {
    return I.__wbg_get_span_start(this.__wbg_ptr) >>> 0;
  }
  /**
   * @param {number} arg0
   */
  set start(A) {
    I.__wbg_set_span_start(this.__wbg_ptr, A);
  }
  /**
   * @returns {number}
   */
  get end() {
    return I.__wbg_get_span_end(this.__wbg_ptr) >>> 0;
  }
  /**
   * @param {number} arg0
   */
  set end(A) {
    I.__wbg_set_span_end(this.__wbg_ptr, A);
  }
  /**
   * @param {number} start
   * @param {number} end
   * @returns {Span}
   */
  static new(A, C) {
    const g = I.span_new(A, C);
    return W.__wrap(g);
  }
  /**
   * @returns {boolean}
   */
  is_empty() {
    return I.span_is_empty(this.__wbg_ptr) !== 0;
  }
  /**
   * @returns {number}
   */
  len() {
    return I.span_len(this.__wbg_ptr) >>> 0;
  }
}
const X = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((Q) => I.__wbg_suggestion_free(Q >>> 0, 1));
class Z {
  static __wrap(A) {
    A = A >>> 0;
    const C = Object.create(Z.prototype);
    return C.__wbg_ptr = A, X.register(C, C.__wbg_ptr, C), C;
  }
  __destroy_into_raw() {
    const A = this.__wbg_ptr;
    return this.__wbg_ptr = 0, X.unregister(this), A;
  }
  free() {
    const A = this.__destroy_into_raw();
    I.__wbg_suggestion_free(A, 0);
  }
  /**
   * @returns {string}
   */
  to_json() {
    let A, C;
    try {
      const E = I.__wbindgen_add_to_stack_pointer(-16);
      I.suggestion_to_json(E, this.__wbg_ptr);
      var g = N().getInt32(E + 4 * 0, !0), B = N().getInt32(E + 4 * 1, !0);
      return A = g, C = B, p(g, B);
    } finally {
      I.__wbindgen_add_to_stack_pointer(16), I.__wbindgen_export_2(A, C, 1);
    }
  }
  /**
   * @param {string} json
   * @returns {Suggestion}
   */
  static from_json(A) {
    try {
      const E = I.__wbindgen_add_to_stack_pointer(-16), G = M(A, I.__wbindgen_export_0, I.__wbindgen_export_1), F = b;
      I.suggestion_from_json(E, G, F);
      var C = N().getInt32(E + 4 * 0, !0), g = N().getInt32(E + 4 * 1, !0), B = N().getInt32(E + 4 * 2, !0);
      if (B)
        throw R(g);
      return Z.__wrap(C);
    } finally {
      I.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Get the text that is going to replace error.
   * If [`Self::kind`] is `SuggestionKind::Remove`, this will return an empty
   * string.
   * @returns {string}
   */
  get_replacement_text() {
    let A, C;
    try {
      const E = I.__wbindgen_add_to_stack_pointer(-16);
      I.suggestion_get_replacement_text(E, this.__wbg_ptr);
      var g = N().getInt32(E + 4 * 0, !0), B = N().getInt32(E + 4 * 1, !0);
      return A = g, C = B, p(g, B);
    } finally {
      I.__wbindgen_add_to_stack_pointer(16), I.__wbindgen_export_2(A, C, 1);
    }
  }
  /**
   * @returns {SuggestionKind}
   */
  kind() {
    return I.suggestion_kind(this.__wbg_ptr);
  }
}
async function UA(Q, A) {
  if (typeof Response == "function" && Q instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function")
      try {
        return await WebAssembly.instantiateStreaming(Q, A);
      } catch (g) {
        if (Q.headers.get("Content-Type") != "application/wasm")
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", g);
        else
          throw g;
      }
    const C = await Q.arrayBuffer();
    return await WebAssembly.instantiate(C, A);
  } else {
    const C = await WebAssembly.instantiate(Q, A);
    return C instanceof WebAssembly.Instance ? { instance: C, module: Q } : C;
  }
}
function e() {
  const Q = {};
  return Q.wbg = {}, Q.wbg.__wbg_String_8f0eb39a4a4c2f66 = function(A, C) {
    const g = String(c(C)), B = M(g, I.__wbindgen_export_0, I.__wbindgen_export_1), E = b;
    N().setInt32(A + 4 * 1, E, !0), N().setInt32(A + 4 * 0, B, !0);
  }, Q.wbg.__wbg_buffer_71667b1101df19da = function(A) {
    const C = c(A).buffer;
    return w(C);
  }, Q.wbg.__wbg_error_7534b8e9a36f1ab4 = function(A, C) {
    let g, B;
    try {
      g = A, B = C, console.error(p(A, C));
    } finally {
      I.__wbindgen_export_2(g, B, 1);
    }
  }, Q.wbg.__wbg_getwithrefkey_1dc361bd10053bfe = function(A, C) {
    const g = c(A)[c(C)];
    return w(g);
  }, Q.wbg.__wbg_instanceof_ArrayBuffer_36214dbc6ea8dd3d = function(A) {
    let C;
    try {
      C = c(A) instanceof ArrayBuffer;
    } catch {
      C = !1;
    }
    return C;
  }, Q.wbg.__wbg_instanceof_Uint8Array_0d898f7981fe0a2d = function(A) {
    let C;
    try {
      C = c(A) instanceof Uint8Array;
    } catch {
      C = !1;
    }
    return C;
  }, Q.wbg.__wbg_length_b52c3d528b88468e = function(A) {
    return c(A).length;
  }, Q.wbg.__wbg_lint_new = function(A) {
    const C = a.__wrap(A);
    return w(C);
  }, Q.wbg.__wbg_log_0cc1b7768397bcfe = function(A, C, g, B, E, G, F, U) {
    let h, Y;
    try {
      h = A, Y = C, console.log(p(A, C), p(g, B), p(E, G), p(F, U));
    } finally {
      I.__wbindgen_export_2(h, Y, 1);
    }
  }, Q.wbg.__wbg_log_cb9e190acc5753fb = function(A, C) {
    let g, B;
    try {
      g = A, B = C, console.log(p(A, C));
    } finally {
      I.__wbindgen_export_2(g, B, 1);
    }
  }, Q.wbg.__wbg_mark_7438147ce31e9d4b = function(A, C) {
    performance.mark(p(A, C));
  }, Q.wbg.__wbg_measure_fb7825c11612c823 = function() {
    return NA(function(A, C, g, B) {
      let E, G, F, U;
      try {
        E = A, G = C, F = g, U = B, performance.measure(p(A, C), p(g, B));
      } finally {
        I.__wbindgen_export_2(E, G, 1), I.__wbindgen_export_2(F, U, 1);
      }
    }, arguments);
  }, Q.wbg.__wbg_new_8a6f238a6ece86ea = function() {
    const A = new Error();
    return w(A);
  }, Q.wbg.__wbg_new_9ed4506807911440 = function(A) {
    const C = new Uint8Array(c(A));
    return w(C);
  }, Q.wbg.__wbg_new_dbb4955149975b18 = function() {
    const A = new Object();
    return w(A);
  }, Q.wbg.__wbg_set_3f1d0b984ed272ed = function(A, C, g) {
    c(A)[R(C)] = R(g);
  }, Q.wbg.__wbg_set_e8d9380e866a1e41 = function(A, C, g) {
    c(A).set(c(C), g >>> 0);
  }, Q.wbg.__wbg_stack_0ed75d68575b0f3c = function(A, C) {
    const g = c(C).stack, B = M(g, I.__wbindgen_export_0, I.__wbindgen_export_1), E = b;
    N().setInt32(A + 4 * 1, E, !0), N().setInt32(A + 4 * 0, B, !0);
  }, Q.wbg.__wbg_suggestion_new = function(A) {
    const C = Z.__wrap(A);
    return w(C);
  }, Q.wbg.__wbindgen_boolean_get = function(A) {
    const C = c(A);
    return typeof C == "boolean" ? C ? 1 : 0 : 2;
  }, Q.wbg.__wbindgen_debug_string = function(A, C) {
    const g = d(c(C)), B = M(g, I.__wbindgen_export_0, I.__wbindgen_export_1), E = b;
    N().setInt32(A + 4 * 1, E, !0), N().setInt32(A + 4 * 0, B, !0);
  }, Q.wbg.__wbindgen_error_new = function(A, C) {
    const g = new Error(p(A, C));
    return w(g);
  }, Q.wbg.__wbindgen_in = function(A, C) {
    return c(A) in c(C);
  }, Q.wbg.__wbindgen_is_object = function(A) {
    const C = c(A);
    return typeof C == "object" && C !== null;
  }, Q.wbg.__wbindgen_is_undefined = function(A) {
    return c(A) === void 0;
  }, Q.wbg.__wbindgen_jsval_loose_eq = function(A, C) {
    return c(A) == c(C);
  }, Q.wbg.__wbindgen_memory = function() {
    const A = I.memory;
    return w(A);
  }, Q.wbg.__wbindgen_number_get = function(A, C) {
    const g = c(C), B = typeof g == "number" ? g : void 0;
    N().setFloat64(A + 8 * 1, v(B) ? 0 : B, !0), N().setInt32(A + 4 * 0, !v(B), !0);
  }, Q.wbg.__wbindgen_object_clone_ref = function(A) {
    const C = c(A);
    return w(C);
  }, Q.wbg.__wbindgen_object_drop_ref = function(A) {
    R(A);
  }, Q.wbg.__wbindgen_string_get = function(A, C) {
    const g = c(C), B = typeof g == "string" ? g : void 0;
    var E = v(B) ? 0 : M(B, I.__wbindgen_export_0, I.__wbindgen_export_1), G = b;
    N().setInt32(A + 4 * 1, G, !0), N().setInt32(A + 4 * 0, E, !0);
  }, Q.wbg.__wbindgen_string_new = function(A, C) {
    const g = p(A, C);
    return w(g);
  }, Q.wbg.__wbindgen_throw = function(A, C) {
    throw new Error(p(A, C));
  }, Q;
}
function r(Q, A) {
  return I = Q.exports, O.__wbindgen_wasm_module = A, l = null, K = null, I.__wbindgen_start(), I;
}
function wA(Q) {
  if (I !== void 0) return I;
  typeof Q < "u" && (Object.getPrototypeOf(Q) === Object.prototype ? { module: Q } = Q : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const A = e();
  Q instanceof WebAssembly.Module || (Q = new WebAssembly.Module(Q));
  const C = new WebAssembly.Instance(Q, A);
  return r(C, Q);
}
async function O(Q) {
  if (I !== void 0) return I;
  typeof Q < "u" && (Object.getPrototypeOf(Q) === Object.prototype ? { module_or_path: Q } = Q : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof Q > "u" && (Q = new URL());
  const A = e();
  (typeof Q == "string" || typeof Request == "function" && Q instanceof Request || typeof URL == "function" && Q instanceof URL) && (Q = fetch(Q));
  const { instance: C, module: g } = await UA(await Q, A);
  return r(C, g);
}
const MA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Lint: a,
  Linter: T,
  Span: W,
  Suggestion: Z,
  SuggestionKind: bA,
  apply_suggestion: pA,
  default: O,
  initSync: wA,
  setup: FA,
  to_title_case: cA
}, Symbol.toStringTag, { value: "Module" }));

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol$1 = root.Symbol;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$1(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

/** Used to compose unicode character classes. */
var rsAstralRange$2 = '\\ud800-\\udfff',
    rsComboMarksRange$3 = '\\u0300-\\u036f',
    reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
    rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3,
    rsVarRange$2 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ$2 = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ$2 + rsAstralRange$2  + rsComboRange$3 + rsVarRange$2 + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/** Used to compose unicode character classes. */
var rsAstralRange$1 = '\\ud800-\\udfff',
    rsComboMarksRange$2 = '\\u0300-\\u036f',
    reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2,
    rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange$1 + ']',
    rsCombo$2 = '[' + rsComboRange$2 + ']',
    rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
    rsModifier$1 = '(?:' + rsCombo$2 + '|' + rsFitz$1 + ')',
    rsNonAstral$1 = '[^' + rsAstralRange$1 + ']',
    rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ$1 = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod$1 = rsModifier$1 + '?',
    rsOptVar$1 = '[' + rsVarRange$1 + ']?',
    rsOptJoin$1 = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
    rsSymbol = '(?:' + [rsNonAstral$1 + rsCombo$2 + '?', rsCombo$2, rsRegional$1, rsSurrPair$1, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz$1 + '(?=' + rsFitz$1 + ')|' + rsSymbol + rsSeq$1, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString$1(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange$1 = '\\u0300-\\u036f',
    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;

/** Used to compose unicode capture groups. */
var rsCombo$1 = '[' + rsComboRange$1 + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo$1, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString$1(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos$1 = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos$1 + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos$1 + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString$1(string);
  pattern = pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @static
 * @memberOf _
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * _.startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * _.startCase('fooBar');
 * // => 'Foo Bar'
 *
 * _.startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */
var startCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + upperFirst(word);
});

class HarperSettingTab extends obsidian.PluginSettingTab {
	/** @type HarperPlugin
	 * @private */
	plugin;

	/** @type Record<string, any> */
	settings;

	/** @type Record<string, string> */
	descriptions;

	/** @param {App} app
	 * @param {HarperPlugin} plugin  */
	constructor(app, plugin) {
		super(app, plugin);
		this.plugin = plugin;

		this.updateDescriptions();
		this.updateSettings();
	}

	updateSettings() {
		this.plugin.getSettings().then((v) => (this.settings = v));
	}

	updateDescriptions() {
		this.plugin.getDescriptions().then((v) => (this.descriptions = v));
	}

	display() {
		const { containerEl } = this;
		containerEl.empty();

		console.log(this.settings.lintSettings);

		new obsidian.Setting(containerEl).setName('Use Web Worker').addToggle((toggle) =>
			toggle.setValue(this.settings.useWebWorker).onChange(async (value) => {
				this.settings.useWebWorker = value;
				await this.plugin.setSettings(this.settings);
			})
		);

		for (let setting of Object.keys(this.settings.lintSettings)) {
			let value = this.settings.lintSettings[setting];
			let description = this.descriptions[setting];

			new obsidian.Setting(containerEl)
				.setName(startCase(setting))
				.setDesc(description)
				.addDropdown((dropdown) =>
					dropdown
						.addOption('default', 'Default')
						.addOption('enable', 'On')
						.addOption('disable', 'Off')
						.setValue(valueToString(value))
						.onChange(async (value) => {
							this.settings.lintSettings[setting] = stringToValue(value);
							await this.plugin.setSettings(this.settings);
						})
				);
		}
	}
}

/** @param {boolean | undefined} value
 * @returns {string} */
function valueToString(value) {
	switch (value) {
		case true:
			return 'enable';
		case false:
			return 'disable';
		case null:
			return 'default';
	}

	throw 'Fell through case';
}

/** @param {str} value
 * @returns {boolean | undefined} */
function stringToValue(str) {
	switch (str) {
		case 'enable':
			return true;
		case 'disable':
			return false;
		case 'default':
			return null;
	}

	throw 'Fell through case';
}

function suggestionToLabel(sug) {
	if (sug.kind() == 'Remove') {
		return 'Remove';
	} else {
		return `Replace with "${sug.get_replacement_text()}"`;
	}
}

function initHarperInstance(useWebWorker) {
	if (useWebWorker) {
		console.log('Switching to `WorkerLinter`');
		harper = new lA();
	} else {
		console.log('Switching to `LocalLinter`');
		harper = new VA();
	}
	harper.setup();
}

let harper;

initHarperInstance(true);

const harperLinter = (plugin) =>
	linter(
		async (view) => {
			if (!plugin.shouldLint()) {
				return [];
			}

			const text = view.state.doc.sliceString(-1);

			const lints = await harper.lint(text);

			return lints.map((lint) => {
				let span = lint.span();

				return {
					from: span.start,
					to: span.end,
					severity: 'error',
					title: lint.lint_kind(),
					message: lint.message(),
					actions: lint.suggestions().map((sug) => {
						return {
							name: suggestionToLabel(sug),
							apply: (view) => {
								if (sug === 'Remove') {
									view.dispatch({
										changes: {
											from: span.start,
											to: span.end,
											insert: ''
										}
									});
								} else {
									view.dispatch({
										changes: {
											from: span.start,
											to: span.end,
											insert: sug.get_replacement_text()
										}
									});
								}
							}
						};
					})
				};
			});
		},
		{
			delay: -1,
			needsRefresh: () => {
				let temp = plugin.lintSettingModified;
				plugin.lintSettingModified = false;
				return temp;
			}
		}
	);

class HarperPlugin extends obsidian.Plugin {
	/** @private */
	shouldAutoLint = true;
	/** @public */
	lintSettingModified = false;

	/** @public
	 * @returns {Promise<Record<string, string>>} */
	async getDescriptions() {
		return await harper.getLintDescriptions();
	}

	/** @public
	 * @returns {Promise<Record<string, any>>} */
	async getSettings() {
		this.lintSettingChanged();

		let lintSettings = await harper.getLintConfig();

		return { ...this.settings, lintSettings };
	}

	/** @public
	 * @param {Record<string, any>} settings
	 * @returns {Promise<void>} */
	async setSettings(settings) {
		if (settings == null) {
			settings = {};
		}

		if (settings.useWebWorker == undefined) {
			settings.useWebWorker = true;
		}

		if (settings.lintSettings == undefined) {
			settings.lintSettings = {};
		}

		if (settings.lintSettings.spell_check == undefined) {
			settings.lintSettings.spell_check = false;
		}

		await harper.setLintConfig(settings.lintSettings);
		this.lintSettingChanged();
		this.saveData(settings);

		if (this.settings?.useWebWorker != settings.useWebWorker) {
			initHarperInstance(settings.useWebWorker);
		}

		this.settings = settings;
	}

	async onload() {
		console.log(harperLinter(this));

		this.registerEditorExtension([harperLinter(this)]);
		this.app.workspace.updateOptions();

		obsidian.addIcon('harper-logo', logoSvg);

		this.setupCommands();
		this.setupStatusBar();

		await this.setSettings(await this.loadData());
		this.addSettingTab(new HarperSettingTab(this.app, this));
	}

	setupCommands() {
		this.addCommand({
			id: 'harper-toggle-auto-lint',
			name: 'Toggle automatic grammar checking',
			callback: () => this.toggleAutoLint()
		});
	}

	setupStatusBar() {
		/** @type HTMLElement */
		let statusBarItem = this.addStatusBarItem();
		statusBarItem.className += ' mod-clickable';

		let button = document.createElement('span');
		button.style = 'width:24px';
		button.innerHTML = logoSvg;

		button.addEventListener('click', (event) => {
			const menu = new obsidian.Menu();

			menu.addItem((item) =>
				item
					.setTitle(`${this.shouldAutoLint ? 'Disable' : 'Enable'} automatic checking`)
					.setIcon('documents')
					.onClick(() => {
						this.toggleAutoLint();
					})
			);

			menu.showAtMouseEvent(event);
		});

		statusBarItem.appendChild(button);
	}

	shouldLint() {
		return this.shouldAutoLint;
	}

	/** @param {boolean} shouldAutoLint  */
	setAutoLint(shouldAutoLint) {
		this.shouldAutoLint = shouldAutoLint;
		this.lintSettingChanged();
	}

	toggleAutoLint() {
		this.shouldAutoLint = !this.shouldAutoLint;
		this.lintSettingChanged();
	}

	lintSettingChanged() {
		this.lintSettingModified = true;
		this.app.workspace.updateOptions();
	}
}

module.exports = HarperPlugin;

/* nosourcemap */