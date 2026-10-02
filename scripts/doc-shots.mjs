#!/usr/bin/env node
/**
 * The steps for every documentation screenshot, for the app's dev-only UI
 * driver (POIESIS_DEV_SCRIPT; see electron/devScript.ts in the app repo).
 *
 *   node scripts/doc-shots.mjs <folder> [name…]   # steps as JSON, to stdout
 *   node scripts/doc-shots.mjs --list             # the names
 *
 * Run by capture-doc-shots.sh, which also builds the vault these steps count
 * on (seed-docs-vault.mjs): the ids below — shot-book-0001, shot-doc-ch03,
 * shot-note-0001… — are that vault's.
 *
 * Each screenshot is a name and the steps that bring the app to what it shows.
 * Around them: everything open is closed first, then the page is captured in
 * light and again in dark, as <folder>/<name>-light.png and -dark.png.
 * A step that can't find what it needs returns a string starting "FAILED",
 * which the capture script reports.
 */

const BOOK = 'shot-book-0001'

// --- Step helpers ------------------------------------------------------------
const wait = (ms) => ({ wait: ms })
/** Run JavaScript in the page; `__app` is the app's store. */
const js = (code, ms = 600) => [{ eval: code }, wait(ms)]
/** Call something on the store's state: `app("openGraph()")`. */
const app = (call, ms = 900) => js(`(async()=>{await __app.getState().${call};return undefined})()`, ms)
const key = (k, mods, ms = 300) => [mods ? { key: k, mods } : { key: k }, wait(ms)]
const type = (text, ms = 700) => [{ type: text }, wait(ms)]

const open = (id, ms = 1300) => app(`selectNote('${id}')`, ms)
const panel = (tab) => js(`__app.getState().setRightPanelTab('${tab}');'panel'`, 800)
const noPanel = js(`(()=>{const s=__app.getState();if(s.rightPanelVisible)s.toggleRightPanel();return 'no panel'})()`, 400)
/** No caret, no selection. */
const blur = js(
  `(()=>{document.activeElement&&document.activeElement.blur&&document.activeElement.blur();window.getSelection&&window.getSelection().removeAllRanges();return 'blur'})()`,
  250,
)
/** Click the first element matching a selector (optionally: whose text is, or starts with, `text`). */
const press = (selector, text = null, ms = 800) =>
  js(
    `(()=>{const want=${JSON.stringify(text)};const el=[...document.querySelectorAll(${JSON.stringify(selector)})].find(x=>want===null||x.textContent.trim()===want||x.textContent.trim().startsWith(want));if(!el)return 'FAILED: nothing to press for '+${JSON.stringify(selector + (text ? ' “' + text + '”' : ''))};el.click();return 'pressed '+(el.textContent.trim().slice(0,40)||${JSON.stringify(selector)})})()`,
    ms,
  )
/** Select the first occurrence of `text` in the open document (and put the editor in focus). */
const select = (text, { focus = true } = {}) =>
  js(
    `(()=>{const ed=__app.getState().editorInstance;const q=${JSON.stringify(text)};let at=-1;ed.state.doc.descendants((n,p)=>{if(at<0&&n.isText&&n.text.includes(q))at=p+n.text.indexOf(q)});if(at<0)return 'FAILED: no “'+q+'” in the document';${focus ? 'ed.chain().focus()' : 'ed.chain()'}.setTextSelection({from:at,to:at+q.length}).scrollIntoView().run();return 'selected'})()`,
    700,
  )
/** A new empty paragraph after the Nth one (1-based; 0 = at the end), caret in it. */
const emptyLineAfter = (nth) =>
  js(
    `(()=>{const ed=__app.getState().editorInstance;let pos=-1,i=0;ed.state.doc.forEach((n,off)=>{if(n.type.name==='paragraph'){i++;if(i===${nth})pos=off+n.nodeSize}});if(pos<0)pos=ed.state.doc.content.size;ed.chain().focus().insertContentAt(pos,{type:'paragraph'}).setTextSelection(pos+1).scrollIntoView().run();return 'empty line'})()`,
    700,
  )
/** Take that line out again, with whatever was typed in it. */
const removeLine = js(
  `(()=>{const ed=__app.getState().editorInstance;const {$from}=ed.state.selection;if($from.parent.type.name!=='paragraph'||$from.parent.textContent.length>12)return 'left alone';ed.chain().deleteRange({from:$from.before(),to:$from.after()}).run();return 'line removed'})()`,
  900,
)

const closeAll = [
  ...key('Escape'),
  ...js(
    `(()=>{const s=__app.getState();['closeCommandPalette','closeSearch','closeBookViewer','closeVersionPreview','closeGraph','closeCalendar','closeCharacters','closeAuthors','closeResearch','closeBoards','closeTrash','closeSettings','closeCitationDialog','spellReviewClose'].forEach(k=>{try{s[k]&&s[k]()}catch(e){}});try{s.setCheatSheet(false)}catch(e){};try{s.toggleFindReplace(false)}catch(e){};try{s.setDetailsOpen(false)}catch(e){};return 'closed'})()`,
    500,
  ),
]
const theme = (name) => js(`__app.getState().setTheme('${name}')`, 900)

// --- The screenshots -----------------------------------------------------------
/**
 * name → { steps, again?, after?, onlyByName? }
 *   steps  bring the app to the picture
 *   again  run after switching to dark, for what a theme change closes
 *   after  put back what the steps changed
 *   onlyByName  left out of a run of everything
 */
const SHOTS = {
  // ---- The guide's first set ----
  // A chapter is opened first, so Home has something to continue with.
  home: { steps: [...open('shot-doc-ch02'), ...noPanel, ...app(`setSpace('home')`), ...blur] },
  'write-home': { steps: [...open('shot-doc-ch02'), ...noPanel, ...app(`setSpace('write')`), ...blur] },
  manuscript: {
    steps: [
      ...app(`openProject('${BOOK}')`, 1500),
      // Book details stays folded here; 'book-details' is the picture of it.
      ...js(`(()=>{const d=document.querySelector('details.ps-bookd');if(d)d.open=false;return 'folded'})()`, 400),
      ...blur,
    ],
  },
  editor: { steps: [...open('shot-doc-ch01'), ...noPanel, ...blur] },
  annotations: {
    steps: [
      ...open('shot-doc-ch01'),
      ...panel('annotations'),
      ...select('The beam did the same', { focus: false }),
      ...blur,
    ],
    after: noPanel,
  },
  outline: { steps: [...open('shot-note-0001'), ...panel('outline'), ...blur], after: noPanel },
  footnotes: { steps: [...open('shot-doc-ch03'), ...panel('outline'), ...blur], after: noPanel },
  links: { steps: [...open('shot-note-0002'), ...panel('links'), ...blur], after: noPanel },
  // Only when asked for by name: a fresh settings folder has no dictionary
  // installed (Settings → Language), so the panel would say so.
  dictionary: {
    onlyByName: true,
    steps: [
      ...open('shot-doc-ch03'),
      ...noPanel,
      ...select('ledgers', { focus: false }),
      ...js(`(async()=>{const s=__app.getState();s.toggleDictionary();await s.lookupWord('ledger');return 'dictionary'})()`, 1500),
    ],
    after: js(`__app.getState().toggleDictionary();'x'`, 400),
  },
  versions: { steps: [...open('shot-doc-ch03'), ...panel('versions'), ...blur], after: noPanel },
  poem: { steps: [...open('shot-doc-poem'), ...noPanel, ...blur] },
  notes: { steps: [...app(`setSpace('notes')`, 1000), ...blur] },
  journal: { steps: [...app(`openToday()`, 1200), ...noPanel, ...blur] },
  calendar: { steps: [...app(`openCalendar()`, 1200), ...blur] },
  characters: {
    steps: [
      ...app(`setSpace('write')`),
      ...app(`showPlace({kind:'characters',id:null,projectId:'${BOOK}'})`, 800),
      ...app(`openCharacter('shot-char-0001')`, 1000),
      ...blur,
    ],
  },
  authors: {
    steps: [...app(`setSpace('write')`), ...app(`openAuthors()`, 800), ...app(`openAuthor('shot-author-0001')`, 1000), ...blur],
  },
  research: { steps: [...app(`setSpace('write')`), ...app(`openResearch()`, 1200), ...blur] },
  boards: { steps: [...js(`__app.getState().openBoards('shot-board-0001');'board'`, 1200), ...blur] },
  graph: { steps: [...js(`__app.getState().openGraph();'graph'`, 4000), ...blur] },
  search: { steps: [...app(`setSpace('notes')`, 600), ...js(`__app.getState().openSearch('salt');'search'`, 1500)] },
  palette: { steps: [...app(`setSpace('home')`, 600), ...js(`__app.getState().openCommandPalette();'palette'`, 800)] },
  settings: {
    steps: [...js(`__app.getState().openSettings('appearance');'settings'`, 1200), ...blur],
    after: js(`__app.getState().closeSettings();'x'`, 400),
  },
  focus: {
    steps: [...open('shot-doc-ch02'), ...noPanel, { menu: 'toggle-sanctuary' }, wait(1200), ...blur],
    after: [{ menu: 'toggle-sanctuary' }, wait(800)],
  },
  preview: {
    steps: [
      ...js(`__app.getState().openBookViewer('${BOOK}');'preview'`, 5000),
      ...js(
        `(()=>{const el=document.querySelector('.ps-bview-stage');if(!el)return 'FAILED: no preview';el.scrollTop=el.scrollHeight*8/16;return 'scrolled'})()`,
        2500,
      ),
      ...blur,
    ],
  },
  export: {
    steps: [
      ...js(`__app.getState().openBookViewer('${BOOK}');'preview'`, 5000),
      ...press('button', 'Single pages', 2000),
      ...js(
        `(async()=>{const el=document.querySelector('.ps-bview-stage');if(!el)return 'FAILED: no preview';for(let i=0;i<40;i++){const n=parseInt(document.querySelector('.ps-bview-where')?.textContent||'');if(n===17)return 'page 17';el.scrollTop+=(17-n)*el.scrollHeight/31;await new Promise(r=>setTimeout(r,250))}return 'near page 17'})()`,
        3000,
      ),
      ...blur,
    ],
  },
  'put-away': {
    steps: [
      ...app(`openProject('shot-book-0002')`, 1500),
      ...js(
        `(()=>{const b=[...document.querySelectorAll('.ps-sidebar button, .ps-sidebar [role=button]')].find(x=>x.textContent.trim().startsWith('Put away'));if(!b)return 'FAILED: no Put away in the sidebar';if(!document.body.textContent.includes('Low Water'))b.click();return 'open'})()`,
        600,
      ),
      ...blur,
    ],
  },
  // Needs the network once: the Nord theme is fetched from the theme gallery.
  'themes-nord': {
    steps: [
      ...app(`setSpace('home')`),
      ...blur,
      ...js(
        `(async()=>{let s=__app.getState();if(!s.officialThemes.items.length)await s.refreshOfficialThemes();const th=__app.getState().officialThemes.items.find(t=>t.id==='nord');if(!th)return 'FAILED: no Nord theme (offline?)';if(!__app.getState().communityThemes.some(t=>t.id==='nord'))await __app.getState().installOfficialTheme(th);__app.getState().setColorTheme('nord');return 'nord'})()`,
        1500,
      ),
    ],
    after: js(`__app.getState().setColorTheme('phi');'phi'`, 800),
  },

  // ---- Templates ----
  'templates-page': {
    steps: [
      ...app(`setSpace('notes')`),
      ...app(`openTemplates('shot-template-0001')`),
      ...blur,
    ],
  },
  'template-editor': {
    steps: [
      ...app(`setSpace('notes')`),
      ...app(`openTemplates('shot-template-0001')`),
      ...press('.ps-templatepage-actions button', null, 1200),
      ...blur,
    ],
    after: key('Escape'),
  },

  // ---- Writing ----
  'slash-menu': {
    steps: [...open('shot-doc-ch02'), ...noPanel, ...emptyLineAfter(2), ...type('/', 900)],
    after: [...key('Escape'), ...removeLine],
  },
  'selection-toolbar': {
    steps: [
      ...open('shot-doc-ch01'),
      ...noPanel,
      ...select('honest in the way old things are'),
      ...press('.ps-bubble-more', null, 700),
    ],
    // The selection stops being painted when the theme changes: make it again.
    again: [
      ...select('honest in the way old things are'),
      ...js(`(()=>{const b=document.querySelector('.ps-bubble-more');if(!b)return 'FAILED: no selection toolbar';if(b.getAttribute('aria-expanded')!=='true')b.click();return 'more tools'})()`, 700),
    ],
    after: blur,
  },
  'link-menu': {
    steps: [...app(`setSpace('notes')`), ...open('shot-note-0005'), ...noPanel, ...emptyLineAfter(1), ...type('[[sal', 1000)],
    after: [...key('Escape'), ...removeLine],
  },
  'mention-suggestions': {
    steps: [...open('shot-doc-ch04'), ...noPanel, ...emptyLineAfter(1), ...type('@s', 1000)],
    after: [...key('Escape'), ...removeLine],
  },
  'cite-a-source': {
    steps: [
      ...open('shot-doc-ch03'),
      ...noPanel,
      ...js(
        `(()=>{const s=__app.getState();const ed=s.editorInstance;const at=ed.state.doc.firstChild.nodeSize-1;s.openCitationDialog({insertAt:{from:at,to:at}});return 'cite'})()`,
        1000,
      ),
    ],
    after: app(`closeCitationDialog()`, 400),
  },
  'find-bar': {
    steps: [
      ...open('shot-doc-ch01'),
      ...noPanel,
      ...js(`__app.getState().toggleFindReplace(true,true);'find'`, 800),
      ...type('sack', 900),
    ],
    after: js(`__app.getState().toggleFindReplace(false);'x'`, 400),
  },
  'spelling-check': {
    steps: [
      ...open('shot-doc-letter'),
      ...noPanel,
      // The first check only loads the dictionary (and finds nothing while it
      // loads); the personal words change so the second one asks afresh.
      ...app(`startSpellCheck()`, 3000),
      ...js(`__app.getState().spellReviewClose();__app.setState({personalWords:['Miren','Sefa']});'dictionary loaded'`, 500),
      ...app(`startSpellCheck()`, 2500),
      ...js(`__app.getState().spellReview.current?'misspelling':'FAILED: the spelling check found nothing'`, 200),
      ...blur,
    ],
    after: js(`__app.getState().spellReviewClose();__app.setState({personalWords:[]});'x'`, 400),
  },
  'split-view': {
    steps: [...open('shot-doc-ch01'), ...noPanel, ...app(`openBeside('shot-note-0002')`, 1800), ...blur],
    after: app(`openAlone('shot-doc-ch01')`, 800),
  },
  'version-preview': {
    steps: [
      ...open('shot-doc-ch03'),
      ...noPanel,
      ...js(
        `window.poiesis.versions.history('shot-doc-ch03').then(h=>{if(!h.length)return 'FAILED: no versions';__app.getState().openVersionPreview('shot-doc-ch03',h[h.length-1]);return 'version'})`,
        1500,
      ),
      ...press('.ps-vpreview-toggle', null, 1500),
      ...blur,
    ],
  },
  'morning-pages': {
    steps: [...app(`setSpace('journal')`), ...app(`openMorningPages()`, 1500), ...noPanel, ...blur],
  },
  'focus-typing': {
    steps: [
      ...open('shot-doc-ch02'),
      ...noPanel,
      ...js(`__app.getState().setFocusTyping('paragraph');'focus'`, 400),
      ...select('out of breath'),
      ...js(`(()=>{const ed=__app.getState().editorInstance;ed.commands.setTextSelection(ed.state.selection.to);return 'caret'})()`, 800),
    ],
    after: [...js(`__app.getState().setFocusTyping('off');'x'`, 400), ...blur],
  },

  // ---- A project ----
  'project-contents': {
    steps: [...js(`__app.getState().setWriteTab('organize','${BOOK}');'contents'`, 1500), ...blur],
  },
  'book-details': {
    steps: [
      ...js(`__app.getState().openProjectDetails('${BOOK}');'details'`, 2000),
      ...js(
        `(()=>{const d=document.querySelector('details.ps-bookd');if(!d)return 'FAILED: no Book details on the page';d.open=true;d.scrollIntoView({block:'start'});return 'book details'})()`,
        900,
      ),
      ...blur,
    ],
  },
  'chapter-board': {
    steps: [...js(`__app.getState().setWriteTab('board','${BOOK}');'board'`, 1500), ...blur],
  },
  'board-card': {
    steps: [
      ...js(`__app.getState().openBoards('shot-board-0001');'board'`, 1500),
      ...press('.ps-card, [class*="card"]', 'Cut chapter four to a scene', 1200),
      ...blur,
    ],
    after: key('Escape'),
  },
  'export-ebook': {
    steps: [
      ...js(`__app.getState().setWriteTab('export','${BOOK}');'export'`, 3000),
      ...press('button', 'Ebook', 2500),
      ...blur,
    ],
  },
  'print-book': {
    steps: [
      ...js(`__app.getState().setWriteTab('export','${BOOK}');'export'`, 3000),
      ...press('button', 'Print book', 2500),
      ...blur,
    ],
  },

  // ---- Around the app ----
  'vault-menu': {
    steps: [...app(`setSpace('write')`), ...press('.ps-sidebar-vault-btn')],
    after: key('Escape'),
  },
  details: {
    steps: [...open('shot-doc-loose'), ...noPanel, ...js(`__app.getState().setDetailsOpen(true);'details'`, 1000), ...blur],
    after: js(`__app.getState().setDetailsOpen(false);'x'`, 400),
  },
  trash: {
    steps: [
      ...app(`setSpace('write')`),
      ...js(`__app.getState().openTrash();'trash'`, 1200),
      ...js(
        // The Trash dates a deletion by the file's own clock, which is the real
        // one, not the run's fixed day: say "yesterday" whenever this is run.
        `(()=>{const s=__app.getState();const it=s.trash.find(x=>x.kind==='document');if(!it)return 'FAILED: nothing in the Trash';__app.setState({trash:s.trash.map(x=>({...x,deletedAt:new Date(Date.now()-26*3600e3).toISOString()}))});s.setTrashPick(it.file);return 'picked'})()`,
        1000,
      ),
      ...blur,
    ],
    // The sidebar counts the Trash only once it has been opened: leave it as
    // it was, so the screenshots after this one match the ones before.
    after: js(`__app.getState().closeTrash();__app.setState({trash:[],trashPick:null});'x'`, 400),
  },
  'setup-settings': {
    steps: [...js(`__app.getState().openSettings('setup');'settings'`, 1200), ...blur],
    after: js(`__app.getState().closeSettings();'x'`, 400),
  },
  'settings-language': {
    steps: [...js(`__app.getState().openSettings('language');'settings'`, 1200), ...blur],
    after: js(`__app.getState().closeSettings();'x'`, 400),
  },
  'shortcuts-card': {
    steps: [...app(`setSpace('home')`), ...js(`__app.getState().setCheatSheet(true);'card'`, 900), ...blur],
    after: js(`__app.getState().setCheatSheet(false);'x'`, 400),
  },
  'graph-settings': {
    steps: [
      ...js(`__app.getState().openGraph();'graph'`, 4000),
      ...js(`(()=>{const s=__app.getState();if(!s.graphSettingsOpen)s.toggleGraphSettings();return 'settings'})()`, 4000),
      ...blur,
    ],
    after: js(`(()=>{const s=__app.getState();if(s.graphSettingsOpen)s.toggleGraphSettings();return 'x'})()`, 400),
  },
}

// --- Out ---------------------------------------------------------------------
const args = process.argv.slice(2)
if (args[0] === '--list') {
  console.log(Object.keys(SHOTS).join('\n'))
  process.exit(0)
}
const [folder, ...names] = args
if (!folder) {
  console.error('usage: doc-shots.mjs <folder> [name…]   |   doc-shots.mjs --list')
  process.exit(1)
}
const unknown = names.filter((n) => !SHOTS[n])
if (unknown.length) {
  console.error(`No such screenshot: ${unknown.join(', ')}. Try --list.`)
  process.exit(1)
}

const steps = [wait(2500), { size: [1280, 800] }, wait(800)]
for (const name of names.length ? names : Object.keys(SHOTS).filter((n) => !SHOTS[n].onlyByName)) {
  const s = SHOTS[name]
  steps.push(
    ...closeAll,
    ...theme('light'),
    ...s.steps,
    { shot: `${folder}/${name}-light.png` },
    ...theme('dark'),
    ...(s.again ?? []),
    { shot: `${folder}/${name}-dark.png` },
    ...theme('light'),
    ...(s.after ?? []),
  )
}
steps.push(...closeAll, ...js(`'all done'`, 100))
console.log(JSON.stringify(steps, null, 1))
